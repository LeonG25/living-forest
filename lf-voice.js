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
  /* THE TEXT OF A RECORDING (Leon, 2026-10-18): three folded boxes - the original transcript and
     the two machine translations. Anyone edits in place; nothing is sent per box. All edits on the
     page wait in STAGED until the one "Send N changes to the keeper" bar sends them together as
     artefact_edits rows (field 'voice_text', lang, old/new). The keeper's approval writes them. */
  var TW={
    en:{langs:{en:'English',ru:'Russian',he:'Hebrew'},orig:'original · automatic text',mach:'machine translation',human:'checked by the family',
        edit:'Edit',done:'Done',writing:'The text is being written…',failed:'The text couldn’t be made automatically — the recording itself is safe. You can type the text in yourself.',
        empty:'No text yet.',pending:'Text changes are waiting for the keeper',send:function(n){return n===1?'Send 1 change to the keeper':'Send '+n+' changes to the keeper';},
        discard:'Discard',sent:'Sent — the keeper will review your changes.',sendErr:'Could not send. Please try again.',edited:'changed'},
    ru:{langs:{en:'Английский',ru:'Русский',he:'Иврит'},orig:'оригинал · автоматический текст',mach:'машинный перевод',human:'проверено семьёй',
        edit:'Изменить',done:'Готово',writing:'Текст записывается…',failed:'Текст не удалось создать автоматически — сама запись в порядке. Текст можно вписать самостоятельно.',
        empty:'Текста пока нет.',pending:'Правки текста ждут хранителя',send:function(n){return 'Отправить хранителю ('+n+')';},
        discard:'Отменить',sent:'Отправлено — хранитель проверит правки.',sendErr:'Не удалось отправить. Попробуйте ещё раз.',edited:'изменено'},
    he:{langs:{en:'אנגלית',ru:'רוסית',he:'עברית'},orig:'מקור · טקסט אוטומטי',mach:'תרגום מכונה',human:'נבדק על ידי המשפחה',
        edit:'עריכה',done:'סיום',writing:'הטקסט נכתב…',failed:'לא ניתן היה ליצור את הטקסט אוטומטית — ההקלטה עצמה שמורה. אפשר להקליד את הטקסט בעצמכם.',
        empty:'עדיין אין טקסט.',pending:'שינויים בטקסט ממתינים לשומר',send:function(n){return 'שליחה לשומר ('+n+')';},
        discard:'ביטול',sent:'נשלח — השומר יבדוק את השינויים.',sendErr:'השליחה נכשלה. נסו שוב.',edited:'שונה'}};
  function TL(lang){ return TW[lang]||TW.en; }
  var STAGED={}, PAGE_LANG='en', SB=null;
  function stagedCount(){ return Object.keys(STAGED).length; }
  function textCss(){ return ''
    +'.lfv-tx{border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.03)}'
    +'.lfv-tx>summary{list-style:none;cursor:pointer;padding:10px 12px;font-size:13px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}'
    +'.lfv-tx>summary::-webkit-details-marker{display:none}'
    +'.lfv-tx>summary:before{content:"▸";opacity:.6;transition:transform .15s}'
    +'[dir="rtl"] .lfv-tx>summary:before{content:"◂"}'
    +'.lfv-tx[open]>summary:before{transform:rotate(90deg)}'
    +'[dir="rtl"] .lfv-tx[open]>summary:before{transform:rotate(-90deg)}'
    +'.lfv-tx .ln{font-weight:600}.lfv-tx .kind{opacity:.6}.lfv-tx .chg{color:#f3cd84;font-size:11.5px}'
    +'.lfv-tbody{padding:0 12px 12px}'
    +'.lfv-txt{white-space:pre-wrap;font-family:"Newsreader","Frank Ruhl Libre",Georgia,serif;font-size:16px;line-height:1.5;color:#f3ecdf}'
    +'.lfv-ta{width:100%;box-sizing:border-box;min-height:140px;padding:10px 12px;border-radius:10px;border:1px solid rgba(243,205,132,.45);background:rgba(0,0,0,.25);color:#f3ecdf;font:inherit;font-size:15.5px;line-height:1.5;resize:vertical}'
    +'.lfv-eb{margin-top:8px;background:none;border:1px solid rgba(255,255,255,.2);color:#e9dcff;border-radius:999px;padding:5px 14px;font:inherit;font-size:12.5px;cursor:pointer}'
    +'.lfv-txs{font-size:13px;opacity:.75;padding:2px 2px}'
    +'.lfv-txs.bad{color:#f0b48a;opacity:.95}'
    +'#lfvSend{position:fixed;left:16px;right:88px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:70;display:none;gap:8px;align-items:center;'
    +'padding:10px;border-radius:16px;background:#1b1438;border:1px solid rgba(201,162,255,.45);box-shadow:0 10px 30px rgba(0,0,0,.5)}'
    +'#lfvSend.on{display:flex}'
    +'#lfvSend .go{flex:1;padding:12px 14px;border-radius:12px;border:0;background:#c9a2ff;color:#1b1438;font:inherit;font-weight:700;font-size:15px;cursor:pointer}'
    +'#lfvSend .no{padding:12px 12px;border-radius:12px;border:1px solid rgba(255,255,255,.2);background:none;color:#e9dcff;font:inherit;font-size:13.5px;cursor:pointer}'
    +'.lfv-toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(84px + env(safe-area-inset-bottom));z-index:71;background:#243;color:#e8f6ea;padding:10px 16px;border-radius:12px;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.4)}'; }
  function textBlock(v,lang){ var T=TL(lang), st=v.tstatus||'';
    var order=[v.origLang].concat(['en','ru','he'].filter(function(l){return l!==v.origLang;})).filter(Boolean);
    var hasAny=order.some(function(l){ return v.texts[l] && v.texts[l].text; });
    var h='';
    if(!hasAny && st!=='failed') return '<div class="lfv-txs">'+esc(T.writing)+'</div>';
    if(st==='failed' && !hasAny){ h+='<div class="lfv-txs bad">'+esc(T.failed)+'</div>'; order=['en','ru','he']; }
    order.forEach(function(l){ var t=v.texts[l]||{}, key=v.id+'|'+l, sg=STAGED[key];
      var kind=l===v.origLang?T.orig:(t.machine===false?T.human:T.mach);
      var cur=sg?sg.nv:(t.text||'');
      h+='<details class="lfv-tx" data-tid="'+esc(v.id)+'" data-tl="'+l+'"><summary><span class="ln">'+esc(T.langs[l])+'</span><span class="kind">· '+esc(kind)+'</span>'
        +(sg?'<span class="chg">● '+esc(T.edited)+'</span>':'')+'</summary><div class="lfv-tbody">'
        +'<div class="lfv-txt" dir="'+(l==='he'?'rtl':'ltr')+'">'+(cur?esc(cur):'<span style="opacity:.55">'+esc(T.empty)+'</span>')+'</div>'
        +'<button type="button" class="lfv-eb" data-edit="1">'+esc(T.edit)+'</button></div></details>'; });
    if(v.pendingText) h+='<div class="lfv-txs">'+esc(T.pending)+'</div>';
    return h; }
  function sendBar(){ var T=TL(PAGE_LANG), b=document.getElementById('lfvSend');
    if(!b){ b=document.createElement('div'); b.id='lfvSend'; document.body.appendChild(b);
      b.addEventListener('click',function(e){ if(e.target.closest('.go')) sendStaged(); else if(e.target.closest('.no')) discardStaged(); }); }
    var n=stagedCount(); b.dir=PAGE_LANG==='he'?'rtl':'ltr';
    b.innerHTML='<button type="button" class="go">'+esc(T.send(n))+'</button><button type="button" class="no">'+esc(T.discard)+'</button>';
    b.classList.toggle('on',n>0); }
  function toast(msg){ var t=document.createElement('div'); t.className='lfv-toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(function(){ t.remove(); },3500); }
  function markBox(det){ var key=det.getAttribute('data-tid')+'|'+det.getAttribute('data-tl'), s=det.querySelector('summary'), c=s.querySelector('.chg');
    if(STAGED[key]&&!c) s.insertAdjacentHTML('beforeend','<span class="chg">● '+esc(TL(PAGE_LANG).edited)+'</span>');
    if(!STAGED[key]&&c) c.remove(); }
  async function sendStaged(){ var T=TL(PAGE_LANG), b=document.getElementById('lfvSend'), go=b&&b.querySelector('.go'); if(go) go.disabled=true;
    try{ var ses=(await SB.auth.getSession()).data.session; if(!ses) throw new Error('no session');
      var rows=Object.keys(STAGED).map(function(k){ var s=STAGED[k]; return {artefact_id:s.id,field:'voice_text',lang:s.lang,old_value:s.ov,new_value:s.nv,status:'in_review',created_by:ses.user.id}; });
      var r=await SB.from('artefact_edits').insert(rows); if(r.error) throw r.error;
      Object.keys(STAGED).forEach(function(k){ delete STAGED[k]; });
      document.querySelectorAll('.lfv-tx').forEach(markBox); sendBar(); toast(T.sent);
    }catch(err){ if(go) go.disabled=false; toast(T.sendErr); } }
  function discardStaged(){ Object.keys(STAGED).forEach(function(k){ var s=STAGED[k];
      var det=document.querySelector('.lfv-tx[data-tid="'+s.id+'"][data-tl="'+s.lang+'"]');
      if(det){ var ta=det.querySelector('textarea'); var div=document.createElement('div'); div.className='lfv-txt'; div.dir=s.lang==='he'?'rtl':'ltr'; div.textContent=s.ov;
        if(ta) ta.replaceWith(div); else { var d0=det.querySelector('.lfv-txt'); if(d0) d0.textContent=s.ov; }
        var eb=det.querySelector('.lfv-eb'); if(eb){ eb.textContent=TL(PAGE_LANG).edit; eb.setAttribute('data-edit','1'); } }
      delete STAGED[k]; });
    document.querySelectorAll('.lfv-tx').forEach(markBox); sendBar(); }
  /* edit / done inside a box; every keystroke updates STAGED (removed again if back to the original) */
  function onTextClick(e){ var eb=e.target.closest('.lfv-eb'); if(!eb) return false; e.stopPropagation();
    var det=eb.closest('.lfv-tx'), id=det.getAttribute('data-tid'), l=det.getAttribute('data-tl'), key=id+'|'+l, T=TL(PAGE_LANG);
    var orig=(det.__orig!==undefined)?det.__orig:(det.__orig=(VTEXT[key]||''));
    if(eb.getAttribute('data-edit')==='1'){ var div=det.querySelector('.lfv-txt'); var ta=document.createElement('textarea'); ta.className='lfv-ta'; ta.dir=l==='he'?'rtl':'ltr';
      ta.value=STAGED[key]?STAGED[key].nv:orig; div.replaceWith(ta); ta.focus();
      ta.addEventListener('input',function(){ var nv=ta.value; if(nv.trim()===orig.trim()) delete STAGED[key]; else STAGED[key]={id:id,lang:l,ov:orig,nv:nv}; markBox(det); sendBar(); });
      eb.textContent=T.done; eb.setAttribute('data-edit','0'); }
    else { var ta2=det.querySelector('textarea'); var d2=document.createElement('div'); d2.className='lfv-txt'; d2.dir=l==='he'?'rtl':'ltr';
      var val=STAGED[key]?STAGED[key].nv:orig; if(val) d2.textContent=val; else d2.innerHTML='<span style="opacity:.55">'+esc(T.empty)+'</span>';
      if(ta2) ta2.replaceWith(d2); eb.textContent=T.edit; eb.setAttribute('data-edit','1'); }
    return true; }
  var VTEXT={};   /* id|lang -> the text as loaded, the "old value" of an edit */
  window.addEventListener('beforeunload',function(e){ if(stagedCount()){ e.preventDefault(); e.returnValue=''; } });
  function css(){ if(document.getElementById('lfVoiceCss')) return; var c=document.createElement('style'); c.id='lfVoiceCss';
    c.textContent=textCss()+'.lfv{display:flex;flex-direction:column;gap:8px;padding:13px 14px;border-radius:14px;background:rgba(201,162,255,.06);border:1px solid rgba(201,162,255,.22);margin-bottom:10px}'
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
    var q=sb.from('artefacts').select('id,storage_path,contributor_id,metadata,created_at,body,original_language').eq('kind','voice').eq('status','published').not('storage_path','is',null).order('created_at',{ascending:false});
    if(o.teller) q=q.eq('contributor_id',o.teller); if(ids) q=q.in('id',ids);
    var r=await q; var arts=r.data||[]; if(!arts.length) return [];
    var aid=arts.map(function(a){return a.id;});
    var subs=(await sb.from('artefact_subjects').select('artefact_id,person_id').in('artefact_id',aid)).data||[];
    var pend={}; try{ ((await sb.from('artefact_edits').select('artefact_id').eq('field','moment_delete').in('status',['in_review','draft']).in('artefact_id',aid)).data||[]).forEach(function(e){ pend[e.artefact_id]=1; }); }catch(e){}
    var people={}; arts.forEach(function(a){ if(a.contributor_id) people[a.contributor_id]=1; }); subs.forEach(function(s){ people[s.person_id]=1; });
    try{ if(window.LFLabel) await LFLabel.load(sb,Object.keys(people)); }catch(e){}
    /* the texts: the transcript (body, in original_language) + published translations */
    var trs=[]; try{ trs=(await sb.from('artefact_translations').select('artefact_id,lang,body,machine,created_at').eq('status','published').in('artefact_id',aid).order('created_at',{ascending:true})).data||[]; }catch(e){}
    var ptx={}; try{ ((await sb.from('artefact_edits').select('artefact_id').eq('field','voice_text').in('status',['in_review','draft']).in('artefact_id',aid)).data||[]).forEach(function(e){ ptx[e.artefact_id]=(ptx[e.artefact_id]||0)+1; }); }catch(e){}
    return arts.map(function(a){ var p=(a.metadata&&a.metadata.prompt)||'';
      var texts={}; var ol=a.original_language||'';
      if(a.body && ol) texts[ol]={text:a.body,machine:!(a.metadata&&a.metadata.transcript&&a.metadata.transcript.human)};
      trs.filter(function(t){return t.artefact_id===a.id && t.lang!==ol;}).forEach(function(t){ texts[t.lang]={text:t.body,machine:t.machine!==false}; });
      Object.keys(texts).forEach(function(l){ VTEXT[a.id+'|'+l]=texts[l].text||''; });
      /* recordings from before 2026-10-17 saved the question with the names missing (" — tell me…") */
      if(/^\s*[—,-]/.test(p)) p='';
      return { id:a.id, path:a.storage_path, tellerId:a.contributor_id, prompt:p, at:a.created_at, pendingRemoval:!!pend[a.id],
        texts:texts, origLang:ol, tstatus:(a.metadata&&a.metadata.transcript&&a.metadata.transcript.status)||'', pendingText:ptx[a.id]||0,
        subjectIds:subs.filter(function(s){return s.artefact_id===a.id && s.person_id!==a.contributor_id;}).map(function(s){return s.person_id;}) }; }); }
  function card(v,lang){ css(); var T=L(lang); var d=''; try{ d=new Date(v.at).toLocaleDateString(lang==='he'?'he-IL':lang==='ru'?'ru-RU':'en-GB',{day:'numeric',month:'short',year:'numeric'}); }catch(e){}
    var about=v.subjectIds.map(function(id){return nm(id,lang);}).filter(Boolean).join(', ');
    return '<div class="lfv" data-vid="'+esc(v.id)+'"><div class="lfv-top"><button class="lfv-play" data-vplay="'+esc(v.path)+'" aria-label="'+esc(T.play)+'">▶</button>'
      +'<div class="lfv-main">'+(v.prompt?'<div class="lfv-q">“'+esc(v.prompt)+'”</div>':'')
      +'<div class="lfv-meta">'+esc(T.told)+' <b>'+esc(nm(v.tellerId,lang)||'—')+'</b>'+(about?' · '+esc(T.about)+' <b>'+esc(about)+'</b>':'')+(d?' · '+esc(d):'')+'</div></div></div>'
      +textBlock(v,lang)
      +(v.pendingRemoval?'<div class="lfv-pend">'+esc(T.pending)+'</div>':'<button class="lfv-rm" data-vrm="'+esc(v.id)+'" data-vpath="'+esc(v.path)+'">'+esc(T.remove)+'</button>')+'</div>'; }
  function list(vs,lang){ css(); return vs.length?vs.map(function(v){return card(v,lang);}).join(''):'<div class="lfv-none">'+esc(L(lang).none)+'</div>'; }
  function wire(root,sb,lang){ if(!root||root.__lfv) return; root.__lfv=1; var T=L(lang); SB=sb; PAGE_LANG=lang||'en'; sendBar();
    root.addEventListener('click',async function(e){
      if(onTextClick(e)) return;
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
