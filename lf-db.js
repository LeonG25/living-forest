/* One place where a failed query stops being silent.

   supabase-js v2 does NOT throw on failure: PostgREST errors AND network
   errors both come back as a RESOLVED { data:null, error }. So every
   `try{ const {data}=await sb.from(...) }catch(e){}` in this app is dead
   code, and `(data||[])` quietly turns a total failure into an empty page.
   That is exactly the bug that showed Zoya an empty forest and Leon 0/0/0.
   Verified in the bundle we load (cdn.jsdelivr.net/npm/@supabase/supabase-js@2):
   `shouldThrowOnError=!1` by default, and the non-throwing path maps fetch
   failures into an error object rather than rethrowing them.

   LFDB.install(sb, page) patches the query builder's then() once, so every
   result in the app passes under one pair of eyes:
     - it is recorded (LFDB.failures, console)
     - it is reported to client_diag, so family devices can be seen from here
     - a FAILED WRITE calls LFDB.onFailure, because a memory that did not save
       may never look like one that did.
   Nothing else changes: callers still receive { data, error } exactly as before,
   so this is safe to install on a page before that page is cleaned up. */
(function(){
  if(window.LFDB) return;

  var PAGE='(unknown)', client=null, installed=false, diagCount=0;
  var DIAG_MAX=12, seen=Object.create(null);

  var MSG={
    en:{write:"That didn't save. Please try again.",   read:"The forest didn't answer just now."},
    ru:{write:"Не сохранилось. Попробуйте ещё раз.",   read:"Лес сейчас не ответил."},
    he:{write:"זה לא נשמר. נסו שוב.",                  read:"היער לא ענה כרגע."}
  };
  function lang(){
    try{ var l=localStorage.getItem('lf_lang'); if(l&&MSG[l]) return l; }catch(e){}
    return 'en';
  }
  function say(kind){ return (MSG[lang()]||MSG.en)[kind]; }

  function tail(u){
    var s=String(u||'');
    try{ var p=new URL(s).pathname.split('/'); return p[p.length-1]||s; }
    catch(e){ var q=s.split('?')[0].split('/'); return q[q.length-1]||s; }
  }
  var WRITE=/^(POST|PATCH|PUT|DELETE)$/;

  function report(method, url, error){
    method=String(method||'GET').toUpperCase();
    var table=tail(url), isWrite=WRITE.test(method);
    /* our own bookkeeping may never speak to the family: a failed client_diag
       insert is a note to us, not a lost memory. Log it and stop. */
    if(table==='client_diag'){
      try{ console.warn('[LFDB] diag insert failed: '+String((error&&error.message)||error||'').slice(0,140)); }catch(e){}
      return;
    }
    var code=(error&&(error.code||error.status))||'';
    var message=String((error&&error.message)||error||'').slice(0,300);
    var rec={at:new Date().toISOString(), page:PAGE, method:method, table:table,
             write:isWrite, code:code, message:message};
    LFDB.failures.push(rec);
    if(LFDB.failures.length>50) LFDB.failures.shift();
    LFDB.last=rec;
    try{ console.warn('[LFDB] '+PAGE+' · '+method+' '+table+' · '+code+' '+message); }catch(e){}
    var note=PAGE+' · '+method+' '+table+' · '+code+' '+message;
    if(diagCount<DIAG_MAX && !seen[note]){
      seen[note]=1; diagCount++; sendDiag(note);
    }
    try{ if(typeof LFDB.onFailure==='function') LFDB.onFailure(say(isWrite?'write':'read'), rec); }catch(e){}
  }

  /* client_diag failures are never reported back into client_diag (see the
     table!=='client_diag' guard above), so this cannot loop. */
  function sendDiag(note){
    if(!client) return;
    try{
      client.auth.getUser().then(function(u){
        var uid=u&&u.data&&u.data.user&&u.data.user.id||null;
        client.from('client_diag').insert({uid:uid, page:PAGE, note:note.slice(0,900)})
          .then(function(){}, function(){});
      }, function(){});
    }catch(e){}
  }

  function patchQueries(sb){
    /* Building a query sends nothing — the request only starts inside then() —
       so this probe is free. */
    var node=sb.from('client_diag').select('note').limit(0);
    var proto=Object.getPrototypeOf(node);
    while(proto && !Object.prototype.hasOwnProperty.call(proto,'then')) proto=Object.getPrototypeOf(proto);
    if(!proto) throw new Error('no then() on the query builder prototype chain');
    if(proto.__lfPatched) return true;
    var orig=proto.then;
    proto.then=function(onOk,onErr){
      var self=this;
      return orig.call(self, function(res){
        if(res && res.error){ try{ report(self.method, self.url, res.error); }catch(e){} }
        return (typeof onOk==='function') ? onOk(res) : res;
      }, onErr);
    };
    proto.__lfPatched=true;
    return true;
  }

  /* Storage is a different animal: plain promises, same silent { error }. */
  var STORE_WRITE={upload:1, update:1, remove:1, move:1, copy:1, createSignedUploadFile:1};
  function patchStorage(sb){
    if(!sb.storage || sb.storage.__lfPatched) return;
    var from=sb.storage.from.bind(sb.storage);
    sb.storage.from=function(bucket){
      var api=from(bucket);
      return new Proxy(api,{
        get:function(t,p){
          var v=t[p];
          if(typeof v!=='function') return v;
          return function(){
            var r=v.apply(t, arguments);
            if(r && typeof r.then==='function'){
              return r.then(function(res){
                if(res && res.error){
                  try{ report(STORE_WRITE[p]?'POST':'GET', 'storage/'+bucket+'/'+String(p), res.error); }catch(e){}
                }
                return res;
              });
            }
            return r;
          };
        }
      });
    };
    sb.storage.__lfPatched=true;
  }

  /* Ask the server to shrink a picture before it crosses the wire.
     Only ever for images - a voice clip handed to the render endpoint 404s -
     and undefined when in doubt, so a caller can always pass this through. */
  var IMG=/\.(jpe?g|png|webp|gif|avif|heic|heif)(\?|#|$)/i;
  function img(path,width){
    if(!path||!width||!IMG.test(String(path))) return undefined;
    return {transform:{width:Math.round(width),resize:'contain'}};
  }

  /* a way for any page to leave a note on the family's own device, so a fault
     that only happens on their glass can still be read from here. */
  function note(text){
    text=String(text||'').slice(0,900);
    try{ console.warn('[LFDB note] '+text); }catch(e){}
    if(diagCount<DIAG_MAX && !seen['note:'+text]){ seen['note:'+text]=1; diagCount++; sendDiag(text); }
  }

  window.LFDB={
    img:img,
    note:note,
    failures:[],
    last:null,
    onFailure:null,      /* pages with a toast wire it here: LFDB.onFailure=m=>toast(m) */
    install:function(sb, page){
      if(page) PAGE=page;
      if(installed) return window.LFDB;
      client=sb;
      try{ patchQueries(sb); patchStorage(sb); installed=true; }
      catch(e){ try{ console.warn('[LFDB] install failed', e); }catch(_){ } }
      return window.LFDB;
    },
    /* for the QC rig and for humans in a console */
    summary:function(){
      return LFDB.failures.map(function(r){
        return r.page+' '+r.method+' '+r.table+' '+r.code+' '+r.message;
      });
    }
  };
})();
