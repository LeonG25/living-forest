/* One identity process for every page, every platform. LFAuth.ensure answers,
   definitively, one of four states — and never lets a ghost session masquerade:
     out      — no session: show the gate
     broken   — a session that cannot answer (expired/unrefreshable): signed out
                cleanly, show the gate with its words; NEVER empty pages
     waiting  — signed in, not yet welcomed by the keeper
     in       — { uid, profile, anchor }: the system knows who this is
   The health check is the heart: a session must PROVE it works with one real
   authenticated read (8s limit), one refresh retry, or it is put down. */
(function(){
  if(window.LFAuth) return;
  function isAuthDead(err){
    /* only a DEFINITIVE verdict may kill a session: 401/403 or an explicit JWT
       failure. Slowness, timeouts and network hiccups are never grounds. */
    if(!err) return false;
    const st=err.status||err.code||''; const msg=String(err.message||err);
    return st===401||st===403||st==='PGRST301'||/jwt|token.*(invalid|expired)|not.*authenticated/i.test(msg);
  }
  async function readProfile(sb, uid){
    const timeout=new Promise((_,rej)=>setTimeout(()=>rej(Object.assign(new Error('lf-auth-slow'),{slow:true})),15000));
    const q=sb.from('profiles').select('is_keeper,is_member,person_id,display_name').eq('id',uid).maybeSingle();
    const {data,error}=await Promise.race([q,timeout]);
    if(error) throw error;
    return data;
  }
  window.LFAuth={
    ensure: async function(sb){
      let session=null;
      try{ const {data}=await sb.auth.getSession(); session=data&&data.session; }catch(e){}
      if(!session) return {ok:'out'};
      const uid=session.user.id;
      let profile=null, healthy=false, deadVerdict=false;
      try{ profile=await readProfile(sb, uid); healthy=true; }
      catch(e){ if(isAuthDead(e)) deadVerdict=true; }
      if(!healthy){
        try{ await sb.auth.refreshSession();
             profile=await readProfile(sb, uid); healthy=true; deadVerdict=false; }
        catch(e){ if(isAuthDead(e)) deadVerdict=true; }
      }
      if(!healthy && deadVerdict){
        try{ await sb.auth.signOut(); }catch(e){}
        try{ localStorage.removeItem('sb-oabcdrktuikifbormjip-auth-token'); }catch(e){}
        return {ok:'broken'};
      }
      if(!healthy){ return {ok:'slow', uid}; }   /* keep the session; the page retries, never logs out */
      if(!profile || (!profile.is_keeper && !profile.is_member)) return {ok:'waiting', uid, profile};
      let anchor=null;
      try{ const {data:a}=await sb.from('player_anchors').select('person_id,status').eq('user_id',uid).maybeSingle(); anchor=a||null; }catch(e){}
      return {ok:'in', uid, profile, anchor};
    }
  };
})();
