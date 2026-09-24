/* One brain for places. Wherever a place name is written, LFPlace.ensure() makes the
   forest know it: coordinates, its label, its country — looked up once (place_geo first,
   nominatim for strangers, localized), persisted for the whole family forever. */
(function(){
  if(window.LFPlace) return;
  /* A PLACE OSM CANNOT NAME (2026-09-06). Nominatim answers in the asked language only if
     OpenStreetMap holds a name in it. Small towns often have none - Morschach read
     "Morschach" to a Russian and a Hebrew reader, Latin letters in the middle of their own
     page, exactly the fault Leon found in people's names. So: OSM first (it knows the real
     local spelling), and where OSM has nothing - or answers in the wrong alphabet - the
     translate function carries the name across, as it does for every other short label.
     A place name is reference data: no keeper, no approval (Leon, 2026-09-06). */
  var SCRIPT={ru:/[\u0400-\u04FF]/, he:/[\u0590-\u05FF]/, en:/[A-Za-z]/};
  function wrongScript(v,l){ v=String(v||''); if(!v) return true;
    if(!SCRIPT[l].test(v)) return true;                       /* not in the target alphabet */
    if(l==='ru'&&/[\u0590-\u05FF]/.test(v)) return true;
    if(l==='he'&&/[\u0400-\u04FF]/.test(v)) return true;
    return false; }
  function cleanPlace(v,l){ if(!v) return '';
    var t=String(v).split(/[\r\n]+/).map(function(x){return x.trim();}).filter(Boolean)[0]||'';
    t=t.replace(/\s*[\(\[].*$/,'').replace(/^["'\u201c\u201e]+|["'\u201d\u201c]+$/g,'').replace(/[\s.,;:!]+$/,'').trim();
    if(!t||t.length>48) return '';
    return wrongScript(t,l)?'':t; }
  async function osmName(lat,lng,l){
    try{
      var rr=await fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=13&lat='+lat+'&lon='+lng+'&accept-language='+l);
      var jj=await rr.json(); var a=(jj&&jj.address)||{};
      var v=a.city||a.town||a.village||a.hamlet||a.municipality||a.suburb||((jj&&jj.display_name)||'').split(',')[0].trim()||null;
      if(l==='en') return v||null;
      return (v&&!wrongScript(v,l))?v:null;                   /* Latin from OSM is no answer */
    }catch(e){ return null; } }
  async function carryName(sb,text,l){
    if(!sb||!text) return null;
    try{
      var r=await sb.functions.invoke('translate',{body:{target_lang:l,items:[{kind:'place_name',ref:'place:'+text,text:text}]}});
      if(r.error) return null;
      var out=(r.data&&r.data.results&&r.data.results[0]&&r.data.results[0].text)||'';
      return cleanPlace(out,l)||null;
    }catch(e){ return null; } }
  /* every missing (or wrong-alphabet) language, OSM first then the translate function */
  async function learnNames(sb,lat,lng,have,fallbackText){
    var locs={en:'name_en',ru:'name_ru',he:'name_he'}, patch={};
    var base=(have&&have.name_en)||fallbackText||'';
    for(var i=0;i<3;i++){
      var l=['en','ru','he'][i], key=locs[l];
      var cur=have?have[key]:null;
      if(cur&&!wrongScript(cur,l)) continue;
      var v=null;
      if(lat!=null&&lng!=null){ v=await osmName(lat,lng,l); await new Promise(function(z){setTimeout(z,1100);}); }
      if(l==='en'&&!v) v=base||null;
      if(!v&&base) v=await carryName(sb,base,l);
      if(v){ patch[key]=v; if(l==='en'&&!base) base=v; }
    }
    return patch; }
  window.LFPlace={
    ensure: async function(name, lang, sb){
      name=String(name||'').trim(); if(!name||!sb) return null;
      try{
        const {data:r}=await sb.from('place_geo').select('name,lat,lng,label,country,name_en,name_ru,name_he').eq('name',name).maybeSingle();
        if(r&&r.lat!=null){
          /* A KNOWN PLACE MISSING ITS NAMES WAS NEVER FILLED IN. This returned the moment a
             row existed, so a place learned before the three names were being stored - or
             one whose lookup half-failed - stayed nameless for ever and showed as typed on
             every page. It fills the gaps now, once, in the background - and a name left in
             the WRONG alphabet (Latin shown to a Russian reader) counts as a gap. */
          if(wrongScript(r.name_en,'en')||wrongScript(r.name_ru,'ru')||wrongScript(r.name_he,'he')){
            (async function(){ try{
              var patch=await learnNames(sb,r.lat,r.lng,r,name);
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
        async function look(q){
          try{
            const r=await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=1&accept-language='+lg+'&q='+encodeURIComponent(q));
            const jj=await r.json(); return (jj&&jj[0])||null;
          }catch(e){ return null; } }
        let hit=await look(name);
        /* ASK AGAIN IN ENGLISH (Leon, 2026-09-06: Basya's birthplace, typed in Hebrew, stayed
           Hebrew on a Russian page). OpenStreetMap can only be searched in a spelling it
           holds, and a small village typed in Hebrew - לובוניצ'י for Lubonichi - matches
           nothing, so the place was never learned AT ALL and had no name in any language.
           When the map does not know the spelling we were given, we carry the name into
           English and ask once more; that is how the forest meets small places. */
        /* ASK IN EVERY TONGUE BEFORE GIVING UP (Leon, 2026-09-06: "in this case the app did
           find it in the end, but it had to look better"). Lubonichi is on the map as
           Любоничи and nowhere as Lubonichi, so one English retry was not enough: the name is
           carried into ALL the other languages and each spelling is tried in turn. */
        let englished='', tried=[];
        if(!hit){
          const others=['en','ru','he'].filter(function(l){ return l!==(lang||'en'); });
          for(let oi=0; oi<others.length && !hit; oi++){
            const alt=await carryName(sb, name, others[oi]);
            if(!alt || tried.indexOf(alt)>=0) continue;
            tried.push(alt);
            if(others[oi]==='en') englished=alt;
            await new Promise(function(z){setTimeout(z,1100);});
            hit=await look(alt);
            if(hit && !englished && others[oi]!=='en') englished='';
          }
        }
        /* still nothing on the map: the place is real to the family even if OSM has never
           heard of it, so it is remembered by NAME ALONE - no coordinates, three spellings,
           and it stops showing one language's letters to everybody else. */
        if(!hit){
          const only={name:name, lat:null, lng:null, label:null};
          const patch0=await learnNames(sb, null, null, {name_en:englished||''}, englished||name);
          if(englished) only.name_en=englished;
          Object.assign(only, patch0);
          only.unplaced=true;              /* named in three tongues, but not on the map */
          if(only.name_en||only.name_ru||only.name_he){
            try{ sb.from('place_geo').insert(only).then(function(){},function(){}); }catch(e){}
            return only;
          }
          return {name:name, unplaced:true, unknown:true};   /* not even a spelling: say so */
        }
        const row={name:name, lat:+hit.lat, lng:+hit.lon, label:hit.display_name||null,
                   country:(hit.address&&hit.address.country)||null,
                   country_code:(hit.address&&hit.address.country_code||'').toUpperCase()||null};
        /* the place learns its name in all three tongues, once, from its coordinates */
        try{ var patch=await learnNames(sb,row.lat,row.lng,null,englished||name); Object.assign(row,patch); }catch(e){}
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
