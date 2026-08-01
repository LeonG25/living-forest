/* The forest breathes behind the pages. Two mounts:
   - a page with a .device frame (the games): the forest lives INSIDE the frame,
     under the atmosphere canvas, and the frame's own paint steps aside;
   - any other page: fixed behind everything; body paint steps aside
     (body backgrounds cover negative-z children — html carries the base coat instead). */
(function(){
  try{ if(matchMedia('(prefers-reduced-motion: reduce)').matches) return; }catch(e){}
  function css(t){ var st=document.createElement('style'); st.textContent=t; document.head.appendChild(st); }
  function video(pos){
    var v=document.createElement('video');
    v.src='assets/bg/forest.mp4'; v.muted=true; v.loop=true; v.autoplay=true;
    v.setAttribute('playsinline',''); v.setAttribute('muted','');
    v.style.cssText=pos+';object-fit:cover;pointer-events:none';
    return v;
  }
  function go(){
    var dev=document.querySelector('.device');
    if(dev){
      css('.device{background:transparent!important} .device .atmo{opacity:.45} html,body{background:#050b07!important}');
      var v=video('position:absolute;inset:0;width:100%;height:100%;z-index:0;opacity:.55');
      var shade=document.createElement('div');
      shade.style.cssText='position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(130% 95% at 50% 0%, rgba(4,7,14,.35), rgba(4,7,14,.8) 80%)';
      dev.prepend(shade); dev.prepend(v); v.play().catch(function(){});
    } else {
      css('html{background:#04070e!important} body{background:transparent!important}');
      var v2=video('position:fixed;inset:0;width:100vw;height:100dvh;z-index:-2;opacity:.5');
      var shade2=document.createElement('div');
      shade2.style.cssText='position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(130% 95% at 50% 0%, rgba(4,7,14,.30), rgba(4,7,14,.74) 78%)';
      document.body.prepend(shade2); document.body.prepend(v2); v2.play().catch(function(){});
    }
  }
  if(document.body) go(); else document.addEventListener('DOMContentLoaded',go);
})();
