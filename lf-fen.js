/* lf-fen.js — Fen companion. Plays PRE-KEYED transparent webm clips (baked once,
   server-side). Also reserves bottom space so page content clears his corner.
   API: window.Fen.idle() ; window.Fen.react('delight'|'jump'). */
(function(){
  if(window.__fen) return; window.__fen=1;
  var A="assets/fen/";
  var CLIP={ idle:A+"fen-idle.webm", delight:A+"fen-delight.webm", jump:A+"fen-jump.webm" };
  function start(){
    // reserve a clear band at the bottom so nothing tappable sits under him
    var sc=document.querySelector('.screen');
    if(sc){ var cur=parseInt(getComputedStyle(sc).paddingBottom)||0; if(cur<150) sc.style.paddingBottom=(cur+165)+'px'; }
    var v=document.createElement('video');
    v.muted=true; v.loop=true; v.autoplay=true; v.playsInline=true;
    v.setAttribute('playsinline',''); v.setAttribute('webkit-playsinline','');
    v.style.cssText='position:fixed;left:0;bottom:0;width:38vw;max-width:150px;z-index:30;pointer-events:none;filter:drop-shadow(0 5px 9px rgba(0,0,0,.5));';
    v.src=CLIP.idle; document.body.appendChild(v); v.play().catch(function(){});
    function toIdle(){ v.loop=true; v.onended=null; v.src=CLIP.idle; v.play().catch(function(){}); }
    function play(name){ var u=CLIP[name]; if(!u) return; v.loop=false; v.src=u; v.onended=toIdle; v.play().catch(function(){}); }
    window.Fen={ idle:toIdle, react:function(n){ if(CLIP[n]) play(n); } };
    document.addEventListener('pointerdown',function(){ if(v.paused) v.play().catch(function(){}); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
