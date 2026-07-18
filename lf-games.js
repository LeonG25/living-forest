/* lf-games.js — The Living Forest · game challenge ENGINE (logic only)
 * ---------------------------------------------------------------------------
 * Lane E deliverable. NO DOM, NO rendering, NO styling, NO page.
 * A pure, read-only engine that reads LIVE data through a passed-in Supabase
 * client (`sb`) and returns a challenge SPEC (data in → spec out). Separately
 * designed play screens consume these specs later.
 *
 * HARD RULES honoured (see CLAUDE.md):
 *  - Rule 8: challenges are generated dynamically from live DB rows, never
 *    hard-coded from a snapshot. Add data → new challenges, no app rebuild.
 *  - Rule 9: this file builds NO page/UI. Logic module only.
 *  - Rule 4: read-only. This module NEVER writes/mutates the database.
 *  - The client `sb` is injected; no keys, no client creation here.
 *
 * Every generator is async, takes (sb, opts) and returns one of:
 *   { status:'ok', ... }                        a real, playable challenge
 *   { status:'not_enough_data', need:'...' }    live data can't support a round yet
 *   { status:'error', message:'...' }           a query/logic failure (never throws)
 *
 * Determinism: pass opts.seed (number or string) to reproduce a challenge.
 * Without a seed a fresh random seed is used; the resolved seed is echoed back
 * in the result so a round can be replayed.
 *
 * Answer hiding: options are shuffled and the correct one is returned as a
 * separate `answer_index` (+ `answer_id`). NOTE: this is a client-side engine,
 * so the answer is necessarily present in the returned object — we merely avoid
 * flagging the correct option inline. A tamper-proof round would require the
 * check to run server-side; that is out of scope for this logic lane.
 *
 * Provenance: every result cites the live row ids it consumed in `used_rows`
 * so QC can trace any challenge back to source data.
 * ---------------------------------------------------------------------------
 */
(function (root) {
  'use strict';

  // ---- seeded RNG (mulberry32) ------------------------------------------
  function hashStr(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function resolveSeed(seed) {
    if (seed == null) {
      // browser runtime — Math.random is available here (this is not a workflow script)
      return (Math.floor(Math.random() * 0x7fffffff)) >>> 0;
    }
    if (typeof seed === 'number') return (seed >>> 0);
    return hashStr(String(seed));
  }
  function makeRng(seed) {
    let s = seed >>> 0;
    const fn = function () {
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return fn;
  }
  function shuffle(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pick(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }
  function sampleN(arr, n, rng) { return shuffle(arr, rng).slice(0, n); }

  // ---- small helpers -----------------------------------------------------
  // Await a Supabase query and throw on error so the generator's try/catch
  // funnels every failure into a { status:'error' } result.
  async function q(builder, where) {
    const { data, error } = await builder;
    if (error) throw new Error((where ? where + ': ' : '') + (error.message || String(error)));
    return data || [];
  }
  function nameOf(p) {
    if (!p) return '';
    return (p.display_name && String(p.display_name).trim())
      || (p.called_name && String(p.called_name).trim())
      || '';
  }
  function normPlace(v) { return String(v || '').trim().toLowerCase(); }
  function bodyText(a) { return (a && a.body != null) ? String(a.body).trim() : ''; }
  function whereOf(a) { return (a && a.metadata && a.metadata.where != null) ? String(a.metadata.where).trim() : ''; }
  function yearOf(a) {
    const w = (a && a.metadata && a.metadata.when != null) ? String(a.metadata.when) : '';
    const m = w.match(/\d{4}/);
    return m ? parseInt(m[0], 10) : null;
  }
  function err(message) { return { status: 'error', message: String(message) }; }

  // Build a shuffled options array from a correct person + distractor people.
  // Returns { options, answer_index, answer_id } or null if not enough people.
  function buildPeopleOptions(correct, distractorPool, optionCount, rng) {
    const pool = distractorPool.filter(p => p && p.id && p.id !== correct.id);
    if (pool.length < optionCount - 1) return null;
    const distractors = sampleN(pool, optionCount - 1, rng);
    const rawOptions = distractors.concat([correct]);
    const options = shuffle(rawOptions, rng).map(p => ({ id: p.id, label: nameOf(p) }));
    const answer_index = options.findIndex(o => o.id === correct.id);
    return { options, answer_index, answer_id: correct.id };
  }

  // =======================================================================
  // 1. The Missing Voice — "who TOLD this memory?"
  //    Reads:  artefacts(id, body, contributor_id, kind, metadata, status)
  //            people(id, display_name, called_name)
  //    not_enough_data when < 2 DISTINCT tellers (contributor_id) across
  //    memories with body text — a real "guess the teller" round is impossible
  //    with a single voice. Lights up automatically once a 2nd teller exists.
  // =======================================================================
  async function missingVoice(sb, opts) {
    opts = opts || {};
    const optionCount = Math.max(2, opts.optionCount || 4);
    const seed = resolveSeed(opts.seed);
    const rng = makeRng(seed);
    try {
      const arts = await q(
        sb.from('artefacts').select('id,body,contributor_id,kind,metadata,status').eq('status', 'published'),
        'artefacts'
      );
      // eligible memories: have a teller AND some body text to show
      const eligible = arts.filter(a => a.contributor_id && bodyText(a).length > 0);
      const tellers = {};
      eligible.forEach(a => { tellers[a.contributor_id] = true; });
      const distinctTellers = Object.keys(tellers);

      if (distinctTellers.length < 2) {
        return {
          status: 'not_enough_data',
          need: 'at least 2 distinct tellers across memories',
          detail: { eligible_memories: eligible.length, distinct_tellers: distinctTellers.length },
          seed: seed
        };
      }

      const people = await q(sb.from('people').select('id,display_name,called_name'), 'people');
      const byId = {}; people.forEach(p => { byId[p.id] = p; });

      // choose a memory; ensure its teller resolves to a real person
      const usable = eligible.filter(a => byId[a.contributor_id]);
      if (!usable.length) return { status: 'not_enough_data', need: 'a memory whose teller exists in people', seed: seed };
      const memory = pick(usable, rng);
      const correct = byId[memory.contributor_id];

      const built = buildPeopleOptions(correct, people, optionCount, rng);
      if (!built) return { status: 'not_enough_data', need: 'at least ' + optionCount + ' people for teller options', seed: seed };

      return {
        status: 'ok',
        game: 'missingVoice',
        seed: seed,
        prompt: { memory_text: bodyText(memory), question: 'Whose voice is this? Who told this memory?' },
        options: built.options,
        answer_index: built.answer_index,
        answer_id: built.answer_id,
        used_rows: { artefacts: [memory.id], people: built.options.map(o => o.id) }
      };
    } catch (e) { return err(e && e.message || e); }
  }

  // =======================================================================
  // 2. Whose Memory Is This? — "who is this memory ABOUT?"
  //    Reads:  artefact_subjects(artefact_id, person_id)
  //            artefacts(id, body, metadata, storage_path, kind, status)
  //            people(id, display_name, called_name)
  //    not_enough_data when no eligible subject-linked memory, or fewer than
  //    `optionCount` people to fill the options.
  // =======================================================================
  async function whoseMemory(sb, opts) {
    opts = opts || {};
    const optionCount = Math.max(2, opts.optionCount || 4);
    const seed = resolveSeed(opts.seed);
    const rng = makeRng(seed);
    try {
      const arts = await q(
        sb.from('artefacts').select('id,body,metadata,storage_path,kind,status').eq('status', 'published'),
        'artefacts'
      );
      const artById = {}; arts.forEach(a => { artById[a.id] = a; });

      const subs = await q(sb.from('artefact_subjects').select('artefact_id,person_id'), 'artefact_subjects');
      // an eligible round needs: a published artefact + a single clearly-hidden subject.
      // group subjects per artefact so we can prefer artefacts with exactly one subject
      // (unambiguous "who is this about?"). Fall back to any subject otherwise.
      const byArt = {};
      subs.forEach(s => {
        if (!s.person_id || !artById[s.artefact_id]) return;
        (byArt[s.artefact_id] = byArt[s.artefact_id] || []).push(s.person_id);
      });
      const single = [];
      Object.keys(byArt).forEach(aid => { if (byArt[aid].length === 1) single.push({ artefact_id: aid, person_id: byArt[aid][0] }); });
      const anyLink = [];
      Object.keys(byArt).forEach(aid => byArt[aid].forEach(pid => anyLink.push({ artefact_id: aid, person_id: pid })));
      const candidates = single.length ? single : anyLink;

      if (!candidates.length) {
        return { status: 'not_enough_data', need: 'at least one published memory linked to a subject (artefact_subjects)', seed: seed };
      }

      const people = await q(sb.from('people').select('id,display_name,called_name'), 'people');
      const byId = {}; people.forEach(p => { byId[p.id] = p; });

      const usable = candidates.filter(c => byId[c.person_id]);
      if (!usable.length) return { status: 'not_enough_data', need: 'a subject that exists in people', seed: seed };
      const chosen = pick(usable, rng);
      const art = artById[chosen.artefact_id];
      const correct = byId[chosen.person_id];

      const built = buildPeopleOptions(correct, people, optionCount, rng);
      if (!built) return { status: 'not_enough_data', need: 'at least ' + optionCount + ' people for subject options', seed: seed };

      return {
        status: 'ok',
        game: 'whoseMemory',
        seed: seed,
        prompt: {
          memory_text: bodyText(art),
          has_photo: !!art.storage_path,
          storage_path: art.storage_path || null,   // play screen resolves a signed URL
          question: 'Whose memory is this? Who is it about?'
        },
        options: built.options,
        answer_index: built.answer_index,
        answer_id: built.answer_id,
        used_rows: { artefacts: [art.id], people: built.options.map(o => o.id) }
      };
    } catch (e) { return err(e && e.message || e); }
  }

  // =======================================================================
  // 3. The Tangled Thread — a hunt across PLACES: two people who lived in the
  //    SAME place at DIFFERENT times and never met — find the pair.
  //    Reads:  person_facts(person_id, field='lived', value, ord, status)
  //            people(id, display_name, called_name)
  //    lived has 0 rows today → not_enough_data. Lights up automatically once
  //    Leon seeds places-lived for >= 2 people sharing a place.
  //    Wrong-guess warmth is expressed as a proximity map the play screen reads
  //    (shared place ⇒ warm; closer in the lived-order ⇒ warmer).
  // =======================================================================
  async function tangledThread(sb, opts) {
    opts = opts || {};
    const seed = resolveSeed(opts.seed);
    const rng = makeRng(seed);
    const NEED = 'places-lived (person_facts field=lived) for >=2 people sharing a place';
    try {
      const lived = await q(
        sb.from('person_facts').select('person_id,field,value,ord,status').eq('field', 'lived').eq('status', 'published'),
        'person_facts'
      );
      const clean = lived.filter(r => r.person_id && normPlace(r.value));
      if (!clean.length) {
        return { status: 'not_enough_data', need: NEED, detail: { lived_rows: 0 }, seed: seed };
      }

      // group people by normalised place
      const byPlace = {};   // place -> [{person_id, ord, raw}]
      clean.forEach(r => {
        const key = normPlace(r.value);
        (byPlace[key] = byPlace[key] || []).push({ person_id: r.person_id, ord: (r.ord == null ? 0 : r.ord), raw: String(r.value).trim() });
      });
      // a valid puzzle place: >= 2 DISTINCT people share it
      const sharedPlaces = Object.keys(byPlace).filter(k => {
        const persons = {}; byPlace[k].forEach(x => { persons[x.person_id] = true; });
        return Object.keys(persons).length >= 2;
      });
      if (!sharedPlaces.length) {
        return { status: 'not_enough_data', need: NEED, detail: { lived_rows: clean.length, shared_places: 0 }, seed: seed };
      }

      const placeKey = pick(sharedPlaces, rng);
      // distinct people at this place (keep their earliest lived-ord as a rough "time")
      const atPlace = {};   // person_id -> {ord, raw}
      byPlace[placeKey].forEach(x => {
        if (!(x.person_id in atPlace) || x.ord < atPlace[x.person_id].ord) atPlace[x.person_id] = { ord: x.ord, raw: x.raw };
      });
      const personIds = Object.keys(atPlace);
      const rawLabel = atPlace[personIds[0]].raw;

      const people = await q(sb.from('people').select('id,display_name,called_name'), 'people');
      const byId = {}; people.forEach(p => { byId[p.id] = p; });

      // the puzzle PAIR: two who shared the place at the largest ord gap (most
      // plausibly "never met"). Deterministic given the seed-chosen place.
      const sorted = personIds.slice().sort((a, b) => atPlace[a].ord - atPlace[b].ord);
      const pairIds = [sorted[0], sorted[sorted.length - 1]];
      const pair = pairIds.map(id => ({ id: id, label: nameOf(byId[id]), lived_ord: atPlace[id].ord }));

      // candidate cast = everyone with any lived row (the play screen offers these
      // as pickable nodes). proximity map answers warm/cold for a wrong guess.
      const allLivedPersons = {};
      clean.forEach(r => { (allLivedPersons[r.person_id] = allLivedPersons[r.person_id] || []).push(normPlace(r.value)); });
      const targetOrd = atPlace[pairIds[0]].ord;
      const proximity = {};   // person_id -> {shared_place:bool, ord_distance:number|null}
      Object.keys(allLivedPersons).forEach(pid => {
        const sharesPlace = allLivedPersons[pid].indexOf(placeKey) !== -1;
        proximity[pid] = {
          shared_place: sharesPlace,
          ord_distance: (pid in atPlace) ? Math.abs(atPlace[pid].ord - targetOrd) : null
        };
      });

      const candidates = Object.keys(allLivedPersons)
        .filter(id => byId[id])
        .map(id => ({ id: id, label: nameOf(byId[id]) }));

      return {
        status: 'ok',
        game: 'tangledThread',
        seed: seed,
        prompt: {
          place: rawLabel,
          question: 'Two people once lived in ' + rawLabel + ' — years apart, and never met. Find the pair.'
        },
        pair: pair,                 // the correct answer (two person ids)
        candidates: candidates,     // nodes the player can pick from
        proximity: proximity,       // warm/cold hint source for wrong guesses
        used_rows: {
          person_facts_field: 'lived',
          people: candidates.map(c => c.id),
          place_key: placeKey
        }
      };
    } catch (e) { return err(e && e.message || e); }
  }

  // =======================================================================
  // 4. Where Was This? — "where was this photo taken?"
  //    Reads:  artefacts(id, body, metadata, storage_path, kind, status)
  //            (metadata.where carries the place string; metadata.when a year)
  //    Answer is the place label; distractors are OTHER distinct real place
  //    strings drawn from the corpus (never invented). map_point coords are
  //    left null — the play screen geocodes the label (as home-real.html does)
  //    or a future place-geo store fills them. not_enough_data when no
  //    metadata.where exists, or < 2 distinct places to choose between.
  // =======================================================================
  async function whereWasThis(sb, opts) {
    opts = opts || {};
    const optionCount = Math.max(2, opts.optionCount || 4);
    const seed = resolveSeed(opts.seed);
    const rng = makeRng(seed);
    try {
      const arts = await q(
        sb.from('artefacts').select('id,body,metadata,storage_path,kind,status').eq('status', 'published'),
        'artefacts'
      );
      const withWhere = arts.filter(a => whereOf(a).length > 0);
      if (!withWhere.length) {
        return { status: 'not_enough_data', need: 'artefacts with metadata.where set', seed: seed };
      }

      // distinct real place strings across the corpus (keyed lowercase, keep a raw label)
      const placeLabel = {};   // key -> raw label
      arts.forEach(a => { const w = whereOf(a); if (w) placeLabel[normPlace(w)] = w; });
      const distinctKeys = Object.keys(placeLabel);
      if (distinctKeys.length < 2) {
        return {
          status: 'not_enough_data',
          need: 'at least 2 distinct places (metadata.where) to choose between',
          detail: { distinct_places: distinctKeys.length },
          seed: seed
        };
      }

      const art = pick(withWhere, rng);
      const correctKey = normPlace(whereOf(art));
      const distractorKeys = sampleN(distinctKeys.filter(k => k !== correctKey), Math.max(1, optionCount - 1), rng);
      const optionKeys = shuffle(distractorKeys.concat([correctKey]), rng);
      const options = optionKeys.map(k => ({ id: k, label: placeLabel[k], map_point: null }));
      const answer_index = options.findIndex(o => o.id === correctKey);

      return {
        status: 'ok',
        game: 'whereWasThis',
        seed: seed,
        prompt: {
          has_photo: !!art.storage_path,
          storage_path: art.storage_path || null,   // play screen resolves a signed URL
          when: (art.metadata && art.metadata.when) || null,
          year: yearOf(art),
          caption: bodyText(art) || null,
          question: 'Where was this taken?'
        },
        options: options,           // each carries map_point (null until geocoded)
        answer_index: answer_index,
        answer_id: correctKey,
        answer_label: placeLabel[correctKey],
        used_rows: { artefacts: [art.id] }
      };
    } catch (e) { return err(e && e.message || e); }
  }

  // ---- export ------------------------------------------------------------
  const LFGames = {
    missingVoice: missingVoice,
    whoseMemory: whoseMemory,
    tangledThread: tangledThread,
    whereWasThis: whereWasThis,
    // exposed for tests / reproducibility of the shuffle
    _util: { makeRng: makeRng, resolveSeed: resolveSeed, shuffle: shuffle, hashStr: hashStr }
  };

  root.LFGames = LFGames;
  if (typeof module !== 'undefined' && module.exports) module.exports = LFGames;
})(typeof self !== 'undefined' ? self : this);
