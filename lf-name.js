/* What we call a person — decided once, for the whole forest.

   Names used to live in three places: people.display_name, people.called_name and
   name_variants, with person_facts as a fourth. Different pages read different ones, so
   Nadezhda showed as נדיה מטבייב under a photograph while her page correctly said
   Nadezhda Matveev, and searching for "Nadezhda" found nobody. person_facts is now the
   single store (Leon, 2026-08-10) and this is the only rule for turning it into a label.

   The rule, in order:
     1. called   in the reader's language      - what her family actually calls her
     2. called   in any language               - a familiar name beats a formal one
     3. given (+ family) in the reader's language
     4. given (+ family) in any language
     5. display  in any language               - older records
   'und' means language-neutral: it matches every reader.

   LFName.label(facts, lang)      -> the name to show
   LFName.all(facts)              -> every name string this person has, any language
   LFName.matches(facts, query)   -> true if any of them contains the query */
(function(){
  if(window.LFName) return;

  function rows(facts, field, lang){
    return (facts||[]).filter(function(f){
      return f && f.field===field && (f.status==null || f.status==='published')
          && (lang==null || f.lang===lang || f.lang==='und');
    });
  }
  function first(list){
    for(var i=0;i<list.length;i++){
      var v=String(list[i].value==null?'':list[i].value).trim();
      if(v) return v;
    }
    return '';
  }
  /* Never say a name twice. The 29 people whose only name was a display string keep it
     whole as 'called' - "Sofia Mitelman" - and blindly appending the family name gave
     "Sofia Mitelman Мительман". If the first part already contains the family name, or the
     two are in different scripts, the family name is left off. */
  function sameScript(a,b){
    var cyr=/[\u0400-\u04FF]/, heb=/[\u0590-\u05FF]/;
    return (cyr.test(a)===cyr.test(b)) && (heb.test(a)===heb.test(b));
  }
  function join(a,b){
    a=(a||'').trim(); b=(b||'').trim();
    if(!a) return b; if(!b) return a;
    if(a.toLowerCase().indexOf(b.toLowerCase())>=0) return a;   /* already contains it */
    if(!sameScript(a,b)) return a;                              /* do not mix alphabets */
    return a+' '+b;
  }

  /* Leon's rule, 2026-08-10:
       1. called + family      - what her family calls her, with the family name
       2. given  + family      - the formal name
       3. any single part      - when there is neither, show whatever exists
     A name in the reader's language wins; 'und' is language-neutral and matches everyone;
     a name in another language is better than no name at all. */
  function pick(facts, field, lang){
    return first(rows(facts,field,lang)) || first(rows(facts,field,null));
  }
  function label(facts, lang){
    lang=lang||'en';
    var family=pick(facts,'family',lang);
    var called=pick(facts,'called',lang);
    if(called) return join(called,family);
    var given=pick(facts,'given',lang);
    if(given) return join(given,family);
    var fields=['family','maiden','given','called'];
    for(var i=0;i<fields.length;i++){
      var v=pick(facts,fields[i],lang);
      if(v) return v;
    }
    return '';
  }

  /* every spelling this person has, so a search finds them by any of them */
  function all(facts){
    var out=[], seen={};
    (facts||[]).forEach(function(f){
      if(!f) return;
      if(['called','given','family','maiden'].indexOf(f.field)<0) return;
      if(!(f.status==null||f.status==='published')) return;
      var v=String(f.value==null?'':f.value).trim();
      if(v && !seen[v]){ seen[v]=1; out.push(v); }
    });
    return out;
  }

  function matches(facts, query){
    var q=String(query||'').trim().toLowerCase();
    if(!q) return true;
    var names=all(facts);
    for(var i=0;i<names.length;i++) if(names[i].toLowerCase().indexOf(q)>=0) return true;
    /* "Nadezhda Matveev" should also be found by typing the two parts together */
    return names.join(' ').toLowerCase().indexOf(q)>=0;
  }

  /* group flat person_facts rows by person, ready for the three calls above */
  function byPerson(factRows){
    var m={};
    (factRows||[]).forEach(function(f){ if(!f||!f.person_id) return;
      (m[f.person_id]=m[f.person_id]||[]).push(f); });
    return m;
  }

  window.LFName={ label:label, all:all, matches:matches, byPerson:byPerson };
})();
