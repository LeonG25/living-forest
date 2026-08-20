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
  var DIAG_MAX=24, seen=Object.create(null);

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
    if(!isWrite) tellIncomplete();
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
            /* THE TRANSFORMER MUST NEVER BE BYPASSED (Leon, 2026-08-18).
               A family photograph asked for without a width crosses the wire at full
               camera resolution - 2.9 MB where 200 KB would do, fifteen times the cost.
               That is how the egress allowance was exhausted twice, and both times it
               was silent: the picture looked right, so nothing looked wrong. A page that
               forgets LFDB.img now says so, loudly, in the console and in the diagnostic
               note, naming itself and the file so it can be found without a bisect. */
            try{
              if((p==='createSignedUrl'||p==='createSignedUrls'||p==='download') && bucket==='family'){
                var a=arguments, pth=a[0];
                var opts=(p==='createSignedUrl')?a[2]:(p==='download'?a[1]:a[2]);
                var wanted=opts&&opts.transform&&opts.transform.width;
                if(!wanted && IMG.test(String(Array.isArray(pth)?(pth[0]||''):pth))){
                  var msg='full-size image requested without a transform: '+PAGE+' -> '+
                          String(Array.isArray(pth)?pth[0]:pth).slice(-44)+
                          ' (use LFDB.img(path,width) - this costs ~15x the bytes)';
                  /* once per file per page: the proxy sees the call and its retry, so an
                     unguarded fetch read as two faults and sent whoever met it hunting
                     for a second bug that was never there. */
                  if(!seen['img:'+pth]){ seen['img:'+pth]=1;
                    try{ console.error('[LFDB] '+msg); }catch(_){ }
                    try{ note(msg); }catch(_){ } }
                }
              }
            }catch(_){ }
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

  /* AN EMPTY PAGE MUST NEVER BE MISTAKEN FOR AN EMPTY FOREST.
     211 reads in this app do `(data||[])`, so a refused or failed query renders as
     nothing at all - which is how a keeper's page showed no pending memories for months
     and how Zoya was shown a forest with nobody in it. Fixing 211 call sites one by one
     would take a week and miss the 212th. Since every query already passes through here,
     the honest thing is said once, on any page, the first time a READ fails: what you are
     looking at is incomplete. It is not a design surface - it is the page admitting it
     does not know. */
  var SAID={ en:{t:'Some of this did not load.', s:'What you see may not be everything. Try again in a moment.'},
             ru:{t:'Часть данных не загрузилась.', s:'Возможно, здесь показано не всё. Попробуйте обновить.'},
             he:{t:'חלק מהמידע לא נטען.', s:'ייתכן שלא הכול מוצג כאן. נסו לרענן.'} };
  var toldAlready=false;
  function tellIncomplete(){
    if(toldAlready) return; toldAlready=true;
    try{
      var l=lang(), w=SAID[l]||SAID.en, rtl=(l==='he');
      var bar=document.createElement('div');
      bar.setAttribute('role','status'); bar.setAttribute('dir', rtl?'rtl':'ltr');
      bar.style.cssText='position:fixed;left:0;right:0;top:0;z-index:99998;padding:9px 14px;'
        +'background:rgba(46,26,26,.94);color:#f6e7e0;border-bottom:1px solid rgba(240,150,120,.45);'
        +'font:inherit;font-size:13px;line-height:1.4;text-align:center;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);';
      bar.innerHTML='<b style="font-weight:600">'+w.t+'</b> <span style="opacity:.85">'+w.s+'</span>';
      var x=document.createElement('button');
      x.type='button'; x.textContent='\u00d7'; x.setAttribute('aria-label','Close');
      x.style.cssText='position:absolute;'+(rtl?'left':'right')+':8px;top:5px;background:none;border:0;'
        +'color:inherit;font-size:19px;line-height:1;cursor:pointer;padding:2px 7px;';
      x.onclick=function(){ try{ bar.remove(); }catch(e){} };
      bar.appendChild(x);
      var put=function(){ try{ document.body.appendChild(bar); }catch(e){} };
      if(document.body) put(); else document.addEventListener('DOMContentLoaded',put);
    }catch(e){}
  }

  /* A STORY SHOULD BE READ IN THE READER'S LANGUAGE, WHEREVER IT APPEARS (Leon, 2026-08-20).
     The moment page looked for a translation. Nowhere else did - so the timeline, the person
     page, the reel, search, the journal and the place page all showed the words exactly as
     they were first typed, in Russian to an English reader. Translating the stories was only
     half the job; the other half is every page remembering to ask.
     One helper rather than six copies: hand it the rows just fetched and it swaps in the
     approved retelling for the language being read. Silence on failure is right here - a
     story in the wrong language is far better than no story. */
  async function stories(sb, rows, lang){
    try{
      if(!sb||!rows||!rows.length||!lang) return rows;
      var ids=[]; for(var i=0;i<rows.length;i++){ var r=rows[i]; if(r&&r.id&&r.body) ids.push(r.id); }
      if(!ids.length) return rows;
      var res=await sb.from('artefact_translations')
        .select('artefact_id,body').eq('lang',lang).eq('status','published').in('artefact_id',ids);
      var data=res&&res.data; if(!data||!data.length) return rows;
      var by={}; for(var j=0;j<data.length;j++){ if(data[j].body) by[data[j].artefact_id]=data[j].body; }
      for(var k=0;k<rows.length;k++){ var t=by[rows[k].id]; if(t) rows[k].body=t; }
    }catch(e){ }
    return rows;
  }

  /* PLACE NAMES, WITHOUT MOVING A SINGLE ROW (Leon, 2026-08-20).
     This was written down as blocked, and it was blocked for a good reason: a home stores
     one place name for all languages, and four pages group people by that text AS A STRING.
     Translating what is STORED would split Tel Aviv into three places holding a third of the
     family each.
     But place_geo already holds every place in all three languages, keyed by exactly the text
     people type. So nothing needs to move: the stored text stays the one true key and keeps
     the grouping intact, and only what a person READS is swapped. A place we have never seen
     before simply shows as it was typed, which is what it does today.
     Loaded once and kept, because it is small and every page wants it. */
  var _placeMap=null, _placeLang=null;
  async function places(sb, lang){
    try{
      if(!sb||!lang) return {};
      if(_placeMap && _placeLang===lang) return _placeMap;
      var res=await sb.from('place_geo').select('name,name_en,name_ru,name_he');
      var rows=(res&&res.data)||[]; var m={};
      for(var i=0;i<rows.length;i++){
        var r=rows[i]; if(!r.name) continue;
        var v = lang==='ru'?r.name_ru : lang==='he'?r.name_he : r.name_en;
        if(!v || !String(v).trim()) continue;
        /* EVERY SPELLING IS A KEY TO THE SAME PLACE. The table is keyed by whichever spelling
           happened to be geocoded, so a home typed as Бобруйск found nothing and stayed
           Russian on an English page - measured, not guessed. Each row's own three names
           point at it as well, so a place recognised in any language is recognised in all. */
        m[r.name]=v;
        if(r.name_en) m[r.name_en]=v;
        if(r.name_ru) m[r.name_ru]=v;
        if(r.name_he) m[r.name_he]=v;
      }
      _placeMap=m; _placeLang=lang; return m;
    }catch(e){ return {}; }
  }
  function placeName(name, map){
    if(!name) return name;
    if(!map) return name;
    return map[name] || map[String(name).trim()] || name;
  }

  window.LFDB={
    places:places,
    placeName:placeName,
    stories:stories,
    img:img,
    note:note,
    incomplete:function(){ return toldAlready; },
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
