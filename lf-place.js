/* One brain for places. Wherever a place name is written, LFPlace.ensure() makes the
   forest know it: coordinates, its label, its country — looked up once (place_geo first,
   nominatim for strangers, localized), persisted for the whole family forever. */
(function(){
  if(window.LFPlace) return;
  window.LFPlace={
    ensure: async function(name, lang, sb){
      name=String(name||'').trim(); if(!name||!sb) return null;
      try{
        const {data:r}=await sb.from('place_geo').select('name,lat,lng,label,country,name_en,name_ru,name_he').eq('name',name).maybeSingle();
        if(r&&r.lat!=null){
          /* A KNOWN PLACE MISSING ITS NAMES WAS NEVER FILLED IN. This returned the moment a
             row existed, so a place learned before the three names were being stored - or
             one whose lookup half-failed - stayed nameless for ever and showed as typed on
             every page. It fills the gaps now, once, in the background. */
          if(!r.name_en||!r.name_ru||!r.name_he){
            (async function(){ try{
              const locs={en:'name_en',ru:'name_ru',he:'name_he'}, patch={};
              for(const l of ['en','ru','he']){
                if(r[locs[l]]) continue;
                try{
                  const rr=await fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=13&lat='+r.lat+'&lon='+r.lng+'&accept-language='+l);
                  const jj=await rr.json(); const a=(jj&&jj.address)||{};
                  const v=a.city||a.town||a.village||a.hamlet||a.municipality||a.suburb||((jj&&jj.display_name)||'').split(',')[0].trim()||null;
                  if(v) patch[locs[l]]=v;
                }catch(e){}
                await new Promise(z=>setTimeout(z,1100));
              }
              if(Object.keys(patch).length) await sb.from('place_geo').update(patch).eq('name',name);
            }catch(e){} })();
          }
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
                   country:(hit.address&&hit.address.country)||null,
                   country_code:(hit.address&&hit.address.country_code||'').toUpperCase()||null};
        /* the place learns its name in all three tongues, once, from its coordinates */
        try{
          const locs={en:'name_en',ru:'name_ru',he:'name_he'};
          for(const l of ['en','ru','he']){
            try{
              const rr=await fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=13&lat='+row.lat+'&lon='+row.lng+'&accept-language='+l);
              const jj=await rr.json(); const a=(jj&&jj.address)||{};
              row[locs[l]]=a.city||a.town||a.village||a.hamlet||a.municipality||a.suburb||((jj&&jj.display_name)||'').split(',')[0].trim()||null;
            }catch(e){}
            await new Promise(z=>setTimeout(z,1100));
          }
        }catch(e){}
        try{ sb.from('place_geo').insert(row).then(()=>{},()=>{}); }catch(e){}
        return row;
      }catch(e){ return null; }
    },
    /* the country's name in the reader's language, from its ISO code (native Intl) */
    /* the place's own name in the reader's language (stored name as the last word) */
    display: function(row, lang){
      if(!row) return '';
      const k={en:'name_en',ru:'name_ru',he:'name_he'}[lang]||'name_en';
      return row[k]||row.name_en||row.name||'';
    },
    countryName: function(codeOrRow, lang){
      try{
        const code=(typeof codeOrRow==='string'?codeOrRow:(codeOrRow&&codeOrRow.country_code))||'';
        if(code&&window.Intl&&Intl.DisplayNames){
          const dn=new Intl.DisplayNames([{en:'en',ru:'ru',he:'he'}[lang]||'en'],{type:'region'});
          const nm=dn.of(code.toUpperCase()); if(nm&&nm!==code.toUpperCase()) return nm;
        }
      }catch(e){}
      return (codeOrRow&&codeOrRow.country)||'';
    },
    country: async function(name, lang, sb){
      const r=await window.LFPlace.ensure(name, lang, sb); return r&&r.country||null;
    }
  };
})();
