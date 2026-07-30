/* lf-globe.js — "our globe", reusable. Same visual language as the front door
   (index.html): ocean 0x0a1526, additive atmosphere 0x3a86c0, graticule 0x2a5470,
   country outlines from world-atlas 110m, slow drift spin.
   Requires three.js + topojson-client on the page.
   API: LFGlobe.mount(el) -> {stop(), track(items)}
   track(items): items=[{el,lat,lng}] — DOM pins anchored to coordinates ON the
   turning globe; positions are projected every frame relative to el's PARENT box
   (pins live outside the circle clip so labels aren't cut). Far-side pins fade. */
(function(){
  if(window.LFGlobe) return;
  function mount(el){
    if(!window.THREE||!el) return null;
    var W=el.clientWidth||214, H=el.clientHeight||W;
    var renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
    renderer.setSize(W,H);
    renderer.domElement.style.cssText='position:absolute;inset:0;width:100%;height:100%;border-radius:50%;';
    el.appendChild(renderer.domElement);
    var scene=new THREE.Scene();
    var cam=new THREE.PerspectiveCamera(38,W/H,0.1,1000); cam.position.z=300;
    var R=100, globe=new THREE.Group(); scene.add(globe);
    function ll2v(lat,lng,r){ var ph=(90-lat)*Math.PI/180, th=(lng+180)*Math.PI/180;
      return new THREE.Vector3(-r*Math.sin(ph)*Math.cos(th), r*Math.cos(ph), r*Math.sin(ph)*Math.sin(th)); }
    globe.add(new THREE.Mesh(new THREE.SphereGeometry(R*0.997,48,48), new THREE.MeshBasicMaterial({color:0x0a1526})));
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(R*1.16,48,48), new THREE.ShaderMaterial({
      transparent:true, side:THREE.BackSide, blending:THREE.AdditiveBlending, depthWrite:false,
      uniforms:{c:{value:new THREE.Color(0x3a86c0)}},
      vertexShader:'varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ',
      fragmentShader:'varying vec3 vN; uniform vec3 c; void main(){ float i=pow(0.62-dot(vN,vec3(0.0,0.0,1.0)),3.0); gl_FragColor=vec4(c,1.0)*clamp(i,0.0,1.0)*0.9; }'
    })));
    var gmat=new THREE.LineBasicMaterial({color:0x2a5470, transparent:true, opacity:0.32});
    var lat,lng,p,a;
    for(lat=-60;lat<=60;lat+=30){ p=[]; for(lng=-180;lng<=180;lng+=6) p.push(ll2v(lat,lng,R*1.001));
      globe.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p),gmat)); }
    for(lng=-180;lng<180;lng+=30){ p=[]; for(a=-88;a<=88;a+=6) p.push(ll2v(a,lng,R*1.001));
      globe.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p),gmat)); }
    if(window.topojson){
      fetch('https://unpkg.com/world-atlas@2/countries-110m.json').then(function(r){return r.json();}).then(function(topo){
        var geo=topojson.feature(topo,topo.objects.countries), seg=[];
        function addRing(ring){ for(var i=0;i<ring.length-1;i++){ var u=ll2v(ring[i][1],ring[i][0],R*1.002), w=ll2v(ring[i+1][1],ring[i+1][0],R*1.002);
          seg.push(u.x,u.y,u.z,w.x,w.y,w.z); } }
        geo.features.forEach(function(f){ var g=f.geometry; if(!g) return;
          if(g.type==='Polygon') g.coordinates.forEach(addRing);
          else if(g.type==='MultiPolygon') g.coordinates.forEach(function(poly){ poly.forEach(addRing); }); });
        var bg=new THREE.BufferGeometry(); bg.setAttribute('position',new THREE.Float32BufferAttribute(seg,3));
        globe.add(new THREE.LineSegments(bg,new THREE.LineBasicMaterial({color:0x6fa8cf,transparent:true,opacity:0.6})));
      }).catch(function(){});
    }
    globe.rotation.x=0.35; globe.rotation.y=1.2;
    if(el.__lfgMounted) return el.__lfgMounted; /* singleton per container */
    var alive=true, tracked=[], auto=true;
    /* markers live IN the scene as children of the rotating globe — they cannot
       desynchronize from it. DOM keeps only labels + tap areas. */
    var markers=new THREE.Group(); globe.add(markers);
    function markerFor(t){
      var g=new THREE.Group(); g.position.copy(ll2v(t.lat,t.lng,R*1.015));
      var dot=new THREE.Mesh(new THREE.SphereGeometry(2.6,12,12),
        new THREE.MeshBasicMaterial({color:0x7fb4d8}));
      var ring=new THREE.Mesh(new THREE.RingGeometry(4.2,5.2,28),
        new THREE.MeshBasicMaterial({color:0x7fb4d8,transparent:true,opacity:0.55,side:THREE.DoubleSide}));
      ring.lookAt(g.position.clone().multiplyScalar(2));
      g.add(dot); g.add(ring); markers.add(g);
      t._dot=dot; t._ring=ring; return g;
    }
    function tint(t){
      var cl=t.el&&t.el.classList, gold=cl&&cl.contains('hit'), dim=cl&&cl.contains('miss');
      var c=gold?0xf3cd84:0x7fb4d8, op=dim?0.25:1;
      if(t._dot){ t._dot.material.color.setHex(c); t._dot.material.transparent=dim; t._dot.material.opacity=op; }
      if(t._ring){ t._ring.material.color.setHex(c); t._ring.material.opacity=dim?0.12:0.55; }
    }
    /* interaction: first touch stops the drift; drag rotates; pinch/wheel zooms.
       zmin stays outside the atmosphere shell (R*1.16). */
    (function(){
      var zmin=125, zmax=340, pts={}, lastD=0, dragDist=0;
      var ib=el.parentElement||el;
      ib.style.touchAction='none';
      ib.addEventListener('pointerdown',function(e){ auto=false; dragDist=0; lastD=0;
        pts[e.pointerId]=[e.clientX,e.clientY]; try{ ib.setPointerCapture(e.pointerId); }catch(x){} });
      ib.addEventListener('pointermove',function(e){
        if(!(e.pointerId in pts)) return;
        var prev=pts[e.pointerId], dx=e.clientX-prev[0], dy=e.clientY-prev[1];
        pts[e.pointerId]=[e.clientX,e.clientY];
        var ids=Object.keys(pts);
        if(ids.length===1){
          globe.rotation.y+=dx*0.006;
          globe.rotation.x=Math.max(-1.2,Math.min(1.2,globe.rotation.x+dy*0.006));
          dragDist+=Math.abs(dx)+Math.abs(dy);
        } else if(ids.length===2){
          var a=pts[ids[0]], b=pts[ids[1]], d=Math.hypot(a[0]-b[0],a[1]-b[1]);
          if(lastD>0) cam.position.z=Math.max(zmin,Math.min(zmax,cam.position.z*(lastD/d)));
          lastD=d; dragDist+=3;
        }
      });
      function up(e){ delete pts[e.pointerId]; lastD=0; }
      ib.addEventListener('pointerup',up); ib.addEventListener('pointercancel',up);
      ib.addEventListener('wheel',function(e){ e.preventDefault(); auto=false;
        cam.position.z=Math.max(zmin,Math.min(zmax,cam.position.z*(e.deltaY>0?1.1:0.9))); },{passive:false});
      /* a real drag must not fire the pin underneath it */
      ib.addEventListener('click',function(e){ if(dragDist>8){ e.stopPropagation(); e.preventDefault(); dragDist=0; } },true);
    })();
    function place(){
      if(!tracked.length) return;
      var er=el.getBoundingClientRect();
      tracked.forEach(function(t){
        if(t.lat==null||t.lng==null||!t.el) return;
        tint(t);
        var op=t.el.offsetParent; if(!op) return;
        var br=op.getBoundingClientRect();
        var ox=er.left-br.left, oy=er.top-br.top;
        var p=ll2v(t.lat,t.lng,R*1.015).applyEuler(globe.rotation);
        var front=p.z>6;
        var s=p.clone().project(cam);
        var x=( s.x*0.5+0.5)*er.width, y=(-s.y*0.5+0.5)*er.height;
        t.el.style.left=Math.round(ox+x)+'px';
        t.el.style.top =Math.round(oy+y)+'px';
        t.el.style.opacity=front?'':'0';
        t.el.style.pointerEvents=front?'':'none';
        t.el.style.zIndex=front?'6':'3';
      });
    }
    (function tick(){ if(!alive) return; if(auto) globe.rotation.y+=0.0016; renderer.render(scene,cam); place(); requestAnimationFrame(tick); })();
    return el.__lfgMounted={
      stop:function(){ alive=false; try{ renderer.dispose(); renderer.domElement.remove(); }catch(e){} },
      track:function(items){
        while(markers.children.length) markers.remove(markers.children[0]);
        tracked=(items||[]).filter(function(t){ return t&&t.el&&t.lat!=null&&t.lng!=null; });
        tracked.forEach(markerFor);
        /* the scene draws the dot — the DOM keeps label + finger area only */
        tracked.forEach(function(t){ var d=t.el.querySelector('.dot'); if(d) d.style.visibility='hidden'; });
      }
    };

  }
  window.LFGlobe={mount:mount};
})();
