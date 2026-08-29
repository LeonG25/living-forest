/* lf-anchor.js — the anchor chooser. Design: docs/designs/2026-07-28--walk-journal-anchor--v1.html
   Activates only when the URL carries ?choose=1 (index sends players here after sign-in
   when they have no active anchor, or when a keeper declined theirs).
   The choice is active immediately; keepers confirm or decline it in Review. */
(function(){
  if(window.__lfAnchor) return; window.__lfAnchor=1;
  if(!/[?&]choose=1/.test(location.search)) return;
  var SB_URL='https://oabcdrktuikifbormjip.supabase.co';
  var SB_KEY='sb_publishable_MnuwKTP5JaUy-P8-bKWsgA_f98esOXC';
  var SB_STORE='sb-oabcdrktuikifbormjip-auth-token';
  function sess(){ try{ var raw=localStorage.getItem(SB_STORE); if(!raw) return null;
    if(raw.slice(0,7)==='base64-') raw=atob(raw.slice(7));
    var s=JSON.parse(raw); var tok=s.access_token; if(!tok) return null;
    var uid=(s.user&&s.user.id)||null;
    if(!uid){ try{ uid=JSON.parse(atob(tok.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).sub; }catch(e){} }
    return uid?{token:tok,uid:uid}:null; }catch(e){ return null; } }
  var S=sess(); if(!S) return;
  function api(path,opts){ opts=opts||{}; opts.headers=Object.assign({apikey:SB_KEY,Authorization:'Bearer '+S.token,
    'Content-Type':'application/json'},opts.headers||{});
    return fetch(SB_URL+'/rest/v1/'+path,opts); }

  var lang='en'; try{ var l=localStorage.getItem('lf_lang'); if(l==='ru'||l==='he') lang=l; }catch(e){}
  var T={
    en:{eyebrow:'THE FOREST ASKS ONCE',q:'Who are you in this forest?',sub:'Choose yourself on the tree. The forest welcomes you at once; a keeper simply confirms it later.',find:'Find your name\u2026',are:function(n){return 'You are <b>'+n+'</b>?';},yes:"That's me",no:'Not me',done:function(n){return 'Welcome home, '+n+'.'},dir:'ltr'},
    ru:{eyebrow:'\u041b\u0415\u0421 \u0421\u041f\u0420\u0410\u0428\u0418\u0412\u0410\u0415\u0422 \u041e\u0414\u0418\u041d \u0420\u0410\u0417',q:'\u041a\u0442\u043e \u0442\u044b \u0432 \u044d\u0442\u043e\u043c \u043b\u0435\u0441\u0443?',sub:'\u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u0435\u0431\u044f \u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0435. \u041b\u0435\u0441 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0441\u0440\u0430\u0437\u0443; \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442 \u043f\u043e\u0437\u0436\u0435.',find:'\u041d\u0430\u0439\u0434\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f\u2026',are:function(n){return '\u0422\u044b \u2014 <b>'+n+'</b>?';},yes:'\u042d\u0442\u043e \u044f',no:'\u041d\u0435 \u044f',done:function(n){return '\u0421 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435\u043c \u0434\u043e\u043c\u043e\u0439, '+n+'.'},dir:'ltr'},
    he:{eyebrow:'\u05d4\u05d9\u05e2\u05e8 \u05e9\u05d5\u05d0\u05dc \u05e4\u05e2\u05dd \u05d0\u05d7\u05ea',q:'\u05de\u05d9 \u05d0\u05ea\u05dd \u05d1\u05d9\u05e2\u05e8 \u05d4\u05d6\u05d4?',sub:'\u05d1\u05d7\u05e8\u05d5 \u05d0\u05ea \u05e2\u05e6\u05de\u05db\u05dd \u05e2\u05dc \u05d4\u05e2\u05e5. \u05d4\u05d9\u05e2\u05e8 \u05de\u05e7\u05d1\u05dc \u05de\u05d9\u05d3; \u05e9\u05d5\u05de\u05e8 \u05e4\u05e9\u05d5\u05d8 \u05de\u05d0\u05e9\u05e8 \u05d0\u05d7\u05e8 \u05db\u05da.',find:'\u05de\u05e6\u05d0\u05d5 \u05d0\u05ea \u05d4\u05e9\u05dd \u05e9\u05dc\u05db\u05dd\u2026',are:function(n){return '\u05d0\u05ea\u05dd <b>'+n+'</b>?';},yes:'\u05d6\u05d4 \u05d0\u05e0\u05d9',no:'\u05dc\u05d0 \u05d0\u05e0\u05d9',done:function(n){return '\u05d1\u05e8\u05d5\u05db\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd \u05d4\u05d1\u05d9\u05ea\u05d4, '+n+'.'},dir:'rtl'}
  }; var L=T[lang];

  var css='#lfanch{position:fixed;inset:0;z-index:70;background:radial-gradient(140% 90% at 50% -8%,#101d33 0%,#0a1424 46%,#04070e 100%);color:#e9eef8;font-family:\'Hanken Grotesk\',system-ui,sans-serif;overflow-y:auto;}'
   +'#lfanch .aur{position:fixed;border-radius:50%;filter:blur(46px);opacity:.5;pointer-events:none;}'
   +'#lfanch .in{position:relative;max-width:430px;margin:0 auto;padding:34px 22px 60px;}'
   +'#lfanch .eyebrow{letter-spacing:.24em;font-size:11px;color:#8fb7e8;}'
   +'#lfanch h1{font-family:Georgia,\'Newsreader\',serif;font-weight:500;font-size:29px;margin:8px 0 6px;}'
   +'#lfanch .sub{color:#9aa7bd;font-size:14.5px;line-height:1.5;margin-bottom:16px;}'
   +'#lfanch input{width:100%;box-sizing:border-box;background:rgba(13,22,40,.8);border:1px solid #223050;border-radius:12px;padding:11px 13px;color:#e9eef8;font-size:15px;margin-bottom:12px;outline:none;}'
   +'#lfanch .prow{display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:12px;cursor:pointer;}'
   +'#lfanch .prow.on{background:rgba(243,205,132,.09);outline:1px solid rgba(243,205,132,.35);}'
   +'#lfanch .pname{font-family:Georgia,serif;font-size:17.5px;color:#f3cd84;}'
   +'#lfanch .confirm{position:sticky;bottom:0;margin-top:14px;border-top:1px solid #1c2740;padding:14px 0;display:flex;gap:10px;align-items:center;justify-content:space-between;background:linear-gradient(to top,#04070e 60%,transparent);}'
   +'#lfanch .cq{font-family:Georgia,serif;font-size:16.5px;}'
   +'#lfanch .cq b{color:#f3cd84;font-weight:500;}'
   +'#lfanch button{font-family:inherit;cursor:pointer;}'
   +'#lfanch .cbtn{background:rgba(243,205,132,.14);border:1px solid rgba(243,205,132,.5);color:#f3cd84;border-radius:999px;padding:10px 18px;font-size:14px;}'
   +'#lfanch .cghost{background:none;border:1px solid #2a3a52;color:#9aa7bd;border-radius:999px;padding:10px 14px;font-size:13.5px;}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  var box=document.createElement('div'); box.id='lfanch'; box.dir=L.dir;
  box.innerHTML='<div class="aur" style="width:240px;height:240px;left:-60px;top:40px;background:rgba(127,180,216,.3)"></div>'
   +'<div class="aur" style="width:220px;height:220px;right:-70px;top:300px;background:rgba(243,205,132,.16)"></div>'
   +'<div class="in"><div class="eyebrow">'+L.eyebrow+'</div><h1>'+L.q+'</h1><div class="sub">'+L.sub+'</div>'
   +'<input type="search" placeholder="'+L.find+'"><div class="plist"></div>'
   +'<div class="confirm" style="display:none"><div class="cq"></div><div>'
   +'<button class="cghost">'+L.no+'</button> <button class="cbtn">'+L.yes+'</button></div></div></div>';
  function mount(){ (document.body||document.documentElement).appendChild(box); }
  if(document.body) mount(); else document.addEventListener('DOMContentLoaded',mount);


  /* Names come from person_facts now, by the forest's one rule: called+family, else
     given+family, else any part; the reader's language, then und, then anything rather
     than nothing; never mixing alphabets. people.display_name was the stale column that
     showed a Hebrew name to an English reader. */
  var NF={};
  function lang(){ try{ return localStorage.getItem('lf_lang')||'en'; }catch(e){ return 'en'; } }
  function nameOf(id){
    var parts=NF[id]||[]; if(!parts.length) return '';
    function pick(f,lg){ for(var i=0;i<parts.length;i++) if(parts[i].field===f&&parts[i].lang===lg) return parts[i].value||''; return ''; }
    var CYR=/[\u0400-\u04FF]/, HEB=/[\u0590-\u05FF]/;
    function join(a,c){ a=(a||'').trim(); c=(c||'').trim();
      if(!a) return c; if(!c) return a;
      if(a.toLowerCase().indexOf(c.toLowerCase())>=0) return a;
      if((CYR.test(a)!==CYR.test(c))||(HEB.test(a)!==HEB.test(c))) return a;
      return a+' '+c; }
    var order=[lang(),'und','en','ru','he'];
    for(var i=0;i<order.length;i++){
      var lg=order[i], ca=pick('called',lg), gi=pick('given',lg), fa=pick('family',lg);
      if(ca) return join(ca,fa);
      if(gi) return join(gi,fa);
      if(fa) return fa;
    }
    return parts[0].value||'';
  }
  var people=[], pick=null;
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function draw(q){ var list=box.querySelector('.plist'); q=(q||'').toLowerCase();
    list.innerHTML=people.filter(function(p){ return !q||String(nameOf(p.id)||p.display_name||'').toLowerCase().indexOf(q)>=0; })
      .map(function(p){ return '<div class="prow'+(pick&&pick.id===p.id?' on':'')+'" data-id="'+p.id+'"><div class="pname">'+esc(nameOf(p.id)||p.display_name||'')+'</div></div>'; }).join(''); }
  api('people?select=id&status=eq.published').then(function(r){ return r.ok?r.json():[]; })
    .then(function(j){ people=j||[];
      return api('person_facts?select=person_id,field,lang,value&status=eq.published&field=in.(called,given,family,maiden)')
        .then(function(r2){ return r2.ok?r2.json():[]; })
        .then(function(rows){ (rows||[]).forEach(function(f){ (NF[f.person_id]=NF[f.person_id]||[]).push(f); });
          people.sort(function(x,y){ return String(nameOf(x.id)||'').localeCompare(String(nameOf(y.id)||'')); });
          draw(''); }); })
    .catch(function(){ draw(''); });

  box.addEventListener('input',function(e){ if(e.target.tagName==='INPUT') draw(e.target.value); });
  box.addEventListener('click',function(e){
    var row=e.target.closest('.prow');
    if(row){ pick=people.filter(function(p){ return p.id===row.getAttribute('data-id'); })[0]||null;
      draw(box.querySelector('input').value);
      var c=box.querySelector('.confirm'); c.style.display=pick?'flex':'none';
      if(pick) c.querySelector('.cq').innerHTML=L.are(esc(nameOf(pick.id)||pick.display_name||'')); return; }
    if(e.target.classList.contains('cghost')){ pick=null; box.querySelector('.confirm').style.display='none'; draw(box.querySelector('input').value); return; }
    if(e.target.classList.contains('cbtn')&&pick){
      api('player_anchors?on_conflict=user_id',{method:'POST',
        headers:{Prefer:'resolution=merge-duplicates'},
        body:JSON.stringify({user_id:S.uid,person_id:pick.id,status:'active',decided_by:null,decided_at:null})})
      .then(function(r){
        var name=nameOf(pick.id)||pick.display_name||'';
        box.querySelector('.in').innerHTML='<div style="min-height:60vh;display:grid;place-items:center;text-align:center">'
          +'<div><div style="font-family:Georgia,serif;font-size:24px;color:#f3cd84">'+esc(L.done(name))+'</div></div></div>';
        var nn=''; try{ nn=(new URLSearchParams(location.search).get('next')||''); }catch(e3){}
        if(!/^[a-z0-9-]+\.html$/.test(nn)) nn='';
        try{ history.replaceState(null,'',location.pathname); }catch(e2){}
        setTimeout(function(){ if(nn){ location.href=nn; } else { box.remove(); } },1800);
      });
    }
  });
})();
