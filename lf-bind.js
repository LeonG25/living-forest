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

  /* one branch: a stem that leans toward the middle, with a few leaves along it */
  function branch(x0,y0,dir,colour){
    var g=el('g',{});
    var x1=x0+dir*54, x2=x0+dir*104, x3=x0+dir*150;
    var d='M'+x0+','+y0+' C'+x1+','+(y0-26)+' '+x2+','+(y0+22)+' '+x3+','+y0;
    var stem=el('path',{d:d, fill:'none', stroke:colour, 'stroke-width':2.4,
      'stroke-linecap':'round', opacity:.95});
    g.appendChild(stem);
    for(var i=1;i<=3;i++){
      var t=i/4, lx=x0+dir*(150*t), ly=y0-14+Math.sin(t*3.1)*10;
      var leaf=el('path',{d:'M'+lx+','+ly+' q'+(dir*11)+',-8 '+(dir*20)+',1 q-'+(dir*11)+',9 -'+(dir*20)+',-1',
        fill:colour, opacity:.5});
      g.appendChild(leaf);
    }
    return {g:g, stem:stem};
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

      var svg=el('svg',{viewBox:'0 0 340 150', width:'100%', height:'150',
        'aria-hidden':'true', style:'display:block;margin:0 auto 4px'});
      var L=branch(20,86,1,colour), R=branch(320,86,-1,colour);
      /* the knot: where the two become one */
      var knot=el('circle',{cx:170, cy:86, r:0, fill:colour, opacity:.9});
      var halo=el('circle',{cx:170, cy:86, r:0, fill:'none', stroke:colour, 'stroke-width':1, opacity:.5});
      svg.appendChild(L.g); svg.appendChild(R.g); svg.appendChild(halo); svg.appendChild(knot);

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

      /* grow: each stem draws itself in, then the knot blooms */
      [L.stem,R.stem].forEach(function(s){
        var len=0; try{ len=s.getTotalLength(); }catch(e){ len=170; }
        s.style.strokeDasharray=len; s.style.strokeDashoffset=reduce?0:len;
        if(!reduce){ s.style.transition='stroke-dashoffset 900ms cubic-bezier(.22,.85,.3,1)'; }
      });
      requestAnimationFrame(function(){
        scrim.style.opacity='1';
        if(reduce){ knot.setAttribute('r',6); halo.setAttribute('r',15); return; }
        L.stem.style.strokeDashoffset='0'; R.stem.style.strokeDashoffset='0';
        setTimeout(function(){
          var t0=performance.now();
          (function bloom(now){
            var k=Math.min(1,(now-t0)/520);
            knot.setAttribute('r', (6*(1-Math.pow(1-k,3))).toFixed(2));
            halo.setAttribute('r', (6+14*k).toFixed(2));
            halo.setAttribute('opacity', (0.55*(1-k)).toFixed(3));
            if(k<1) requestAnimationFrame(bloom);
          })(t0);
        }, 820);
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
