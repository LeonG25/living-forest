/* lf-progress.js — records knowledge events: which player knows which person, how deeply.
   Levels of knowing: met | followed | heard | woven (see docs/progression-spec.md).
   Fire-and-forget: silent when signed out, never blocks gameplay.
   API: LFProgress.init(sb); LFProgress.record(game, level, personIds, correct) */
(function(){
  if(window.LFProgress) return;
  var sb=null, uid=null, ready=null;
  function init(client){ sb=client;
    ready=sb.auth.getUser().then(function(r){ uid=(r.data&&r.data.user&&r.data.user.id)||null; }).catch(function(){}); }
  function record(game,level,personIds,correct){ if(!sb) return;
    Promise.resolve(ready).then(function(){ if(!uid) return;
      var rows=(personIds||[]).filter(Boolean).map(function(pid){
        return { user_id:uid, person_id:pid, game:game, level:level, correct:!!correct }; });
      if(rows.length){ try{ sb.from('knowledge_events').insert(rows).then(function(){},function(){}); }catch(e){} }
    }); }
  window.LFProgress={init:init,record:record};
})();
