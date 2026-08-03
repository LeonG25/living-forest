# HANDOVER — The Living Forest

*Updated 2026-08-03. HEAD `041bc80`. Supersedes all earlier handovers.
Every claim here is evidence-backed (commit, file+line, table+rowcount, or probe output).*

---

## 1 · Orientation for the next session

**Read in this order:** this file → `CLAUDE.md` §0 (orientation table) → `docs/agents/QUEUE.md`.
`CLAUDE.md` is the canon: rules, schema, design law, Fen's clip map, voice law. This file is
the snapshot. The queue is the plan.

**Addresses**
- Live app: `https://leong25.github.io/living-forest/` (globe = `index.html` is home)
- Repo: `LeonG25/living-forest`, branch `main`, deployed by GitHub Pages (~85–90s)
- Droplet: `botuser@droplet` — repo `/home/botuser/living-forest`, rig `/home/botuser/qc`
- Supabase project: `oabcdrktuikifbormjip`
- PAT: `/home/botuser/.gh_token` (push via full HTTPS URL with token; the local
  `origin/main` ref stays stale even after a successful push — verify with `git ls-remote`)

**Who is who**
- Leon — keeper. uid `e7035e2f-…d6` ↔ person *Leonid Golnick* `bff9e2b7-…7e`; anchor active.
- Zoya — wife. uid `b7bb09ab-…5a`, confirmed, `is_member=true` (set by keeper action);
  person *Zoya Golnick-Gurvich* not yet claimed — she claims it herself via the sheet.
- QC rig — `qc-rig@livingforest.test`, uid `17fb171e-…9e`, member, deliberately anchor-less.

**Working method (non-negotiable)**
1. **Reproduce first.** Never patch a report you have not reproduced.
2. **Verify computationally.** `view` returns placeholders; assert row counts, file sizes, SHAs.
3. **Read before writing.** Never write docs from memory — read the source first.
4. **Design before engineering.** Every new page goes through Claude Design first.
5. **`node --check` every inline script** before push.
6. **Serialize droplet git ops**; never rerun a failed Pages job — push an empty commit instead.

---

## 2 · What shipped this session (2026-08-02 → 03)

**The entry chain, rebuilt.** This was the session's spine: a family member could sign up and
still see nothing, with no way forward and no explanation. Now:

| Stage | Behaviour | Evidence |
|---|---|---|
| Sign in | Enter key submits; fields scroll above the iOS keyboard; world pauses behind the gate | `e8ddba1`, `5a2c2a5`; `probe-gate.js` — form alive, typing echoes, wrong password answered |
| Not yet welcomed | Warm *"You are at the gate"* panel, trilingual, Knock again / Sign out | `8cf1b38`, `29c1f87`; probe as non-member saw the panel |
| Keeper welcomes | `review-real.html` opens with *"At the gate"*, one tap sets `is_member` | `06d76f9` |
| Identity | *"Who are you in the family?"* — fuzzy match, portraits, one tap claims | `ac90ed0`, `e96ab6a`, `7a4da62`; `probe-zoya.js` — 5 suggestions, claim row written |
| Loading | 12s watchdog → trilingual **Try again** | `1299da5` |
| Session health | `lf-auth.js` — out / broken / slow / in | `b90c692`, `5a2c2a5`; `probe-ghost.js` — token purged, honest gate |

**Four faults found behind one symptom ("nothing happens when I tap my name"):** no Enter
wiring; `?choose=1` ignored by the tree; the matcher assuming an array when `people` is a map;
and `status:'claimed'` rejected by a check constraint that allows only `active`/`declined`.

**The zeros mystery, solved.** Ghost sessions (expired, unrefreshable tokens) made the app look
signed-in while every read returned empty. Then my own repair made it worse: a `keeper_profiles_*`
policy referencing `profiles` from within `profiles` caused **infinite recursion**, and the SQL
that fixed it shared a block with a `rollback`, silently undoing itself. Both dead now
(`public.is_keeper()` security-definer + policies committed separately and read back), and
`041bc80` makes an empty answer to a member impossible to mistake for success.

**iPhone adaptation.** iOS head kit on all 24 pages (`f8982e9`), dvh fixes, Fen's canvas keyer
with 12 side-by-side clips (`d42ba53`), and a **real WebKit engine** in the rig — 13/13 pages
clean under iPhone UA.

**Agents.** Push-driven: they sleep until `echo N > ~/qc/wake` or a free detector finds an error.

---

## 3 · Known-open, in priority order

1. **Leon + Zoya verdict on the settled build** (deploy freeze holds until then).
2. **Site URL dashboard fix** — Leon only:
   `https://supabase.com/dashboard/project/oabcdrktuikifbormjip/auth/url-configuration`.
3. **Performance pass for cold opens** — service worker (download once) + defer the 3D world
   until after the gate. Measured cause, not a guess: ~600KB re-downloaded per open plus iOS
   shader compilation; Safari evicts caches far more aggressively than Android Chrome.
4. **Roll `lf-auth` to the remaining 22 pages** — mechanical, high value.
5. **Fen on real Apple glass** — one family iPhone, one game, one report.
6. **Keeper-confirm UI** for identity claims (`review-real.html` Identity section).
7. **Guidance 3/3** — first-walk welcome, then whispers.
8. **Missing Voice** (narrator/`contributor_id`) and **Tangled Thread** (places-lived).
9. **Connectedness QC** — orphan pages, dead links, back behaviour, ⊕ menu, empty states.
10. **Journal as a simple log**, designer first.

**Deferred by decision (do not build unasked):** keeper hierarchy, age-appropriate restrictions,
maiden-name work (0 rows across 45 people), `place_facts` rows with validity ranges,
per-player progression axis, Profile / who's-playing.

---

## 4 · The rig

- **Chrome probes:** `~/qc/probe-*.js` (19 of them; the named ones are listed in `CLAUDE.md` §1).
- **WebKit:** `~/qc/pw/webkit22` + `~/qc/wklibs`; env recipe inside `~/qc/wk-sweep.js`.
  Required: `LD_LIBRARY_PATH` from `~/qc/ldpath.txt`, `XDG_RUNTIME_DIR=/tmp/xdg`,
  EGL surfaceless llvmpipe, `GIO_MODULE_DIR`, `GSETTINGS_SCHEMA_DIR`,
  `GST_PLUGIN_SYSTEM_PATH_1_0` + scanner + `GST_PLUGIN_FEATURE_RANK=fakesink:MAX`.
  Python's `zipfile` flattens symlinks — the extraction repair pass is required after any reinstall.
- **Cost governor:** free detectors always; paid agents only on pushed work.

## 5 · Script versions live now

`lf-auth v2` · `lf-fen v21` · `lf-nav v10` · `lf-games v13` · `lf-place v3` · `lf-invite v2` ·
`lf-bg v2` · `lf-face v1` · `lf-progress v1`. Bump the `?v=` when a shared script changes —
unversioned refs caused a phantom-cache class of bug.
