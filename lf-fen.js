/* lf-fen.js — Fen companion. Green clips from Supabase, keyed in-browser to REAL
   transparency (key sits below each clip's own green), dropped in a screen corner. */
(function(){
  if(window.__fen) return; window.__fen=1;
  var B="https://oabcdrktuikifbormjip.supabase.co/storage/v1/object/public/companion/";
  function U(n){ return B+encodeURIComponent(n); }
  var CLIP={ idle:"Fox - idle, green bg.mp4", delight:"Fox - light delight, green bg.mp4", jump:"Fox - jump, green bg.mp4" };
  function start(){
    var wrap=document.createElement('div');
    wrap.style.cssText='position:fixed;left:0;bottom:0;width:38vw;max-width:150px;z-index:30;pointer-events:none;aspect-ratio:1/1;filter:drop-shadow(0 5px 9px rgba(0,0,0,.5));';
    var cv=document.createElement('canvas'); var SZ=320; cv.width=cv.height=SZ; cv.style.cssText='width:100%;height:100%;';
    wrap.appendChild(cv); document.body.appendChild(wrap);
    var fv=document.createElement('video'); fv.crossOrigin='anonymous'; fv.muted=true; fv.playsInline=true;
    fv.setAttribute('playsinline',''); fv.setAttribute('webkit-playsinline','');
    var ctx=cv.getContext('2d',{willReadFrequently:true});
    var off=document.createElement('canvas'); off.width=off.height=SZ; var octx=off.getContext('2d',{willReadFrequently:true});
    var Thi=16,Tlo=7,bad=false,mc=0;
    function pct(a,p){ a.sort(function(x,y){return x-y;}); return a[Math.max(0,Math.min(a.length-1,Math.floor(a.length*p)))]; }
    function measure(){ try{ octx.drawImage(fv,0,0,SZ,SZ); var d=octx.getImageData(0,0,SZ,SZ).data,g=[],x,y,i;
      for(y=0;y<SZ;y+=5)for(x=0;x<SZ;x+=5){ if(x>SZ*0.14&&x<SZ*0.86&&y>SZ*0.14&&y<SZ*0.86)continue; i=(y*SZ+x)*4; g.push(d[i+1]-Math.max(d[i],d[i+2])); }
      var p15=pct(g,0.15); if(p15<6) return; Thi=Math.max(10,p15*0.72); Tlo=Math.max(4,Thi*0.45);
    }catch(e){ bad=true; } }
    function loop(){ if(!bad&&fv.readyState>=2){ try{ octx.drawImage(fv,0,0,SZ,SZ); var img=octx.getImageData(0,0,SZ,SZ),d=img.data,i,r,g,b,mx,gn,a;
      for(i=0;i<d.length;i+=4){ r=d[i];g=d[i+1];b=d[i+2];mx=r>b?r:b;gn=g-mx; a=(Thi-gn)/(Thi-Tlo); a=a<0?0:(a>1?1:a); if(g>mx)d[i+1]=mx; d[i+3]=a*255; }
      ctx.putImageData(img,0,0);}catch(e){ bad=true; } } requestAnimationFrame(loop); }
    function play(name,loopit){ fv.loop=!!loopit; fv.src=U(CLIP[name]||CLIP.idle); mc=0;
      fv.onloadeddata=function(){ measure(); fv.play().catch(function(){}); };
      fv.onended = loopit?null:function(){ play('idle',true); }; }
    setInterval(function(){ if(mc<5 && fv.readyState>=2){ measure(); mc++; } }, 220);
    window.Fen={ idle:function(){ play('idle',true); }, react:function(n){ if(CLIP[n]) play(n,false); } };
    play('idle',true); requestAnimationFrame(loop);
    document.addEventListener('pointerdown',function(){ if(fv.paused) fv.play().catch(function(){}); });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
