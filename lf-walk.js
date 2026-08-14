/* lf-walk.js — the Journal's Walk. Design: docs/designs/2026-07-28--walk-journal-anchor--v1.html
   Inserts tabs [My walk | The family | The log] above the Journal's log.
   Levels of knowing per docs/progression-spec.md: met | followed | heard | woven.
   A level is a level: earned beads glow gold; offerable-unearned beads sit dim;
   unofferable levels are absent. The family view shows flames, never numbers per person.
   Requires: supabase-js CDN (journal has it), lf-face.js for portraits, lf-fen.js optional. */
(function(){
  if(window.__lfWalk) return; window.__lfWalk=1;
  var SB_URL='https://oabcdrktuikifbormjip.supabase.co';
  var SB_KEY='sb_publishable_MnuwKTP5JaUy-P8-bKWsgA_f98esOXC';
  var sb=null;
  try{ sb=window.supabase.createClient(SB_URL,SB_KEY); }catch(e){ return; }
  if(window.LFFace) try{ LFFace.init(sb); }catch(e){}

  function lang(){ try{ var l=localStorage.getItem('lf_lang'); if(l==='ru'||l==='he') return l; }catch(e){} return 'en'; }
  var T={
    en:{dir:'ltr',walk:'My walk',family:'The family',log:'The log',
        levels:{met:'MET',followed:'FOLLOWED',heard:'HEARD',woven:'WOVEN'},
        edge:'THE EDGE OF THE KNOWN',
        sug:function(n){return 'Close by stands <b>'+n+'</b> \u2014 go and meet them.';},
        together:function(a,b){return 'Together the family knows '+a+' of '+b+'.';},
        empty:'Play any game \u2014 the people you know gather here.',
        choose:'Choose who you are in this forest',
        fen:function(n){return 'Close by stands '+n+' \u2014 go and meet them.';}},
    ru:{dir:'ltr',walk:'\u041c\u043e\u0439 \u043f\u0443\u0442\u044c',family:'\u0421\u0435\u043c\u044c\u044f',log:'\u0417\u0430\u043f\u0438\u0441\u0438',
        levels:{met:'\u0417\u041d\u0410\u041a\u041e\u041c\u042b',followed:'\u041f\u0423\u0422\u042c',heard:'\u0413\u041e\u041b\u041e\u0421',woven:'\u041d\u0418\u0422\u0418'},
        edge:'\u041a\u0420\u0410\u0419 \u0417\u041d\u0410\u041a\u041e\u041c\u041e\u0413\u041e',
        sug:function(n){return '\u0421\u043e\u0432\u0441\u0435\u043c \u0440\u044f\u0434\u043e\u043c \u2014 <b>'+n+'</b>. \u0418\u0434\u0438 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f.';},
        together:function(a,b){return '\u0412\u043c\u0435\u0441\u0442\u0435 \u0441\u0435\u043c\u044c\u044f \u0437\u043d\u0430\u0435\u0442 '+a+' \u0438\u0437 '+b+'.';},
        empty:'\u0421\u044b\u0433\u0440\u0430\u0439 \u0432 \u043b\u044e\u0431\u0443\u044e \u0438\u0433\u0440\u0443 \u2014 \u0437\u0434\u0435\u0441\u044c \u0441\u043e\u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0442\u0435, \u043a\u043e\u0433\u043e \u0442\u044b \u0437\u043d\u0430\u0435\u0448\u044c.',
        choose:'\u0412\u044b\u0431\u0435\u0440\u0438, \u043a\u0442\u043e \u0442\u044b \u0432 \u044d\u0442\u043e\u043c \u043b\u0435\u0441\u0443',
        fen:function(n){return '\u0421\u043e\u0432\u0441\u0435\u043c \u0440\u044f\u0434\u043e\u043c \u2014 '+n+'. \u0418\u0434\u0438 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f.';}},
    he:{dir:'rtl',walk:'\u05d4\u05d3\u05e8\u05da \u05e9\u05dc\u05d9',family:'\u05d4\u05de\u05e9\u05e4\u05d7\u05d4',log:'\u05d4\u05d9\u05d5\u05de\u05df',
        levels:{met:'\u05de\u05db\u05d9\u05e8\u05d9\u05dd',followed:'\u05d4\u05d3\u05e8\u05da',heard:'\u05d4\u05e7\u05d5\u05dc',woven:'\u05d4\u05d7\u05d5\u05d8\u05d9\u05dd'},
        edge:'\u05e7\u05e6\u05d4 \u05d4\u05de\u05d5\u05db\u05e8',
        sug:function(n){return '\u05de\u05de\u05e9 \u05e7\u05e8\u05d5\u05d1 \u2014 <b>'+n+'</b>. \u05dc\u05db\u05d5 \u05dc\u05d4\u05db\u05d9\u05e8.';},
        together:function(a,b){return '\u05d9\u05d7\u05d3 \u05d4\u05de\u05e9\u05e4\u05d7\u05d4 \u05de\u05db\u05d9\u05e8\u05d4 '+a+' \u05de\u05ea\u05d5\u05da '+b+'.';},
        empty:'\u05e9\u05d7\u05e7\u05d5 \u05d1\u05db\u05dc \u05de\u05e9\u05d7\u05e7 \u2014 \u05d4\u05d0\u05e0\u05e9\u05d9\u05dd \u05e9\u05d0\u05ea\u05dd \u05de\u05db\u05d9\u05e8\u05d9\u05dd \u05e0\u05d0\u05e1\u05e4\u05d9\u05dd \u05db\u05d0\u05df.',
        choose:'\u05d1\u05d7\u05e8\u05d5 \u05de\u05d9 \u05d0\u05ea\u05dd \u05d1\u05d9\u05e2\u05e8 \u05d4\u05d6\u05d4',
        fen:function(n){return '\u05de\u05de\u05e9 \u05e7\u05e8\u05d5\u05d1 \u2014 '+n+'. \u05dc\u05db\u05d5 \u05dc\u05d4\u05db\u05d9\u05e8.';}}
  };

  var css='#lfwalk{margin:0 0 14px;font-family:\'Hanken Grotesk\',system-ui,sans-serif;}'
   +'#lfwalk .tabs{display:flex;gap:8px;margin:2px 0 16px;flex-wrap:wrap;}'
   +'#lfwalk .tab{padding:8px 14px;border-radius:999px;font-size:13.5px;border:1px solid #223050;color:#9aa7bd;cursor:pointer;background:none;font-family:inherit;}'
   +'#lfwalk .tab.on{color:#f3cd84;border-color:rgba(243,205,132,.5);background:rgba(243,205,132,.08);}'
   +'#lfwalk .kcard{display:flex;gap:13px;align-items:center;padding:12px;border-radius:14px;background:rgba(11,18,34,.62);border:1px solid #1b2740;margin-bottom:10px;}'
   +'#lfwalk .kface{width:46px;height:46px;border-radius:50%;background:linear-gradient(140deg,#33415f,#1a2540);border:1px solid #2c3a58;flex:none;overflow:hidden;}'
   +'#lfwalk .kn{font-family:Georgia,serif;font-size:17px;color:#e9eef8;}'
   +'#lfwalk .kn a{color:inherit;text-decoration:none;}'
   +'#lfwalk .beads{display:flex;gap:6px;margin-top:5px;flex-wrap:wrap;}'
   +'#lfwalk .bead{font-size:10.5px;letter-spacing:.06em;padding:3px 8px;border-radius:999px;border:1px solid #26324e;color:#5d6c88;}'
   +'#lfwalk .bead.earn{color:#f3cd84;border-color:rgba(243,205,132,.55);background:rgba(243,205,132,.10);text-shadow:0 0 8px rgba(243,205,132,.35);}'
   +'#lfwalk .eh{letter-spacing:.2em;font-size:10.5px;color:#8fb7e8;text-transform:uppercase;margin:18px 0 9px;}'
   +'#lfwalk .sug{font-family:Georgia,serif;font-size:15.5px;line-height:1.5;padding:10px 12px;border-inline-start:2px solid rgba(243,205,132,.45);background:linear-gradient(90deg,rgba(243,205,132,.06),transparent);border-radius:0 12px 12px 0;margin-bottom:8px;color:#e9eef8;}'
   +'#lfwalk .sug b{color:#f3cd84;font-weight:500;}'
   +'#lfwalk .sug a{color:inherit;text-decoration:none;}'
   +'#lfwalk .frow{display:flex;align-items:center;gap:12px;padding:11px 4px;border-bottom:1px solid #141d31;}'
   +'#lfwalk .fname{font-family:Georgia,serif;font-size:16px;min-width:86px;color:#e9eef8;}'
   +'#lfwalk .flies{display:flex;flex-wrap:wrap;gap:5px;align-items:center;}'
   +'#lfwalk .fdot{width:7px;height:7px;border-radius:50%;background:#f3cd84;box-shadow:0 0 7px 1px rgba(243,205,132,.55);opacity:.9;animation:lfwfl 7s ease-in-out infinite;}'
   +'@keyframes lfwfl{0%,100%{transform:translate(0,0);opacity:.45}50%{transform:translate(-3px,-5px);opacity:.95}}'
   +'#lfwalk .together{margin-top:16px;color:#8fb7e8;font-size:13.5px;}'
   +'#lfwalk .emptyw{color:#9aa7bd;font-size:14.5px;line-height:1.5;padding:8px 2px;}'
   +'#lfwalk .cta{display:inline-block;margin-top:10px;color:#f3cd84;border:1px solid rgba(243,205,132,.5);border-radius:999px;padding:9px 15px;font-size:13.5px;text-decoration:none;}';
  var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);

  var D=null; // {uid, people{}, myLevels{}, offered{}, anchors[], events[], myAnchor, dist{}}
  var view='walk';

  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }

  /* One rule for a name, from person_facts: called+family, else given+family, else any
     part; reader's language, then und, then anything rather than nothing; never mixing
     alphabets. The walk named people - and Fen spoke their names - from the stale column. */
  var WNF={};
  function wlang(){ try{ return localStorage.getItem('lf_lang')||'en'; }catch(e){ return 'en'; } }
  function wname(id){
    var parts=WNF[id]||[]; if(!parts.length) return '';
    function pick(f,lg){ for(var i=0;i<parts.length;i++) if(parts[i].field===f&&parts[i].lang===lg) return parts[i].value||''; return ''; }
    var CYR=/[\u0400-\u04FF]/, HEB=/[\u0590-\u05FF]/;
    function join(a,c){ a=(a||'').trim(); c=(c||'').trim();
      if(!a) return c; if(!c) return a;
      if(a.toLowerCase().indexOf(c.toLowerCase())>=0) return a;
      if((CYR.test(a)!==CYR.test(c))||(HEB.test(a)!==HEB.test(c))) return a;
      return a+' '+c; }
    var order=[wlang(),'und','en','ru','he'];
    for(var i=0;i<order.length;i++){
      var lg=order[i], ca=pick('called',lg), gi=pick('given',lg), fa=pick('family',lg);
      if(ca) return join(ca,fa);
      if(gi) return join(gi,fa);
      if(fa) return fa;
    }
    return parts[0].value||'';
  }
  function personName(id){ var n=wname(id); if(n) return n;
    var p=D&&D.people&&D.people[id]; return p?(p.display_name||''):''; }
  function first(n){ n=String(n||''); var i=n.indexOf(' '); return i>0?n.slice(0,i):n; }

  async function load(){
    var u=await sb.auth.getUser().catch(function(){ return null; });
    var uid=u&&u.data&&u.data.user&&u.data.user.id; if(!uid) return null;
    var q=await Promise.all([
      sb.from('people').select('id,primary_asset,metadata').eq('status','published'),
      sb.from('knowledge_events').select('user_id,person_id,level,correct'),
      sb.from('player_anchors').select('user_id,person_id,status').eq('status','active'),
      sb.from('relationships').select('from_person,to_person').eq('status','published'),
      sb.from('artefact_subjects').select('person_id,artefact_id'),
      sb.from('artefacts').select('id,kind,metadata,status').eq('status','published'),
      /* LAST on purpose: inserting it earlier shifted every q[n] below, so events read
         name facts and anchors read events - the whole walk built from the wrong data. */
      sb.from('person_facts').select('person_id,field,lang,value').in('field',['called','given','family','maiden']).eq('status','published')
    ]);
    (q[6]&&q[6].data||[]).forEach(function(f){ (WNF[f.person_id]=WNF[f.person_id]||[]).push(f); });
    var people={}; (q[0].data||[]).forEach(function(p){ people[p.id]=p; });
    var events=q[1].data||[], anchors=q[2].data||[], rels=q[3].data||[];
    var subs=q[4].data||[], arts={}; (q[5].data||[]).forEach(function(a){ arts[a.id]=a; });

    /* offered levels per person, from what the forest holds */
    var offered={};
    Object.keys(people).forEach(function(id){ offered[id]={}; });
    var perArtSubs={};
    subs.forEach(function(s){ if(!people[s.person_id]) return;
      var o=offered[s.person_id], a=arts[s.artefact_id];
      o.met=true; /* a photo exists */
      if(a){ var when=a.metadata&&a.metadata.when; if(when){ o._dated=(o._dated||0)+1; if(o._dated>=2) o.followed=true; }
        if(a.kind&&/story|text|memory|voice|audio/i.test(a.kind)) o.heard=true; }
    });
    Object.keys(people).forEach(function(id){ var p=people[id]; if(p.primary_asset) offered[id].met=true; });
    rels.forEach(function(r){ if(offered[r.from_person]) offered[r.from_person].woven=true;
      if(offered[r.to_person]) offered[r.to_person].woven=true; });

    /* earned levels: mine, and per user for the family view */
    var myLevels={}, byUser={};
    events.forEach(function(e){ if(!e.correct||!people[e.person_id]) return;
      if(e.user_id===uid){ (myLevels[e.person_id]=myLevels[e.person_id]||{})[e.level]=true; }
      var m=(byUser[e.user_id]=byUser[e.user_id]||{}); (m[e.person_id]=m[e.person_id]||{})[e.level]=true; });

    /* kin distance BFS from my anchor over published relationships (undirected) */
    var myAnchor=null; anchors.forEach(function(a){ if(a.user_id===uid) myAnchor=a.person_id; });
    var adj={}; rels.forEach(function(r){ (adj[r.from_person]=adj[r.from_person]||[]).push(r.to_person);
      (adj[r.to_person]=adj[r.to_person]||[]).push(r.from_person); });
    var dist={};
    if(myAnchor&&people[myAnchor]){ dist[myAnchor]=0; var qd=[myAnchor];
      while(qd.length){ var n=qd.shift(); (adj[n]||[]).forEach(function(m){ if(dist[m]==null){ dist[m]=dist[n]+1; qd.push(m); } }); } }

    return {uid:uid,people:people,events:events,anchors:anchors,myLevels:myLevels,offered:offered,myAnchor:myAnchor,byUser:byUser,dist:dist};
  }

  var ORDER=['met','followed','heard','woven'];
  function beads(pid,L){ var o=D.offered[pid]||{}, m=D.myLevels[pid]||{};
    return ORDER.filter(function(k){ return o[k]||m[k]; })
      .map(function(k){ return '<span class="bead'+(m[k]?' earn':'')+'">'+L.levels[k]+'</span>'; }).join(''); }

  function edgeList(){ /* nearest content-bearing people not yet met */
    var out=Object.keys(D.people).filter(function(id){
      if(D.myLevels[id]) return false; var o=D.offered[id];
      return o&&(o.met||o.heard||o.followed||o.woven); });
    out.sort(function(a,b){ var da=D.dist[a]==null?99:D.dist[a], db=D.dist[b]==null?99:D.dist[b];
      return da-db || String(personName(a)).localeCompare(String(personName(b))); });
    return out.slice(0,3); }

  function render(){
    var L=T[lang()], host=document.getElementById('lfwalk'); if(!host||!D) return;
    host.dir=L.dir;
    var pad=document.querySelector('.pad'); /* the existing log */
    var html='<div class="tabs">'
      +'<button class="tab'+(view==='walk'?' on':'')+'" data-v="walk">'+L.walk+'</button>'
      +'<button class="tab'+(view==='family'?' on':'')+'" data-v="family">'+L.family+'</button>'
      +'<button class="tab'+(view==='log'?' on':'')+'" data-v="log">'+L.log+'</button></div>'
      +'<div class="body"></div>';
    host.innerHTML=html;
    var body=host.querySelector('.body');
    if(pad) pad.style.display=(view==='log')?'':'none';
    if(view==='log'){ body.innerHTML=''; return; }

    if(view==='walk'){
      var known=Object.keys(D.myLevels).filter(function(id){ return D.people[id]; });
      known.sort(function(a,b){ return Object.keys(D.myLevels[b]).length-Object.keys(D.myLevels[a]).length; });
      var h='';
      if(!D.myAnchor) h+='<div class="emptyw"><a class="cta" href="tree-real.html?choose=1">'+L.choose+'</a></div>';
      if(!known.length) h+='<div class="emptyw">'+L.empty+'</div>';
      known.forEach(function(id){ var p=D.people[id];
        h+='<div class="kcard"><div class="kface" data-pid="'+id+'"></div><div><div class="kn"><a href="person-real.html?id='+encodeURIComponent(id)+'">'+esc(p.display_name)+'</a></div>'
          +'<div class="beads">'+beads(id,L)+'</div></div></div>'; });
      var edge=edgeList();
      if(edge.length){ h+='<div class="eh">'+L.edge+'</div>';
        edge.forEach(function(id){ h+='<div class="sug"><a href="person-real.html?id='+encodeURIComponent(id)+'">'+L.sug(esc(personName(id)||D.people[id].display_name))+'</a></div>'; }); }
      body.innerHTML=h;
      hydrateFaces(body);
      /* Fen points the way — data-aware, only where content exists */
      if(edge.length&&window.Fen){ try{ Fen.say(L.fen(first(personName(edge[0])))); }catch(e){} }
    }

    if(view==='family'){
      var total=Object.keys(D.people).length;
      var knownByAnyone={};
      Object.keys(D.byUser).forEach(function(u2){ Object.keys(D.byUser[u2]).forEach(function(pid){ knownByAnyone[pid]=true; }); });
      var h2='';
      D.anchors.forEach(function(a){ var per=D.people[a.person_id]; if(!per) return;
        var m=D.byUser[a.user_id]||{}, n=Object.keys(m).length, dots='';
        for(var i=0;i<Math.min(n,28);i++) dots+='<span class="fdot" style="animation-delay:'+((i%5)*1.3)+'s"></span>';
        h2+='<div class="frow"><div class="kface" style="width:38px;height:38px" data-pid="'+a.person_id+'"></div>'
          +'<div class="fname">'+esc(first(personName(per.id)||per.display_name))+'</div><div class="flies">'+dots+'</div></div>'; });
      h2+='<div class="together">'+L.together(Object.keys(knownByAnyone).length,total)+'</div>';
      body.innerHTML=h2;
      hydrateFaces(body);
    }
  }

  function hydrateFaces(scope){ if(!window.LFFace) return;
    var els=scope.querySelectorAll('.kface[data-pid]'); if(!els.length) return;
    var ids=[]; els.forEach(function(e){ var id=e.getAttribute('data-pid'); if(ids.indexOf(id)<0) ids.push(id); });
    LFFace.resolve(ids).then(function(m){ els.forEach(function(e){ var f=m[e.getAttribute('data-pid')];
      if(f) LFFace.into(e,{path:f.path,box:f.box,size:120,keep:true}); }); }); }

  function mount(){
    var pad=document.querySelector('.pad'); if(!pad){ setTimeout(mount,400); return; }
    if(document.getElementById('lfwalk')) return;
    var host=document.createElement('div'); host.id='lfwalk';
    pad.parentNode.insertBefore(host,pad);
    host.addEventListener('click',function(e){ var t=e.target.closest('.tab'); if(t){ view=t.getAttribute('data-v'); render(); } });
    load().then(function(d){ if(!d) { host.remove(); return; } D=d; render(); });
    /* re-render texts on language switch (journal sets html[lang]) */
    try{ new MutationObserver(function(){ render(); }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']}); }catch(e){}
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount); else mount();
})();
