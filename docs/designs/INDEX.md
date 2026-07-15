# Design deliveries — catalogue

> **Revision:** 2026-07-15 17:41 (UTC+2) · authority: `docs/HANDOVER.md`

**Naming — dated on purpose.** Unlike text documents (which are single, stable-named files — see HANDOVER §0), design deliveries **are** dated: they are immutable artefacts, several versions legitimately coexist, and we must always know which one a build was made from.

```
docs/designs/YYYY-MM-DD--<page>--v<N>.html
```
`YYYY-MM-DD` = **date delivered by Claude Design**, not the date we filed it. If the delivery date is unknown, use `undated--<page>--v<N>.html` and say so below. **Never guess a date.**

Every build must cite the exact design file it was made from.

---

## Catalogue

| File | Design # | Page | Delivered | Format as received | QC | Notes |
|---|---|---|---|---|---|---|
| `2026-07-15--person--v1.html` | **1** | Person (8 facets) | 2026-07-15 | React bundle → template extracted, 92,628 chars flat HTML | ✅ **PASSED** 2026-07-15 17:41 | Brief: `person-page-brief-for-claude-design.md`. **QC: passes — invents nothing the schema cannot hold** (HANDOVER §9b). Two follow-ups: patronymic + honorific are specified in the facet model but **not drawn** by this design; the Story facet needs `contributor_id` backfilled or it renders without a narrator. |
| `2026-07-14--place-tel-aviv--v1.html` | **2** | Place | 2026-07-14 17:00 † | React bundle → template extracted, 36,967 chars flat HTML | ❌ pending | **`place-real.html` is already built from this design — partially.** Present: *Seen here · Moments here · Located by*. **Missing: *A place we stood · Ways in · See it on the globe*.** Also **no i18n** (`preferred_lang` 0× vs 2× in `person-real.html`). So D2 is mostly a **build delta**, not a design brief. The scheme wrongly says Place has no design. Predates keeper / i18n / in-place-edit decisions → **QC + delta, not a fresh brief**. |
| `2026-07-14--person-rita--v0.html` | — | Person (old five-light hub) | 2026-07-14 17:00 † | React bundle → template extracted, 40,647 chars | — | **Superseded** by the facet model. Reference only. Live version recoverable at commit `75defd8`. |
| — | **3** | Moment | *(built)* | — | ✅ | Built and live: `moment-real.html`, commit `30ebd89`. |

† **Date provenance: owner-stated (Leon, 2026-07-15), not independently evidenced.** No artefact in the repo or chat record dates these two deliveries. Recorded as stated, flagged as such — §0 rule 6 bars *guessing*, not the owner's knowledge, but a future session must be able to tell the difference.

**Not yet filed:** the three files above are still only in chat uploads / project knowledge. They need transferring into this directory via the chunked pipeline (HANDOVER §11) so they are durable and citable. **Until then, no build may claim to be "per design".**

---

## Reference material (not deliveries)
- `preview.html` — **not a design.** It is `index.html` recoloured (both 1742 lines; ~104 differ, all palette/font). Holds the **Timeline reskin**, which is D9's reference. **Do not retire before D9.**
- `preview-globe.html` — retirement list.

---

## Extracting a Claude Design bundle
Both bundles received so far embed the rendered page as a JSON string:
```python
i = s.find('<script type="__bundler/template">'); j = s.find('</script>', i)
html = json.loads(s[i+len('<script type="__bundler/template">'):j].strip())
```
Fonts arrive as woff2 blobs in `__bundler/manifest` — substitute Google Fonts (Frank Ruhl Libre for Hebrew/RTL).
**Still request flat HTML.** The embedded template is a lucky property of the export tool, not a guarantee.
