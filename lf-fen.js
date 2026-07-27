/* lf-fen.js — Fen companion, two-frame layout with a fixed forest strip (his zone).
   Tap the strip and Fen speaks in the open space beside him.
   API: Fen.idle(), Fen.react(name), Fen.say(text). */
(function(){
  if(window.__fen) return; window.__fen=1;
  var A="assets/fen/";
  var CLIP={ idle:A+"fen-idle.webm", delight:A+"fen-delight.webm", jump:A+"fen-jump.webm" };
  var FOREST="https://oabcdrktuikifbormjip.supabase.co/storage/v1/object/public/companion/"+encodeURIComponent("Wood animated bg 9s.mp4");
  var LINES=[
    "Take your time. They're not going anywhere.",
    "Look properly \u2014 you know this one.",
    "Everyone's here. Come and meet them.",
    "Family's a puzzle. Good thing you like those.",
    "Trust your first guess. It's usually right.",
    "Tap a face when you're sure. I'll wait."
  ];
  var STRIP=151;
  function mk(t,c){ var e=document.createElement(t); if(c)e.style.cssText=c; return e; }
  function vid(src,c){ var v=mk('video',c); v.muted=1;v.loop=1;v.autoplay=1;v.playsInline=1; v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline',''); v.src=src; return v; }
  function start(){
    var sc=document.querySelector('.screen');
    var host=sc?sc.parentElement:document.body;
    var fixed=(host===document.body);
    if(sc){ sc.style.bottom=STRIP+'px'; sc.style.paddingBottom='0'; }
    var strip=mk('div','position:'+(fixed?'fixed':'absolute')+';left:0;right:0;bottom:0;height:'+STRIP+'px;z-index:5;overflow:hidden;cursor:pointer;');
    var bg=vid(FOREST,'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;'); bg.playbackRate=0.6;
    var horizon=mk('div','position:absolute;left:0;right:0;top:0;height:42%;background:linear-gradient(to bottom,#080c14 6%,rgba(8,12,20,.4) 55%,transparent);pointer-events:none;');
    var v=vid(CLIP.idle,'position:absolute;left:-1%;bottom:0;width:150px;height:150px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.5));pointer-events:none;');
    var say=mk('div','position:absolute;left:41%;right:5%;top:50%;transform:translateY(-50%);font-family:Georgia,serif;font-style:italic;font-size:15px;line-height:1.35;color:#f1eadc;text-shadow:0 1px 5px rgba(0,0,0,.95);opacity:0;transition:opacity .35s;pointer-events:none;');
    strip.appendChild(bg); strip.appendChild(horizon); strip.appendChild(v); strip.appendChild(say); host.appendChild(strip);
    bg.play().catch(function(){}); v.play().catch(function(){});
    function toIdle(){ v.loop=true; v.onended=null; v.src=CLIP.idle; v.play().catch(function(){}); }
    function play(name){ var u=CLIP[name]; if(!u)return; v.loop=false; v.src=u; v.onended=toIdle; v.play().catch(function(){}); }
    var st;
    function speak(t){ say.textContent=t; say.style.opacity='1'; clearTimeout(st); st=setTimeout(function(){ say.style.opacity='0'; },4600); }
    var li=-1;
    function talk(){ li=(li+1)%LINES.length; speak(LINES[li]); if(CLIP.talking) play('talking'); }
    strip.addEventListener('click', talk);
    window.Fen={ idle:toIdle, react:function(n){ if(CLIP[n]) play(n); }, say:speak };
    setTimeout(function(){ speak(LINES[0]); li=0; }, 900);
    document.addEventListener('pointerdown',function(){ if(v.paused)v.play().catch(function(){}); if(bg.paused)bg.play().catch(function(){}); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
