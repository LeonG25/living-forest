/* The Living Forest — shared nav + hardware-back guard.
   Include near </body>:  <script src="lf-nav.js" data-parent="home-real.html" data-here="map"></script>
   Root page (the sky) omits data-parent. A page with a closeable overlay may define
   window.__lfClose = () => boolean (true if it closed something). */
(function(){
  var s = document.currentScript || (function(){ var a=document.getElementsByTagName('script'); return a[a.length-1]; })();
  var PARENT = (s && s.getAttribute('data-parent')) || '';
  var HERE   = (s && s.getAttribute('data-here')) || '';

  function arm(){ try{ history.pushState({lf:1},''); }catch(e){} }
  function inAppRef(){
    try{ if(!document.referrer) return false;
      var u=new URL(document.referrer);
      return u.origin===location.origin && /((home-real|person-real|place-real|moment-real|crowd-real|timeline-real|search-real|tree-real|contribute-real|contribute-add-real|curators-real|review-real|journal-real|reel-real|game-missing-voice|game-tangled-thread|game-who-is-who|game-what-happened-next|game-where-was-this|game-order-of-things|index|preview|preview-globe|prototype)\.html?|\/)$/.test(u.pathname);
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

  /* floating "lenses" menu so every screen reaches the others */
  var css = '#lfnav{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom));z-index:45;display:flex;flex-direction:column;align-items:flex-end;gap:10px;font-family:\'Hanken Grotesk\',system-ui,sans-serif;}'
  + '#lfnavPanel{display:none;flex-direction:column;gap:4px;background:rgba(9,16,30,.94);border:1px solid rgba(180,205,235,.18);border-radius:14px;padding:8px;min-width:168px;box-shadow:0 10px 34px rgba(0,0,0,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);}'
  + '#lfnav.open #lfnavPanel{display:flex;}'
  + '#lfnavPanel a{display:flex;gap:10px;align-items:center;color:#e8eef8;text-decoration:none;font-size:14.5px;padding:10px 12px;border-radius:10px;line-height:1;}'
  + '#lfnavPanel a:active{background:rgba(243,205,132,.16);}'
  + '#lfnavPanel a.cur{color:#f3cd84;}'
  + '#lfnavPanel a .ic{width:18px;text-align:center;opacity:.9;}'
  + '#lfnavBtn{width:48px;height:48px;border-radius:50%;border:1px solid rgba(243,205,132,.5);background:rgba(9,16,30,.72);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#f3cd84;font-size:20px;line-height:1;cursor:pointer;box-shadow:0 4px 18px rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;}'
  + '#lfnav.open #lfnavBtn{border-color:rgba(243,205,132,.9);}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  var items=[['sky','✦','The sky','home-real.html'],
             ['map','◍','The globe','index.html'],
             ['find','⌕','Search','search-real.html'],
             ['tree','⋔','The tree','tree-real.html'],
             ['play','❂','Find them in a crowd','crowd-real.html'],
             ['when','◷','The timeline','timeline-real.html'],
             ['add','✎','Add a memory','contribute-add-real.html'],
             ['journal','❦','My journal','journal-real.html']];
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
    panel.appendChild(rv);
    var a=document.createElement('a'); a.href='curators-real.html'; a.setAttribute('data-lf','curators');
    a.innerHTML='<span class="ic">\u2609</span><span>'+(window.__lfKeeperLabel||'Keepers')+'</span>';
    if(HERE==='curators') a.className='cur';
    panel.appendChild(a);
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
  var btn=document.createElement('button'); btn.id='lfnavBtn'; btn.type='button';
  btn.setAttribute('aria-label','Move between lenses'); btn.textContent='\u2295';
  wrap.appendChild(panel); wrap.appendChild(btn);
  function place(){ (document.body||document.documentElement).appendChild(wrap); }
  if(document.body) place(); else document.addEventListener('DOMContentLoaded', place);
  btn.addEventListener('click', function(e){ e.stopPropagation(); wrap.classList.toggle('open'); });
  document.addEventListener('click', function(e){ if(!wrap.contains(e.target)) wrap.classList.remove('open'); });
})();
