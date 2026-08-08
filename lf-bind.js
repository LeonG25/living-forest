/* Two lives, tied.

   Adding a relation is the only act in the forest that changes two people at once,
   and it was a browser confirm() box. This is that moment given its due: two branches
   grow toward each other, meet, and twine into a knot that will not come apart.

   Drawn, not filmed. A clip would be one fixed thing at one fixed size - forest.mp4 is
   1.84MB and helped burn a 5GB egress allowance. This is a few KB, mirrors itself for
   Hebrew, fits 360px and 1440px alike, and takes its colour from the kind of tie.

   LFBind.ask({line, yes, no, kind, lang, rtl}) -> Promise<boolean> */
(function(){
  if(window.LFBind) return;

  /* every tie is gold - a human said it - but each has its own warmth */
  var HUE={ parent:'#f3cd84', child:'#f3cd84', spouse:'#f0b6c4',
            sibling:'#e9c98f', friend:'#cfd8a8', mentor:'#d8c6f0',
            mentee:'#d8c6f0', neighbour:'#bcd3d8', other:'#e6d3a8' };

  function el(tag,attrs){ var e=document.createElementNS('http://www.w3.org/2000/svg',tag);
    for(var k in attrs) e.setAttribute(k,attrs[k]); return e; }

  /* THREE strands per side, not one line. Each reaches across the middle and past it, so
     the two hands overlap and weave: strand 1 of the left passes OVER strand 1 of the
     right, strand 2 UNDER, strand 3 OVER. That alternation is what reads as woven rather
     than crossed. Amplitude and phase differ per strand so nothing looks like a diagram. */
  function strand(dir, i, colour, W, H){
    var midX=W/2, y=H/2;
    var reach = midX*0.62 + i*10;          /* how far past the middle it travels */
    var amp   = 13 + i*7;                  /* how deep it waves */
    var phase = (i%2? -1 : 1);
    var x0 = dir>0 ? 6 : W-6;
    var x3 = midX + dir*reach*0.42;
    var c1x = x0 + dir*(reach*0.55), c1y = y - phase*amp;
    var c2x = midX - dir*(reach*0.18), c2y = y + phase*amp*0.8;
    var d='M'+x0+','+y+' C'+c1x+','+c1y+' '+c2x+','+c2y+' '+x3+','+y;
    var w = 3.2 - i*0.7;
    return el('path',{d:d, fill:'none', stroke:colour, 'stroke-width':w,
      'stroke-linecap':'round', opacity:(0.95 - i*0.18)});
  }
  function ask(o){
    o=o||{};
    var colour=HUE[o.kind]||HUE.other;
    var rtl=!!o.rtl, lang=o.lang||'en';
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}

    return new Promise(function(resolve){
      var scrim=document.createElement('div');
      scrim.setAttribute('dir', rtl?'rtl':'ltr');
      scrim.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;'
        +'background:rgba(4,7,14,.82);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);'
        +'opacity:0;transition:opacity .28s ease;padding:20px;box-sizing:border-box;';

      var card=document.createElement('div');
      card.style.cssText='max-width:min(420px,92vw);width:100%;text-align:center;'
        +'font-family:inherit;color:#eef1f6;';

      var W=340, H=170;
      var svg=el('svg',{viewBox:'0 0 '+W+' '+H, width:'100%', height:'170',
        'aria-hidden':'true', style:'display:block;margin:0 auto 2px'});
      /* weave order: L0 under R0, L1 over R1, L2 under R2 - painted in this sequence */
      var Ls=[], Rs=[];
      for(var i=0;i<3;i++){ Ls.push(strand( 1,i,colour,W,H)); Rs.push(strand(-1,i,colour,W,H)); }
      var order=[Rs[0],Ls[0],Ls[1],Rs[1],Rs[2],Ls[2]];
      order.forEach(function(pth){ svg.appendChild(pth); });
      var halo=el('circle',{cx:W/2, cy:H/2, r:0, fill:'none', stroke:colour, 'stroke-width':1.2, opacity:.5});
      var knot=el('ellipse',{cx:W/2, cy:H/2, rx:0, ry:0, fill:colour, opacity:.92});
      svg.appendChild(halo); svg.appendChild(knot);

      var line=document.createElement('p');
      line.textContent=String(o.line||'');
      line.style.cssText='margin:6px 0 18px;font-size:17px;line-height:1.45;color:#f6efe0;';

      var row=document.createElement('div');
      row.style.cssText='display:flex;gap:10px;justify-content:center;flex-wrap:wrap;';
      function button(label,primary){
        var b=document.createElement('button');
        b.type='button'; b.textContent=label;
        b.style.cssText='padding:11px 20px;border-radius:12px;cursor:pointer;font:inherit;font-size:15px;'
          +(primary
            ? 'background:'+colour+';border:1px solid '+colour+';color:#141019;font-weight:600;'
            : 'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.22);color:#e7ecf3;');
        return b;
      }
      var no=button(o.no||'Not yet',false), yes=button(o.yes||'Yes, tie them',true);
      row.appendChild(no); row.appendChild(yes);

      card.appendChild(svg); card.appendChild(line); card.appendChild(row);
      scrim.appendChild(card);
      document.body.appendChild(scrim);

      /* Each strand draws itself in from its own edge, the two hands meeting in the
         middle; then the knot cinches - a quick over-shoot and settle, the way a real
         knot pulls tight rather than fading in. */
      var all=Ls.concat(Rs);
      all.forEach(function(pth,idx){
        var len=0; try{ len=pth.getTotalLength(); }catch(e){ len=200; }
        pth.style.strokeDasharray=len;
        pth.style.strokeDashoffset=reduce?0:len;
        if(!reduce){
          pth.style.transition='stroke-dashoffset 1050ms cubic-bezier(.2,.75,.25,1) '+(idx%3)*90+'ms';
        }
      });
      requestAnimationFrame(function(){
        scrim.style.opacity='1';
        if(reduce){ knot.setAttribute('rx',7); knot.setAttribute('ry',5.5); halo.setAttribute('r',17); return; }
        all.forEach(function(pth){ pth.style.strokeDashoffset='0'; });
        setTimeout(function(){
          var t0=performance.now();
          (function cinch(now){
            var k=Math.min(1,(now-t0)/620);
            /* overshoot then settle */
            var e=1-Math.pow(1-k,3), over=Math.sin(k*Math.PI)*0.35;
            knot.setAttribute('rx', (8*e+over*3).toFixed(2));
            knot.setAttribute('ry', (6*e).toFixed(2));
            halo.setAttribute('r', (8+22*e).toFixed(2));
            halo.setAttribute('opacity', (0.5*(1-e)).toFixed(3));
            if(k<1) requestAnimationFrame(cinch);
          })(t0);
        }, 1150);
      });

      var done=false;
      function close(answer){
        if(done) return; done=true;
        scrim.style.opacity='0';
        setTimeout(function(){ try{ scrim.remove(); }catch(e){} resolve(answer); }, 260);
      }
      yes.onclick=function(){ close(true); };
      no.onclick=function(){ close(false); };
      scrim.addEventListener('click',function(e){ if(e.target===scrim) close(false); });
      document.addEventListener('keydown',function esc(e){
        if(e.key==='Escape'){ document.removeEventListener('keydown',esc); close(false); }
      });
      setTimeout(function(){ try{ yes.focus(); }catch(e){} }, 300);
    });
  }

  window.LFBind={ ask:ask };
})();
