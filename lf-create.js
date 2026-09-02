/* lf-create.js — the Memory page's creation mode (Stage A).
   One page from birth: opened with ?create=1 the memory page renders empty and
   fillable. Everything lives on the phone until Send; leaving saves nothing.
   Decision: Leon, 2026-09-01 (CLAUDE.md, "ONE MEMORY PAGE"). No designer pass —
   the page's own design language, the old prototype's arrangement. */
(function(){
  if(!/[?&]create=1/.test(location.search)) return;
  var SB_URL='https://oabcdrktuikifbormjip.supabase.co';
  var SB_KEY='sb_publishable_MnuwKTP5JaUy-P8-bKWsgA_f98esOXC';

  var lang='en'; try{ var l=localStorage.getItem('lf_lang'); if(l==='ru'||l==='he') lang=l; }catch(e){}
  var T={
   en:{ dir:'ltr', newT:'A new memory', sub:'Fill it the way the family would tell it. Nothing is saved until you send.',
        reqd:'required', addPhoto:'Add a photograph', changePhoto:'Change photo', removePhoto:'Remove',
        storyT:'The story', storyPh:'What happened, in whose words it was told\u2026',
        whenT:'When did this happen', whenPh:'about 1955 \u00b7 or precise: 12 March 1955',
        whereT:'Where did this happen', wherePh:'e.g. Tel Aviv',
        countryPh:'Which country? (a place the forest is meeting for the first time)',
        whoT:'Who is in this memory', whoNote:'Naming the people joins this page in the next stage of the build.',
        voiceT:'A voice', rec:'Record a voice', stop:'Stop', redo:'Record again', discard:'Discard',
        send:'Send to the keeper', missT:'Not complete yet',
        missLead:'A memory needs a little more before it can go to the keeper:',
        mWhen:'when it happened', mWhere:'where it happened', mWho:'who is in it',
        mSubst:'a photograph, a story, or a voice', ok:'Understood', micFail:'The microphone did not answer \u2014 check permissions.' },
   ru:{ dir:'ltr', newT:'\u041d\u043e\u0432\u043e\u0435 \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435', sub:'\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0442\u0430\u043a, \u043a\u0430\u043a \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b\u0430 \u0431\u044b \u0441\u0435\u043c\u044c\u044f. \u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435.',
        reqd:'\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e', addPhoto:'\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e', changePhoto:'\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e', removePhoto:'\u0423\u0431\u0440\u0430\u0442\u044c',
        storyT:'\u0418\u0441\u0442\u043e\u0440\u0438\u044f', storyPh:'\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u2014 \u0447\u044c\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438 \u044d\u0442\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043d\u043e\u2026',
        whenT:'\u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', whenPh:'\u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 1955 \u00b7 \u0438\u043b\u0438 \u0442\u043e\u0447\u043d\u043e: 12 \u043c\u0430\u0440\u0442\u0430 1955',
        whereT:'\u0413\u0434\u0435 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', wherePh:'\u043d\u0430\u043f\u0440. \u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432',
        countryPh:'\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435? (\u043b\u0435\u0441 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 \u044d\u0442\u043e \u043c\u0435\u0441\u0442\u043e \u0432\u043f\u0435\u0440\u0432\u044b\u0435)',
        whoT:'\u041a\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0438', whoNote:'\u0418\u043c\u0435\u043d\u0430 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u044f\u0432\u044f\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u044d\u0442\u0430\u043f\u0435 \u0441\u0431\u043e\u0440\u043a\u0438.',
        voiceT:'\u0413\u043e\u043b\u043e\u0441', rec:'\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0433\u043e\u043b\u043e\u0441', stop:'\u0421\u0442\u043e\u043f', redo:'\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e', discard:'\u0421\u0442\u0435\u0440\u0435\u0442\u044c',
        send:'\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044e', missT:'\u041f\u043e\u043a\u0430 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432\u043e',
        missLead:'\u0412\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044e \u043d\u0443\u0436\u043d\u043e \u0435\u0449\u0451 \u043d\u0435\u043c\u043d\u043e\u0433\u043e, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043e\u043d\u043e \u0443\u0439\u0434\u0451\u0442 \u043a \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044e:',
        mWhen:'\u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', mWhere:'\u0433\u0434\u0435 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', mWho:'\u043a\u0442\u043e \u0432 \u043d\u0451\u043c',
        mSubst:'\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f, \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u043b\u0438 \u0433\u043e\u043b\u043e\u0441', ok:'\u041f\u043e\u043d\u044f\u0442\u043d\u043e', micFail:'\u041c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u043d\u0435 \u043e\u0442\u0432\u0435\u0442\u0438\u043b \u2014 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f.' },
   he:{ dir:'rtl', newT:'\u05d6\u05d9\u05db\u05e8\u05d5\u05df \u05d7\u05d3\u05e9', sub:'\u05de\u05dc\u05d0\u05d5 \u05db\u05e4\u05d9 \u05e9\u05d4\u05de\u05e9\u05e4\u05d7\u05d4 \u05d4\u05d9\u05d9\u05ea\u05d4 \u05de\u05e1\u05e4\u05e8\u05ea. \u05d3\u05d1\u05e8 \u05dc\u05d0 \u05e0\u05e9\u05de\u05e8 \u05e2\u05d3 \u05d4\u05e9\u05dc\u05d9\u05d7\u05d4.',
        reqd:'\u05e0\u05d3\u05e8\u05e9', addPhoto:'\u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05ea\u05e6\u05dc\u05d5\u05dd', changePhoto:'\u05dc\u05d4\u05d7\u05dc\u05d9\u05e3 \u05ea\u05e6\u05dc\u05d5\u05dd', removePhoto:'\u05dc\u05d4\u05e1\u05d9\u05e8',
        storyT:'\u05d4\u05e1\u05d9\u05e4\u05d5\u05e8', storyPh:'\u05de\u05d4 \u05e7\u05e8\u05d4 \u2014 \u05d1\u05de\u05d9\u05dc\u05d9\u05dd \u05e9\u05dc \u05de\u05d9 \u05e9\u05e1\u05d9\u05e4\u05e8\u2026',
        whenT:'\u05de\u05ea\u05d9 \u05d6\u05d4 \u05e7\u05e8\u05d4', whenPh:'\u05d1\u05e2\u05e8\u05da 1955 \u00b7 \u05d0\u05d5 \u05de\u05d3\u05d5\u05d9\u05e7: 12 \u05d1\u05de\u05e8\u05e5 1955',
        whereT:'\u05d0\u05d9\u05e4\u05d4 \u05d6\u05d4 \u05e7\u05e8\u05d4', wherePh:'\u05dc\u05de\u05e9\u05dc \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1',
        countryPh:'\u05d1\u05d0\u05d9\u05d6\u05d5 \u05de\u05d3\u05d9\u05e0\u05d4? (\u05de\u05e7\u05d5\u05dd \u05d7\u05d3\u05e9 \u05dc\u05d9\u05e2\u05e8)',
        whoT:'\u05de\u05d9 \u05d1\u05d6\u05d9\u05db\u05e8\u05d5\u05df \u05d4\u05d6\u05d4', whoNote:'\u05e9\u05de\u05d5\u05ea \u05d4\u05d0\u05e0\u05e9\u05d9\u05dd \u05d9\u05e6\u05d8\u05e8\u05e4\u05d5 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d1\u05e9\u05dc\u05d1 \u05d4\u05d1\u05d0 \u05e9\u05dc \u05d4\u05d1\u05e0\u05d9\u05d9\u05d4.',
        voiceT:'\u05e7\u05d5\u05dc', rec:'\u05dc\u05d4\u05e7\u05dc\u05d9\u05d8 \u05e7\u05d5\u05dc', stop:'\u05e2\u05e6\u05d5\u05e8', redo:'\u05dc\u05d4\u05e7\u05dc\u05d9\u05d8 \u05e9\u05d5\u05d1', discard:'\u05dc\u05d4\u05e9\u05dc\u05d9\u05da',
        send:'\u05dc\u05e9\u05dc\u05d5\u05d7 \u05dc\u05e9\u05d5\u05de\u05e8', missT:'\u05e2\u05d3\u05d9\u05d9\u05df \u05dc\u05d0 \u05de\u05d5\u05db\u05df',
        missLead:'\u05dc\u05d6\u05d9\u05db\u05e8\u05d5\u05df \u05d3\u05e8\u05d5\u05e9 \u05e2\u05d5\u05d3 \u05de\u05e2\u05d8 \u05dc\u05e4\u05e0\u05d9 \u05e9\u05d9\u05d2\u05d9\u05e2 \u05d0\u05dc \u05d4\u05e9\u05d5\u05de\u05e8:',
        mWhen:'\u05de\u05ea\u05d9 \u05d6\u05d4 \u05e7\u05e8\u05d4', mWhere:'\u05d0\u05d9\u05e4\u05d4 \u05d6\u05d4 \u05e7\u05e8\u05d4', mWho:'\u05de\u05d9 \u05de\u05d5\u05e4\u05d9\u05e2 \u05d1\u05d5',
        mSubst:'\u05ea\u05e6\u05dc\u05d5\u05dd, \u05e1\u05d9\u05e4\u05d5\u05e8 \u05d0\u05d5 \u05e7\u05d5\u05dc', ok:'\u05d4\u05d1\u05e0\u05ea\u05d9', micFail:'\u05d4\u05de\u05d9\u05e7\u05e8\u05d5\u05e4\u05d5\u05df \u05dc\u05d0 \u05e2\u05e0\u05d4 \u2014 \u05d1\u05d3\u05e7\u05d5 \u05d4\u05e8\u05e9\u05d0\u05d5\u05ea.' }
  };
  var L=T[lang]||T.en;
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  var M={ photoFile:null, photoURL:null, voiceBlob:null, voiceURL:null,
          story:'', when:'', where:'', country:'', countryOpen:false, people:[] };
  var places=null;

  function reqChip(){ return '<span style="font-family:\'Azeret Mono\',monospace;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold,#f3cd84);border:1px solid rgba(243,205,132,.4);border-radius:99px;padding:2px 8px;vertical-align:middle">'+esc(L.reqd)+'</span>'; }
  function secT(txt,req){ return '<div style="font-family:\'Azeret Mono\',monospace;font-size:10.5px;letter-spacing:.25em;text-transform:uppercase;color:var(--muted,#8fa0b3);margin:26px 2px 10px;display:flex;align-items:center;gap:10px">'+esc(txt)+(req?reqChip():'')+'</div>'; }
  var inputCss='width:100%;box-sizing:border-box;background:rgba(10,18,28,.6);border:1px solid rgba(180,205,235,.18);border-radius:14px;padding:13px 14px;color:#e8eef5;font-family:\'Newsreader\',serif;font-size:16.5px;outline:none';

  function missing(){
    var m=[];
    if(!(M.photoFile||(M.story&&M.story.trim()))) m.push(L.mSubst); /* voice has its own door on the contribution page */
    if(!(M.when&&M.when.trim())) m.push(L.mWhen);
    if(!(M.people&&M.people.length)) m.push(L.mWho);
    if(!(M.where&&M.where.trim())) m.push(L.mWhere);
    return m;
  }

  function render(){
    document.documentElement.lang=lang; document.documentElement.dir=L.dir;
    var w=document.getElementById('wrap'); if(!w) return;
    var photoBlock = M.photoURL
      ? '<div style="border-radius:18px;overflow:hidden;border:1px solid rgba(180,205,235,.16)"><img src="'+M.photoURL+'" style="width:100%;display:block"></div>'
        +'<div style="display:flex;gap:10px;margin-top:10px"><button id="cPhotoChange" class="cbtn">'+esc(L.changePhoto)+'</button><button id="cPhotoDrop" class="cbtn ghost">'+esc(L.removePhoto)+'</button></div>'
      : '<button id="cPhotoAdd" style="width:100%;border:1.5px dashed rgba(243,205,132,.45);background:rgba(243,205,132,.05);border-radius:18px;padding:42px 16px;color:var(--gold,#f3cd84);font-family:\'Newsreader\',serif;font-size:17px;cursor:pointer">'+esc(L.addPhoto)+'</button>';
    var voiceBlock = M.voiceURL
      ? '<div style="background:rgba(10,18,28,.6);border:1px solid rgba(180,205,235,.18);border-radius:14px;padding:10px"><audio controls src="'+M.voiceURL+'" style="width:100%"></audio></div>'
        +'<div style="display:flex;gap:10px;margin-top:10px"><button id="cVoiceRedo" class="cbtn">'+esc(L.redo)+'</button><button id="cVoiceDrop" class="cbtn ghost">'+esc(L.discard)+'</button></div>'
      : '<button id="cVoiceRec" class="cbtn" style="width:100%">'+(M._recording?esc(L.stop):esc(L.rec))+'</button>';
    w.innerHTML=
      '<div style="max-width:560px;margin:0 auto;padding:18px 16px 90px">'
      +'<div class="serif" style="font-size:30px;color:#f2ead9;margin:14px 2px 4px">'+esc(L.newT)+'</div>'
      +'<div style="color:var(--muted,#8fa0b3);font-size:14px;margin:0 2px 8px">'+esc(L.sub)+'</div>'
      +secT('\u2014',false).replace('\u2014','')+photoBlock
      +secT(L.storyT,false)
      +'<textarea id="cStory" rows="5" placeholder="'+esc(L.storyPh)+'" style="'+inputCss+';resize:vertical">'+esc(M.story)+'</textarea>'
      +secT(L.whenT,true)
      +'<input id="cWhen" placeholder="'+esc(L.whenPh)+'" value="'+esc(M.when)+'" style="'+inputCss+'">'
      +secT(L.whereT,true)
      +'<input id="cWhere" list="cPlaces" autocomplete="off" placeholder="'+esc(L.wherePh)+'" value="'+esc(M.where)+'" style="'+inputCss+'"><datalist id="cPlaces"></datalist>'
      +'<input id="cCountry" placeholder="'+esc(L.countryPh)+'" value="'+esc(M.country)+'" style="'+inputCss+';margin-top:8px;display:'+(M.countryOpen?'block':'none')+'">'
      +secT(L.whoT,true)
      +'<div style="color:var(--muted,#8fa0b3);font-size:14px;font-style:italic;font-family:\'Newsreader\',serif">'+esc(L.whoNote)+'</div>'
      +'<button id="cSend" style="width:100%;margin-top:34px;background:linear-gradient(180deg,#f6d996,#eec371);border:0;border-radius:99px;padding:15px;font-size:16.5px;font-weight:600;color:#20180a;cursor:pointer">'+esc(L.send)+'</button>'
      +'<div id="cMiss" style="display:none;margin-top:14px;border:1px solid rgba(243,205,132,.4);background:rgba(243,205,132,.06);border-radius:14px;padding:13px 15px;color:#e8dcc0;font-size:14.5px"></div>'
      +'<input type="file" id="cFile" accept="image/*" hidden>'
      +'</div>'
      +'<style>.cbtn{background:rgba(180,205,235,.1);border:1px solid rgba(180,205,235,.25);border-radius:99px;padding:10px 18px;color:#dce6f0;font-size:14px;cursor:pointer;font-family:inherit}.cbtn.ghost{background:transparent;color:var(--muted,#8fa0b3)}</style>';
    wire();
  }

  function wire(){
    var f=document.getElementById('cFile');
    var pick=function(){ f.click(); };
    var pa=document.getElementById('cPhotoAdd'); if(pa) pa.onclick=pick;
    var pc=document.getElementById('cPhotoChange'); if(pc) pc.onclick=pick;
    var pd=document.getElementById('cPhotoDrop'); if(pd) pd.onclick=function(){ if(M.photoURL) URL.revokeObjectURL(M.photoURL); M.photoFile=null; M.photoURL=null; render(); };
    f.onchange=function(){ var file=f.files&&f.files[0]; if(!file) return;
      if(M.photoURL) URL.revokeObjectURL(M.photoURL);
      M.photoFile=file; M.photoURL=URL.createObjectURL(file); render(); };
    document.getElementById('cStory').oninput=function(){ M.story=this.value; };
    document.getElementById('cWhen').oninput=function(){ M.when=this.value; };
    var wi=document.getElementById('cWhere'), ci=document.getElementById('cCountry');
    wi.oninput=function(){ M.where=this.value;
      var raw=this.value.trim().toLowerCase();
      var hit=(places||[]).some(function(pl){ return pl.trim().toLowerCase()===raw; });
      M.countryOpen=!!(raw&&!hit); ci.style.display=M.countryOpen?'block':'none'; };
    ci.oninput=function(){ M.country=this.value; };
    var vr=document.getElementById('cVoiceRec'); if(vr) vr.onclick=toggleRec;
    var vd=document.getElementById('cVoiceDrop'); if(vd) vd.onclick=function(){ dropVoice(); render(); };
    var v2=document.getElementById('cVoiceRedo'); if(v2) v2.onclick=function(){ dropVoice(); render(); toggleRec(); };
    document.getElementById('cSend').onclick=function(){
      var m=missing(); var box=document.getElementById('cMiss');
      if(m.length){ box.style.display='block';
        box.innerHTML=esc(L.missLead)+'<ul style="margin:8px 0 0;padding-inline-start:20px">'+m.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>';
        box.scrollIntoView({behavior:'smooth',block:'center'}); return; }
      box.style.display='none';
      /* Stage C brings the real Send; until then a complete memory simply reports itself complete. */
      box.style.display='block'; box.textContent='\u2713'; 
    };
    fillPlaces();
  }

  var rec=null, chunks=[];
  function dropVoice(){ if(M.voiceURL) URL.revokeObjectURL(M.voiceURL); M.voiceBlob=null; M.voiceURL=null; }
  function toggleRec(){
    if(M._recording){ try{ rec.stop(); }catch(e){} return; }
    navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
      chunks=[]; rec=new MediaRecorder(stream);
      rec.ondataavailable=function(e){ if(e.data&&e.data.size) chunks.push(e.data); };
      rec.onstop=function(){ M._recording=false;
        try{ stream.getTracks().forEach(function(t){ t.stop(); }); }catch(e){}
        var blob=new Blob(chunks,{type:rec.mimeType||'audio/webm'});
        M.voiceBlob=blob; M.voiceURL=URL.createObjectURL(blob); render(); };
      M._recording=true; rec.start(); render();
    }).catch(function(){ alert(L.micFail); });
  }

  function fillPlaces(){
    var dl=document.getElementById('cPlaces'); if(!dl) return;
    if(places){ dl.innerHTML=places.map(function(p){ return '<option value="'+esc(p)+'">'; }).join(''); return; }
    var sb=window.supabase.createClient(SB_URL,SB_KEY);
    sb.from('place_geo').select('name,name_en,name_ru,name_he').then(function(r){
      var seen={}; (r.data||[]).forEach(function(x){ ['name','name_en','name_ru','name_he'].forEach(function(k){ var v=(x[k]||'').trim(); if(v) seen[v]=1; }); });
      places=Object.keys(seen).sort(); fillPlaces();
    });
  }

  window.LFCreate={ boot:function(){ render(); } };
})();
