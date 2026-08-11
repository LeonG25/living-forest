/* One place to ask about a person.

   A person's details were spread across nine sources - people.display_name, called_name,
   primary_asset, metadata.face_box, portrait_path, name_variants, person_facts,
   artefact_subjects, relationships - and each page read whichever it happened to know
   about. Nothing kept them in step, so the same person could have the right name on one
   page and a stale one on another, the right face on the tree and an older face on their
   own page. Nobody designed that; it accumulated.

   This is the single accessor. Pages ask LFPerson for a person and get everything, already
   resolved by one rule. No page should query people, person_facts or name_variants itself.

   LFPerson.init(sb)
   LFPerson.get(id, {lang})        -> one person, fully assembled
   LFPerson.many(ids, {lang})      -> a map of them, in one round trip
   LFPerson.all({lang})            -> every published person (for pickers and searches)
   LFPerson.invalidate(id)         -> forget a person after an edit

   What comes back:
     { id, name, names[], portrait, face:{path,box}, born, died, sex, status,
       kin:[{kind,other,dir}], photos:[{artefact_id,storage_path,box}], raw:{...} } */
(function(){
  if(window.LFPerson) return;

  var sb=null, cache={}, allCache=null;
  function init(client){ sb=client||sb; return window.LFPerson; }

  var NAME_FIELDS=['called','given','family','display','maiden'];

  function factsOf(rows, id){ return (rows||[]).filter(function(f){ return f.person_id===id; }); }

  function assemble(p, facts, tags, rels, lang){
    var f=facts||[];
    var name = (window.LFName ? LFName.label(f, lang) : '') || p.display_name || p.called_name || '';
    var names = window.LFName ? LFName.all(f) : [];
    /* the baked portrait is the face; the source photograph and box are kept so it can be
       re-framed, never so it can be re-cropped for display */
    var facePath = p.primary_asset || null, faceBox = (p.metadata && p.metadata.face_box) || null;
    if(!facePath && tags && tags.length){ facePath = tags[0].storage_path || null; faceBox = faceBox || tags[0].box || null; }
    function fact(field){
      var hit = f.filter(function(x){ return x.field===field && (x.lang===lang || x.lang==='und' || x.lang==null); })[0]
             || f.filter(function(x){ return x.field===field; })[0];
      return hit ? hit.value : null;
    }
    return {
      id: p.id,
      name: name,
      names: names,
      portrait: p.portrait_path || null,
      face: { path: facePath, box: faceBox },
      born: fact('birth'), died: fact('death'),
      birthPrecision: p.birth_precision || null, deathPrecision: p.death_precision || null,
      sex: p.sex || null,
      status: p.status || null,
      kin: rels || [],
      photos: tags || [],
      facts: f,
      raw: p
    };
  }

  async function many(ids, opts){
    opts=opts||{}; var lang=opts.lang||'en';
    ids=(ids||[]).filter(Boolean);
    if(!sb || !ids.length) return {};
    var need=ids.filter(function(id){ return !cache[id+'|'+lang]; });
    if(need.length){
      var people=[], facts=[], tags=[], rels=[];
      try{ var a=await sb.from('people')
             .select('id,display_name,called_name,sex,status,primary_asset,portrait_path,metadata,birth_date,death_date,birth_precision,death_precision')
             .in('id',need); people=a.data||[]; }catch(e){}
      try{ var b=await sb.from('person_facts').select('person_id,field,lang,value,status')
             .in('person_id',need).eq('status','published'); facts=b.data||[]; }catch(e){}
      try{ var c=await sb.from('artefact_subjects').select('person_id,artefact_id,detail,status')
             .in('person_id',need).eq('status','published'); tags=c.data||[]; }catch(e){}
      try{ var d=await sb.from('relationships').select('from_person,to_person,kind,certainty,status')
             .or('from_person.in.('+need.join(',')+'),to_person.in.('+need.join(',')+')')
             .eq('status','published'); rels=d.data||[]; }catch(e){}
      var artIds=[...new Set(tags.map(function(t){ return t.artefact_id; }).filter(Boolean))];
      var paths={};
      if(artIds.length){ try{ var e2=await sb.from('artefacts').select('id,storage_path').in('id',artIds);
        (e2.data||[]).forEach(function(a){ paths[a.id]=a.storage_path; }); }catch(e){} }
      people.forEach(function(p){
        var myTags=tags.filter(function(t){ return t.person_id===p.id; })
          .map(function(t){ return {artefact_id:t.artefact_id, storage_path:paths[t.artefact_id]||null, box:t.detail||null}; });
        var myKin=rels.filter(function(r){ return r.from_person===p.id || r.to_person===p.id; })
          .map(function(r){ return {kind:r.kind, other:(r.from_person===p.id?r.to_person:r.from_person),
                                    dir:(r.from_person===p.id?'out':'in'), certainty:r.certainty}; });
        cache[p.id+'|'+lang]=assemble(p, factsOf(facts,p.id), myTags, myKin, lang);
      });
    }
    var out={};
    ids.forEach(function(id){ if(cache[id+'|'+lang]) out[id]=cache[id+'|'+lang]; });
    return out;
  }

  async function get(id, opts){
    var m=await many([id], opts);
    return m[id]||null;
  }

  /* every published person, names resolved - what a picker or a search needs */
  async function all(opts){
    opts=opts||{}; var lang=opts.lang||'en';
    if(allCache && allCache.lang===lang) return allCache.list;
    if(!sb) return [];
    var people=[], facts=[];
    try{ var a=await sb.from('people')
           .select('id,display_name,called_name,sex,status,primary_asset,portrait_path,metadata')
           .eq('status','published'); people=a.data||[]; }catch(e){}
    try{ var b=await sb.from('person_facts').select('person_id,field,lang,value,status')
           .in('field',NAME_FIELDS).eq('status','published'); facts=b.data||[]; }catch(e){}
    var list=people.map(function(p){ return assemble(p, factsOf(facts,p.id), null, null, lang); });
    try{ list.sort(function(x,y){ return String(x.name).localeCompare(String(y.name)); }); }catch(e){}
    allCache={lang:lang, list:list};
    return list;
  }

  function invalidate(id){
    if(!id){ cache={}; allCache=null; return; }
    Object.keys(cache).forEach(function(k){ if(k.indexOf(id+'|')===0) delete cache[k]; });
    allCache=null;
  }

  window.LFPerson={ init:init, get:get, many:many, all:all, invalidate:invalidate };
})();
