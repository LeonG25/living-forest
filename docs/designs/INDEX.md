# Design deliveries — catalogue

> **Revision:** 2026-07-17 08:39 (UTC+2) · commit `5c59625` · authority: `docs/HANDOVER.md`

**Naming — dated on purpose.** Unlike text documents (which are single, stable-named files — see HANDOVER §0), design deliveries **are** dated: they are immutable artefacts, several versions legitimately coexist, and we must always know which one a build was made from.

```
docs/designs/YYYY-MM-DD--<page>--v<N>.html
```
`YYYY-MM-DD` = **date delivered by Claude Design**, not the date we filed it. If the delivery date is unknown, use `undated--<page>--v<N>.html` and say so below. **Never guess a date.**

Every build must cite the exact design file it was made from.

---

## ⚠️ Design #1 is "The Person Page" — NOT "Rita Golnick"

The two names invite exactly one mistake, so it is spelled out here:

| | Design #1 — **the current design** | **v0 — superseded, reference only** |
|---|---|---|
| Source in the design project | `The Person Page.html` (project root) | `screens/Person.html` |
| Filed as | `2026-07-15--person--v1.html` | `2026-07-11--person-rita--v0.html` |
| Model | **The eight facets** | The old five-light hub |
| Status | **QC PASSED** — build from this | **Superseded.** Do not build from it |

"Rita Golnick" is the person the v0 mock happens to depict. It is **not** the name of Design #1.
The design project also holds `Rita Golnick - Person Page (standalone).html` — that is the v0
bundle, not Design #1, and the resemblance to the Design #1 name is a trap.

---

## Catalogue

| File | Design # | Page | Delivered | Filed | QC | Notes |
|---|---|---|---|---|---|---|
| `2026-07-15--person--v1.html` | **1** | Person (8 facets) | **2026-07-15 09:18** ‡ | ✅ **78,814 b, verified** | ✅ **PASSED** 2026-07-15 17:41 | Flat source `The Person Page.html`. Brief: `person-page-brief-for-claude-design.md`. **QC: passes — invents nothing the schema cannot hold** (HANDOVER §9b). Two follow-ups: patronymic + honorific are specified in the facet model but **not drawn**; the Story facet needs `contributor_id` backfilled or it renders without a narrator. |
| `2026-07-11--place-tel-aviv--v1.html` | **2** | Place | **2026-07-11 23:12** ‡ | ✅ **24,693 b, verified** | ❌ pending | Flat source `screens/Place.html`, 24,693 b. **`place-real.html` is already built from this design — partially.** Present: *Seen here · Moments here · Located by*. **Missing: *A place we stood · Ways in · See it on the globe*.** Also **no i18n** (`preferred_lang` 0× vs 2× in `person-real.html`). So D2 is mostly a **build delta**, not a design brief. Predates keeper / i18n / in-place-edit decisions → **QC + delta, not a fresh brief**. |
| `2026-07-12--place-tel-aviv--v2.html` | — | Place | **2026-07-12 02:28** ‡ | ✅ **42,328 b, verified** | — | Flat source `screens/Place v2.html`, 42,328 b. **Was not in this catalogue before 2026-07-17.** Supersedes the v1 above by 3h16m; its relationship to Design #2 is **undecided — for Leon.** |
| `2026-07-13--moment--v1.html` | **3** | Moment | **2026-07-13 23:48** ‡ | ✅ **41,600 b, verified** | ✅ | Flat source `screens/Moment.html`, 41,600 b. Built and live: `moment-real.html`, commit `30ebd89`. The design itself had never been filed. |
| `2026-07-13--moment-directions--v1.html` | — | Moment — Directions | **2026-07-13 22:43** ‡ | ✅ **23,310 b, verified** | — | Flat source `screens/Moment - Directions.html`, 23,310 b. **Was not in this catalogue before 2026-07-17.** |
| `2026-07-13--moment-reliquary--v1.html` | — | Moment — Reliquary | **2026-07-13 22:53** ‡ | ✅ **19,016 b, verified** | — | Flat source `screens/Moment - Reliquary.html`, 19,016 b. **Was not in this catalogue before 2026-07-17.** |
| `2026-07-11--person-rita--v0.html` | — | Person (old five-light hub) | **2026-07-11 17:54** ‡ | ✅ **28,415 b, verified** | — | Flat source `screens/Person.html`, 28,415 b. **Superseded** by the facet model. Reference only. Live version recoverable at commit `75defd8`. See the warning box above. |
| `2026-07-14--person-edit--v1.html` | — | Person Edit | **2026-07-14 17:34** ‡ | ✅ **47,771 b, verified** | — | Flat source `screens/Person Edit.html`, 47,771 b. **Was not in this catalogue before 2026-07-17.** **The page it designs is retired** (HANDOVER: `person-edit-real.html` is a 404; everything is edited in place). Filed for the record only — **do not build from it.** |
| `2026-07-09--crowd--v1.html` | — | Find Them in the Crowd | **2026-07-09 22:01** ‡ | ✅ **32,204 b, verified** | — | Flat source `Find Them in the Crowd.html` (project root), 32,204 b. **Was not in this catalogue before 2026-07-17.** The earliest delivery we hold. |

‡ **Date provenance: evidenced by etag.** The Claude Design MCP returns each file's `etag` as **epoch microseconds**; every date above is that etag decoded, read in UTC+2. This is machine evidence, not testimony.

### The two dagger-marked dates were wrong — corrected 2026-07-17

The previous revision recorded Person v0 and Place v1 as **both delivered 2026-07-14 17:00**, marked † *"owner-stated (Leon), not independently evidenced."* Both are wrong, and the etags say so:

| | Was (owner-stated) | Now (etag-evidenced) | etag |
|---|---|---|---|
| Person v0 | 2026-07-14 17:00 † | **2026-07-11 17:54** | `1783785244734376` |
| Place v1 | 2026-07-14 17:00 † | **2026-07-11 23:12** | `1783804368151358` |

Both are **three days earlier** than stated, and they were never simultaneous — they are 5h18m apart. The identical "17:00" was an artefact of recollection. The † provenance class is now retired from this catalogue: every date here is etag-evidenced.

---

## Transfer status — 9 of 9 filed ✅

**Complete as of 2026-07-17 08:39.** Every delivery in the catalogue above is on disk, and every one was
proven byte-exact against the size `list_files` reports. **Nothing was hand-transcribed.**

**The chunked pipeline is no longer the route.** Files come straight from the Claude Design MCP (`read_file`),
flat sources only — never the `(standalone)` bundles (~0.8–1.2 MB, embedded font blobs).

### How the eight got through — and why the previous diagnosis was wrong

The blocker recorded in the last revision was **misdiagnosed**. It blamed the permission sandbox for denying
every interpreter, and proposed "grant `python3`" as the fix. `python3` *is* available now — and on its own it
would have changed nothing. The real constraint is narrower and worth stating precisely:

- `read_file` returns the body HTML-entity-escaped. To decode it mechanically, the escaped bytes must be **on
  disk** — a model retyping them from its context is transcription, which is what corrupted the last attempt.
- The harness spills a tool result to `…/tool-results/*.txt` **only above a size threshold**. Design #1 (78,814 b
  → 83,487 escaped) spilled, which is the *only* reason it got through. Measured this run: **47,771 b returns
  inline, 78,814 b spills** — so all eight remaining files are under the threshold and none spill. Granting an
  interpreter does not put their bytes on disk.
- `render_preview` would serve raw bytes over `serve_url`, but it is **not permitted** in this session.

**The route that worked:** the session transcript at
`~/.claude/projects/-home-botuser-living-forest/<session-id>.jsonl` records every tool result **verbatim**,
inline ones included. `python3` parses that JSONL, lifts each `<untrusted-project-content …>` payload, strips the
one wrapper-added trailing newline, and decodes `&lt;`→`<`, `&gt;`→`>`, `&amp;`→`&` **in that order** (`&amp;`
last, so a doubly-escaped `&amp;lt;` resolves to `&lt;`, not to `<`). Byte counts are asserted **before** the
write — a mismatch refuses to write rather than being tuned to fit.

Verified on this run, beyond the byte counts:
- **JS `\uXXXX` escapes stayed literal.** `'“'+p.words` in `crowd` and `they’re` in `person-edit`
  survived as backslash-u sequences. These are exactly the two files the previous attempt corrupted (`crowd`
  came out 32,195 vs 32,204 — 3 escapes × 3 bytes; `person-edit` 47,765 vs 47,771, then **adjusted by hand until
  `wc -c` matched**, which is evidence of nothing).
- **Authored entities survived exactly one level** — `&ldquo;` `&mdash;` `&rsquo;` `&rarr;` `&quot;` are intact.
- **Zero residual `&lt;`/`&gt;`** in any of the nine files; all open `<!DOCTYPE html>` and close `</html>`.

The standing rule that produced this outcome holds: **a wrong file here is worse than a missing one.** This
directory is the design of record, builds cite it, and HANDOVER §11 puts design fidelity first.

---

## Open contradictions — not resolved here

1. **Design #1's size and provenance.** The previous revision described D1 as *"React bundle → template extracted, 92,628 chars flat HTML."* The flat source actually served by the MCP is **78,814 bytes**. Whether 92,628 was a different (bundle-extracted) rendering of the same page, or a stale figure, is unsettled. **The filed file is the flat source, fetched directly from the MCP root — the better provenance either way.**
2. **A tenth file, not on any list.** The project root holds `Person Edit (static export).html` — **the same 47,771 bytes** as `screens/Person Edit.html` but a **different etag** (`1784043615386023` → 2026-07-14 **17:40**, six minutes later). Same size, different timestamp. Duplicate export or divergent file: **unknown, unexamined.**
3. **Design #2 vs Place v2.** The catalogue pinned Design #2 to Place v1. Place v2 exists, is 3h16m newer and 71% larger. Nobody has said which one Design #2 *is*.

---

## Reference material (not deliveries)
- `preview.html` — **not a design.** It is `index.html` recoloured (both 1742 lines; ~104 differ, all palette/font). Holds the **Timeline reskin**, which is D9's reference. **Do not retire before D9.**
- `preview-globe.html` — retirement list.

---

## Fetching from the Claude Design MCP
Project `4931d7e6-358d-4ef9-a066-9a422439ee44` — **29 files** (`list_files`, depth -1, verified 2026-07-17;
28 excluding `.thumbnail`). **HANDOVER and the standing brief both say 26 — they are wrong; 29 is the measured
count.** The "26" predates three deliveries.

- **Flat sources live in `screens/` and at the project root. Never fetch the `(standalone)` bundles** — 0.8–1.2 MB with embedded woff2 font blobs.
- `read_file` escapes `&` `<` `>` in the body. Decode those three, **in the order given above**, and nothing else — entities the designer authored (`&ldquo;`, `&mdash;`, `&rsquo;`, `&rarr;`, `&quot;`) are decoded exactly one level and must survive intact.
- **Watch for JS `\uXXXX` escapes in the source.** They are literal backslash-u sequences in the design's own script, not encoding artefacts. They must not be turned into the characters they denote.
- `etag` = epoch microseconds = the delivery date. It is the evidence; record it.
- Fonts: substitute Google Fonts (Frank Ruhl Libre for Hebrew/RTL).
