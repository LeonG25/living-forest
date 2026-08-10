/* One face, made once, at the moment it is chosen.

   Portraits used to be cut out of the full photograph in every browser on every page: slow,
   and the same arithmetic in several places where it could disagree with itself. They are
   baked now - one small square per person - and this is where a NEW one is made, so a
   framing a keeper approves is a picture from that second onward, not a promise to crop
   later. The backfill script on the droplet uses exactly the same rules.

   LFPortrait.bake(sb, personId, sourcePath, box) -> Promise<path|null>
     box may be   {x,y,w,h,exact:1}   a human's framing, in fractions of the WHOLE image
                  {zoom,px,py}        a human's framing under the old centred-square stage
                  {x,y,w,h}           the tagger's face box, padded out the way faces are shown
   Never throws: a portrait that cannot be baked simply is not, and the page falls back to
   live cropping as it always did. */
(function(){
  if(window.LFPortrait) return;

  var SIDE=480, QUALITY=0.86, PAD=0.35;

  function region(W,H,box){
    var side,sx,sy;
    if(box && box.exact && box.w>0){
      side=Math.min(Math.max(box.w*W, box.h*H), W, H);
      sx=box.x*W; sy=box.y*H;
    } else if(box && box.zoom!=null){
      var k=Math.max(0.2,(+box.zoom||145)/100), m=Math.min(W,H);
      var ox=(W-m)/2, oy=(H-m)/2;
      side=Math.min(m/k,m);
      sx=ox+m*(0.5-((+box.px||50)/100)/k);
      sy=oy+m*(0.5-((+box.py||50)/100)/k);
    } else if(box && box.w>0){
      var bw=box.w*W, bh=box.h*H;
      side=Math.min(Math.max(bw,bh)*(1+2*PAD), W, H);
      sx=box.x*W+bw/2-side/2; sy=box.y*H+bh/2-side/2;
    } else {
      side=Math.min(W,H); sx=(W-side)/2; sy=(H-side)/2;
    }
    sx=Math.max(0,Math.min(W-side,sx)); sy=Math.max(0,Math.min(H-side,sy));
    return {sx:sx,sy:sy,side:side};
  }

  function load(url){
    return new Promise(function(res,rej){
      var im=new Image(); im.crossOrigin='anonymous'; im.decoding='async';
      im.onload=function(){ res(im); }; im.onerror=function(){ rej(new Error('image')); };
      im.src=url;
    });
  }

  async function bake(sb, personId, sourcePath, box){
    if(!sb||!personId||!sourcePath) return null;
    try{
      var signed=await sb.storage.from('family')
        .createSignedUrl(sourcePath, 600, {transform:{width:1600, resize:'contain'}});
      var url=signed && signed.data && signed.data.signedUrl;
      if(!url) return null;

      var im=await load(url);
      var r=region(im.naturalWidth, im.naturalHeight, box);
      var cv=document.createElement('canvas'); cv.width=SIDE; cv.height=SIDE;
      cv.getContext('2d').drawImage(im, r.sx, r.sy, r.side, r.side, 0, 0, SIDE, SIDE);

      var blob=await new Promise(function(res){ cv.toBlob(res,'image/jpeg',QUALITY); });
      if(!blob) return null;

      var key='portraits/'+personId+'.jpg';
      var up=await sb.storage.from('family').upload(key, blob, {upsert:true, contentType:'image/jpeg'});
      if(up && up.error) return null;

      var w=await sb.from('people')
        .update({portrait_path:key, portrait_made_at:new Date().toISOString()})
        .eq('id', personId);
      if(w && w.error) return null;
      return key;
    }catch(e){
      try{ if(window.LFDB&&LFDB.note) LFDB.note('portrait bake failed for '+personId+': '+String(e&&e.message||e).slice(0,90)); }catch(_){}
      return null;
    }
  }

  window.LFPortrait={ bake:bake, region:region };
})();
