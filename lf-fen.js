/* lf-fen.js v4 — Fen companion. Two-frame layout: page above, fixed forest strip below.
   Clip registry with fallbacks: pending clips fall back to idle until baked — when a
   clip lands, add its src to CLIP and every page picks it up.
   API:
     Fen.cue(name, o)  — situation cue: greeting|question|clue|right|wrong|streak|win|leave
                         o={quiet:true} animation only · o={say:'text'} override line
     Fen.say(text)     — speak an arbitrary line (data-aware lines come from the page)
     Fen.react(clip)   — legacy: play a clip by name (no speech)
     Fen.idle()        — return to idle */
(function(){
  if(window.__fen) return; window.__fen=1;
  var A="assets/fen/";
  var CLIP={
    idle:     {src:A+"fen-idle-new.webm",      fb:null},
    idleB:    {src:A+"fen-light-delight.webm", fb:'idle'},
    yawn:     {src:A+"fen-yawn-stretch.webm",  fb:'idle'},
    sleep:    {src:A+"fen-sleep.webm",         fb:'idle', freeze:1},
    entrance: {src:A+"fen-entrance.webm",      fb:'idle'},
    nodBig:   {src:A+"fen-nod-big.webm",       fb:'idle'},
    nodSmall: {src:A+"fen-nod-small.webm",     fb:'idle'},
    jump:     {src:A+"fen-jump.webm",          fb:'idle'},
    lightDelight:{src:A+"fen-light-delight.webm", fb:'idle'},
    surprised:{src:A+"fen-surprised.webm",     fb:'idle'},
    notCorrect:{src:A+"fen-not-correct.webm",  fb:'idle'},
    talking:  {src:A+"fen-talking.webm",       fb:'idle'},
    waveWalk: {src:A+"fen-wave-walk.webm",     fb:null}
  };
  var POOL_RIGHT=['nodBig','jump','lightDelight','nodSmall'];
  var POOL_WRONG=['surprised','notCorrect','talking'];
  function clipSrc(n){ var c=CLIP[n], g=0; while(c && !c.src && c.fb && g++<5) c=CLIP[c.fb];
    if(!c||!c.src) return null; var s=c.src;
    if(Object.prototype.toString.call(s)==='[object Array]') s=s[Math.floor(Math.random()*s.length)];
    return s; }
  function clipMeta(n){ var c=CLIP[n], g=0; while(c && !c.src && c.fb && g++<5) c=CLIP[c.fb]; return c||{}; }
  var FOREST="https://oabcdrktuikifbormjip.supabase.co/storage/v1/object/public/companion/"+encodeURIComponent("Wood animated bg 9s.mp4");
  var STRIP=151;

  /* speech dictionary — §0 voice law: present tense, meet/know, never remember/preserve */
  var D={
    en:{
      greeting:["There you are. Come meet your people.","Right \u2014 who do we know today?","Everyone's here. Let's find them."],
      idle:["Take your time. They're not going anywhere.","Trust your first guess \u2014 it's usually right.","Look properly. You know this one.","Family's a puzzle. Good thing you like those."],
      question:["Here's someone.","This one \u2014 do you know them?","Ah, you'll like this one."],
      clue:["Listen \u2014 the details point somewhere.","There's a thread here. Follow it."],
      right:["Yes. You actually know them.","That's them. Of course it is.","See? You knew."],
      wrong:["Not them \u2014 but you're closer than you think.","Interesting theory.","Try again. No hurry."],
      streak:["That's the whole row. Well done.","Look at you \u2014 you know your family."],
      win:["That's everyone. Beautifully done.","You know your people. The forest's brighter for it."],
      wake:["Oh \u2014 you're back."],
      leave:["Come back soon. They'll keep.","Off you go. I'll be here."]
    },
    ru:{
      greeting:["\u0410, \u0432\u043e\u0442 \u0438 \u0442\u044b. \u0418\u0434\u0451\u043c \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438.","\u041d\u0443 \u0447\u0442\u043e \u2014 \u043a\u043e\u0433\u043e \u043c\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0437\u043d\u0430\u0435\u043c?","\u0412\u0441\u0435 \u0437\u0434\u0435\u0441\u044c. \u0414\u0430\u0432\u0430\u0439 \u0438\u0445 \u043d\u0430\u0439\u0434\u0451\u043c."],
      idle:["\u041d\u0435 \u0441\u043f\u0435\u0448\u0438. \u041e\u043d\u0438 \u043d\u0438\u043a\u0443\u0434\u0430 \u043d\u0435 \u0434\u0435\u043d\u0443\u0442\u0441\u044f.","\u0414\u043e\u0432\u0435\u0440\u044c\u0441\u044f \u043f\u0435\u0440\u0432\u043e\u0439 \u0434\u043e\u0433\u0430\u0434\u043a\u0435 \u2014 \u043e\u043d\u0430 \u043e\u0431\u044b\u0447\u043d\u043e \u0432\u0435\u0440\u043d\u0430.","\u041f\u0440\u0438\u0441\u043c\u043e\u0442\u0440\u0438\u0441\u044c. \u0422\u044b \u0437\u043d\u0430\u0435\u0448\u044c \u044d\u0442\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430.","\u0421\u0435\u043c\u044c\u044f \u2014 \u044d\u0442\u043e \u043f\u0430\u0437\u043b. \u0425\u043e\u0440\u043e\u0448\u043e, \u0447\u0442\u043e \u0442\u044b \u0438\u0445 \u043b\u044e\u0431\u0438\u0448\u044c."],
      question:["\u0412\u043e\u0442 \u043a\u0442\u043e-\u0442\u043e.","\u041d\u0443-\u043a\u0430 \u2014 \u0442\u044b \u0435\u0433\u043e \u0437\u043d\u0430\u0435\u0448\u044c?","\u041e, \u044d\u0442\u043e\u0442 \u0442\u0435\u0431\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f."],
      clue:["\u0421\u043b\u0443\u0448\u0430\u0439 \u2014 \u0434\u0435\u0442\u0430\u043b\u0438 \u043a\u0443\u0434\u0430-\u0442\u043e \u0432\u0435\u0434\u0443\u0442.","\u0417\u0434\u0435\u0441\u044c \u0435\u0441\u0442\u044c \u043d\u0438\u0442\u044c. \u0418\u0434\u0438 \u043f\u043e \u043d\u0435\u0439."],
      right:["\u0414\u0430. \u0422\u044b \u0438 \u043f\u0440\u0430\u0432\u0434\u0430 \u0438\u0445 \u0437\u043d\u0430\u0435\u0448\u044c.","\u042d\u0442\u043e \u043e\u043d\u0438. \u041a\u043e\u043d\u0435\u0447\u043d\u043e.","\u0412\u0438\u0434\u0438\u0448\u044c? \u0422\u044b \u0436\u0435 \u0438\u0445 \u0437\u043d\u0430\u0435\u0448\u044c."],
      wrong:["\u041d\u0435 \u043e\u043d\u0438 \u2014 \u043d\u043e \u0442\u044b \u0431\u043b\u0438\u0436\u0435, \u0447\u0435\u043c \u0434\u0443\u043c\u0430\u0435\u0448\u044c.","\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f.","\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0451. \u0421\u043f\u0435\u0448\u0438\u0442\u044c \u043d\u0435\u043a\u0443\u0434\u0430."],
      streak:["\u0426\u0435\u043b\u044b\u0439 \u0440\u044f\u0434 \u043f\u043e\u0434\u0440\u044f\u0434. \u041c\u043e\u043b\u043e\u0434\u0435\u0446.","\u0421\u043c\u043e\u0442\u0440\u0438-\u043a\u0430 \u2014 \u0442\u044b \u0437\u043d\u0430\u0435\u0448\u044c \u0441\u0432\u043e\u044e \u0441\u0435\u043c\u044c\u044e."],
      win:["\u0412\u043e\u0442 \u0438 \u0432\u0441\u0435. \u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e.","\u0422\u044b \u0437\u043d\u0430\u0435\u0448\u044c \u0441\u0432\u043e\u0438\u0445. \u0418 \u043b\u0435\u0441 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0441\u0432\u0435\u0442\u043b\u0435\u0435."],
      wake:["\u041e \u2014 \u0441\u043d\u043e\u0432\u0430 \u0442\u044b."],
      leave:["\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044f. \u041e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0437\u0434\u0435\u0441\u044c.","\u0418\u0434\u0438. \u0410 \u044f \u043f\u043e\u0434\u043e\u0436\u0434\u0443."]
    },
    he:{
      greeting:["\u05d4\u05e0\u05d4 \u05d0\u05ea\u05dd. \u05d1\u05d5\u05d0\u05d5 \u05dc\u05d4\u05db\u05d9\u05e8 \u05d0\u05ea \u05d4\u05de\u05e9\u05e4\u05d7\u05d4.","\u05e0\u05d5 \u2014 \u05d0\u05ea \u05de\u05d9 \u05d0\u05e0\u05d7\u05e0\u05d5 \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05d4\u05d9\u05d5\u05dd?","\u05db\u05d5\u05dc\u05dd \u05db\u05d0\u05df. \u05d1\u05d5\u05d0\u05d5 \u05e0\u05de\u05e6\u05d0 \u05d0\u05d5\u05ea\u05dd."],
      idle:["\u05e7\u05d7\u05d5 \u05d0\u05ea \u05d4\u05d6\u05de\u05df. \u05d4\u05dd \u05dc\u05d0 \u05d4\u05d5\u05dc\u05db\u05d9\u05dd \u05dc\u05e9\u05d5\u05dd \u05de\u05e7\u05d5\u05dd.","\u05e1\u05de\u05db\u05d5 \u05e2\u05dc \u05d4\u05e0\u05d9\u05d7\u05d5\u05e9 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df \u2014 \u05d4\u05d5\u05d0 \u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc \u05e0\u05db\u05d5\u05df.","\u05ea\u05e1\u05ea\u05db\u05dc\u05d5 \u05d8\u05d5\u05d1. \u05d0\u05ea\u05dd \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05d0\u05ea \u05d6\u05d4.","\u05de\u05e9\u05e4\u05d7\u05d4 \u05d4\u05d9\u05d0 \u05e4\u05d0\u05d6\u05dc. \u05d8\u05d5\u05d1 \u05e9\u05d0\u05ea\u05dd \u05d0\u05d5\u05d4\u05d1\u05d9\u05dd \u05e4\u05d0\u05d6\u05dc\u05d9\u05dd."],
      question:["\u05d4\u05e0\u05d4 \u05de\u05d9\u05e9\u05d4\u05d5.","\u05d6\u05d4 \u2014 \u05d0\u05ea\u05dd \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05d0\u05d5\u05ea\u05d5?","\u05d0\u05d4, \u05d0\u05ea \u05d6\u05d4 \u05ea\u05d0\u05d4\u05d1\u05d5."],
      clue:["\u05ea\u05e7\u05e9\u05d9\u05d1\u05d5 \u2014 \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd \u05de\u05e6\u05d1\u05d9\u05e2\u05d9\u05dd \u05dc\u05de\u05e7\u05d5\u05dd \u05de\u05e1\u05d5\u05d9\u05dd.","\u05d9\u05e9 \u05db\u05d0\u05df \u05d7\u05d5\u05d8. \u05dc\u05db\u05d5 \u05d0\u05d7\u05e8\u05d9\u05d5."],
      right:["\u05db\u05df. \u05d0\u05ea\u05dd \u05d1\u05d0\u05de\u05ea \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05d0\u05d5\u05ea\u05dd.","\u05d6\u05d4 \u05d4\u05dd. \u05d1\u05e8\u05d5\u05e8 \u05e9\u05d6\u05d4 \u05d4\u05dd.","\u05e8\u05d5\u05d0\u05d9\u05dd? \u05d9\u05d3\u05e2\u05ea\u05dd."],
      wrong:["\u05dc\u05d0 \u05d4\u05dd \u2014 \u05d0\u05d1\u05dc \u05d0\u05ea\u05dd \u05e7\u05e8\u05d5\u05d1\u05d9\u05dd \u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05e0\u05d3\u05de\u05d4 \u05dc\u05db\u05dd.","\u05ea\u05d9\u05d0\u05d5\u05e8\u05d9\u05d4 \u05de\u05e2\u05e0\u05d9\u05d9\u05e0\u05ea.","\u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1. \u05d0\u05d9\u05df \u05dc\u05d7\u05e5."],
      streak:["\u05db\u05dc \u05d4\u05e9\u05d5\u05e8\u05d4 \u05d1\u05e8\u05e6\u05e3. \u05db\u05dc \u05d4\u05db\u05d1\u05d5\u05d3.","\u05ea\u05e8\u05d0\u05d5 \u05d0\u05ea\u05db\u05dd \u2014 \u05d0\u05ea\u05dd \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05d0\u05ea \u05d4\u05de\u05e9\u05e4\u05d7\u05d4 \u05e9\u05dc\u05db\u05dd."],
      win:["\u05d6\u05d4 \u05db\u05d5\u05dc\u05dd. \u05e0\u05d4\u05d3\u05e8.","\u05d0\u05ea\u05dd \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05d0\u05ea \u05d4\u05d0\u05e0\u05e9\u05d9\u05dd \u05e9\u05dc\u05db\u05dd. \u05d4\u05d9\u05e2\u05e8 \u05de\u05d5\u05d0\u05e8 \u05d9\u05d5\u05ea\u05e8 \u05d1\u05d6\u05db\u05d5\u05ea\u05db\u05dd."],
      wake:["\u05d0\u05d4 \u2014 \u05d7\u05d6\u05e8\u05ea\u05dd."],
      leave:["\u05ea\u05d7\u05d6\u05e8\u05d5 \u05d1\u05e7\u05e8\u05d5\u05d1. \u05d4\u05dd \u05d9\u05d7\u05db\u05d5.","\u05dc\u05db\u05d5. \u05d0\u05e0\u05d9 \u05db\u05d0\u05df."]
    }
  };
  var CUE={greeting:'talking',question:'surprised',clue:'talking',right:'RIGHT',wrong:'WRONG',streak:'jump',win:'jump',leave:'talking'};
  var CHANCE={question:0.33,clue:0.5};

  function lang(){ try{ var l=localStorage.getItem('lf_lang'); if(l&&D[l])return l; }catch(e){} return 'en'; }
  function mk(t,c){ var e=document.createElement(t); if(c)e.style.cssText=c; return e; }
  function vid(src,c){ var v=mk('video',c); v.muted=1;v.loop=1;v.autoplay=1;v.playsInline=1; v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline',''); v.src=src; return v; }

  function start(){
    if(window.__lfFenMounted) return;   /* one fox per page — re-inits never replay the entrance */
    window.__lfFenMounted=1;
    var sc=document.querySelector('.screen');
    var host=sc?sc.parentElement:document.body;
    var fixed=(host===document.body);
    if(sc){ sc.style.bottom=STRIP+'px'; sc.style.paddingBottom='0';
      /* content dissolves toward the strip instead of being sliced by it */
      var FADE='linear-gradient(to bottom, #000 calc(100% - 30px), transparent 100%)';
      sc.style.webkitMaskImage=FADE; sc.style.maskImage=FADE; }
    else { document.body.style.paddingBottom=STRIP+'px'; }
    var strip=mk('div','position:'+(fixed?'fixed':'absolute')+';left:0;right:0;bottom:0;height:'+STRIP+'px;z-index:5;overflow:hidden;cursor:pointer;opacity:0;transition:opacity .8s;');
    strip.id='lfFenStrip';
    var PAGE_FOREST=!!document.querySelector('script[src^="lf-bg"]');
    var bg=vid(FOREST,'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;'); bg.playbackRate=0.6;
    var horizon=mk('div','position:absolute;left:0;right:0;top:0;height:42%;background:linear-gradient(to bottom,#080c14 6%,rgba(8,12,20,.4) 55%,transparent);pointer-events:none;');
    if(PAGE_FOREST){ bg.style.display='none'; bg.removeAttribute('src'); horizon.style.display='none'; }
    /* her ember light pools beneath her — the warmth around the fox reads as hers */
    var ember=mk('div','position:absolute;left:-8px;bottom:-10px;width:230px;height:150px;pointer-events:none;background:radial-gradient(60% 72% at 38% 80%, rgba(126,90,46,.34), transparent 72%);');
    var BASEF='drop-shadow(0 4px 8px rgba(0,0,0,.5))';
    var PHASE='pre', PEND=null;
    function tween(ms,fn,done){ var t0=performance.now();
      (function st(){ var k=Math.min(1,(performance.now()-t0)/ms);
        fn(k); if(k<1) requestAnimationFrame(st); else if(done) done(); })(); }            /* pre -> entrance -> live */
    window.__fenlog=[]; function flog(x){ try{ window.__fenlog.push(Date.now()%100000+' '+x); }catch(e){} }
    var v=vid(clipSrc('idle'),'position:absolute;left:-1%;bottom:0;width:150px;height:150px;filter:'+BASEF+';pointer-events:none;opacity:0;');
    try{ v.autoplay=false; v.pause(); v.removeAttribute('src'); }catch(e){}
    var vb=vid(clipSrc('idle'),'position:absolute;left:-1%;bottom:0;width:150px;height:150px;filter:'+BASEF+';pointer-events:none;opacity:0;');
    try{ vb.autoplay=false; vb.pause(); }catch(e){}
    var say=mk('div','position:absolute;left:41%;right:5%;top:50%;transform:translateY(-50%);font-family:Georgia,serif;font-style:italic;font-size:15px;line-height:1.35;color:#f1eadc;text-shadow:0 1px 5px rgba(0,0,0,.95);opacity:0;transition:opacity .35s;pointer-events:none;');
    strip.appendChild(bg); strip.appendChild(horizon); strip.appendChild(ember); strip.appendChild(v); strip.appendChild(vb); strip.appendChild(say); host.appendChild(strip);
    requestAnimationFrame(function(){ strip.style.opacity='1'; });
    bg.play().catch(function(){}); v.play().catch(function(){});
    /* entrance: he walks in from beyond the left edge at gait speed, then sits.
       Linear timing — easing makes his feet slide. Starts after the strip has faded in. */
    /* The opening is a strict phase machine:
       PRE (2s of just the forest) -> ENTRANCE (the walk-in clip, whole) -> LIVE.
       Cues raised during PRE/ENTRANCE wait; the last one plays after she settles. */
    (function(){
      function goLive(){ if(PHASE==='live') return; PHASE='live'; flog('live');
        var p=PEND; PEND=null;
        if(p){ setTimeout(function(){ setClip(p[0],p[1],p[2]); },300); }
        else { toIdle(); } }
      if(!clipSrc('entrance')){ flog('no-entrance'); PHASE='live'; toIdle(); return; }
      setTimeout(function(){
        PHASE='entrance'; flog('entrance-start');
        try{
          cur='entrance'; v.loop=false;
          v.onended=function(){ flog('entrance-ended'); goLive(); };
          v.onerror=function(){ flog('entrance-error'); goLive(); };
          v.src=clipSrc('entrance'); v.play().catch(function(){ flog('entrance-playfail'); goLive(); });
        }catch(e){ flog('entrance-throw'); goLive(); return; }
        v.addEventListener('playing', function(){ flog('entrance-playing'); v.style.opacity='1'; }, {once:true});
        setTimeout(function(){ if(PHASE==='entrance'&&v.paused){ flog('entrance-stall'); goLive(); } }, 3500);
        setTimeout(function(){ if(PHASE==='entrance'){ flog('entrance-overrun'); goLive(); } }, 12000);
      },2000);
    })();

    var cur='idle', sleeping=false, BUSY=false, QUE=null;
    var lastPick={};
    function pickFrom(pool){ var c=pool.filter(function(n){ return n!==lastPick[pool[0]]; });
      var n=c[Math.floor(Math.random()*c.length)]||pool[0]; lastPick[pool[0]]=n; return n; }
    function clearEntranceMask(){ if(v.style.maskImage||v.style.webkitMaskImage){ v.style.webkitMaskImage=''; v.style.maskImage=''; v.style.filter=BASEF; } }

    /* every clip plays whole. idle clips are interruptible by reactions;
       reaction/entrance/farewell clips are not — later requests wait, last one wins. */
    function setClip(name, loop, onend, uninterruptible){
      var src=clipSrc(name); if(!src) return false;
      if(PHASE!=='live'){ PEND=[name,loop,onend,uninterruptible]; flog('pend '+name); return true; }
      if(BUSY){ QUE=[name,loop,onend,uninterruptible]; flog('queue '+name); return true; }
      var meta=clipMeta(name);
      clearEntranceMask();
      cur=name;
      if(uninterruptible){ BUSY=true; }
      xfade(src, !!loop&&!meta.freeze, function(){
        if(uninterruptible){ BUSY=false; }
        var q=QUE; QUE=null;
        if(q){ setClip(q[0],q[1],q[2],q[3]); }
        else if(onend){ onend(); }
      }, meta.freeze);
      return true;
    }

    /* the single doorway: every clip change blurs in through the buffer */
    function xfade(src, loop, onend, freeze){ flog('xfade '+src.split('/').pop());
      vb.loop=loop;
      vb.onended=null; vb.onerror=function(){ if(src!==clipSrc('idle')) toIdle(); };
      vb.style.opacity='0'; vb.style.filter=BASEF+' blur(9px)';
      vb.src=src; vb.play().catch(function(){});
      var done=false;
      function h(){ if(done) return; done=true;
        tween(340, function(k){
          vb.style.opacity=String(k);
          vb.style.filter=BASEF+' blur('+(9*(1-k)).toFixed(1)+'px)';
          v.style.opacity=String(1-k);
        }, function(){
          try{ v.pause(); }catch(e){}
          var t=v; v=vb; vb=t;
          v.onended=freeze?function(){ try{ v.pause(); }catch(e){} }:(onend||null);
          if(freeze&&v.ended){ try{ v.pause(); }catch(e){} }
        }); }
      vb.addEventListener('playing', h, {once:true});
      setTimeout(h, 900);
    }
    /* IDLE ROTATION per spec: idle(new) then light delight, alternating, full length each */
    var rotFlip=false;
    function rotate(){ if(BUSY||sleeping||PHASE!=='live') return;
      rotFlip=!rotFlip;
      var name=rotFlip?'idle':'idleB';
      cur=name;
      xfade(clipSrc(name), false, function(){ if(cur===name&&!BUSY&&!sleeping) rotate(); }, false);
    }
    function toIdle(){ sleeping=false; BUSY=false; rotate(); }
    function play(name){ setClip(name,false,toIdle,true); }

    var st;
    function speak(t){ if(!t) return; var l=lang();
      say.dir=(l==='he')?'rtl':'ltr'; say.style.textAlign=(l==='he')?'right':'left';
      say.textContent=t; say.style.opacity='1';
      clearTimeout(st); st=setTimeout(function(){ say.style.opacity='0'; },4600); }

    var ix={};
    function line(cat){ var l=lang(), arr=(D[l]&&D[l][cat])||D.en[cat]; if(!arr||!arr.length) return null;
      ix[cat]=((ix[cat]==null?-1:ix[cat])+1)%arr.length; return arr[ix[cat]]; }

    /* inactivity per spec: 12s -> yawn+stretch (whole), 24s -> sleep (held) */
    var t1,t2;
    function alive(){ clearTimeout(t1); clearTimeout(t2);
      if(sleeping){ sleeping=false; toIdle(); if(clipSrc('sleep')!==clipSrc('idle')) speak(line('wake')); }
      t1=setTimeout(function(){ if(!BUSY&&!sleeping){ setClip('yawn',false,toIdle,true); } },12000);
      t2=setTimeout(function(){ if(!BUSY||cur==='yawn'){ BUSY=false; if(setClip('sleep',true,null,false)) sleeping=true; } },24000);
    }

    function cue(name,o){ o=o||{}; alive();
      var c=CUE[name]||'talking';
      if(c==='RIGHT') c=pickFrom(POOL_RIGHT);
      else if(c==='WRONG') c=pickFrom(POOL_WRONG);
      play(c);
      if(o.quiet) return;
      if(o.say){ speak(o.say); return; }
      var p=CHANCE[name]; if(p!=null && Math.random()>p) return;
      speak(line(name));
    }

    var greeted=false;
    setTimeout(function(){ if(!greeted){ greeted=true; cue('greeting'); } },900);

    strip.addEventListener('click', function(){ alive(); play('talking'); speak(line('idle')); });
    document.addEventListener('pointerdown',function(){ alive();
      if(v.paused)v.play().catch(function(){}); if(bg.paused)bg.play().catch(function(){}); });
    alive();

    window.Fen={
      cue:cue,
      say:function(t){ alive(); play('talking'); speak(t); },
      react:function(n){ alive(); var m={delight:'lightDelight',jump:'jump',stumble:'notCorrect',stretch:'yawn'}; play(m[n]||n); },
      idle:toIdle,
      offer:function(text, yesLabel, noLabel, cb){ alive(); play('talking'); speak(text);
        var old=document.getElementById('lfFenOffer'); if(old) old.remove();
        var box=mk('div','position:absolute;left:41%;bottom:10px;display:flex;gap:8px;z-index:7;');
        box.id='lfFenOffer';
        function chip(label,primary){ var b=document.createElement('button');
          b.textContent=label;
          b.style.cssText='border-radius:999px;padding:7px 15px;font-size:13px;cursor:pointer;font-family:inherit;'+
            (primary?'border:1px solid #e8955c;color:#ffd9b8;background:rgba(232,149,92,.16);'
                    :'border:1px solid rgba(143,163,184,.5);color:#8fa3b8;background:none;');
          return b; }
        var y=chip(yesLabel||'Come along',true), n2=chip(noLabel||'Not now',false);
        y.onclick=function(){ box.remove(); if(cb) cb(true); };
        n2.onclick=function(){ box.remove(); if(cb) cb(false); };
        box.appendChild(y); box.appendChild(n2); strip.appendChild(box);
      },
      leave:function(cb){
        if(PHASE!=='live'){ if(cb)cb(); return; }
        PHASE='leaving'; flog('leave-start'); speak(line('leave'));
        var src=clipSrc('waveWalk');
        function fade(){ flog('leave-gone');
          tween(650, function(k){ strip.style.opacity=String(1-k); }, function(){ if(cb)cb(); }); }
        if(!src){ fade(); return; }
        xfade(src, false, fade, false);
        setTimeout(function(){ if(PHASE==='leaving'){ flog('leave-overrun'); fade(); } }, 9000);
      }
    };
    function flogHas(x){ try{ return (window.__fenlog||[]).some(function(l){ return l.indexOf(x)>=0; }); }catch(e){ return false; } }
    /* walking away from the page: the back control waits for her departure */
    document.addEventListener('click', function(e){
      var b=e.target&&e.target.closest&&e.target.closest('[data-act="back"]');
      if(!b||window.__fenLeft) return;
      if(PHASE!=='live'){ return; }          /* mid-entrance: leave without ceremony */
      e.preventDefault(); e.stopImmediatePropagation();
      window.Fen.leave(function(){ window.__fenLeft=1; b.click(); });
    }, true);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
