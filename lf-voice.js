/* lf-voice.js — family voice recordings, shared by every page that shows them (Leon, 2026-10-17):
   the person page (Story: "Audio stories told" / "Audio stories mentioned in"), the Voices page,
   and games. One loader, one card, one player, one "ask to remove".
   LFVoice.load(sb, {teller, subject, lang})  -> [{id, path, tellerId, subjectIds, prompt, at, pendingRemoval}]
   LFVoice.card(v, lang)                      -> HTML for one recording
   LFVoice.wire(root, sb)                     -> play buttons + remove requests inside root
   Removal: ANYONE may ask; it goes to the keeper's Review as artefact_edits field 'moment_delete'
   (old_value = the audio path, new_value 'voice'); approval there deletes the file, links and row. */
(function(){
  var W={
    en:{told:'Voice of',about:'about',play:'Play',remove:'Ask to remove',removeQ:'Ask the keeper to remove this recording? It disappears only after the keeper approves.',sent:'Removal requested — the keeper will decide.',pending:'Removal requested',none:'No audio stories yet.',err:'Could not send the request.'},
    ru:{told:'Голос:',about:'о ком:',play:'Слушать',remove:'Попросить удалить',removeQ:'Попросить хранителя удалить эту запись? Она исчезнет только после его одобрения.',sent:'Запрос отправлен — решит хранитель.',pending:'Запрошено удаление',none:'Аудиорассказов пока нет.',err:'Не удалось отправить запрос.'},
    he:{told:'קול:',about:'על:',play:'השמעה',remove:'בקשה להסיר',removeQ:'לבקש מהשומר להסיר את ההקלטה? היא תוסר רק אחרי אישור השומר.',sent:'הבקשה נשלחה — השומר יחליט.',pending:'התבקשה הסרה',none:'עדיין אין סיפורים מוקלטים.',err:'לא ניתן לשלוח את הבקשה.'}};
  function L(lang){ return W[lang]||W.en; }
  function esc(x){ return String(x==null?'':x).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function nm(id,lang){ return (window.LFLabel&&id&&LFLabel.of(id,lang))||''; }
  function css(){ if(document.getElementById('lfVoiceCss')) return; var c=document.createElement('style'); c.id='lfVoiceCss';
    c.textContent='.lfv{display:flex;flex-direction:column;gap:8px;padding:13px 14px;border-radius:14px;background:rgba(201,162,255,.06);border:1px solid rgba(201,162,255,.22);margin-bottom:10px}'
      +'.lfv-top{display:flex;align-items:center;gap:12px}'
      +'.lfv-play{flex:0 0 auto;width:44px;height:44px;border-radius:50%;border:1px solid rgba(201,162,255,.5);background:rgba(201,162,255,.14);color:#e9dcff;font-size:16px;cursor:pointer;display:grid;place-items:center}'
      +'.lfv-main{flex:1;min-width:0}'
      +'.lfv-q{font-family:"Newsreader","Frank Ruhl Libre",Georgia,serif;font-style:italic;font-size:15px;line-height:1.4;color:#f3ecdf}'
      +'.lfv-meta{font-size:12px;opacity:.75;margin-top:3px}.lfv-meta b{font-weight:600;opacity:1}'
      +'.lfv audio{width:100%;height:40px}'
      +'.lfv-rm{align-self:flex-start;background:none;border:0;color:#f0b48a;font:inherit;font-size:12px;cursor:pointer;padding:2px 0;opacity:.85}'
      +'.lfv-pend{font-size:12px;color:#f0b48a;opacity:.85}'
      +'.lfv-none{font-size:13.5px;opacity:.65;padding:6px 2px 10px}';
    document.head.appendChild(c); }
  async function load(sb,o){ o=o||{}; var ids=null;
    if(o.subject){ var r0=await sb.from('artefact_subjects').select('artefact_id').eq('person_id',o.subject); ids=(r0.data||[]).map(function(x){return x.artefact_id;}); if(!ids.length) return []; }
    var q=sb.from('artefacts').select('id,storage_path,contributor_id,metadata,created_at').eq('kind','voice').eq('status','published').not('storage_path','is',null).order('created_at',{ascending:false});
    if(o.teller) q=q.eq('contributor_id',o.teller); if(ids) q=q.in('id',ids);
    var r=await q; var arts=r.data||[]; if(!arts.length) return [];
    var aid=arts.map(function(a){return a.id;});
    var subs=(await sb.from('artefact_subjects').select('artefact_id,person_id').in('artefact_id',aid)).data||[];
    var pend={}; try{ ((await sb.from('artefact_edits').select('artefact_id').eq('field','moment_delete').in('status',['in_review','draft']).in('artefact_id',aid)).data||[]).forEach(function(e){ pend[e.artefact_id]=1; }); }catch(e){}
    var people={}; arts.forEach(function(a){ if(a.contributor_id) people[a.contributor_id]=1; }); subs.forEach(function(s){ people[s.person_id]=1; });
    try{ if(window.LFLabel) await LFLabel.load(sb,Object.keys(people)); }catch(e){}
    return arts.map(function(a){ var p=(a.metadata&&a.metadata.prompt)||'';
      /* recordings from before 2026-10-17 saved the question with the names missing (" — tell me…") */
      if(/^\s*[—,-]/.test(p)) p='';
      return { id:a.id, path:a.storage_path, tellerId:a.contributor_id, prompt:p, at:a.created_at, pendingRemoval:!!pend[a.id],
        subjectIds:subs.filter(function(s){return s.artefact_id===a.id && s.person_id!==a.contributor_id;}).map(function(s){return s.person_id;}) }; }); }
  function card(v,lang){ css(); var T=L(lang); var d=''; try{ d=new Date(v.at).toLocaleDateString(lang==='he'?'he-IL':lang==='ru'?'ru-RU':'en-GB',{day:'numeric',month:'short',year:'numeric'}); }catch(e){}
    var about=v.subjectIds.map(function(id){return nm(id,lang);}).filter(Boolean).join(', ');
    return '<div class="lfv" data-vid="'+esc(v.id)+'"><div class="lfv-top"><button class="lfv-play" data-vplay="'+esc(v.path)+'" aria-label="'+esc(T.play)+'">▶</button>'
      +'<div class="lfv-main">'+(v.prompt?'<div class="lfv-q">“'+esc(v.prompt)+'”</div>':'')
      +'<div class="lfv-meta">'+esc(T.told)+' <b>'+esc(nm(v.tellerId,lang)||'—')+'</b>'+(about?' · '+esc(T.about)+' <b>'+esc(about)+'</b>':'')+(d?' · '+esc(d):'')+'</div></div></div>'
      +(v.pendingRemoval?'<div class="lfv-pend">'+esc(T.pending)+'</div>':'<button class="lfv-rm" data-vrm="'+esc(v.id)+'" data-vpath="'+esc(v.path)+'">'+esc(T.remove)+'</button>')+'</div>'; }
  function list(vs,lang){ css(); return vs.length?vs.map(function(v){return card(v,lang);}).join(''):'<div class="lfv-none">'+esc(L(lang).none)+'</div>'; }
  function wire(root,sb,lang){ if(!root||root.__lfv) return; root.__lfv=1; var T=L(lang);
    root.addEventListener('click',async function(e){
      var b=e.target.closest('[data-vplay]');
      if(b){ e.stopPropagation(); var path=b.getAttribute('data-vplay'); b.disabled=true;
        try{ var s=await sb.storage.from('family').createSignedUrl(path,3600); var u=s&&s.data&&s.data.signedUrl;
          if(u){ root.querySelectorAll('.lfv audio').forEach(function(a){ try{a.pause();}catch(_){}});
            var au=document.createElement('audio'); au.controls=true; au.src=u; au.preload='auto';
            var box=b.closest('.lfv'); box.querySelector('.lfv-top').insertAdjacentElement('afterend',au); b.remove(); au.play().catch(function(){}); }
        }catch(err){ b.disabled=false; } return; }
      var rm=e.target.closest('[data-vrm]');
      if(rm){ e.stopPropagation(); if(!confirm(T.removeQ)) return; rm.disabled=true;
        try{ var ses=(await sb.auth.getSession()).data.session; if(!ses) throw new Error('no session');
          var ins=await sb.from('artefact_edits').insert({artefact_id:rm.getAttribute('data-vrm'),field:'moment_delete',old_value:rm.getAttribute('data-vpath'),new_value:'voice',status:'in_review',created_by:ses.user.id});
          if(ins.error) throw ins.error;
          var p=document.createElement('div'); p.className='lfv-pend'; p.textContent=T.sent; rm.replaceWith(p);
        }catch(err){ rm.disabled=false; alert(T.err); } }
    }); }
  window.LFVoice={ load:load, card:card, list:list, wire:wire };
})();
