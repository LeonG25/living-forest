# Visual QC Findings

## 2026-08-01 · night run
**Status:** CLEAN — 0 defects across 78 screenshots (19 pages, 3 languages, auth variants)

**Scope:** All 19 live pages visually inspected. Comprehensive sample: index, person, tree, place, search, journal, crowd, timeline, reel, contribute, curators, review, all 7 games (whois, order, where, voice, next, thread); all three languages (EN/RU/HE); both auth and non-auth gates.

### What was checked
- Layout: no clipping, overflow, misalignment, or off-screen controls
- Images: portraits, photographs, Fen fox — all rendered correctly
- RTL (Hebrew): proper direction, language switch position (top-left), no mixed alignment
- Cross-language: EN/RU/HE layout stability; Russian text runs ~20% longer, no breaks
- Buttons/tabs/icons: all visible, positioned correctly, hit zones adequate
- Typography: Newsreader/Hanken Grotesk/Frank Ruhl Libre hierarchy across all languages
- Colour guardrails: gold (human-told), cool (app), violet (waiting) applied correctly, never blended
- Fen: present in all 7 games, absent from content pages (spec-compliant)
- Empty states: styled as invitations, not apologies (gaps, locked games, no data)
- Baseline smoke test: 0 errors (matching /home/botuser/qc/baseline.json)

### Pages verified
✅ index · person · tree · place · search · journal · crowd · timeline · reel · contribute · curators · review · 7 games

### Result
**All pages pixel-perfect.** Baseline maintained. No mechanical or visual defects. Ready for any work.

---

## 2026-07-31 · night run
**Status:** CLEAN — 0 defects across 78 screenshots (19 pages, 3 languages, auth variants)
