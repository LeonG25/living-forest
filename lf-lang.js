/* lf-lang.js — one language button, the same on every page.
   Leon, 2026-08-21: 'The language selection buttons on the Tree and globe pages are
   different.' They were, and worse: six pages had no way to change language at all — the
   place, the timeline, search, the journal, the keeper's page and the crowd. A person
   reading Hebrew could walk into any of them and be stranded in English.
   A page that already draws its own button is left alone; this only fills the gaps, so
   nothing anybody is used to moves. */
(function(){
  if(window.LFLang) return;
  var LANGS=['en','ru','he'];
  var NAMES={en:'English', ru:'Русский', he:'עברית'};
  /* Leon, 2026-08-22: LETTERS, not a globe. He wants to see WHICH language he is in
     without opening anything. A globe says 'language lives here' and tells you nothing
     about where you already are. */
  var SHORT={en:'EN', ru:'RU', he:'HE'};
  /* EVERY PAGE'S OWN LANGUAGE BUTTON, HIDDEN BEFORE IT CAN BE SEEN (Leon, 2026-09-06).
     Two faults, one cause. The globe flashed its pill for an instant on every load, and the
     tree kept one UNDER the menu button - because the old code hid them with an inline
     style from mount(), which runs after DOMContentLoaded (too late to stop the flash) and
     is wiped the moment a page redraws its own chrome (which the tree does). A stylesheet
     cannot be out-raced or redrawn away: it goes in the instant this file is parsed, in the
     head, before the body exists. The list is every local switcher in the app - pills,
     letter rows, the reel's dropdown and its trigger - swept once here, not page by page. */
  var HIDE_SEL='#langBtn,#gbPill,#langsw,#pLang,.langpill,.langsw,.langset,.langmenu,'+
               '[data-act="lang"],[data-langbtn],.lflang-btn';
  function earlyHide(){
    if(document.getElementById('lfLangHide')) return;
    var h=document.head||document.getElementsByTagName('head')[0]; if(!h) return;
    var s=document.createElement('style'); s.id='lfLangHide';
    s.textContent=HIDE_SEL+'{display:none !important;}';
    h.appendChild(s);
  }
  earlyHide();
  function cur(){ try{ return localStorage.getItem('lf_lang')||'en'; }catch(e){ return 'en'; } }
  function css(){
    if(document.getElementById('lfLangCss')) return;
    var s=document.createElement('style'); s.id='lfLangCss';
    /* one switcher per page (Leon 2026-09-06): where this shared button lives,
       any page-local language pill steps aside - no more twin pills. */
    /* Leon 2026-09-06: the pages carry NO language button - only the menu's
       bottom row opens the list. The hidden button still answers the menu's call. */
    var hide=HIDE_SEL+'{display:none !important;}';
    s.textContent=
      '.lflang-btn{position:fixed;top:max(14px,env(safe-area-inset-top));inset-inline-end:16px;z-index:40;'+
      'width:40px;height:40px;border-radius:12px;display:grid;place-items:center;cursor:pointer;'+
      'border:1px solid rgba(255,255,255,.16);background:rgba(10,20,34,.66);color:#f4ead9;'+
      '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}'+
      '.lflang-btn:hover{border-color:rgba(255,255,255,.34)}'+
      '.lflang-btn{font-family:"Azeret Mono",ui-monospace,monospace;font-size:12px;letter-spacing:.08em}'+
      '.lflang-sheet{position:fixed;inset:0;z-index:60;display:none;align-items:flex-end;justify-content:center;'+
      'background:rgba(2,6,14,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}'+
      '.lflang-sheet.on{display:flex}'+
      '.lflang-card{width:100%;max-width:440px;background:#0b1520;border:1px solid rgba(255,255,255,.13);'+
      'border-radius:22px 22px 0 0;padding:16px 16px calc(20px + env(safe-area-inset-bottom));color:#f4ead9}'+
      '.lflang-card button{display:block;width:100%;text-align:start;padding:13px 14px;margin:6px 0;'+
      'border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.03);'+
      'color:#f4ead9;font:inherit;font-size:15px;cursor:pointer}'+
      '.lflang-card button.on{border-color:rgba(243,205,132,.5);background:rgba(243,205,132,.10);color:#f3cd84}';
    s.textContent=(s.textContent||'')+hide; document.head.appendChild(s);
  }
  function sheet(){
    var w=document.createElement('div'); w.className='lflang-sheet';
    var c=document.createElement('div'); c.className='lflang-card';
    LANGS.forEach(function(l){
      var b=document.createElement('button');
      b.textContent=NAMES[l]; if(l===cur()) b.className='on';
      b.onclick=function(){
        try{ localStorage.setItem('lf_lang',l); }catch(e){}
        /* the page redraws itself in the new language; a reload is the honest way to be
           sure every string on it changes, not only the ones somebody remembered to rewire */
        location.reload();
      };
      c.appendChild(b);
    });
    w.appendChild(c);
    w.onclick=function(e){ if(e.target===w) w.classList.remove('on'); };
    document.body.appendChild(w);
    return w;
  }
  function mount(){
    if(!document.body) return;
    /* leave a page that already has its own button exactly as it is */
    /* Leon 2026-09-06: the LIST chooser is the one switcher on EVERY page - local
       pills (already hidden by the rule above) no longer stop it, and their old
       tap-to-cycle behaviour is retired with them. */
    var olds=document.querySelectorAll('[data-act="lang"],#langBtn,#gbPill,[data-langbtn],.langpill');
    for(var oi=0; oi<olds.length; oi++){ try{ olds[oi].style.display='none'; }catch(e){} }
    if(document.querySelector('.lflang-btn')) return;
    css();
    var sh=sheet();
    var b=document.createElement('button');
    b.className='lflang-btn'; b.setAttribute('aria-label','Language');
    b.textContent=SHORT[cur()]||'EN';
    b.onclick=function(){ sh.classList.add('on'); };
    document.body.appendChild(b);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount);
  else mount();
  window.LFLang={ mount:mount, current:cur,
    /* the menu may summon the same list (Leon 2026-09-06) */
    open:function(){ var b=document.querySelector('.lflang-btn'); if(b) b.click(); } };
})();
