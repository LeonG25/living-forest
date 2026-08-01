/* The forest breathes behind the quiet pages. One include; the video sits under
   everything, a soft shade keeps the words readable. Reduced motion: no video. */
(function(){
  try{ if(matchMedia('(prefers-reduced-motion: reduce)').matches) return; }catch(e){}
  function go(){
    var v=document.createElement('video');
    v.src='assets/bg/forest.mp4'; v.muted=true; v.loop=true; v.autoplay=true;
    v.setAttribute('playsinline',''); v.setAttribute('muted','');
    v.style.cssText='position:fixed;inset:0;width:100vw;height:100vh;object-fit:cover;z-index:-2;opacity:.5;pointer-events:none';
    var shade=document.createElement('div');
    shade.style.cssText='position:fixed;inset:0;background:radial-gradient(130% 95% at 50% 0%, rgba(4,7,14,.30), rgba(4,7,14,.74) 78%);z-index:-1;pointer-events:none';
    document.body.prepend(shade); document.body.prepend(v);
    v.play().catch(function(){});
  }
  if(document.body) go(); else document.addEventListener('DOMContentLoaded',go);
})();
