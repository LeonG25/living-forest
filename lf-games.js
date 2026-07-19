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

  // Parse ANY date-ish live value ('1936', '1936-05', '1936-05-12', 'May 1936',
  // 'circa 1941') into a sortable key. Returns null when no plausible year is
  // present — an unparseable row simply does not qualify as a dated event, so
  // sloppy data degrades to not_enough_data instead of a wrong answer.
  function parseDateVal(v) {
    const s = String(v == null ? '' : v).trim();
    if (!s) return null;
    const y = s.match(/\d{4}/);
    if (!y) return null;
    const year = parseInt(y[0], 10);
    if (year < 1000 || year > 2999) return null;
    let mo = 0, d = 0;
    const iso = s.match(/\d{4}-(\d{1,2})(?:-(\d{1,2}))?/);
    if (iso) {
      mo = parseInt(iso[1], 10) || 0;
      d = iso[2] ? (parseInt(iso[2], 10) || 0) : 0;
      if (mo > 12) mo = 0;
      if (d > 31) d = 0;
      if (!mo) d = 0;
    }
    return {
      sort: (year * 10000) + (mo * 100) + d,
      year: year,
      label: s,
      precision: d ? 'day' : (mo ? 'month' : 'year')
    };
  }
  function whenOf(a) { return (a && a.metadata && a.metadata.when != null) ? String(a.metadata.when).trim() : ''; }
  // Drop events that share a sort key — a tie makes the correct order ambiguous,
  // and an ambiguous round is worse than no round.
  function distinctBySort(events) {
    const seen = {}; const out = [];
    events.forEach(e => { if (!(e.date.sort in seen)) { seen[e.date.sort] = true; out.push(e); } });
    return out;
  }

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

  // =======================================================================
  // 5. Put Their Life in Order — "order these events in time."
  //    Reads:  person_facts(id, person_id, field in ('birth','death'), value, status)
  //            artefact_subjects(artefact_id, person_id)
  //            artefacts(id, body, metadata, storage_path, kind, status)
  //            people(id, display_name, called_name)
  //    An event qualifies only if its value parses to a year. birth/death are
  //    published-gated; artefacts contribute their metadata.when.
  //    person_facts birth/death = 0 published rows today, so every person falls
  //    short of 3 events and this returns not_enough_data. It lights up on its
  //    own the moment Leon adds dates — nothing here is hard-coded.
  //    Answer shape differs from the guess-one games: `answer_order` is the
  //    correct sequence of event ids (there is no single right option).
  // =======================================================================
  async function orderOfThings(sb, opts) {
    opts = opts || {};
    const seed = resolveSeed(opts.seed);
    const rng = makeRng(seed);
    const want = Math.min(5, Math.max(3, opts.eventCount || 4));
    const NEED = 'at least 3 dated life events for a person';
    try {
      const facts = await q(
        sb.from('person_facts').select('id,person_id,field,value,status')
          .in('field', ['birth', 'death']).eq('status', 'published'),
        'person_facts'
      );
      const arts = await q(
        sb.from('artefacts').select('id,body,metadata,storage_path,kind,status').eq('status', 'published'),
        'artefacts'
      );
      const subs = await q(sb.from('artefact_subjects').select('artefact_id,person_id'), 'artefact_subjects');
      const artById = {}; arts.forEach(a => { artById[a.id] = a; });

      // person_id -> [event]; an event is any datable thing we can place in time
      const byPerson = {};
      function addEvent(pid, ev) { if (pid && ev) (byPerson[pid] = byPerson[pid] || []).push(ev); }

      facts.forEach(f => {
        const d = parseDateVal(f.value);
        if (!d) return;
        addEvent(f.person_id, {
          id: 'fact:' + f.id,
          source: 'person_facts',
          source_id: f.id,
          kind: f.field,                                   // 'birth' | 'death'
          label: f.field === 'birth' ? 'Born' : 'Died',
          when: d.label,
          year: d.year,
          precision: d.precision,
          date: d
        });
      });
      subs.forEach(s => {
        const a = artById[s.artefact_id];
        if (!a) return;
        const d = parseDateVal(whenOf(a));
        if (!d) return;
        addEvent(s.person_id, {
          id: 'artefact:' + a.id,
          source: 'artefacts',
          source_id: a.id,
          kind: 'memory',
          label: bodyText(a) || whereOf(a) || 'A memory',
          when: d.label,
          year: d.year,
          precision: d.precision,
          has_photo: !!a.storage_path,
          storage_path: a.storage_path || null,            // play screen resolves a signed URL
          date: d
        });
      });

      // a person is playable only with >= 3 events at DISTINCT points in time
      const playable = Object.keys(byPerson)
        .map(pid => ({ person_id: pid, events: distinctBySort(byPerson[pid]) }))
        .filter(x => x.events.length >= 3);

      if (opts.personId) {
        const only = playable.filter(x => x.person_id === opts.personId);
        if (!only.length) {
          return {
            status: 'not_enough_data',
            need: NEED,
            detail: { person_id: opts.personId, dated_events: distinctBySort(byPerson[opts.personId] || []).length },
            seed: seed
          };
        }
        playable.length = 0; playable.push(only[0]);
      }
      if (!playable.length) {
        return {
          status: 'not_enough_data',
          need: NEED,
          detail: { dated_facts: facts.length, people_with_events: Object.keys(byPerson).length, people_playable: 0 },
          seed: seed
        };
      }

      const chosen = pick(playable, rng);
      const people = await q(sb.from('people').select('id,display_name,called_name'), 'people');
      const byId = {}; people.forEach(p => { byId[p.id] = p; });
      const person = byId[chosen.person_id];
      if (!person) return { status: 'not_enough_data', need: 'a person row for the dated events', seed: seed };

      // take up to `want` events, then present them SHUFFLED
      const taken = sampleN(chosen.events, Math.min(want, chosen.events.length), rng);
      const correct = taken.slice().sort((a, b) => a.date.sort - b.date.sort);
      const options = shuffle(taken, rng).map(e => ({
        id: e.id,
        label: e.label,
        kind: e.kind,
        when: e.when,
        year: e.year,
        precision: e.precision,
        has_photo: !!e.has_photo,
        storage_path: e.storage_path || null
      }));

      return {
        status: 'ok',
        game: 'orderOfThings',
        seed: seed,
        person: { id: person.id, label: nameOf(person) },
        prompt: {
          person_name: nameOf(person),
          question: 'Put these moments from ' + nameOf(person) + "'s life in order."
        },
        options: options,                                  // shuffled — the player reorders these
        answer_order: correct.map(e => e.id),              // the correct sequence of option ids
        used_rows: {
          people: [person.id],
          person_facts: taken.filter(e => e.source === 'person_facts').map(e => e.source_id),
          artefacts: taken.filter(e => e.source === 'artefacts').map(e => e.source_id)
        }
      };
    } catch (e) { return err(e && e.message || e); }
  }

  // =======================================================================
  // 6. What Happened Next? — show a dated memory, ask which real memory came
  //    NEXT in time.
  //    Reads:  artefacts(id, body, metadata, storage_path, kind, status)
  //            artefact_subjects(artefact_id, person_id)   [only when scoped]
  //    The correct option is the memory with the SMALLEST 'when' strictly after
  //    the anchor. Distractors are OTHER real memories (earlier ones, or later
  //    ones that are not the immediate next) — never invented. Any memory tied
  //    with the correct one on time is excluded: a tie would make two options
  //    equally right. opts.personId scopes the round to one person's memories.
  //    not_enough_data below 2 comparably-dated memories in the chosen scope.
  // =======================================================================
  async function whatHappenedNext(sb, opts) {
    opts = opts || {};
    const optionCount = Math.max(2, opts.optionCount || 4);
    const seed = resolveSeed(opts.seed);
    const rng = makeRng(seed);
    const NEED = 'at least 2 memories with dates';
    try {
      const arts = await q(
        sb.from('artefacts').select('id,body,metadata,storage_path,kind,status').eq('status', 'published'),
        'artefacts'
      );

      let scope = arts;
      let scopedPerson = null;
      if (opts.personId) {
        const subs = await q(
          sb.from('artefact_subjects').select('artefact_id,person_id').eq('person_id', opts.personId),
          'artefact_subjects'
        );
        const keep = {}; subs.forEach(s => { keep[s.artefact_id] = true; });
        scope = arts.filter(a => keep[a.id]);
        scopedPerson = opts.personId;
      }

      // datable memories in this scope
      const dated = [];
      scope.forEach(a => {
        const d = parseDateVal(whenOf(a));
        if (d) dated.push({ art: a, date: d });
      });
      if (dated.length < 2) {
        return {
          status: 'not_enough_data',
          need: NEED,
          detail: { scope_person_id: scopedPerson, scope_memories: scope.length, dated_memories: dated.length },
          seed: seed
        };
      }

      dated.sort((a, b) => a.date.sort - b.date.sort);

      // an anchor is playable only if something happened strictly AFTER it
      const anchors = dated.filter(x => dated.some(y => y.date.sort > x.date.sort));
      if (!anchors.length) {
        return {
          status: 'not_enough_data',
          need: 'memories at 2 different points in time (all dates are identical)',
          detail: { scope_person_id: scopedPerson, dated_memories: dated.length },
          seed: seed
        };
      }

      const anchor = pick(anchors, rng);
      const later = dated.filter(x => x.date.sort > anchor.date.sort);
      const nextSort = later[0].date.sort;                  // `dated` is sorted, so this is the earliest
      const tiedNext = later.filter(x => x.date.sort === nextSort);
      // ambiguity guard: two memories share the "next" slot — pick one as correct
      // and drop its twins from the pool so only one option can be right.
      const correct = pick(tiedNext, rng);
      const excluded = {};
      excluded[anchor.art.id] = true;
      tiedNext.forEach(x => { excluded[x.art.id] = true; });

      const distractorPool = dated.filter(x => !excluded[x.art.id]);
      if (!distractorPool.length) {
        return {
          status: 'not_enough_data',
          need: 'a 3rd dated memory to act as a distractor',
          detail: { scope_person_id: scopedPerson, dated_memories: dated.length },
          seed: seed
        };
      }

      function toOption(x) {
        return {
          id: x.art.id,
          label: bodyText(x.art) || whereOf(x.art) || 'A memory',
          has_photo: !!x.art.storage_path,
          storage_path: x.art.storage_path || null,        // play screen resolves a signed URL
          where: whereOf(x.art) || null
          // NOTE: `when` is deliberately withheld from options — showing the date
          // would hand the player the answer.
        };
      }

      const distractors = sampleN(distractorPool, Math.min(optionCount - 1, distractorPool.length), rng);
      const options = shuffle(distractors.concat([correct]), rng).map(toOption);
      const answer_index = options.findIndex(o => o.id === correct.art.id);

      return {
        status: 'ok',
        game: 'whatHappenedNext',
        seed: seed,
        person_id: scopedPerson,
        prompt: {
          memory_text: bodyText(anchor.art) || null,
          has_photo: !!anchor.art.storage_path,
          storage_path: anchor.art.storage_path || null,   // play screen resolves a signed URL
          where: whereOf(anchor.art) || null,
          when: anchor.date.label,
          year: anchor.date.year,
          question: 'This happened. What happened next?'
        },
        options: options,
        answer_index: answer_index,
        answer_id: correct.art.id,
        answer_when: correct.date.label,
        used_rows: { artefacts: [anchor.art.id].concat(options.map(o => o.id)) }
      };
    } catch (e) { return err(e && e.message || e); }
  }

  // ---- export ------------------------------------------------------------
  const LFGames = {
    missingVoice: missingVoice,
    whoseMemory: whoseMemory,
    tangledThread: tangledThread,
    whereWasThis: whereWasThis,
    orderOfThings: orderOfThings,
    whatHappenedNext: whatHappenedNext,
    // exposed for tests / reproducibility of the shuffle
    _util: { makeRng: makeRng, resolveSeed: resolveSeed, shuffle: shuffle, hashStr: hashStr }
  };

  root.LFGames = LFGames;
  if (typeof module !== 'undefined' && module.exports) module.exports = LFGames;
})(typeof self !== 'undefined' ? self : this);
