/* lf-create.js \u2014 the Memory page's creation mode (Stages A + B).
   One page from birth: opened with ?create=1 the memory page renders empty and
   fillable. Everything lives on the phone until Send; leaving saves nothing.
   Decision: Leon, 2026-09-01 (CLAUDE.md, "ONE MEMORY PAGE"). No designer pass \u2014
   the page's own design language, the old prototype's arrangement.
   Stage B (2026-09-03): the who. Face boxes drawn on the LOCAL photo (fractions
   of the image, kept in M.people as {id,label,box} \u2014 the same shape the moment
   page stores in artefact_subjects.detail, so Stage C hands them straight to the
   submit engine). With no photo, people are picked from the forest's existing,
   published people. No new-person door here \u2014 only a pointer to the hub's
   "Propose a person". Zero database writes before Send. */
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
        whoT:'Who is in this memory',
        whoTagNote:'Tap \u201cName the faces\u201d, then draw a box around each face in the photograph.',
        whoPickNote:'No photograph \u2014 choose from the people the forest already knows.',
        tagBtn:'Name the faces', tagStop:'Done tagging', pickBtn:'Choose from the forest',
        pickFace:'Who is this?', searchPh:'Start typing a name\u2026',
        loading:'The forest is bringing its people\u2026', noMatch:'No one by that name yet.',
        proposeLead:'Someone the forest doesn\u2019t have yet?', proposeLink:'Propose a person',
        removeTag:'Remove', cancel:'Cancel',
        send:'Send to the keeper', missT:'Not complete yet',
        missLead:'A memory needs a little more before it can go to the keeper:',
        mWhen:'when it happened', mWhere:'where it happened', mWho:'who is in it',
        mSubst:'a photograph, a story, or a voice', ok:'Understood' },
   ru:{ dir:'ltr', newT:'\u041d\u043e\u0432\u043e\u0435 \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435', sub:'\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0442\u0430\u043a, \u043a\u0430\u043a \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043b\u0430 \u0431\u044b \u0441\u0435\u043c\u044c\u044f. \u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435.',
        reqd:'\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e', addPhoto:'\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e', changePhoto:'\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e', removePhoto:'\u0423\u0431\u0440\u0430\u0442\u044c',
        storyT:'\u0418\u0441\u0442\u043e\u0440\u0438\u044f', storyPh:'\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u2014 \u0447\u044c\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438 \u044d\u0442\u043e \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u043d\u043e\u2026',
        whenT:'\u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', whenPh:'\u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e 1955 \u00b7 \u0438\u043b\u0438 \u0442\u043e\u0447\u043d\u043e: 12 \u043c\u0430\u0440\u0442\u0430 1955',
        whereT:'\u0413\u0434\u0435 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', wherePh:'\u043d\u0430\u043f\u0440. \u0422\u0435\u043b\u044c-\u0410\u0432\u0438\u0432',
        countryPh:'\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435? (\u043b\u0435\u0441 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 \u044d\u0442\u043e \u043c\u0435\u0441\u0442\u043e \u0432\u043f\u0435\u0440\u0432\u044b\u0435)',
        whoT:'\u041a\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u0432\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0438',
        whoTagNote:'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u00ab\u041d\u0430\u0437\u0432\u0430\u0442\u044c \u043b\u0438\u0446\u0430\u00bb, \u0437\u0430\u0442\u0435\u043c \u043e\u0431\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0430\u0436\u0434\u043e\u0435 \u043b\u0438\u0446\u043e \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438.',
        whoPickNote:'\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043d\u0435\u0442 \u2014 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u043b\u044e\u0434\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043b\u0435\u0441 \u0443\u0436\u0435 \u0437\u043d\u0430\u0435\u0442.',
        tagBtn:'\u041d\u0430\u0437\u0432\u0430\u0442\u044c \u043b\u0438\u0446\u0430', tagStop:'\u0413\u043e\u0442\u043e\u0432\u043e', pickBtn:'\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043b\u0435\u0441\u0430',
        pickFace:'\u041a\u0442\u043e \u044d\u0442\u043e?', searchPh:'\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0438\u043c\u044f\u2026',
        loading:'\u041b\u0435\u0441 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0432\u043e\u0438\u0445 \u043b\u044e\u0434\u0435\u0439\u2026', noMatch:'\u041f\u043e\u043a\u0430 \u043d\u0438\u043a\u043e\u0433\u043e \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c.',
        proposeLead:'\u041a\u043e\u0433\u043e-\u0442\u043e \u0435\u0449\u0451 \u043d\u0435\u0442 \u0432 \u043b\u0435\u0441\u0443?', proposeLink:'\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430',
        removeTag:'\u0423\u0431\u0440\u0430\u0442\u044c', cancel:'\u041e\u0442\u043c\u0435\u043d\u0430',
        send:'\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044e', missT:'\u041f\u043e\u043a\u0430 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432\u043e',
        missLead:'\u0412\u043e\u0441\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044e \u043d\u0443\u0436\u043d\u043e \u0435\u0449\u0451 \u043d\u0435\u043c\u043d\u043e\u0433\u043e, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043e\u043d\u043e \u0443\u0439\u0434\u0451\u0442 \u043a \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044e:',
        mWhen:'\u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', mWhere:'\u0433\u0434\u0435 \u044d\u0442\u043e \u0431\u044b\u043b\u043e', mWho:'\u043a\u0442\u043e \u0432 \u043d\u0451\u043c',
        mSubst:'\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f, \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u043b\u0438 \u0433\u043e\u043b\u043e\u0441', ok:'\u041f\u043e\u043d\u044f\u0442\u043d\u043e' },
   he:{ dir:'rtl', newT:'\u05d6\u05d9\u05db\u05e8\u05d5\u05df \u05d7\u05d3\u05e9', sub:'\u05de\u05dc\u05d0\u05d5 \u05db\u05e4\u05d9 \u05e9\u05d4\u05de\u05e9\u05e4\u05d7\u05d4 \u05d4\u05d9\u05d9\u05ea\u05d4 \u05de\u05e1\u05e4\u05e8\u05ea. \u05d3\u05d1\u05e8 \u05dc\u05d0 \u05e0\u05e9\u05de\u05e8 \u05e2\u05d3 \u05d4\u05e9\u05dc\u05d9\u05d7\u05d4.',
        reqd:'\u05e0\u05d3\u05e8\u05e9', addPhoto:'\u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05ea\u05e6\u05dc\u05d5\u05dd', changePhoto:'\u05dc\u05d4\u05d7\u05dc\u05d9\u05e3 \u05ea\u05e6\u05dc\u05d5\u05dd', removePhoto:'\u05dc\u05d4\u05e1\u05d9\u05e8',
        storyT:'\u05d4\u05e1\u05d9\u05e4\u05d5\u05e8', storyPh:'\u05de\u05d4 \u05e7\u05e8\u05d4 \u2014 \u05d1\u05de\u05d9\u05dc\u05d9\u05dd \u05e9\u05dc \u05de\u05d9 \u05e9\u05e1\u05d9\u05e4\u05e8\u2026',
        whenT:'\u05de\u05ea\u05d9 \u05d6\u05d4 \u05e7\u05e8\u05d4', whenPh:'\u05d1\u05e2\u05e8\u05da 1955 \u00b7 \u05d0\u05d5 \u05de\u05d3\u05d5\u05d9\u05e7: 12 \u05d1\u05de\u05e8\u05e5 1955',
        whereT:'\u05d0\u05d9\u05e4\u05d4 \u05d6\u05d4 \u05e7\u05e8\u05d4', wherePh:'\u05dc\u05de\u05e9\u05dc \u05ea\u05dc \u05d0\u05d1\u05d9\u05d1',
        countryPh:'\u05d1\u05d0\u05d9\u05d6\u05d5 \u05de\u05d3\u05d9\u05e0\u05d4? (\u05de\u05e7\u05d5\u05dd \u05d7\u05d3\u05e9 \u05dc\u05d9\u05e2\u05e8)',
        whoT:'\u05de\u05d9 \u05d1\u05d6\u05d9\u05db\u05e8\u05d5\u05df \u05d4\u05d6\u05d4',
        whoTagNote:'\u05d4\u05e7\u05d9\u05e9\u05d5 \u05e2\u05dc \u201e\u05dc\u05e7\u05e8\u05d5\u05d0 \u05d1\u05e9\u05dd \u05dc\u05e4\u05e0\u05d9\u05dd\u201d \u05d5\u05e1\u05de\u05e0\u05d5 \u05de\u05e1\u05d2\u05e8\u05ea \u05e1\u05d1\u05d9\u05d1 \u05db\u05dc \u05e4\u05e0\u05d9\u05dd \u05d1\u05ea\u05e6\u05dc\u05d5\u05dd.',
        whoPickNote:'\u05d0\u05d9\u05df \u05ea\u05e6\u05dc\u05d5\u05dd \u2014 \u05d1\u05d7\u05e8\u05d5 \u05de\u05d4\u05d0\u05e0\u05e9\u05d9\u05dd \u05e9\u05d4\u05d9\u05e2\u05e8 \u05db\u05d1\u05e8 \u05de\u05db\u05d9\u05e8.',
        tagBtn:'\u05dc\u05e7\u05e8\u05d5\u05d0 \u05d1\u05e9\u05dd \u05dc\u05e4\u05e0\u05d9\u05dd', tagStop:'\u05e1\u05d9\u05d5\u05dd', pickBtn:'\u05dc\u05d1\u05d7\u05d5\u05e8 \u05de\u05d4\u05d9\u05e2\u05e8',
        pickFace:'\u05de\u05d9 \u05d6\u05d4?', searchPh:'\u05d4\u05ea\u05d7\u05d9\u05dc\u05d5 \u05dc\u05d4\u05e7\u05dc\u05d9\u05d3 \u05e9\u05dd\u2026',
        loading:'\u05d4\u05d9\u05e2\u05e8 \u05de\u05d1\u05d9\u05d0 \u05d0\u05ea \u05d0\u05e0\u05e9\u05d9\u05d5\u2026', noMatch:'\u05d0\u05d9\u05df \u05e2\u05d3\u05d9\u05d9\u05df \u05d0\u05e3 \u05d0\u05d7\u05d3 \u05d1\u05e9\u05dd \u05d4\u05d6\u05d4.',
        proposeLead:'\u05de\u05d9\u05e9\u05d4\u05d5 \u05e9\u05e2\u05d5\u05d3 \u05d0\u05d9\u05df \u05d1\u05d9\u05e2\u05e8?', proposeLink:'\u05dc\u05d4\u05e6\u05d9\u05e2 \u05d0\u05d3\u05dd',
        removeTag:'\u05dc\u05d4\u05e1\u05d9\u05e8', cancel:'\u05d1\u05d9\u05d8\u05d5\u05dc',
        send:'\u05dc\u05e9\u05dc\u05d5\u05d7 \u05dc\u05e9\u05d5\u05de\u05e8', missT:'\u05e2\u05d3\u05d9\u05d9\u05df \u05dc\u05d0 \u05de\u05d5\u05db\u05df',
        missLead:'\u05dc\u05d6\u05d9\u05db\u05e8\u05d5\u05df \u05d3\u05e8\u05d5\u05e9 \u05e2\u05d5\u05d3 \u05de\u05e2\u05d8 \u05dc\u05e4\u05e0\u05d9 \u05e9\u05d9\u05d2\u05d9\u05e2 \u05d0\u05dc \u05d4\u05e9\u05d5\u05de\u05e8:',
        mWhen:'\u05de\u05ea\u05d9 \u05d6\u05d4 \u05e7\u05e8\u05d4', mWhere:'\u05d0\u05d9\u05e4\u05d4 \u05d6\u05d4 \u05e7\u05e8\u05d4', mWho:'\u05de\u05d9 \u05de\u05d5\u05e4\u05d9\u05e2 \u05d1\u05d5',
        mSubst:'\u05ea\u05e6\u05dc\u05d5\u05dd, \u05e1\u05d9\u05e4\u05d5\u05e8 \u05d0\u05d5 \u05e7\u05d5\u05dc', ok:'\u05d4\u05d1\u05e0\u05ea\u05d9' }
  };
  var L=T[lang]||T.en;
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  /* box = {x,y,w,h} as fractions of the image; box:null = picked, not on a photo */
  var M={ photoFile:null, photoURL:null,
          story:'', when:'', where:'', country:'', countryOpen:false, people:[] };
  var places=null, peopleList=null, sb=null;
  var arm=false, gesture=null, draft=null, pickCtx=null;
  function sbc(){ if(!sb) sb=window.supabase.createClient(SB_URL,SB_KEY); return sb; }

  function reqChip(){ return '<span style="font-family:\'Azeret Mono\',monospace;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold,#f3cd84);border:1px solid rgba(243,205,132,.4);border-radius:99px;padding:2px 8px;vertical-align:middle">'+esc(L.reqd)+'</span>'; }
  function secT(txt,req){ return '<div style="font-family:\'Azeret Mono\',monospace;font-size:10.5px;letter-spacing:.25em;text-transform:uppercase;color:var(--muted,#8fa0b3);margin:26px 2px 10px;display:flex;align-items:center;gap:10px">'+esc(txt)+(req?reqChip():'')+'</div>'; }
  var inputCss='width:100%;box-sizing:border-box;background:rgba(10,18,28,.6);border:1px solid rgba(180,205,235,.18);border-radius:14px;padding:13px 14px;color:#e8eef5;font-family:\'Newsreader\',serif;font-size:16.5px;outline:none';
  var noteCss='color:var(--muted,#8fa0b3);font-size:14px;font-style:italic;font-family:\'Newsreader\',serif';

  function missing(){
    var m=[];
    if(!(M.photoFile||(M.story&&M.story.trim()))) m.push(L.mSubst); /* voice has its own door on the contribution page */
    if(!(M.when&&M.when.trim())) m.push(L.mWhen);
    if(!(M.people&&M.people.length)) m.push(L.mWho);
    if(!(M.where&&M.where.trim())) m.push(L.mWhere);
    return m;
  }

  function proposeLine(){
    return '<div style="'+noteCss+';margin-top:12px">'+esc(L.proposeLead)
      +' <a href="contribute-real.html" target="_blank" rel="noopener" style="color:var(--gold,#f3cd84)">'+esc(L.proposeLink)+'</a></div>';
  }
  function chipsHtml(){
    if(!M.people.length) return '';
    var n=0;
    return '<div id="cWhoChips" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">'
      +M.people.map(function(p,i){
        var no=p.box?(++n):null;
        return '<span class="cchip">'+(no?'<b>'+no+'</b>':'')+esc(p.label)
          +'<button class="cx" data-i="'+i+'" aria-label="'+esc(L.removeTag)+'">\u00d7</button></span>'; }).join('')
      +'</div>';
  }

  function render(){
    document.documentElement.lang=lang; document.documentElement.dir=L.dir;
    var w=document.getElementById('wrap'); if(!w) return;
    var photoBlock = M.photoURL
      ? '<div id="cStage" style="position:relative;border-radius:18px;overflow:hidden;border:1px solid rgba(180,205,235,.16)'+(arm?';touch-action:none':'')+'">'
          +'<img id="cImg" src="'+M.photoURL+'" style="width:100%;display:block;pointer-events:none" draggable="false">'
          +'<div id="cTagLayer" style="position:absolute;inset:0'+(arm?'':';pointer-events:none')+'"></div>'
        +'</div>'
        +'<div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">'
          +'<button id="cTagArm" class="cbtn'+(arm?' gold':'')+'">'+(arm?esc(L.tagStop):esc(L.tagBtn))+'</button>'
          +'<button id="cPhotoChange" class="cbtn">'+esc(L.changePhoto)+'</button>'
          +'<button id="cPhotoDrop" class="cbtn ghost">'+esc(L.removePhoto)+'</button></div>'
      : '<button id="cPhotoAdd" style="width:100%;border:1.5px dashed rgba(243,205,132,.45);background:rgba(243,205,132,.05);border-radius:18px;padding:42px 16px;color:var(--gold,#f3cd84);font-family:\'Newsreader\',serif;font-size:17px;cursor:pointer">'+esc(L.addPhoto)+'</button>';
    var whoBlock = M.photoURL
      ? '<div style="'+noteCss+'">'+esc(L.whoTagNote)+'</div>'+chipsHtml()+proposeLine()
      : '<div style="'+noteCss+'">'+esc(L.whoPickNote)+'</div>'
        +'<button id="cWhoPick" class="cbtn" style="margin-top:12px">'+esc(L.pickBtn)+'</button>'
        +chipsHtml()+proposeLine();
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
      +whoBlock
      +'<button id="cSend" style="width:100%;margin-top:34px;background:linear-gradient(180deg,#f6d996,#eec371);border:0;border-radius:99px;padding:15px;font-size:16.5px;font-weight:600;color:#20180a;cursor:pointer">'+esc(L.send)+'</button>'
      +'<div id="cMiss" style="display:none;margin-top:14px;border:1px solid rgba(243,205,132,.4);background:rgba(243,205,132,.06);border-radius:14px;padding:13px 15px;color:#e8dcc0;font-size:14.5px"></div>'
      +'<input type="file" id="cFile" accept="image/*" hidden>'
      +'</div>'
      +'<style>.cbtn{background:rgba(180,205,235,.1);border:1px solid rgba(180,205,235,.25);border-radius:99px;padding:10px 18px;color:#dce6f0;font-size:14px;cursor:pointer;font-family:inherit}.cbtn.ghost{background:transparent;color:var(--muted,#8fa0b3)}.cbtn.gold{background:rgba(243,205,132,.16);border-color:rgba(243,205,132,.55);color:var(--gold,#f3cd84)}'
      +'.ctag{position:absolute;border:2px solid rgba(243,205,132,.95);border-radius:6px;box-shadow:0 0 0 1px rgba(0,0,0,.4)}'
      +'.ctag.draft{border-style:dashed}'
      +'.ctagno{position:absolute;top:-12px;left:-12px;width:24px;height:24px;border-radius:50%;background:var(--gold,#f3cd84);color:#20180a;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;pointer-events:auto;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.5)}'
      +'.chdl{position:absolute;width:18px;height:18px;background:rgba(243,205,132,.9);border-radius:4px;pointer-events:auto}'
      +'.chdl-nw{top:-9px;left:-9px}.chdl-ne{top:-9px;right:-9px}.chdl-sw{bottom:-9px;left:-9px}.chdl-se{bottom:-9px;right:-9px}'
      +'.cchip{display:inline-flex;align-items:center;gap:7px;background:rgba(10,18,28,.6);border:1px solid rgba(243,205,132,.35);border-radius:99px;padding:7px 8px 7px 13px;color:#e8eef5;font-family:\'Newsreader\',serif;font-size:15px}'
      +'.cchip b{color:var(--gold,#f3cd84);font-weight:700;font-size:13px}'
      +'.cx{background:transparent;border:0;color:var(--muted,#8fa0b3);font-size:17px;cursor:pointer;padding:0 5px;line-height:1}'
      +'</style>';
    wire(); renderBoxes();
  }

  function wire(){
    var f=document.getElementById('cFile');
    var pick=function(){ f.click(); };
    var pa=document.getElementById('cPhotoAdd'); if(pa) pa.onclick=pick;
    var pc=document.getElementById('cPhotoChange'); if(pc) pc.onclick=pick;
    var pd=document.getElementById('cPhotoDrop'); if(pd) pd.onclick=function(){ dropPhoto(); render(); };
    f.onchange=function(){ var file=f.files&&f.files[0]; if(!file) return;
      dropPhoto();
      M.photoFile=file; M.photoURL=URL.createObjectURL(file); render(); };
    document.getElementById('cStory').oninput=function(){ M.story=this.value; };
    document.getElementById('cWhen').oninput=function(){ M.when=this.value; };
    var wi=document.getElementById('cWhere'), ci=document.getElementById('cCountry');
    wi.oninput=function(){ M.where=this.value;
      var raw=this.value.trim().toLowerCase();
      var hit=(places||[]).some(function(pl){ return pl.trim().toLowerCase()===raw; });
      M.countryOpen=!!(raw&&!hit); ci.style.display=M.countryOpen?'block':'none'; };
    ci.oninput=function(){ M.country=this.value; };
    var ta=document.getElementById('cTagArm'); if(ta) ta.onclick=function(){ arm=!arm; render(); };
    var wp=document.getElementById('cWhoPick'); if(wp) wp.onclick=function(){ openPicker('pick',{}); };
    var chips=document.getElementById('cWhoChips');
    if(chips) chips.addEventListener('click',function(e){ var x=e.target.closest('.cx'); if(!x) return;
      M.people.splice(+x.dataset.i,1); render(); });
    document.getElementById('cSend').onclick=function(){
      var m=missing(); var box=document.getElementById('cMiss');
      if(m.length){ box.style.display='block';
        box.innerHTML=esc(L.missLead)+'<ul style="margin:8px 0 0;padding-inline-start:20px">'+m.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>';
        box.scrollIntoView({behavior:'smooth',block:'center'}); return; }
      box.style.display='none';
      /* Stage C brings the real Send; until then a complete memory simply reports itself complete. */
      box.style.display='block'; box.textContent='\u2713';
    };
    bindTagger();
    fillPlaces();
  }

  /* ---------- the tagger (create mode: boxes live in M.people, never the DB) ----------
     Mechanics ported from moment-real's own tagger and the old prototype: drag on
     empty photo draws; drag a box moves it; drag a corner resizes; min size 5%
     each way. Disarmed, the layer ignores touches so the page scrolls; the number
     markers stay tappable to re-name or remove a face. */
  function dropPhoto(){
    if(M.photoURL) URL.revokeObjectURL(M.photoURL);
    M.photoFile=null; M.photoURL=null; arm=false; gesture=null; draft=null;
    /* the boxes belonged to that photograph; the people stay, picked */
    M.people.forEach(function(p){ p.box=null; });
  }
  function stageRect(){ var st=document.getElementById('cStage'); return st?st.getBoundingClientRect():{left:0,top:0,width:1,height:1}; }
  function toLocal(cx,cy){ var r=stageRect();
    return { x:Math.min(1,Math.max(0,(cx-r.left)/r.width)), y:Math.min(1,Math.max(0,(cy-r.top)/r.height)) }; }
  function dLocal(dx,dy){ var r=stageRect(); return { x:dx/r.width, y:dy/r.height }; }
  function boxCss(b){ return 'left:'+(b.x*100)+'%;top:'+(b.y*100)+'%;width:'+(b.w*100)+'%;height:'+(b.h*100)+'%'; }
  function handlesHtml(){ return ['nw','ne','sw','se'].map(function(h){ return '<span class="chdl chdl-'+h+'" data-h="'+h+'"></span>'; }).join(''); }
  function renderBoxes(){
    var layer=document.getElementById('cTagLayer'); if(!layer) return;
    var html='', n=0;
    M.people.forEach(function(p,i){ if(!p.box) return; n++;
      html+='<div class="ctag" data-i="'+i+'" style="'+boxCss(p.box)+'">'
        +'<span class="ctagno" role="button" tabindex="0">'+n+'</span>'
        +(arm?handlesHtml():'')+'</div>'; });
    if(draft) html+='<div class="ctag draft" id="cDraft" style="'+boxCss(draft)+'"></div>';
    layer.innerHTML=html;
  }
  function positionEl(el,b){ if(!el) return; el.style.left=(b.x*100)+'%'; el.style.top=(b.y*100)+'%'; el.style.width=(b.w*100)+'%'; el.style.height=(b.h*100)+'%'; }
  function bindTagger(){
    var layer=document.getElementById('cTagLayer'); if(!layer || layer.__b) return; layer.__b=true;
    layer.addEventListener('click',function(e){
      var no=e.target.closest('.ctagno'); if(!no) return;
      var boxEl=no.closest('.ctag'); if(!boxEl || boxEl.id==='cDraft') return;
      openPicker('retag',{i:+boxEl.dataset.i});
    });
    layer.addEventListener('pointerdown',function(e){
      if(!arm) return;
      if(e.target.closest('.ctagno')) return; /* the click handler above owns the marker */
      var boxEl=e.target.closest('.ctag'); var hdl=e.target.closest('.chdl');
      e.preventDefault(); try{ layer.setPointerCapture(e.pointerId); }catch(_){}
      if(!boxEl || boxEl.id==='cDraft'){
        var s=toLocal(e.clientX,e.clientY);
        draft={x:s.x,y:s.y,w:0,h:0}; gesture={mode:'draw',sx:s.x,sy:s.y};
        renderBoxes(); return;
      }
      var i=+boxEl.dataset.i; var p=M.people[i]; if(!p||!p.box) return;
      var o={x:p.box.x,y:p.box.y,w:p.box.w,h:p.box.h};
      if(hdl) gesture={mode:'resize',i:i,corner:hdl.dataset.h,px:e.clientX,py:e.clientY,o:o};
      else gesture={mode:'move',i:i,px:e.clientX,py:e.clientY,o:o};
    });
    layer.addEventListener('pointermove',function(e){
      if(!gesture) return; e.preventDefault();
      if(gesture.mode==='draw'){
        var c=toLocal(e.clientX,e.clientY);
        draft.x=Math.min(gesture.sx,c.x); draft.y=Math.min(gesture.sy,c.y);
        draft.w=Math.abs(c.x-gesture.sx); draft.h=Math.abs(c.y-gesture.sy);
        positionEl(document.getElementById('cDraft'),draft); return;
      }
      var p=M.people[gesture.i]; if(!p||!p.box) return;
      var el=layer.querySelector('.ctag[data-i="'+gesture.i+'"]');
      var dl=dLocal(e.clientX-gesture.px,e.clientY-gesture.py); var o=gesture.o;
      if(gesture.mode==='move'){
        p.box.x=Math.min(1-o.w,Math.max(0,o.x+dl.x));
        p.box.y=Math.min(1-o.h,Math.max(0,o.y+dl.y));
        positionEl(el,p.box);
      } else if(gesture.mode==='resize'){
        var c2=gesture.corner; var x=o.x,y=o.y,w=o.w,h=o.h;
        if(c2.indexOf('w')>=0){ x=o.x+dl.x; w=o.w-dl.x; } if(c2.indexOf('e')>=0){ w=o.w+dl.x; }
        if(c2.indexOf('n')>=0){ y=o.y+dl.y; h=o.h-dl.y; } if(c2.indexOf('s')>=0){ h=o.h+dl.y; }
        if(w<0.05) w=0.05; if(h<0.05) h=0.05;
        p.box.x=Math.max(0,x); p.box.y=Math.max(0,y); p.box.w=w; p.box.h=h;
        positionEl(el,p.box);
      }
    });
    var end=function(e){
      if(!gesture) return; var g=gesture; gesture=null;
      try{ layer.releasePointerCapture(e.pointerId); }catch(_){}
      if(g.mode==='draw'){
        if(!draft || draft.w<0.05 || draft.h<0.05){ draft=null; renderBoxes(); return; }
        openPicker('face',{}); /* the draft stays visible while the face is named */
      }
      /* move/resize: the model was updated live; nothing else to do \u2014 and nothing to save */
    };
    layer.addEventListener('pointerup',end);
    layer.addEventListener('pointercancel',end);
  }

  /* ---------- the picker: existing, published people only ----------
     contribute-add's loadPeople pattern: published people, labelled by LFName in
     the reader's language, searchable in every language the person has a name in.
     The search box is built once; only the list redraws (the keyboard lesson).
     No new-person door \u2014 the footer points to the hub's Propose a person. */
  function loadPeopleList(){
    if(peopleList) return Promise.resolve(peopleList);
    var c=sbc();
    return c.from('people').select('id,sex').eq('status','published').then(function(r){
      var pp=r.data||[];
      return c.from('person_facts').select('person_id,field,lang,value')
        .in('field',['called','given','family','maiden']).eq('status','published')
        .then(function(fr){
          var by=window.LFName?LFName.byPerson(fr.data||[]):{};
          peopleList=pp.map(function(p){ var facts=by[p.id]||[];
              var lbl=window.LFName?LFName.label(facts,lang):'';
              var srch=window.LFName?LFName.all(facts).join(' ').toLowerCase():'';
              return { id:p.id, label:lbl, search:srch }; })
            .filter(function(p){ return p.label; })
            .sort(function(a,b){ return a.label.localeCompare(b.label); });
          return peopleList;
        });
    });
  }
  function openPicker(mode,ctx){
    pickCtx={ mode:mode, i:ctx.i };
    var old=document.getElementById('cPick'); if(old) old.remove();
    var d=document.createElement('div'); d.id='cPick';
    d.innerHTML=
      '<div id="cPickBk" style="position:fixed;inset:0;background:rgba(2,6,12,.6);z-index:10000"></div>'
      +'<div dir="'+L.dir+'" style="position:fixed;left:0;right:0;bottom:0;z-index:10001;background:#0c1622;border-top:1px solid rgba(180,205,235,.2);border-radius:20px 20px 0 0;padding:18px 16px 22px;max-height:72vh;display:flex;flex-direction:column">'
      +'<div style="font-family:\'Newsreader\',serif;font-size:20px;color:#f2ead9;margin-bottom:12px">'+esc(mode==='pick'?L.whoT:L.pickFace)+'</div>'
      +'<input id="cPickQ" placeholder="'+esc(L.searchPh)+'" autocomplete="off" style="'+inputCss+'">'
      +'<div id="cPickList" style="overflow-y:auto;margin-top:10px;flex:1;min-height:120px"><div style="'+noteCss+';padding:14px 2px">'+esc(L.loading)+'</div></div>'
      +'<div style="border-top:1px solid rgba(180,205,235,.12);margin-top:10px;padding-top:10px">'
      +'<div style="'+noteCss+'">'+esc(L.proposeLead)+' <a href="contribute-real.html" target="_blank" rel="noopener" style="color:var(--gold,#f3cd84)">'+esc(L.proposeLink)+'</a></div>'
      +'<div style="display:flex;gap:10px;margin-top:12px">'
      +(mode==='retag'?'<button id="cPickRm" class="cbtn ghost">'+esc(L.removeTag)+'</button>':'')
      +'<button id="cPickCancel" class="cbtn" style="margin-inline-start:auto">'+esc(L.cancel)+'</button>'
      +'</div></div></div>';
    document.body.appendChild(d);
    document.getElementById('cPickBk').onclick=closePicker;
    document.getElementById('cPickCancel').onclick=closePicker;
    var rm=document.getElementById('cPickRm');
    if(rm) rm.onclick=function(){ var i=pickCtx.i; pickCtx=null; d.remove();
      if(i!=null) M.people.splice(i,1); draft=null; render(); };
    document.getElementById('cPickQ').oninput=function(){ drawPickList(this.value); };
    document.getElementById('cPickList').addEventListener('click',function(e){
      var b=e.target.closest('[data-pid]'); if(!b) return; choose(b.dataset.pid,b.dataset.plabel); });
    loadPeopleList().then(function(){ drawPickList(document.getElementById('cPickQ')?document.getElementById('cPickQ').value:''); });
  }
  function drawPickList(q){
    var el=document.getElementById('cPickList'); if(!el) return;
    var ql=(q||'').trim().toLowerCase();
    var used={}; M.people.forEach(function(p,i){ if(!(pickCtx&&pickCtx.mode==='retag'&&pickCtx.i===i)) used[p.id]=1; });
    var rows=(peopleList||[]).filter(function(p){ return !used[p.id] && (!ql || p.search.indexOf(ql)>=0); });
    el.innerHTML=rows.length
      ? rows.map(function(p){ return '<button data-pid="'+esc(p.id)+'" data-plabel="'+esc(p.label)+'" style="display:block;width:100%;text-align:start;background:transparent;border:0;border-bottom:1px solid rgba(180,205,235,.08);padding:12px 4px;color:#e8eef5;font-family:\'Newsreader\',serif;font-size:16.5px;cursor:pointer">'+esc(p.label)+'</button>'; }).join('')
      : '<div style="'+noteCss+';padding:14px 2px">'+esc(L.noMatch)+'</div>';
  }
  function choose(pid,plabel){
    var ctx=pickCtx; pickCtx=null;
    var d=document.getElementById('cPick'); if(d) d.remove();
    if(!ctx) return;
    if(ctx.mode==='face'){
      if(draft){ M.people.push({id:pid,label:plabel,box:{x:draft.x,y:draft.y,w:draft.w,h:draft.h}}); draft=null; }
    } else if(ctx.mode==='retag'){
      var p=M.people[ctx.i]; if(p){ p.id=pid; p.label=plabel; }
    } else {
      M.people.push({id:pid,label:plabel,box:null});
    }
    render();
  }
  function closePicker(){
    pickCtx=null; var d=document.getElementById('cPick'); if(d) d.remove();
    if(draft){ draft=null; renderBoxes(); } /* an unnamed box is no box */
  }

  function fillPlaces(){
    var dl=document.getElementById('cPlaces'); if(!dl) return;
    if(places){ dl.innerHTML=places.map(function(p){ return '<option value="'+esc(p)+'">'; }).join(''); return; }
    sbc().from('place_geo').select('name,name_en,name_ru,name_he').then(function(r){
      var seen={}; (r.data||[]).forEach(function(x){ ['name','name_en','name_ru','name_he'].forEach(function(k){ var v=(x[k]||'').trim(); if(v) seen[v]=1; }); });
      places=Object.keys(seen).sort(); fillPlaces();
    });
  }

  window.LFCreate={ boot:function(){ render(); } };
})();
