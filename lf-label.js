/* What we call a person, for pages that only need the name.

   Seven pages had grown their own copy of this rule and they had already begun to drift -
   one produced "Rita בטיטו-גולניק", half in each alphabet, because its copy lacked the
   script guard the others had. This is the rule once, for any page that just wants a name.

   LFLabel.load(sb, ids?)   -> fetch published name parts (all people, or just these)
   LFLabel.of(id, lang)     -> the name to show
   LFLabel.map(lang)        -> {id: name} for everyone loaded */
(function(){
  if(window.LFLabel) return;
  var F={};   /* id -> [name facts] */

  var CYR=/[\u0400-\u04FF]/, HEB=/[\u0590-\u05FF]/;
  function sameScript(a,b){ return (CYR.test(a)===CYR.test(b)) && (HEB.test(a)===HEB.test(b)); }
  function join(a,b){
    a=(a||'').trim(); b=(b||'').trim();
    if(!a) return b; if(!b) return a;
    if(a.toLowerCase().indexOf(b.toLowerCase())>=0) return a;   /* already contains it */
    if(!sameScript(a,b)) return a;                              /* never mix alphabets */
    return a+' '+b;
  }

  function of(id, lang){
    var parts=F[id]||[]; if(!parts.length) return '';
    lang=lang||'en';
    function pick(field,lg){
      for(var i=0;i<parts.length;i++)
        if(parts[i].field===field && parts[i].lang===lg) return parts[i].value||'';
      return '';
    }
    /* the reader's language first, then language-neutral, then anything rather than nothing */
    var order=[lang,'und','en','ru','he'];
    for(var i=0;i<order.length;i++){
      var lg=order[i], called=pick('called',lg), given=pick('given',lg), family=pick('family',lg);
      if(called) return join(called,family);
      if(given)  return join(given,family);
      if(family) return family;
    }
    return parts[0].value||'';
  }

  async function load(sb, ids){
    if(!sb) return;
    try{
      var q=sb.from('person_facts').select('person_id,field,lang,value')
             .in('field',['called','given','family','maiden']).eq('status','published');
      if(ids && ids.length) q=q.in('person_id', ids);
      var r=await q;
      (r.data||[]).forEach(function(f){ (F[f.person_id]=F[f.person_id]||[]).push(f); });
    }catch(e){}
  }

  function map(lang){
    var out={};
    Object.keys(F).forEach(function(id){ out[id]=of(id,lang); });
    return out;
  }

  window.LFLabel={ load:load, of:of, map:map };
})();
