/* lf-fen.js — Fen companion, two-frame layout.
   Bottom: a FIXED forest strip (Fen's zone) that never scrolls.
   Top: the page frame, shrunk to end at the strip — so content never crosses into his space.
   Fen is a pre-keyed transparent webm sitting in the strip. API: Fen.idle(), Fen.react(name). */
(function(){
  if(window.__fen) return; window.__fen=1;
  var A="assets/fen/";
  var CLIP={ idle:A+"fen-idle.webm", delight:A+"fen-delight.webm", jump:A+"fen-jump.webm" };
  var FOREST="https://oabcdrktuikifbormjip.supabase.co/storage/v1/object/public/companion/"+encodeURIComponent("Wood animated bg 9s.mp4");
  var STRIP=168;
  function mk(t,c){ var e=document.createElement(t); if(c)e.style.cssText=c; return e; }
  function vid(src,c){ var v=mk('video',c); v.muted=1;v.loop=1;v.autoplay=1;v.playsInline=1; v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline',''); v.src=src; return v; }
  function start(){
    var sc=document.querySelector('.screen');
    var host=sc?sc.parentElement:document.body;
    var fixed=(host===document.body);
    if(sc){ sc.style.bottom=STRIP+'px'; sc.style.paddingBottom='0'; }   // page frame ends at strip top
    var strip=mk('div','position:'+(fixed?'fixed':'absolute')+';left:0;right:0;bottom:0;height:'+STRIP+'px;z-index:5;overflow:hidden;pointer-events:none;');
    var bg=vid(FOREST,'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;'); bg.playbackRate=0.6;
    var horizon=mk('div','position:absolute;left:0;right:0;top:0;height:42%;background:linear-gradient(to bottom,#080c14 6%,rgba(8,12,20,.4) 55%,transparent);');
    var v=vid(CLIP.idle,'position:absolute;left:-1%;bottom:0;width:150px;height:150px;filter:drop-shadow(0 4px 8px rgba(0,0,0,.5));');
    strip.appendChild(bg); strip.appendChild(horizon); strip.appendChild(v); host.appendChild(strip);
    bg.play().catch(function(){}); v.play().catch(function(){});
    function toIdle(){ v.loop=true; v.onended=null; v.src=CLIP.idle; v.play().catch(function(){}); }
    function play(name){ var u=CLIP[name]; if(!u)return; v.loop=false; v.src=u; v.onended=toIdle; v.play().catch(function(){}); }
    window.Fen={ idle:toIdle, react:function(n){ if(CLIP[n]) play(n); } };
    document.addEventListener('pointerdown',function(){ if(v.paused)v.play().catch(function(){}); if(bg.paused)bg.play().catch(function(){}); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
