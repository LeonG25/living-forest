# HANDOVER — single source of truth
*Updated 2026-08-02 09:45 UTC. Supersedes all earlier handovers. Every claim cites evidence.*

## Deployment
- Live: https://leong25.github.io/living-forest/ (repo LeonG25/living-forest, branch main, Pages workflow)
- Droplet: botuser@droplet, repo at /home/botuser/living-forest; Supabase project oabcdrktuikifbormjip.

## What is true right now
- **Seven-game front door**: five games live (who-is-who page hosts Whose Story Is This engine; where-was-this with trilingual place names via lf-place.js v3 + place_geo.name_en/ru/he + country_code, ISO-localized countries — probe-cards.js evidence in /tmp on droplet). Missing Voice & Tangled Thread unbuilt (QUEUE #-items).
- **Fen** (lf-fen.js v20): full choreography per keeper spec (entrance clip whole after 2s; idle rotation idle-new↔light-delight; 12s yawn, 24s sleep held; right/wrong reaction pools random-no-repeat; wave-walk exit on [data-act=back]; frame-driven tweens; phase machine with __fenlog trace). WebKit/iOS: still-mode fallback (fen-still.png) keeps speech+offer+leave functional where alpha-webm can't play. iOS ANIMATION (canvas + side-by-side alpha mp4) IN PROGRESS: sbs bake running (/tmp/bake_sbs.log), renderer next.
- **Guidance**: lf-invite.js v2 engine (anchor→kin-ring BFS→unmet-first; trio() for the clearing). Play-bud in lf-nav.js v10 on tree/person/globe. clearing-real.html live (lanterns from trio, re-roll, lf_fen_quiet toggle, in ⊕ menu). Remaining: first-walk welcome; whispers (last).
- **Identity self-service** (tree-real, commit ac90ed0): person button opens "Who are you in the family?" — fuzzy match, claim writes player_anchors(status claimed); you-badge honors anchor; keeper confirm UI still TODO (claims visible via SQL).
- **Keeper account**: profiles.person_id linked (Leon→Leonid Golnick). Wife signed up (la.lutine78@gmail.com, confirmed, signed in); Supabase Site URL fix pending on Leon (dashboard → auth/url-configuration).
- **Approve bug class KILLED** (commit ba728c1): name-part publish now supersedes old published rows in ALL four approve paths (review fact+group, person single+group; constraint person_facts_one_published_name_part was the silent 23505); approve errors surface as red toast. Root cause proven by RLS-simulated repro.
- **Translation**: framework Rule 3 sanctioned; v0 Edge Function 'translate' + translations table (354 rows) ALIVE; wired into Whose-Story clue (lf-games v13 carries artefact_id; cache-first then invoke; labelled + original toggle). Was blocked on API credit — credit added 2026-08-02; VERIFY on next Hebrew/Russian story view. Extend to moment/reel later.
- **iOS wave-1** (f8982e9): head kit on 24 pages (touch icon, web-app meta, viewport-fit), dvh fixes, Fen still-mode.
- **Places brain**: lf-place.js v3 (ensure→geo+label+country+code+3 names at birth; display(); countryName() via Intl). Consumers: person bead country-tie, moment picker, where-was-this (showPlace door, collision guard). QUEUE: route person bead display + place page through the same door.

## The rig (QC)
- Chrome probes as before (~/qc/probe-*.js). **NEW: real WebKit engine** (~/qc/pw/webkit22, ubuntu-22.04 build) with deps in ~/qc/wklibs; env recipe lives inside ~/qc/wk-sweep.js (LD path from ~/qc/ldpath.txt; mesa surfaceless llvmpipe; GIO TLS modules; GSettings schemas; GST plugin path + fakesink rank — the audio-sink NULL was the page-crash cause). Sweep-mode blocks .mp4/.webm (2GB box cannot CPU-decode; rig-only limitation). **13/13 pages CLEAN under iPhone-UA WebKit** (/home/botuser/qc/report/webkit-sweep.log pattern; run wksweep5 2026-08-02).
- nightly.sh: free detectors every cycle; **webkit sweep gated on HEAD change**; **paid agents PUSH-DRIVEN** (keeper's rule): sleep until `echo N > ~/qc/wake` or a detector finds errors (which writes wake itself). No clock anywhere.

## Open threads (priority order)
1. Zoya's iPhone blank tree/globe: NOT reproduced under WebKit 13/13-clean → suspect stale Safari cache from the ~20-deploy day or old iOS. Awaiting cache-clear verdict + iOS version.
2. Fen iOS animation v2: sbs mp4s baking → canvas renderer in lf-fen (detect → draw color half keyed by alpha half).
3. Keeper confirm UI for identity claims (review page section).
4. First-walk welcome; whispers (guidance builds 3/3).
5. Missing Voice + Tangled Thread games; Site URL fix (Leon).
