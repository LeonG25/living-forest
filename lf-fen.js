/* lf-fen.js v3 — Fen companion. Two-frame layout: page above, fixed forest strip below.
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
    idle:    {src:A+"fen-idle.webm"},
    delight: {src:[A+"fen-delight.webm",A+"fen-nod-big.webm"]},
    jump:    {src:A+"fen-jump.webm"},
    talking: {src:A+"fen-nod-small.webm"},
    earperk: {src:A+"fen-earperk.webm"},
    sleep:   {src:A+"fen-sleep.webm",freeze:1},
    stretch: {src:A+"fen-stretch.webm"},
    wave:    {src:A+"fen-wave.webm"},
    walk:    {src:A+"fen-walk.webm"},
    /* pending — add src when baked */
    stumble: {src:A+"fen-earperk.webm", fb:'idle'},  /* surprised ear-perk stands in for stumble: kind "oh!", never shaming (approved 2026-07-31) */
    entrance:{fb:'walk'},
    walkaway:{fb:'walk'}
  };
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
  var CUE={greeting:'talking',question:'earperk',clue:'talking',right:'delight',wrong:'stumble',streak:'jump',win:'jump',leave:'wave'};
  var CHANCE={question:0.33,clue:0.5};

  function lang(){ try{ var l=localStorage.getItem('lf_lang'); if(l&&D[l])return l; }catch(e){} return 'en'; }
  function mk(t,c){ var e=document.createElement(t); if(c)e.style.cssText=c; return e; }
  function vid(src,c){ var v=mk('video',c); v.muted=1;v.loop=1;v.autoplay=1;v.playsInline=1; v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline',''); v.src=src; return v; }

  function start(){
    var sc=document.querySelector('.screen');
    var host=sc?sc.parentElement:document.body;
    var fixed=(host===document.body);
    if(sc){ sc.style.bottom=STRIP+'px'; sc.style.paddingBottom='0'; }
    else { document.body.style.paddingBottom=STRIP+'px'; }
    var strip=mk('div','position:'+(fixed?'fixed':'absolute')+';left:0;right:0;bottom:0;height:'+STRIP+'px;z-index:5;overflow:hidden;cursor:pointer;opacity:0;transition:opacity .8s;');
    var bg=vid(FOREST,'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;'); bg.playbackRate=0.6;
    var horizon=mk('div','position:absolute;left:0;right:0;top:0;height:42%;background:linear-gradient(to bottom,#080c14 6%,rgba(8,12,20,.4) 55%,transparent);pointer-events:none;');
    var v=vid(clipSrc('idle'),'position:absolute;left:-1%;bottom:0;width:150px;height:150px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.5));pointer-events:none;');
    var say=mk('div','position:absolute;left:41%;right:5%;top:50%;transform:translateY(-50%);font-family:Georgia,serif;font-style:italic;font-size:15px;line-height:1.35;color:#f1eadc;text-shadow:0 1px 5px rgba(0,0,0,.95);opacity:0;transition:opacity .35s;pointer-events:none;');
    strip.appendChild(bg); strip.appendChild(horizon); strip.appendChild(v); strip.appendChild(say); host.appendChild(strip);
    requestAnimationFrame(function(){ strip.style.opacity='1'; });
    bg.play().catch(function(){}); v.play().catch(function(){});
    /* entrance: he walks in from beyond the left edge at gait speed, then sits.
       Linear timing — easing makes his feet slide. Starts after the strip has faded in. */
    (function(){ if(!CLIP.walk.src) return;
      v.style.transition='none'; v.style.transform='translateX(-260px)'; v.style.opacity='0';
      setTimeout(function(){
        try{ cur='entrance'; v.loop=true; v.onended=null; v.src=CLIP.walk.src; v.play().catch(function(){}); }catch(e){ return; }
        v.style.opacity='1';
        requestAnimationFrame(function(){ requestAnimationFrame(function(){
          v.style.transition='transform 2.6s linear'; v.style.transform='translateX(0)';
          setTimeout(function(){ v.style.transition='none'; toIdle(); },2650); }); });
      },700);
    })();

    var cur='idle', sleeping=false;
    function setClip(name, loop, onend){
      var src=clipSrc(name); if(!src) return false;
      var real = (src!==CLIP.idle.src) || name==='idle';
      if(!real){ /* fallback resolves to idle — leave idle running */ if(cur!=='idle'){ toIdle(); } return false; }
      if(v.src.indexOf(src)>=0 && loop) return true;
      var meta=clipMeta(name);
      cur=name; v.loop=!!loop&&!meta.freeze;
      v.onended=meta.freeze?function(){ try{ v.pause(); }catch(e){} }:(onend||null);
      v.onerror=function(){ toIdle(); };
      v.src=src; v.play().catch(function(){});
      return true;
    }
    function toIdle(){ cur='idle'; sleeping=false; v.loop=true; v.onended=null;
      var s=CLIP.idle.src; if(v.src.indexOf(s)<0) v.src=s; v.play().catch(function(){}); }
    function play(name){ setClip(name,false,toIdle); }

    var st;
    function speak(t){ if(!t) return; var l=lang();
      say.dir=(l==='he')?'rtl':'ltr'; say.style.textAlign=(l==='he')?'right':'left';
      say.textContent=t; say.style.opacity='1';
      clearTimeout(st); st=setTimeout(function(){ say.style.opacity='0'; },4600); }

    var ix={};
    function line(cat){ var l=lang(), arr=(D[l]&&D[l][cat])||D.en[cat]; if(!arr||!arr.length) return null;
      ix[cat]=((ix[cat]==null?-1:ix[cat])+1)%arr.length; return arr[ix[cat]]; }

    /* inactivity lifecycle: 10s -> stretch, 20s -> sleep (only with real clips) */
    var t1,t2;
    function alive(){ clearTimeout(t1); clearTimeout(t2);
      if(sleeping){ toIdle(); if(clipSrc('sleep')!==clipSrc('idle')) speak(line('wake')); }
      t1=setTimeout(function(){ if(cur==='idle') play('stretch'); },10000);
      t2=setTimeout(function(){ if(cur==='idle'||cur==='stretch'){ if(setClip('sleep',true)) sleeping=true; } },20000);
    }

    function cue(name,o){ o=o||{}; alive();
      var c=CUE[name]||'talking'; play(c);
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
      react:function(n){ alive(); var m={delight:'delight',jump:'jump',stumble:'stumble'}; play(m[n]||n); },
      idle:toIdle,
      leave:function(cb){ speak(line('leave')); play('wave');
        setTimeout(function(){
          if(CLIP.walk.src){ cur='walkaway'; v.loop=true; v.onended=null; v.src=CLIP.walk.src; v.play().catch(function(){});
            v.style.transition='transform 3.2s linear'; v.style.transform='translateX(120vw)'; }
          setTimeout(function(){ strip.style.opacity='0'; if(cb)setTimeout(cb,850); },1600);
        },2200); }
    };
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
