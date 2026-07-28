/* lf-face.js — one face pipeline for every page.
   The chosen crop travels with the person: a face fact's value may carry
   box:{x,y,w,h,exact:1} (normalised fractions of the source image, saved by the
   Person page crop stage) or the legacy {zoom,px,py} stage numbers; a tag box
   {x,y,w,h} (from artefact_subjects) renders padded around the face; nothing
   renders a centred square. Resized sources via the Storage render endpoint,
   finished crops cached in IndexedDB — instant on repeat visits.
   API:
     LFFace.init(sb)
     LFFace.url(path,width) -> signed url (resized when width given)
     LFFace.into(el,{path,box,size,keep,priority}) -> hydrate an element
     LFFace.resolve(ids) -> Promise<{personId:{path,box}}>
     LFFace.normBox(v) -> canonical box from a fact value / metadata face_box */
(function(){
  if(window.LFFace) return;
  var sb=null;
  function init(client){ sb=client; }

  async function url(path,width){ if(!sb||!path) return '';
    try{ var opts=width?{transform:{width:width,resize:'contain'}}:undefined;
      var r=await sb.storage.from('family').createSignedUrl(path,3600,opts);
      return (r.data&&r.data.signedUrl)||''; }catch(e){ return ''; } }

  /* ---- cache (same store the tree already uses; keys are self-invalidating) ---- */
  var dbp=null;
  function open(){ if(dbp) return dbp; dbp=new Promise(function(res){ try{
    var r=indexedDB.open('lf-tree-faces',1);
    r.onupgradeneeded=function(){ try{ r.result.createObjectStore('crops'); }catch(e){} };
    r.onsuccess=function(){ res(r.result); }; r.onerror=function(){ res(null); }; }catch(e){ res(null); } });
    return dbp; }
  var Cache={
    get:function(k){ return open().then(function(d){ if(!d) return null;
      return new Promise(function(res){ try{ var rq=d.transaction('crops','readonly').objectStore('crops').get(k);
        rq.onsuccess=function(){ res(rq.result||null); }; rq.onerror=function(){ res(null); }; }catch(e){ res(null); } }); }); },
    put:function(k,v){ open().then(function(d){ if(!d) return; try{ d.transaction('crops','readwrite').objectStore('crops').put(v,k); }catch(e){} }); }
  };
  function r3(n){ return Math.round((+n||0)*1000); }
  function boxKey(b){ if(!b) return 'full';
    if(b.exact) return 'e'+[b.x,b.y,b.w,b.h].map(r3).join('_');
    if(b.zoom!=null) return 'z'+[b.zoom,b.px,b.py].map(function(n){ return Math.round(+n||0); }).join('_');
    return [b.x,b.y,b.w,b.h].map(r3).join('_'); }

  /* ---- concurrency-capped queue ---- */
  var Q={tasks:[],active:0,cap:5};
  function enqueue(t,priority){ if(priority) Q.tasks.unshift(t); else Q.tasks.push(t); pump(); }
  function pump(){ while(Q.active<Q.cap&&Q.tasks.length){ var t=Q.tasks.shift(); Q.active++;
    Promise.resolve().then(t).catch(function(){}).then(function(){ Q.active--; pump(); }); } }

  /* canonical box from a face-fact value string/object or a metadata face_box */
  function normBox(v){ if(!v) return null;
    if(typeof v==='string'){ try{ v=JSON.parse(v); }catch(e){ return null; } }
    if(v.box) return normBox(v.box);
    if(v.exact&&v.w>0) return {x:+v.x,y:+v.y,w:+v.w,h:+v.h,exact:1};
    if(v.zoom!=null) return {zoom:+v.zoom,px:(v.px!=null?+v.px:50),py:(v.py!=null?+v.py:50)};
    if(v.w>0&&v.h>0) return {x:+v.x,y:+v.y,w:+v.w,h:+v.h};
    return null; }

  /* legacy stage numbers -> exact source-pixel square (needs the natural size) */
  function zoomToPx(b,W,H){ var k=Math.max(0.2,(+b.zoom||145)/100), m=Math.min(W,H);
    var ox=(W-m)/2, oy=(H-m)/2, side=Math.min(m/k,m);
    var sx=ox+m*(0.5-((+b.px||50)/100)/k), sy=oy+m*(0.5-((+b.py||50)/100)/k);
    sx=Math.max(0,Math.min(W-side,sx)); sy=Math.max(0,Math.min(H-side,sy));
    return {sx:sx,sy:sy,side:side}; }

  function cropImage(u,box,size){ size=size||160;
    return new Promise(function(resolve){ if(!u){ resolve(null); return; }
      var img=new Image(); img.crossOrigin='anonymous'; img.onerror=function(){ resolve(null); };
      img.onload=function(){ var W=img.naturalWidth,H=img.naturalHeight;
        var c=document.createElement('canvas'); c.width=c.height=size; var g=c.getContext('2d');
        var sx,sy,side;
        if(box&&box.exact){ side=Math.max(box.w*W,box.h*H); side=Math.min(side,W,H);
          sx=Math.max(0,Math.min(W-side,box.x*W)); sy=Math.max(0,Math.min(H-side,box.y*H));
        } else if(box&&box.zoom!=null){ var z=zoomToPx(box,W,H); sx=z.sx; sy=z.sy; side=z.side;
        } else if(box&&box.w>0&&box.h>0){ /* tag box: pad around the face */
          var bw=box.w*W, bh=box.h*H, cx=(box.x+box.w/2)*W, cy=(box.y+box.h/2)*H, pad=0.35;
          side=Math.max(bw,bh)*(1+2*pad); side=Math.min(side,W,H);
          sx=Math.max(0,Math.min(W-side,cx-side/2)); sy=Math.max(0,Math.min(H-side,cy-side/2));
        } else { side=Math.min(W,H); sx=(W-side)/2; sy=(H-side)/2; }
        g.drawImage(img,sx,sy,side,side,0,0,size,size);
        var dataUrl=null; try{ dataUrl=c.toDataURL('image/jpeg',0.85); }catch(e){ dataUrl=null; }
        resolve({dataUrl:dataUrl,canvas:c}); };
      img.src=u; }); }

  async function loadCrop(path,box,size){ var u=await url(path,900); var r=await cropImage(u,box,size);
    if(!r){ var u2=await url(path); if(u2&&u2!==u) r=await cropImage(u2,box,size); }
    return r; }

  function show(el,node){ el.style.overflow='hidden'; el.innerHTML='';
    node.style.cssText='width:100%;height:100%;display:block;object-fit:cover'; el.appendChild(node); }

  function into(el,o){ if(!el||!o||!o.path) return; o=o||{};
    var key=(o.key||'')+'|'+o.path+'|'+boxKey(o.box)+'|'+(o.size||160);
    el.dataset.lfface=key;
    if(!o.keep) el.style.opacity=el.style.opacity||'';
    enqueue(async function(){
      var cached=await Cache.get(key);
      if(cached){ if(el.dataset.lfface===key){ var im=new Image(); im.decoding='async';
        im.onload=function(){ if(el.dataset.lfface===key) show(el,im); }; im.src=cached; } return; }
      var r=await loadCrop(o.path,o.box,o.size||160); if(!r) return;
      if(r.dataUrl){ Cache.put(key,r.dataUrl); if(el.dataset.lfface===key){ var im2=new Image(); im2.decoding='async';
        im2.onload=function(){ if(el.dataset.lfface===key) show(el,im2); }; im2.src=r.dataUrl; } }
      else if(el.dataset.lfface===key){ show(el,r.canvas); }
    }, !!o.priority); }

  /* id -> {path,box}: metadata.face_box first (the fast copy), then the newest
     published face fact (source of truth), then a photo they are tagged in. */
  async function resolve(ids){ var out={}; ids=(ids||[]).filter(Boolean); if(!sb||!ids.length) return out;
    var ppl=[]; try{ var r1=await sb.from('people').select('id,primary_asset,metadata').in('id',ids); ppl=r1.data||[]; }catch(e){}
    var facts=[]; try{ var r2=await sb.from('person_facts').select('person_id,value,published_at').eq('field','face').eq('status','published').in('person_id',ids).order('published_at',{ascending:false}); facts=r2.data||[]; }catch(e){}
    var factBy={}; facts.forEach(function(f){ if(factBy[f.person_id]) return;
      try{ var v=JSON.parse(f.value); if(v&&v.storage_path) factBy[f.person_id]={path:v.storage_path,box:normBox(v)}; }catch(e){} });
    ppl.forEach(function(p){ var fb=(p.metadata&&p.metadata.face_box)?normBox(p.metadata.face_box):null;
      var fact=factBy[p.id];
      if(p.primary_asset&&fb) out[p.id]={path:p.primary_asset,box:fb};
      else if(fact) out[p.id]=fact;
      else if(p.primary_asset) out[p.id]={path:p.primary_asset,box:null}; });
    var missing=ids.filter(function(id){ return !out[id]; });
    if(missing.length){ try{
      var r3q=await sb.from('artefact_subjects').select('person_id,artefact_id,detail').in('person_id',missing);
      var subs=r3q.data||[]; var artIds=[]; subs.forEach(function(s){ if(artIds.indexOf(s.artefact_id)<0) artIds.push(s.artefact_id); });
      if(artIds.length){ var r4=await sb.from('artefacts').select('id,storage_path').in('id',artIds);
        var byArt={}; (r4.data||[]).forEach(function(a){ byArt[a.id]=a.storage_path; });
        subs.forEach(function(s){ if(out[s.person_id]) return; var pth=byArt[s.artefact_id]; if(!pth) return;
          out[s.person_id]={path:pth,box:normBox(s.detail)}; }); }
    }catch(e){} }
    return out; }

  window.LFFace={init:init,url:url,into:into,resolve:resolve,cropImage:cropImage,normBox:normBox};
})();
