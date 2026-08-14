/* The invitation engine — one machinery under every Fen guidance surface.
   LFInvite.next(sb, uid, lang) -> { kind:'meet'|'story'|'place', line, go, person_id? }
   Ranking: unmet close kin > unheard stories about known people > untrod places.
   The bud, the clearing and the whispers all draw from here, so Fen never
   contradicts herself between surfaces. */
(function(){
  if(window.LFInvite) return;
  function t(lang, key, name){
    var L={
      en:{ meet: name+" is family — and still a stranger to you. Come, I\u2019ll introduce you.",
           story:"There\u2019s a story about "+name+" you haven\u2019t heard. Come and listen.",
           place:"The family\u2019s places are waiting on the globe. Walk one with me?",
           yes:"Come along", no:"Not now" },
      ru:{ meet: name+" — родня, а вы ещё незнакомы. Идём, познакомлю.",
           story:"Есть история о "+name+", которую ты ещё не слышал. Идём, послушаем.",
           place:"Семейные места ждут на глобусе. Пройдёмся?",
           yes:"Идём", no:"Не сейчас" },
      he:{ meet: name+" מהמשפחה — ועדיין לא הכרתם. בואו, אכיר ביניכם.",
           story:"יש סיפור על "+name+" שעוד לא שמעת. בואו נקשיב.",
           place:"המקומות של המשפחה מחכים על הגלובוס. נצא לדרך?",
           yes:"בואו", no:"לא עכשיו" }
    };
    return (L[lang]||L.en)[key];
  }
  async function nameFor(sb, pid, lang){
    try{ const {data}=await sb.from('person_facts').select('lang,value').eq('person_id',pid).in('field',['called','given','family']).eq('status','published');
      const m={}; (data||[]).forEach(r=>m[r.lang]=r.value);
      if(m[lang]||m.en) return m[lang]||m.en; }catch(e){}
    try{
      /* the forest's one naming rule, not the stale column */
      if(window.LFLabel){ await LFLabel.load(sb,[pid]);
        const n=LFLabel.of(pid,(localStorage.getItem('lf_lang')||'en')); if(n) return n; }
      const {data:p}=await sb.from('people').select('').eq('id',pid).maybeSingle();
      return (p&&(p.called_name||p.display_name))||''; }catch(e){ return ''; }
  }
  window.LFInvite={
    /* three standing invitations for the clearing: meet, story, place */
    trio: async function(sb, uid, lang){
      lang=lang||'en';
      const out={};
      try{ out.meet=await window.LFInvite.next(sb, uid, lang); }catch(e){}
      try{
        const {data:subs}=await sb.from('artefact_subjects').select('person_id');
        const cnt={}; (subs||[]).forEach(x=>{ cnt[x.person_id]=(cnt[x.person_id]||0)+1; });
        const ids=Object.keys(cnt).filter(id=>!(out.meet&&out.meet.person_id===id)).sort((a,b)=>cnt[b]-cnt[a]);
        if(ids.length){ const pid=ids[Math.floor(Math.random()*Math.min(3,ids.length))];
          const nm=await nameFor(sb,pid,lang)||'';
          out.story={ kind:'story', person_id:pid, line:t(lang,'story',nm),
                      go:'game-who-is-who.html?id='+encodeURIComponent(pid) }; }
      }catch(e){}
      try{
        const {data:pg}=await sb.from('place_geo').select('name,country').limit(40);
        const pick=(pg||[])[Math.floor(Math.random()*Math.max(1,(pg||[]).length))];
        out.place={ kind:'place', place:pick&&pick.name||null,
                    line:t(lang,'place'), go:'game-where-was-this.html' };
      }catch(e){ out.place={kind:'place', line:t(lang,'place'), go:'game-where-was-this.html'}; }
      return out;
    },
    next: async function(sb, uid, lang){
      lang=lang||'en';
      try{
        /* who am I (anchor first, keeper link second) */
        let me=null;
        try{ const {data:a}=await sb.from('player_anchors').select('person_id').eq('user_id',uid).maybeSingle(); me=a&&a.person_id; }catch(e){}
        if(!me){ try{ const {data:pr}=await sb.from('profiles').select('person_id').eq('id',uid).maybeSingle(); me=pr&&pr.person_id; }catch(e){} }
        /* what do I already know */
        const known={};
        try{ const {data:ke}=await sb.from('knowledge_events').select('person_id').eq('user_id',uid); (ke||[]).forEach(k=>{ if(k.person_id) known[k.person_id]=1; }); }catch(e){}
        if(me) known[me]=1;
        /* kin rings from the anchor */
        let ring={};
        if(me){ try{
          const {data:rels}=await sb.from('relationships').select('from_person,to_person').eq('status','published');
          const adj={}; (rels||[]).forEach(r=>{ (adj[r.from_person]=adj[r.from_person]||[]).push(r.to_person); (adj[r.to_person]=adj[r.to_person]||[]).push(r.from_person); });
          let front=[me], depth=0, seen={}; seen[me]=1;
          while(front.length&&depth<6){ depth++; const nxt=[];
            front.forEach(p=>(adj[p]||[]).forEach(q=>{ if(!seen[q]){ seen[q]=1; ring[q]=depth; nxt.push(q); } })); front=nxt; }
        }catch(e){} }
        /* candidates: published people with a portrait, unmet first, nearest kin first */
        const {data:people}=await sb.from('people').select('id,primary_asset,status');
        const pool=(people||[]).filter(p=>(!p.status||p.status==='published'));
        const unmet=pool.filter(p=>!known[p.id]).sort((a,b)=>((ring[a.id]||99)-(ring[b.id]||99)) || ((b.primary_asset?1:0)-(a.primary_asset?1:0)));
        if(unmet.length){ const p=unmet[0]; const nm=await nameFor(sb,p.id,lang)||'Someone';
          return { kind:'meet', person_id:p.id, line:t(lang,'meet',nm),
                   yes:t(lang,'yes'), no:t(lang,'no'),
                   go:'game-who-is-who.html?id='+encodeURIComponent(p.id) }; }
        /* everyone met: an unheard story about a known person (most storied first) */
        try{ const {data:subs}=await sb.from('artefact_subjects').select('artefact_id,person_id');
          const cnt={}; (subs||[]).forEach(s=>{ cnt[s.person_id]=(cnt[s.person_id]||0)+1; });
          const storied=pool.filter(p=>cnt[p.id]).sort((a,b)=>cnt[b.id]-cnt[a.id]);
          if(storied.length){ const p=storied[Math.floor(Math.random()*Math.min(3,storied.length))];
            const nm=await nameFor(sb,p.id,lang)||'Someone';
            return { kind:'story', person_id:p.id, line:t(lang,'story',nm),
                     yes:t(lang,'yes'), no:t(lang,'no'),
                     go:'game-who-is-who.html?id='+encodeURIComponent(p.id) }; } }catch(e){}
        /* the globe as the standing invitation */
        return { kind:'place', line:t(lang,'place'), yes:t(lang,'yes'), no:t(lang,'no'), go:'game-where-was-this.html' };
      }catch(e){ return { kind:'place', line:t(lang,'place'), yes:t(lang,'yes'), no:t(lang,'no'), go:'game-where-was-this.html' }; }
    }
  };
})();
