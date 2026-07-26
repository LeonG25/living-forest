/* lf-fen.js — Fen the forest companion. Loads green clips from Supabase, keys them
   in the browser (CORS-clean), and drops him in the game screen's corner.
   API: window.Fen.idle() ; window.Fen.react('delight'|'jump'|...) */
(function(){
  if(window.__fen) return; window.__fen=1;
  var B="https://oabcdrktuikifbormjip.supabase.co/storage/v1/object/public/companion/";
  function U(n){ return B+encodeURIComponent(n); }
  var CLIP={ idle:"Fox - idle, green bg.mp4", delight:"Fox - light delight, green bg.mp4", jump:"Fox - jump, green bg.mp4" };
  function start(){
    var host=document.querySelector('.screen')||document.body;
    if(getComputedStyle(host).position==='static') host.style.position='relative';
    var wrap=document.createElement('div');
    wrap.style.cssText='position:absolute;left:-5%;bottom:0;width:44%;max-width:210px;z-index:6;pointer-events:none;aspect-ratio:1/1;';
    var pool=document.createElement('div');
    pool.style.cssText='position:absolute;left:6%;right:6%;bottom:1%;height:24%;border-radius:50%;background:radial-gradient(ellipse at 50% 60%,rgba(6,10,14,.55),transparent 70%);filter:blur(7px);';
    var cv=document.createElement('canvas'); var SZ=340; cv.width=cv.height=SZ;
    cv.style.cssText='position:relative;width:100%;height:100%;filter:drop-shadow(0 6px 10px rgba(0,0,0,.45));';
    wrap.appendChild(pool); wrap.appendChild(cv); host.appendChild(wrap);
    var fv=document.createElement('video'); fv.crossOrigin='anonymous'; fv.muted=true; fv.playsInline=true;
    fv.setAttribute('playsinline',''); fv.setAttribute('webkit-playsinline','');
    var ctx=cv.getContext('2d',{willReadFrequently:true});
    var off=document.createElement('canvas'); off.width=off.height=SZ; var octx=off.getContext('2d',{willReadFrequently:true});
    var Thi=55,Tlo=20,bad=false;
    function measure(){ try{ octx.drawImage(fv,0,0,SZ,SZ); var d=octx.getImageData(0,0,SZ,SZ).data,g=[],x,y,i;
      for(y=0;y<SZ;y+=6)for(x=0;x<SZ;x+=6){ if(x>SZ*0.12&&x<SZ*0.88&&y>SZ*0.12&&y<SZ*0.88)continue; i=(y*SZ+x)*4; g.push(d[i+1]-Math.max(d[i],d[i+2])); }
      g.sort(function(a,b){return a-b;}); var m=g[g.length>>1]||60; Thi=Math.max(16,m*0.78); Tlo=Math.max(7,m*0.35);
    }catch(e){ bad=true; } }
    function loop(){ if(!bad&&fv.readyState>=2){ try{ octx.drawImage(fv,0,0,SZ,SZ); var img=octx.getImageData(0,0,SZ,SZ),d=img.data,i,r,g,b,mx,gn,a;
      for(i=0;i<d.length;i+=4){ r=d[i];g=d[i+1];b=d[i+2];mx=r>b?r:b;gn=g-mx; a=(Thi-gn)/(Thi-Tlo); a=a<0?0:(a>1?1:a); if(g>mx)d[i+1]=mx; d[i+3]=a*255; }
      ctx.putImageData(img,0,0);}catch(e){ bad=true; } } requestAnimationFrame(loop); }
    function play(name,loopit){ fv.loop=!!loopit; fv.src=U(CLIP[name]||CLIP.idle);
      fv.onloadeddata=function(){ measure(); fv.play().catch(function(){}); };
      fv.onended = loopit?null:function(){ play('idle',true); }; }
    window.Fen={ idle:function(){ play('idle',true); }, react:function(n){ if(CLIP[n]) play(n,false); } };
    play('idle',true); requestAnimationFrame(loop);
    document.addEventListener('pointerdown',function(){ if(fv.paused) fv.play().catch(function(){}); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
