/* LF-KIN — one brain for "who is this person to me".
   Leon, 2026-09-06: the person page had a button asking WHO HE WAS, when the app already
   knows - and the reel had been answering the same question correctly for a week from its
   own private copy of this engine. A second copy is how two pages come to disagree, so the
   engine moved here and both pages ask it. BFS over the published graph (parent / sibling /
   partner edges), up+down compressed to sib, proper terms for close relations and a
   descriptive chain for distant ones, in all three languages - Leon's ruling, unchanged. */
(function(){
  if(window.LFKin) return;
  function kinPath(a,b,upOf,downOf,sibsOf,sideOf){ if(!a||!b) return null; if(a===b) return [];
    const prev={}; prev[a]={p:null}; let q=[a];
    for(let guard=0; guard<40 && q.length && !prev[b]; guard++){ const nq=[];
      for(const x of q){ const push=(y,tp)=>{ if(y&&!prev[y]){ prev[y]={p:x,t:tp}; nq.push(y); } };
        upOf(x).forEach(y=>push(y,'up')); downOf(x).forEach(y=>push(y,'down')); sibsOf(x).forEach(y=>push(y,'sib')); sideOf(x).forEach(y=>push(y,'partner')); }
      q=nq; }
    if(!prev[b]) return null;
    const steps=[]; let cur=b; while(prev[cur]&&prev[cur].p!=null){ steps.unshift({t:prev[cur].t,node:cur}); cur=prev[cur].p; }
    const out=[]; for(let i=0;i<steps.length;i++){
      if(steps[i].t==='up'&&steps[i+1]&&steps[i+1].t==='down'){ out.push({t:'sib',node:steps[i+1].node}); i++; }
      else out.push(steps[i]); }
    return out; }
  /* step words: RU keeps [nominative, genitive, "your X"], the rest keep one word */
  const KW={
    en:{up:{f:'mother',m:'father',n:'parent'},down:{f:'daughter',m:'son',n:'child'},sib:{f:'sister',m:'brother',n:'sibling'},partner:{f:'wife',m:'husband',n:'partner'}},
    ru:{up:{f:['мама','мамы','твоей мамы'],m:['папа','папы','твоего папы'],n:['родитель','родителя','твоего родителя']},
        down:{f:['дочь','дочери','твоей дочери'],m:['сын','сына','твоего сына'],n:['ребёнок','ребёнка','твоего ребёнка']},
        sib:{f:['сестра','сестры','твоей сестры'],m:['брат','брата','твоего брата'],n:['брат или сестра','брата или сестры','твоего брата или сестры']},
        partner:{f:['жена','жены','твоей жены'],m:['муж','мужа','твоего мужа'],n:['спутник','спутника','твоего спутника']}},
    he:{up:{f:'אמא',m:'אבא',n:'הורה'},down:{f:'בת',m:'בן',n:'ילד'},sib:{f:'אחות',m:'אח',n:'אח או אחות'},partner:{f:'אישה',m:'בעל',n:'בן זוג'}}};
  /* proper terms for close relations (Leon's ruling); anything further falls to the chain */
  const KCLOSE={
    en:{'up':{f:'Your mother',m:'Your father',n:'Your parent'},'down':{f:'Your daughter',m:'Your son',n:'Your child'},
        'sib':{f:'Your sister',m:'Your brother',n:'Your sibling'},'partner':{f:'Your wife',m:'Your husband',n:'Your partner'},
        'up,up':{f:'Your grandmother',m:'Your grandfather',n:'Your grandparent'},
        'up,up,up':{f:'Your great-grandmother',m:'Your great-grandfather',n:'Your great-grandparent'},
        'down,down':{f:'Your granddaughter',m:'Your grandson',n:'Your grandchild'},
        'down,down,down':{f:'Your great-granddaughter',m:'Your great-grandson',n:'Your great-grandchild'},
        'up,sib':{f:'Your aunt',m:'Your uncle',n:'Your aunt or uncle'},
        'sib,down':{f:'Your niece',m:'Your nephew',n:'Your niece or nephew'},
        'up,sib,down':{f:'Your cousin',m:'Your cousin',n:'Your cousin'},
        'up,up,sib':{f:'Your great-aunt',m:'Your great-uncle',n:'Your great-aunt or great-uncle'}},
    ru:{'up':{f:'Твоя мама',m:'Твой папа',n:'Твой родитель'},'down':{f:'Твоя дочь',m:'Твой сын',n:'Твой ребёнок'},
        'sib':{f:'Твоя сестра',m:'Твой брат',n:'Твои брат или сестра'},'partner':{f:'Твоя жена',m:'Твой муж',n:'Твой спутник'},
        'up,up':{f:'Твоя бабушка',m:'Твой дедушка',n:'Твои бабушка или дедушка'},
        'up,up,up':{f:'Твоя прабабушка',m:'Твой прадедушка',n:'Твои прабабушка или прадедушка'},
        'down,down':{f:'Твоя внучка',m:'Твой внук',n:'Твои внуки'},
        'down,down,down':{f:'Твоя правнучка',m:'Твой правнук',n:'Твои правнуки'},
        'up,sib':{f:'Твоя тётя',m:'Твой дядя',n:'Твои тётя или дядя'},
        'sib,down':{f:'Твоя племянница',m:'Твой племянник',n:'Твои племянники'},
        'up,sib,down':{f:'Твоя двоюродная сестра',m:'Твой двоюродный брат',n:'Твои двоюродные'},
        'up,up,sib':{f:'Твоя двоюродная бабушка',m:'Твой двоюродный дедушка',n:'Твои двоюродные бабушка или дедушка'}},
    he:{'up':{f:'אמא שלך',m:'אבא שלך',n:'ההורה שלך'},'down':{f:'הבת שלך',m:'הבן שלך',n:'הילד/ה שלך'},
        'sib':{f:'אחותך',m:'אחיך',n:'אח או אחות שלך'},'partner':{f:'אשתך',m:'בעלך',n:'בן/בת הזוג שלך'},
        'up,up':{f:'סבתא שלך',m:'סבא שלך',n:'סבא או סבתא שלך'},
        'up,up,up':{f:'סבתא רבתא שלך',m:'סבא רבא שלך',n:'סבא רבא או סבתא רבתא שלך'},
        'down,down':{f:'הנכדה שלך',m:'הנכד שלך',n:'הנכד/ה שלך'},
        'down,down,down':{f:'הנינה שלך',m:'הנין שלך',n:'הנין/ה שלך'},
        'up,sib':{f:'דודה שלך',m:'דוד שלך',n:'דוד או דודה שלך'},
        'sib,down':{f:'האחיינית שלך',m:'האחיין שלך',n:'האחיין/ית שלך'},
        'up,sib,down':{f:'בת הדודה שלך',m:'בן הדוד שלך',n:'בן/בת הדוד שלך'}}};
  function caption(o){
    o=o||{}; var ME=o.me, PERSON_ID=o.target, lang=o.lang||'en';
    var EDGES=o.edges||[];
    var sexOf=o.sexOf||function(){return 'n';};
    if(!ME||!PERSON_ID) return null;
    if(ME===PERSON_ID) return {self:true, cap:o.selfText||''};
    var upOf=function(x){return EDGES.filter(function(e){return e.k==='parent'&&e.to===x;}).map(function(e){return e.from;});};
    var downOf=function(x){return EDGES.filter(function(e){return e.k==='parent'&&e.from===x;}).map(function(e){return e.to;});};
    var sideOf=function(x){return EDGES.filter(function(e){return e.k==='partner'&&(e.from===x||e.to===x);}).map(function(e){return e.from===x?e.to:e.from;});};
    var sibsOf=function(x){return EDGES.filter(function(e){return e.k==='sib'&&(e.from===x||e.to===x);}).map(function(e){return e.from===x?e.to:e.from;});};
    const path=kinPath(ME,PERSON_ID,upOf,downOf,sibsOf,sideOf); if(!path||!path.length) return null;
    const key=path.map(s=>s.t).join(','); const g=sexOf(PERSON_ID);
    const close=(KCLOSE[lang]||{})[key]; if(close) return {cap:close[g]||close.n};
    if(path.length>5) return null;
    if(lang==='ru'){ const parts=[];
      for(let i=path.length-1;i>=0;i--){ const st=path[i]; const trip=KW.ru[st.t][sexOf(st.node)]||KW.ru[st.t].n;
        parts.push(i===path.length-1?trip[0]:(i===0?trip[2]:trip[1])); }
      const s=parts.join(' '); return {cap:s.charAt(0).toUpperCase()+s.slice(1)}; }
    if(lang==='he'){ const ws=path.map(st=>KW.he[st.t][sexOf(st.node)]||KW.he[st.t].n);
      return {cap:ws.slice().reverse().join(' של ')+' שלך'}; }
    const ws=path.map(st=>KW.en[st.t][sexOf(st.node)]||KW.en[st.t].n);
    return {cap:'Your '+ws.map((w,i)=>i<ws.length-1?w+'’s':w).join(' ')};
  }

  window.LFKin={ caption:caption, path:kinPath };
})();
