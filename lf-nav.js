/* The Living Forest — shared nav + hardware-back guard.
   Include near </body>:  <script src="lf-nav.js" data-parent="index.html" data-here="map"></script>
   Root page (the globe) omits data-parent. A page with a closeable overlay may define
   window.__lfClose = () => boolean (true if it closed something). */
(function(){
  var s = document.currentScript || (function(){ var a=document.getElementsByTagName('script'); return a[a.length-1]; })();
  var PARENT = (s && s.getAttribute('data-parent')) || '';
  var HERE   = (s && s.getAttribute('data-here')) || '';

  function arm(){ try{ history.pushState({lf:1},''); }catch(e){} }
  function inAppRef(){
    try{ if(!document.referrer) return false;
      var u=new URL(document.referrer);
      return u.origin===location.origin && /((home-real|person-real|place-real|moment-real|crowd-real|timeline-real|search-real|tree-real|contribute-real|contribute-add-real|curators-real|review-real|journal-real|reel-real|clearing-real|game-missing-voice|game-tangled-thread|game-who-is-who|game-what-happened-next|game-where-was-this|game-order-of-things|index|preview|preview-globe|prototype)\.html?|\/)$/.test(u.pathname);
    }catch(e){ return false; }
  }
  function goBack(){
    if(typeof window.__lfClose==='function' && window.__lfClose()){ arm(); return; }   // close an overlay first
    if(inAppRef()){ try{ history.back(); }catch(e){ if(PARENT) location.href=PARENT; } return; } // one real screen back
    if(!PARENT){ if(confirm('Leave The Living Forest?')){ try{ history.back(); }catch(e){} } else { arm(); } return; } // root: confirm exit
    location.href = PARENT;   // entry-point on a sub-page: fall back to the hub, never exit
  }
  window.addEventListener('popstate', goBack);
  arm();

  /* Fen's Play-bud: on the quiet home surfaces (tree, person, the globe) a small
     ember disc breathes lower-left. Tap: Fen arrives with ONE data-drawn invitation.
     "Come along" walks into the seeded game; "Not now" and she waves out, bud returns.
     No strip, no companion, until asked. (Approved design 2026-07-31--fen-guidance--v1) */
  (function(){
    var page=(location.pathname.split('/').pop()||'index.html');
    if(!/^(tree-real|person-real|index)\.html$/.test(page)) return;
    if(document.querySelector('script[src^="lf-fen"]')) return;
    function mkBud(){
      if(document.getElementById('lfBud')) return;
      var b=document.createElement('button');
      b.id='lfBud'; b.setAttribute('aria-label','Play with Fen');
      b.style.cssText='position:fixed;left:16px;bottom:calc(18px + env(safe-area-inset-bottom));z-index:44;width:52px;height:52px;border-radius:50%;border:none;cursor:pointer;'+
        'background:radial-gradient(circle at 35% 30%, #f5b57e, #b65f2e 70%);box-shadow:0 0 18px rgba(232,149,92,.55), inset 0 0 8px rgba(255,255,255,.25);'+
        'display:grid;place-items:center;animation:lfBudP 3.4s ease-in-out infinite;';
      b.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3a1c08" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l10 6-10 6z"/></svg>';
      var st=document.createElement('style');
      st.textContent='@keyframes lfBudP{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}'+
        '@media (prefers-reduced-motion: reduce){#lfBud{animation:none}}';
      document.head.appendChild(st); document.body.appendChild(b);
      b.onclick=summon;
    }
    function loadScript(src){ return new Promise(function(res,rej){
      var sc=document.createElement('script'); sc.src=src; sc.onload=res; sc.onerror=rej; document.head.appendChild(sc); }); }
    var busy=false;
    function budBack(why){
      busy=false;
      var b=document.getElementById('lfBud'); if(b) b.style.display='grid';
      try{ console.warn('[bud] '+why); }catch(e){}
      /* the family's devices are the only place this can be seen from */
      try{ if(window.LFDB) LFDB.note('bud: '+why); }catch(e){}
    }
    async function summon(){
      if(busy) return; busy=true;
      var bud=document.getElementById('lfBud'); if(bud) bud.style.display='none';
      /* if nothing is on screen within 9s, give the bud back rather than leave
         the tap swallowed - and report which step never finished. */
      var arrived=false;
      var watchdog=setTimeout(function(){
        if(arrived) return;
        budBack('nothing within 20s (Fen='+(!!window.Fen)+' Invite='+(!!window.LFInvite)
                +' strip='+!!document.getElementById('lfFenStrip')+')');
      },20000);
      try{
        if(!window.LFInvite) await loadScript('lf-invite.js?v=2');
        if(!window.Fen) await loadScript('lf-fen.js?v=22');
        /* our own client: the lib global is on every data page; the session rides localStorage */
        var sb=null;
        try{ if(window.supabase&&window.supabase.createClient)
          sb=window.supabase.createClient('https://oabcdrktuikifbormjip.supabase.co','sb_publishable_MnuwKTP5JaUy-P8-bKWsgA_f98esOXC'); }catch(e){}
        var uid=null;
        try{ var raw=localStorage.getItem('sb-oabcdrktuikifbormjip-auth-token'); if(raw){ uid=(JSON.parse(raw).user||{}).id||null; } }catch(e){}
        var lang='en'; try{ lang=localStorage.getItem('lf_lang')||'en'; }catch(e){}
        /* wait for her to settle, then the one invitation */
        var tries=0;
        (function when(){ if(window.Fen&&tries++<40){
            var inv=null;
            var ask=function(){ window.Fen.offer(inv.line, inv.yes, inv.no, function(yes){
                if(yes){ location.href=inv.go; }
                else { window.Fen.cue('leave',{quiet:true}); window.Fen.leave(function(){
                        busy=false; var b2=document.getElementById('lfBud'); if(b2) b2.style.display='grid';
                        window.__lfFenMounted=0; var s2=document.getElementById('lfFenStrip'); if(s2) s2.remove();
                        try{ document.body.classList.remove('lf-fen-on'); }catch(e){} }); } }); };
            var FALLBACK={line:'Come and know your family.',yes:'Come along',no:'Not now',go:'game-who-is-who.html'};
            var go=function(r){ inv=(r&&r.line)?r:FALLBACK; setTimeout(function(){
                /* only a chip actually on the screen counts as arrival */
                try{ ask(); }catch(e){ clearTimeout(watchdog); budBack('ask threw: '+String(e&&e.message||e).slice(0,90)); return; }
                setTimeout(function(){
                  if(document.getElementById('lfFenOffer')){ arrived=true; clearTimeout(watchdog); }
                }, 600);
              }, 2600); };
            if(sb&&uid&&window.LFInvite){
              var settled=false;
              window.LFInvite.next(sb, uid, lang).then(function(r){ if(!settled){ settled=true; go(r); } },
                                                       function(e){ if(!settled){ settled=true; go(null); } });
              setTimeout(function(){ if(!settled){ settled=true; go(null); } }, 6000);  /* never hang on a silent read */
            }
            else go(FALLBACK);
          } else if(tries<40){ setTimeout(when,150); }
            else { clearTimeout(watchdog); budBack('Fen never defined after 6s - lf-fen.js loaded but did not run'); } })();
      }catch(e){ clearTimeout(watchdog); budBack('threw: '+String(e&&e.message||e).slice(0,120)); }
    }
    if(document.body) mkBud(); else document.addEventListener('DOMContentLoaded', mkBud);
  })();

  /* floating "lenses" menu so every screen reaches the others */
  var css = 'body.lf-fen-on #lfnav:not([data-moved]){bottom:calc(14px + 151px + env(safe-area-inset-bottom))!important;}'
  + '#lfnav{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:45;display:flex;flex-direction:column;align-items:flex-end;gap:10px;font-family:\'Hanken Grotesk\',system-ui,sans-serif;}'
  + '#lfnavPanel{display:none;position:absolute;bottom:calc(100% + 10px);right:0;flex-direction:column;gap:4px;max-height:min(68vh,520px);overflow-y:auto;overscroll-behavior:contain;background:rgba(9,16,30,.94);border:1px solid rgba(180,205,235,.18);border-radius:14px;padding:8px;min-width:168px;box-shadow:0 10px 34px rgba(0,0,0,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}'  + '#lfnavPanel.lf-left{right:auto;left:0;}'  + '#lfnavPanel.lf-down{bottom:auto;top:calc(100% + 10px);}'
  + '#lfnav.open #lfnavPanel{display:flex;}'
  + '#lfnavPanel a{display:flex;gap:10px;align-items:center;color:#e8eef8;text-decoration:none;font-size:14.5px;padding:10px 12px;border-radius:10px;line-height:1;}'
  + '#lfnavPanel a:active{background:rgba(243,205,132,.16);}'
  + '#lfnavPanel a.cur{color:#f3cd84;}'
  + '#lfnavPanel a .ic{width:18px;text-align:center;opacity:.9;}'
  + '#lfnavBtn{touch-action:none;width:48px;height:48px;border-radius:50%;border:1px solid rgba(243,205,132,.5);background:rgba(9,16,30,.72);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f3cd84;font-size:20px;line-height:1;cursor:pointer;display:grid;place-items:center;padding:0;flex:0 0 auto;box-sizing:border-box;box-shadow:0 4px 18px rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;}'
  + '#lfnav.open #lfnavBtn{border-color:rgba(243,205,132,.9);}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  var items=[
             ['map','◍','The globe','index.html'],
             ['find','⌕','Search','search-real.html'],
             ['tree','⋔','The tree','tree-real.html'],
             ['play','❂','Find them in a crowd','crowd-real.html'],
             ['when','◷','The timeline','timeline-real.html'],
             ['add','✎','Contribute','contribute-real.html'],
             ['journal','❦','My journal','journal-real.html'],
             ['clearing','🦊','The clearing','clearing-real.html']];
  var wrap=document.createElement('div'); wrap.id='lfnav';
  var panel=document.createElement('div'); panel.id='lfnavPanel';
  items.forEach(function(it){
    var a=document.createElement('a'); a.href=it[3];
    a.innerHTML='<span class="ic">'+it[1]+'</span><span>'+it[2]+'</span>';
    if(it[0]===HERE) a.className='cur';
    panel.appendChild(a);
  });
  /* ---- keeper-only entries: Review + Keepers, on EVERY page, for keepers only ----
     A page may set window.__lfKeeper=true as a fast path (paint them without waiting),
     but lf-nav's own check below is the source of truth: it adds them if the account is
     a keeper and removes them if it is not, so they never linger and never disappear. */
  function addKeeperItems(){
    if(panel.querySelector('a[data-lf="review"]')) return;   // de-dupe: never double-insert
    var rv=document.createElement('a'); rv.href='review-real.html'; rv.setAttribute('data-lf','review');
    rv.innerHTML='<span class="ic">\u2713</span><span>'+(window.__lfReviewLabel||'Review')+'</span>';
    if(HERE==='review') rv.className='cur';
    panel.insertBefore(rv, panel.querySelector('a[data-lf="signout"]'));
    var a=document.createElement('a'); a.href='curators-real.html'; a.setAttribute('data-lf','curators');
    a.innerHTML='<span class="ic">\u2609</span><span>'+(window.__lfKeeperLabel||'Keepers')+'</span>';
    if(HERE==='curators') a.className='cur';
    panel.insertBefore(a, panel.querySelector('a[data-lf="signout"]'));
  }
  function removeKeeperItems(){
    var n=panel.querySelectorAll('a[data-lf="review"],a[data-lf="curators"]');
    for(var i=0;i<n.length;i++) n[i].parentNode.removeChild(n[i]);
  }
  function setKeeper(is){ if(is) addKeeperItems(); else removeKeeperItems(); }

  if(window.__lfKeeper) addKeeperItems();                     // fast path, if the page already knows
  document.addEventListener('lf-keeper-ready', function(){ if(window.__lfKeeper) addKeeperItems(); });

  /* lf-nav's own check \u2014 same on every page, so the menu is identical everywhere.
     Reads the stored Supabase session directly (no second auth client) and asks
     profiles.is_keeper over REST. Resolves async; the items are inserted/removed when it lands. */
  var SB_URL='https://oabcdrktuikifbormjip.supabase.co';
  var SB_KEY='sb_publishable_MnuwKTP5JaUy-P8-bKWsgA_f98esOXC';
  var SB_STORE='sb-oabcdrktuikifbormjip-auth-token';
  function storedSession(){
    try{
      var raw=localStorage.getItem(SB_STORE); if(!raw) return null;
      if(raw.slice(0,7)==='base64-') raw=atob(raw.slice(7));
      var s=JSON.parse(raw);
      if(Array.isArray(s)) s={access_token:s[0]};             // legacy array form
      var tok=s.access_token; if(!tok) return null;
      var uid=(s.user&&s.user.id)||null;
      if(!uid){ try{ uid=JSON.parse(atob(tok.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))).sub; }catch(e){} }
      return uid? {token:tok, uid:uid} : null;
    }catch(e){ return null; }
  }
  function keeperCheck(tries){
    var s=storedSession();
    if(!s){ setKeeper(false); return; }                        // signed out \u2192 never show
    fetch(SB_URL+'/rest/v1/profiles?select=is_keeper&limit=1&id=eq.'+encodeURIComponent(s.uid),
          { headers:{ apikey:SB_KEY, Authorization:'Bearer '+s.token, Accept:'application/json' } })
      .then(function(r){
        if(r.status===401 && tries>0){ setTimeout(function(){ keeperCheck(tries-1); },1500); return null; } // token mid-refresh
        return r.ok? r.json() : null;
      })
      .then(function(j){ if(j===null) return; setKeeper(!!(j&&j[0]&&j[0].is_keeper)); })
      .catch(function(){});                                    // offline: leave the fast path as-is
  }
  keeperCheck(2);
  /* ---- step out: visible whenever a session exists; back to the globe's gate ---- */
  if(storedSession()){
    var so=document.createElement('a'); so.href='#'; so.setAttribute('data-lf','signout');
    so.innerHTML='<span class="ic">\u238b</span><span>Step out</span>';
    so.addEventListener('click', function(ev){ ev.preventDefault();
      var s2=storedSession();
      try{ if(s2) fetch(SB_URL+'/auth/v1/logout',{method:'POST',headers:{apikey:SB_KEY,Authorization:'Bearer '+s2.token}}); }catch(e){}
      try{ localStorage.removeItem(SB_STORE); }catch(e){}
      setTimeout(function(){ location.href='index.html'; },150);
    });
    panel.appendChild(so);
  }
  var btn=document.createElement('button'); btn.id='lfnavBtn'; btn.type='button';
  btn.setAttribute('aria-label','Move between lenses');
  /* drawn, not typed: U+2295 is missing from the face iOS falls back to, so the
     iPad rendered a bare plus where Android shows the ring. */
  btn.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
    +'stroke-width="1.4" aria-hidden="true">'
    +'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>'
    +'<path d="M12 3c2.6 2.5 4 5.6 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.6-4-9s1.4-6.5 4-9z"/></svg>';
  wrap.appendChild(panel); wrap.appendChild(btn);
  function place(){ (document.body||document.documentElement).appendChild(wrap); }
  if(document.body) place(); else document.addEventListener('DOMContentLoaded', place);
  // --- tap opens the menu; DRAG moves the whole dock (position remembered) ---
  var DRAG_KEY='lf-nav-pos', dragging=false, moved=false, sx=0, sy=0, ox=0, oy=0;
  function applyPos(p){
    if(!p) return;
    /* a hand-placed dock is anchored by top/left only. The lf-fen-on rule adds
       bottom with !important, and an element with both stretches - which squeezed
       the button into an oval once the fox arrived. The marker keeps them apart. */
    wrap.setAttribute('data-moved','1');
    wrap.style.right='auto'; wrap.style.bottom='auto';
    wrap.style.left=p.x+'px'; wrap.style.top=p.y+'px';
  }
  function clamp(x,y){
    var r=wrap.getBoundingClientRect();
    var maxX=Math.max(0, window.innerWidth  - r.width  - 6);
    var maxY=Math.max(0, window.innerHeight - r.height - 6);
    return { x: Math.min(Math.max(6,x), maxX), y: Math.min(Math.max(6,y), maxY) };
  }
  try{ var saved=JSON.parse(localStorage.getItem(DRAG_KEY)||'null'); if(saved) applyPos(clamp(saved.x,saved.y)); }catch(e){}

  btn.addEventListener('pointerdown', function(e){
    e.preventDefault();
    dragging=true; moved=false;
    var r=wrap.getBoundingClientRect(); ox=r.left; oy=r.top; sx=e.clientX; sy=e.clientY;
    try{ btn.setPointerCapture(e.pointerId); }catch(_){}
  });
  window.addEventListener('pointermove', function(e){
    if(!dragging) return;
    e.preventDefault();
    var dx=e.clientX-sx, dy=e.clientY-sy;
    if(!moved && Math.abs(dx)+Math.abs(dy) < 6) return;   // small movement = still a tap
    moved=true; wrap.classList.remove('open');
    var p=clamp(ox+dx, oy+dy); applyPos(p);
  });
  function endDrag(e){
    if(!dragging) return; dragging=false;
    try{ btn.releasePointerCapture(e.pointerId); }catch(_){}
    if(moved){
      var r=wrap.getBoundingClientRect();
      try{ localStorage.setItem(DRAG_KEY, JSON.stringify({x:r.left,y:r.top})); }catch(_){}
    }
  }
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  window.addEventListener('resize', function(){
    try{ var sp=JSON.parse(localStorage.getItem(DRAG_KEY)||'null'); if(sp) applyPos(clamp(sp.x,sp.y)); }catch(_){}
  });
  // double-tap the button resets it to the default corner
  btn.addEventListener('dblclick', function(e){
    e.stopPropagation();
    try{ localStorage.removeItem(DRAG_KEY); }catch(_){}
    wrap.style.left='auto'; wrap.style.top='auto'; wrap.style.right='14px'; wrap.style.bottom='calc(14px + env(safe-area-inset-bottom))';
  });

  function positionPanel(){
    panel.classList.remove('lf-left','lf-down');
    var b=btn.getBoundingClientRect(), pw=panel.offsetWidth||168, ph=panel.offsetHeight||0, M=6;
    // horizontal: default right-aligned (grows left). Flip to left-aligned only if that keeps it on-screen.
    if(b.right - pw < M && b.left + pw <= window.innerWidth - M) panel.classList.add('lf-left');
    // vertical: default grows up. Flip down if there isn't room above.
    panel.style.position=''; panel.style.top=''; panel.style.bottom=''; panel.style.maxHeight='';
    var above = b.top - 10 - M, below = window.innerHeight - b.bottom - 10 - M;
    if(ph <= above){ /* the usual: it grows upward out of the button */ }
    else if(ph <= below){ panel.classList.add('lf-down'); }
    else {
      /* A keeper's menu is ten entries tall, and on a phone that fits neither
         above nor below a dock in the middle of the screen. Anchoring it to the
         button then just pushes most of it off the edge - which is why Leon saw
         three of ten. When neither side has room the panel stops following the
         button and takes the height of the screen instead. */
      var side = (b.left + b.width/2) > window.innerWidth/2;
      panel.style.position='fixed';
      panel.style.top=M+'px'; panel.style.bottom=M+'px';
      panel.style.maxHeight=(window.innerHeight - 2*M)+'px';
      if(side){ panel.style.right=Math.round(window.innerWidth - b.right)+'px'; panel.style.left='auto'; }
      else    { panel.style.left=Math.round(b.left)+'px'; panel.style.right='auto'; }
    }
  }
  btn.addEventListener('click', function(e){ e.stopPropagation(); if(moved){ moved=false; return; }
    var willOpen=!wrap.classList.contains('open'); wrap.classList.toggle('open'); if(willOpen) positionPanel(); });
  document.addEventListener('click', function(e){ if(!wrap.contains(e.target)) wrap.classList.remove('open'); });
})();
