/* One brain for places. Wherever a place name is written, LFPlace.ensure() makes the
   forest know it: coordinates, its label, its country — looked up once (place_geo first,
   nominatim for strangers, localized), persisted for the whole family forever. */
(function(){
  if(window.LFPlace) return;
  window.LFPlace={
    ensure: async function(name, lang, sb){
      name=String(name||'').trim(); if(!name||!sb) return null;
      try{
        const {data:r}=await sb.from('place_geo').select('name,lat,lng,label,country').eq('name',name).maybeSingle();
        if(r&&r.lat!=null){
          if(!r.country&&r.label){ const c=r.label.split(',').pop().trim();
            if(c){ r.country=c; try{ sb.from('place_geo').update({country:c}).eq('name',name).then(()=>{},()=>{}); }catch(e){} } }
          return r;
        }
      }catch(e){}
      try{
        const lg={en:'en',ru:'ru',he:'he'}[lang]||'en';
        const resp=await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&accept-language='+lg+'&q='+encodeURIComponent(name));
        const j=await resp.json(); const hit=j&&j[0]; if(!hit) return null;
        const row={name:name, lat:+hit.lat, lng:+hit.lon, label:hit.display_name||null,
                   country:(hit.address&&hit.address.country)||null};
        try{ sb.from('place_geo').insert(row).then(()=>{},()=>{}); }catch(e){}
        return row;
      }catch(e){ return null; }
    },
    country: async function(name, lang, sb){
      const r=await window.LFPlace.ensure(name, lang, sb); return r&&r.country||null;
    }
  };
})();
