// transcribe (Leon, 2026-10-18) - turns a stored voice recording into text, then translates it.
//   Gemini (gemini-3.5-transcribe, limited to he-IL/ru-RU/en-US) writes the transcript into
//   artefacts.body + original_language; Claude (same key/model as `translate`, room for long
//   texts) writes machine translations into artefact_translations (machine=true).
// NOTHING ELSE DEPENDS ON THIS: if it fails the recording stays exactly as it was. Progress lives
//   in artefacts.metadata.transcript = {status: working|retry|done|failed, attempts, at, error, langs}.
//   3 attempts (the 10-minute cron retries); after the 3rd failure the keepers get one email and
//   the recording card tells everyone (incl. the narrator) that the text could not be made.
// Calls: POST {id} (database trigger on a new voice) or POST {} (cron: work through the queue).
//   ?dry=1&id=  returns the transcript without writing.  Guard: x-notify-secret (Vault).
// Source of truth for this file: living-forest/supabase-functions/transcribe/index.ts
import { createClient } from "jsr:@supabase/supabase-js@2";

const MAX_ATTEMPTS = 3;
const LANGS = ["he", "ru", "en"];
const NAMES: Record<string, string> = { en: "English", ru: "Russian", he: "Hebrew" };
const CLAUDE_MODEL = Deno.env.get("TRANSLATE_MODEL") || "claude-haiku-4-5-20251001";
const SITE = "https://leong25.github.io/living-forest/voices-real.html";
const b64 = (buf: Uint8Array) => { let s = ""; const C = 0x8000; for (let i = 0; i < buf.length; i += C) s += String.fromCharCode(...buf.subarray(i, i + C)); return btoa(s); };
const langOf = (t: string) => { const he = (t.match(/[\u0590-\u05FF]/g) || []).length, ru = (t.match(/[\u0400-\u04FF]/g) || []).length, la = (t.match(/[A-Za-z]/g) || []).length;
  return he >= ru && he >= la && he > 0 ? "he" : ru >= la && ru > 0 ? "ru" : "en"; };

/* FAMILY NAMES AS VOCABULARY (Leon, 2026-10-18: "Ионатан" was not recognised - not a Russian name).
   Gemini's custom_vocabulary biases recognition toward these words. All published name forms in all
   three languages (412 on 2026-10-18; the limit is 1000, so the list is capped). */
async function familyNames(sb: any): Promise<string[]> {
  const { data } = await sb.from("person_facts").select("value").eq("status", "published").in("field", ["called", "given", "family"]);
  const set = new Set<string>();
  (data || []).forEach((r: any) => String(r.value || "").split(/\s+/).forEach((w) => { w = w.replace(/[^\p{L}'\u05f3-]/gu, ""); if (w.length > 1) set.add(w); }));
  return Array.from(set).slice(0, 1000);
}

async function gemini(bytes: Uint8Array, mime: string, vocab: string[] = []): Promise<string> {
  const key = Deno.env.get("GEMINI_API_KEY"); if (!key) throw new Error("GEMINI_API_KEY missing");
  const r = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
    method: "POST", headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gemini-3.5-transcribe", input: [{ type: "audio", data: b64(bytes), mime_type: mime }],
      generation_config: { transcription_config: { language_codes: ["he-IL", "ru-RU", "en-US"], ...(vocab.length ? { custom_vocabulary: vocab } : {}) } } }) });
  const txt = await r.text(); let j: any = null; try { j = JSON.parse(txt); } catch (_) {}
  if (!r.ok) throw new Error("gemini " + r.status + ": " + txt.slice(0, 200));
  let text = j?.output_text || "";
  if (!text && j?.steps) for (const st of j.steps) for (const c of (st.content || [])) if (c.type === "text" && c.text) text += c.text;
  text = String(text).trim();
  if (!text) throw new Error("gemini returned no text");
  return text;
}

async function claudeTranslate(text: string, from: string, to: string, sex: string): Promise<string> {
  const key = Deno.env.get("ANTHROPIC_API_KEY"); if (!key) throw new Error("ANTHROPIC_API_KEY missing");
  const g = sex === "female" ? "FEMALE" : sex === "male" ? "MALE" : "";
  const speaker = g ? `\n\nThe person telling this is ${g}. Where the target language inflects verbs, adjectives or participles by the speaker's gender - as Hebrew and Russian do in the first person - use the ${g === "FEMALE" ? "FEMININE" : "MASCULINE"} forms for the narrator.` : "";
  const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: CLAUDE_MODEL, max_tokens: 8192,
      system: "You are a careful translator for a family-memory archive. The text is a transcript of someone telling a family story aloud. Translate faithfully, preserving tone, meaning and the spoken style. Keep personal names as they are unless they have a well-known form in the target language. Output ONLY the translation, with no preamble.",
      messages: [{ role: "user", content: `Translate from ${NAMES[from]} into ${NAMES[to]}:\n\n${text}${speaker}` }] }) });
  if (!r.ok) throw new Error("claude " + r.status + ": " + (await r.text()).slice(0, 200));
  const d = await r.json();
  const out = (d.content || []).filter((b: any) => b.type === "text").map((b: any) => b.text).join("").trim();
  if (!out) throw new Error("claude returned no text");
  return out;
}

async function mailKeepersFailure(sb: any, n: number) {
  const key = Deno.env.get("RESEND_API_KEY"); if (!key) return;
  const W: Record<string, any> = {
    en: { s: "A recording could not be turned into text", p: "The app could not write the text of a voice recording, even after 3 attempts. The recording itself is safe and can be played. The text can be added by hand on the Voices page.", o: "Open the Voices page" },
    ru: { s: "Не удалось расшифровать запись", p: "Приложению не удалось записать текст голосовой записи даже после 3 попыток. Сама запись в порядке, её можно слушать. Текст можно добавить вручную на странице «Голоса».", o: "Открыть «Голоса»" },
    he: { s: "לא ניתן היה לתמלל הקלטה", p: "האפליקציה לא הצליחה לכתוב את הטקסט של הקלטה קולית, גם אחרי 3 ניסיונות. ההקלטה עצמה שמורה ואפשר להשמיע אותה. אפשר להוסיף את הטקסט ידנית בדף הקולות.", o: "לדף הקולות" } };
  const { data: keepers } = await sb.from("profiles").select("id,preferred_lang").eq("is_keeper", true);
  for (const kp of keepers || []) {
    const { data: u } = await sb.auth.admin.getUserById(kp.id); const email = u?.user?.email || "";
    if (!email || /\.test$/i.test(email)) continue;
    const L = W[kp.preferred_lang] || W.en, dir = kp.preferred_lang === "he" ? "rtl" : "ltr";
    await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "The Living Forest <onboarding@resend.dev>", to: [email], subject: L.s + (n > 1 ? ` (${n})` : ""),
        html: `<div dir="${dir}" style="font-family:Georgia,serif;font-size:16px;color:#1d2533"><p>${L.p}</p><p><a href="${SITE}" style="color:#9a6a1c">${L.o} ›</a></p></div>` }) }).catch(() => {});
  }
}

async function work(sb: any, a: any): Promise<any> {
  const md = Object.assign({}, a.metadata || {}); const tr = Object.assign({}, md.transcript || {});
  const attempts = (tr.attempts || 0) + 1;
  md.transcript = { ...tr, status: "working", attempts, at: new Date().toISOString() };
  await sb.from("artefacts").update({ metadata: md }).eq("id", a.id);
  try {
    let text = tr.transcribed && a.body ? a.body : "";
    let lang = a.original_language;
    if (!text) {   // step 1: the transcript (kept if a later step fails, so a retry only redoes what is missing)
      const dl = await sb.storage.from("family").download(a.storage_path);
      if (dl.error) throw new Error("download: " + dl.error.message);
      text = await gemini(new Uint8Array(await dl.data.arrayBuffer()), a.storage_path.endsWith(".ogg") ? "audio/ogg" : "audio/webm", await familyNames(sb).catch(() => []));
      lang = langOf(text);
      md.transcript = { ...md.transcript, transcribed: true, engine: "gemini-3.5-transcribe" };
      const w1 = await sb.from("artefacts").update({ body: text, original_language: lang, metadata: md }).eq("id", a.id);
      if (w1.error) throw new Error("save transcript: " + w1.error.message);
    }
    let sex = "";
    if (a.contributor_id) { const { data: p } = await sb.from("people").select("sex").eq("id", a.contributor_id).maybeSingle(); sex = (p && p.sex) || ""; }
    const done: string[] = [];
    for (const to of LANGS.filter((l) => l !== lang)) {   // step 2: the other two languages
      const { data: rows } = await sb.from("artefact_translations").select("id,machine").eq("artefact_id", a.id).eq("lang", to).eq("status", "published");
      if ((rows || []).some((r: any) => r.machine === false)) { done.push(to); continue; }   // a person's translation is never overwritten
      if ((md.transcript.langs || []).includes(to) && (rows || []).length) { done.push(to); continue; }
      const out = await claudeTranslate(text, lang, to, sex);
      // created_by is required and a server has no signed-in user: the translation is credited to
      // the account that made the recording. Every write is checked - a silent failure looked like success.
      const w = rows && rows.length
        ? await sb.from("artefact_translations").update({ body: out, machine: true }).eq("id", rows[0].id)
        : await sb.from("artefact_translations").insert({ artefact_id: a.id, lang: to, body: out, status: "published", machine: true, published_at: new Date().toISOString(), created_by: a.contributor_user });
      if (w.error) throw new Error("save " + to + ": " + w.error.message);
      done.push(to);
      md.transcript = { ...md.transcript, langs: done.slice() };
    }
    md.transcript = { ...md.transcript, status: "done", at: new Date().toISOString(), langs: done, error: null };
    await sb.from("artefacts").update({ metadata: md }).eq("id", a.id);
    return { id: a.id, ok: true, lang, chars: text.length, translations: done };
  } catch (e) {
    const failed = attempts >= MAX_ATTEMPTS;
    md.transcript = { ...md.transcript, status: failed ? "failed" : "retry", error: String((e as any)?.message || e).slice(0, 300), at: new Date().toISOString() };
    await sb.from("artefacts").update({ metadata: md }).eq("id", a.id);
    return { id: a.id, ok: false, failed, error: md.transcript.error };
  }
}

Deno.serve(async (req: Request) => {
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: secret } = await sb.rpc("notify_secret");
  if (!secret || req.headers.get("x-notify-secret") !== secret) return new Response("forbidden", { status: 403 });
  const u = new URL(req.url); let body: any = {}; try { body = await req.json(); } catch (_) {}
  const id = body.id || u.searchParams.get("id");
  if (u.searchParams.get("dry") === "1" && id) {
    const { data: a } = await sb.from("artefacts").select("storage_path").eq("id", id).maybeSingle();
    const dl = await sb.storage.from("family").download(a.storage_path);
    const vocab = u.searchParams.get("vocab") === "0" ? [] : await familyNames(sb);
    const text = await gemini(new Uint8Array(await dl.data.arrayBuffer()), "audio/webm", vocab);
    return Response.json({ dry: true, lang: langOf(text), vocab: vocab.length, text });
  }
  let q = sb.from("artefacts").select("id,storage_path,body,original_language,metadata,contributor_id,contributor_user").eq("kind", "voice").not("storage_path", "is", null);
  q = id ? q.eq("id", id) : q.order("created_at", { ascending: true }).limit(100);
  const { data: arts } = await q;
  const now = Date.now(), results: any[] = [];
  for (const a of arts || []) {
    const t = (a.metadata && a.metadata.transcript) || {};
    const age = t.at ? now - Date.parse(t.at) : 1e12;
    if (!id) {   // queue: never tried, retry due (>9 min), or stuck "working" (>15 min)
      const due = !t.status || (t.status === "retry" && age > 9 * 60e3) || (t.status === "working" && age > 15 * 60e3);
      if (!due || (t.attempts || 0) >= MAX_ATTEMPTS) continue;
    } else if ((t.status === "done" || t.status === "working") && !body.force) { results.push({ id: a.id, skipped: t.status }); continue; }
    results.push(await work(sb, a));
    if (results.length >= 5) break;   // a few per call; the cron comes back for the rest
  }
  const newlyFailed = results.filter((r) => r.failed).length;
  if (newlyFailed) await mailKeepersFailure(sb, newlyFailed);
  return Response.json({ ok: true, results });
});
