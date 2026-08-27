# The Living Forest — handover

**Written 2026-08-24. Live at `7c884b5`.** App: `leong25.github.io/living-forest/`

Read `CLAUDE.md` first — it holds the rules, the hard-won lessons (§3) and the parked
decisions. This file is only *what is waiting*.

---

## Where things stand

Finished and verified this stretch:

- **Three languages, everywhere.** Every page, every field a family writes — names, About,
  occupations, countries, custom details, stories, and place names. The front door too.
- **Gender reaches every translation.** The translate function honours it; the person page
  passes the subject's, the story pages pass the teller's. Contribution *requires* it for a
  new person: two answers, no third, and the memory cannot be sent while anyone is unanswered.
- **Places translate without moving.** `place_geo` maps every typed spelling to three names;
  a database trigger keeps one spelling per language; a place learns its names when the
  memory is approved.
- **Moments can be removed**, whole, through the keeper.
- **One language button per page**, showing EN/RU/HE.
- **One Send on the person page.** Chips, occupations, homes and names all stage and go
  together.

---

## Pending — in the order I would take them

### 1. The contribution flow — twelve findings, one review
The largest piece of real work outstanding, and the part the family actually touches. Leon
asked that it be **walked end to end** rather than patched finding by finding. His twelve, in
his words, are in `CLAUDE.md` under *REVIEW THE WHOLE CONTRIBUTION FLOW*. The shape of them:
no country field; the person picker does not match a name typed in Russian; no way to name
yourself as teller; the face tagger is confusing; tagging only possible *after* sending;
everything except the media must be optional; a failed send leaves the photograph behind.

Walk it as a contributor who is **not** the keeper, in Russian, on a phone.

### 2. Removal has no path left (**Leon's decision, 2026-08-24**)
The "ask to remove" buttons are gone at his instruction. Nothing replaced them: emptying a
field and sending does nothing, because a blank write is skipped. So a published occupation,
home, kin tie or About text can be **edited but not taken away**.

Everything behind the buttons still works. The shape Leon preferred when it came up: **a
cleared field means removal**. His call.

### 3. Queues that nobody can reach — a pattern, not a bug
Four times something was written correctly and shown to nobody:
machine translations of facts; story retellings; `artefact_edits`; and name transliterations
that could never fold into their human row. Each was found by Leon noticing something did not
arrive.

**Nothing in the app checks that everything written as "waiting" is reachable and clearable.**
A single pass — for each waiting kind, is it fetched, shown, approvable, declinable — would
close a whole class of fault.

### 4. Names in English for ~30 people
47 have names; 18 have Russian, 17 have Hebrew. The rule Leon set: **anything manually
entered is auto-translated once into the others; if someone edits any part in any language,
that stays.** Genders are now correct, which is what he wanted settled first.

Six of the thirty are **notes, not names** — `Masha mom of Naum`, `Boris [Kustanovich?]`,
`[Wife of Shay] Ruah`. Transliterating those produces nonsense. Leon's preference was: do the
24 clean ones, list the six for him to rewrite.

### 5. Two people have no gender
**Sasha Dymarsky** and **Sasha Tserlin** — Alexander or Alexandra, genuinely either. Left
unset rather than guessed. Two taps from Leon.

### 6. Unsent work is lost silently
The person page holds changes until Send. Nothing warns before leaving. On a phone the back
gesture is easy to hit. Small to build, and it is what makes the one-Send model safe.

### 7. Gendered wording outside the person page
The person page is swept. The **reel** still says *"She grows brighter every time someone
says her name"* — but the reel is parked for redesign, so its words are about to be rewritten.
Roughly 50 other matches are **false positives** (Russian `её` about a photograph, Hebrew
`שלהם` which is already plural): do not "fix" correct grammar to satisfy a search.

### 8. Responsive: `person-real`
The last page still boxed into a narrow column on the iPad. Every other page is done.

### 9. Declined facts leave no trace
Declining a fact **deletes** the row, so nothing can warn that a proposal was already refused.
Fixing it means 23 places across five files that read "not published" as "waiting" would start
showing declined suggestions as pending. A schema change with a sweep behind it.

---

## Parked at Leon's word — do not build unasked
Journal redesign · Reel redesign · "Who Is Who?" has no page · gender of people *inside* a
story (cannot be looked up: not everyone has a gender recorded, and stories name people who
are not in the archive) · place names as rows · per-player progression · age-appropriate
restrictions · **no version markers on pages** (asked 2026-08-24, declined).

---

## How to work here

- **Read the file before writing.** The dominant failure in this project.
- **Presence is not function.** Click the control; read the row back from the database.
- **A patch script must write whatever succeeded.** A `sys.exit` on a later failure throws
  away every earlier edit — this cost an hour on 2026-08-22, and I reported a fix that had
  not been written.
- **Sweeping one builder is not sweeping.** Six places drew "ask to remove"; stubbing the two
  shared ones left four. Ask what *else* draws the same thing.
- **The probe is right and you are not.** Twice this week the measurement disagreed with my
  report and I explained it away.
- Never change anything Leon can see without naming it in the same reply.
