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

  /* A SENTENCE CAN BE READ BACKWARDS. A SHAPE CANNOT.
     Leon proposed "Mote-Laser is a parent of Anna" and the row written said the opposite;
     the words alone did not catch it. So the question is now asked as a picture built with
     the family tree's own conventions - parent ABOVE, child BELOW on a dropped line,
     siblings side by side under one bar, partners side by side joined by a ring - and the
     two strands weave along exactly that connector. If the shape is wrong, it is wrong at
     a glance. */

  function card(g, x, y, name, colour, dim){
    var w=104, h=38;
    g.appendChild(el('rect',{x:x-w/2, y:y-h/2, width:w, height:h, rx:11,
      fill:'rgba(12,18,32,.9)', stroke:colour, 'stroke-width':dim?1:1.6, opacity:dim?.55:1}));
    var t=el('text',{x:x, y:y+4.5, 'text-anchor':'middle', fill:'#f2eadb',
      'font-size':'13', 'font-family':'inherit'});
    var nm=String(name||'').trim(); if(nm.length>13) nm=nm.slice(0,12)+'…';
    t.textContent=nm; g.appendChild(t);
    return {x:x, y:y, w:w, h:h};
  }

  /* every kind gets the shape the tree would give it */
  function shape(kind){
    if(kind==='parent'||kind==='child') return 'stack';   /* one above the other */
    if(kind==='sibling') return 'siblings';               /* side by side under a bar */
    if(kind==='spouse')  return 'partners';               /* side by side, ring between */
    return 'link';                                        /* side by side, soft line */
  }
  function ask(o){
    o=o||{};
    var colour=HUE[o.kind]||HUE.other;
    var rtl=!!o.rtl, mode=shape(o.kind);
    var reduce=false; try{ reduce=matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
    /* upper = whoever the tree would draw higher. For a parent tie that is the parent. */
    var upper=o.upper||'', lower=o.lower||'';

    return new Promise(function(resolve){
      var scrim=document.createElement('div');
      scrim.setAttribute('dir', rtl?'rtl':'ltr');
      scrim.style.cssText='position:fixed;inset:0;z-index:99999;display:grid;place-items:center;'
        +'background:rgba(4,7,14,.86);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);'
        +'opacity:0;transition:opacity .28s ease;padding:20px;box-sizing:border-box;';
      var cardBox=document.createElement('div');
      cardBox.style.cssText='max-width:min(420px,92vw);width:100%;text-align:center;color:#eef1f6;';

      var W=320, H=(mode==='stack')?190:150;
      var svg=el('svg',{viewBox:'0 0 '+W+' '+H, width:'100%', height:String(H),
        'aria-hidden':'true', style:'display:block;margin:0 auto 6px'});
      var g=el('g',{}); svg.appendChild(g);

      var conn, a, b;
      if(mode==='stack'){
        a=card(g, W/2, 34, upper, colour, false);
        b=card(g, W/2, H-34, lower, colour, false);
        conn=el('path',{d:'M'+(W/2)+','+(a.y+a.h/2)+' L'+(W/2)+','+(b.y-b.h/2),
          fill:'none', stroke:colour, 'stroke-width':2, 'stroke-linecap':'round'});
      } else {
        var y=H/2;
        a=card(g, 78, y, upper, colour, false);
        b=card(g, W-78, y, lower, colour, false);
        var barY = (mode==='siblings') ? y-38 : y;
        if(mode==='siblings'){
          conn=el('path',{d:'M'+a.x+','+(y-a.h/2)+' L'+a.x+','+barY+' L'+b.x+','+barY+' L'+b.x+','+(y-b.h/2),
            fill:'none', stroke:colour, 'stroke-width':2, 'stroke-linejoin':'round', 'stroke-linecap':'round'});
        } else {
          conn=el('path',{d:'M'+(a.x+a.w/2)+','+y+' L'+(b.x-b.w/2)+','+y,
            fill:'none', stroke:colour, 'stroke-width':2, 'stroke-linecap':'round'});
        }
      }
      g.insertBefore(conn, g.firstChild);

      /* the knot sits on the connector, where the two actually meet */
      var mid = (mode==='stack') ? {x:W/2, y:(a.y+b.y)/2}
              : (mode==='siblings') ? {x:W/2, y:H/2-38} : {x:W/2, y:H/2};
      var halo=el('circle',{cx:mid.x, cy:mid.y, r:0, fill:'none', stroke:colour, 'stroke-width':1.2, opacity:.5});
      var knot=el('circle',{cx:mid.x, cy:mid.y, r:0, fill:colour, opacity:.95});
      g.appendChild(halo); g.appendChild(knot);

      var line=document.createElement('p');
      line.textContent=String(o.line||'');
      line.style.cssText='margin:8px 0 16px;font-size:16px;line-height:1.45;color:#f6efe0;';

      var row=document.createElement('div');
      row.style.cssText='display:flex;gap:10px;justify-content:center;flex-wrap:wrap;';
      function button(label,primary){
        var bt=document.createElement('button'); bt.type='button'; bt.textContent=label;
        bt.style.cssText='padding:11px 20px;border-radius:12px;cursor:pointer;font:inherit;font-size:15px;'
          +(primary?('background:'+colour+';border:1px solid '+colour+';color:#141019;font-weight:600;')
                   :'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.22);color:#e7ecf3;');
        return bt;
      }
      var no=button(o.no||'Not yet',false), yes=button(o.yes||'Yes, tie them',true);
      row.appendChild(no); row.appendChild(yes);
      cardBox.appendChild(svg); cardBox.appendChild(line); cardBox.appendChild(row);
      scrim.appendChild(cardBox); document.body.appendChild(scrim);

      /* the connector draws itself from both ends, then the knot cinches */
      var len=0; try{ len=conn.getTotalLength(); }catch(e){ len=160; }
      conn.style.strokeDasharray=len; conn.style.strokeDashoffset=reduce?0:len;
      if(!reduce) conn.style.transition='stroke-dashoffset 780ms cubic-bezier(.2,.75,.25,1)';
      requestAnimationFrame(function(){
        scrim.style.opacity='1';
        if(reduce){ knot.setAttribute('r',5.5); halo.setAttribute('r',16); return; }
        conn.style.strokeDashoffset='0';
        setTimeout(function(){
          var t0=performance.now();
          (function cinch(now){
            var k=Math.min(1,(now-t0)/560), e=1-Math.pow(1-k,3);
            knot.setAttribute('r', (5.5*e+Math.sin(k*Math.PI)*2).toFixed(2));
            halo.setAttribute('r', (5+18*e).toFixed(2));
            halo.setAttribute('opacity', (0.5*(1-e)).toFixed(3));
            if(k<1) requestAnimationFrame(cinch);
          })(t0);
        }, 800);
      });

      var done=false;
      function close(ans){ if(done) return; done=true; scrim.style.opacity='0';
        setTimeout(function(){ try{ scrim.remove(); }catch(e){} resolve(ans); },240); }
      yes.onclick=function(){ close(true); };
      no.onclick=function(){ close(false); };
      scrim.addEventListener('click',function(e){ if(e.target===scrim) close(false); });
      document.addEventListener('keydown',function esc(e){
        if(e.key==='Escape'){ document.removeEventListener('keydown',esc); close(false); } });
      setTimeout(function(){ try{ yes.focus(); }catch(e){} },300);
    });
  }

  window.LFBind={ ask:ask };
})();
