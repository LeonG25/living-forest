# The Living Forest — design packet
### Seven pages. Read this page first, then do them one at a time.

> **Packet rev 2026-07-15 20:15 (UTC+2)** · everything here is current and verified against the live app and its database.

---

## How to use this packet

**Do not design all seven at once.** Each page deserves your whole attention, and we would rather have three superb pages than seven adequate ones.

**Work one at a time, in this conversation.** We will ask for them one by one. Because you keep this packet in view, page five can build on what pages one to four established — the system should **compound**, not be re-argued each time. If you invent something good early, use it later.

**Ask us things.** We answer fast, and we would much rather answer a question than receive a guess.

**Tell us when we are wrong.** Three pages have already dissolved under inspection because we named a concept and assumed it needed a page. If a brief here describes something that should not exist, or belongs inside something else, **that is the most valuable thing you can say to us.**

---

## What this is

A family-history app, for one extended family and two children. It exists so that what people remember outlives them.

Every photograph, every story, every name in it came from a person who bothered to tell it. The app's entire job is to be **worth that effort** — and never, ever, to dress up a machine's guess as a grandmother's memory.

It is a night sky with warm light in it. People are lights. The more the family tells about someone, the more of them you can see. **That is the only score there is** — no points, no levels, nobody beating anybody.

The tone is warm, quiet, unhurried, a little reverent. Never chirpy. Never corporate. Never gamified for its own sake.

---


# PART ONE — the house rules

## 1. What is yours, and what is not

**You are the designer. We are not.** We want work that does not look like everything else — in layout, in colour, in motion, in dimension. If your answer is stranger than ours, say so and **insist**. We will take a strong opinion over a safe one every time.

There is exactly **one** condition: **it has to work with what the app actually does.** Below is that line, drawn honestly.

### Yours — decide freely, and argue with us
Layout · composition · colour · type at every scale · motion and its character · 2D or 3D · depth, light, space · what a page is even shaped like · what to throw away.
**The globe and the night sky already exist — 3D is native here, not a stretch.**

### Not yours — because these are the app, not its style

1. **Three provenance states, always distinguishable, never blended.**
   The app's whole promise is that a family's memory is never dressed up as a machine's guess. So every value on screen says where it came from: **a human told us** · **the app worked it out** · **waiting for the keeper**. Today those are gold, cool blue, and violet — **the meaning is fixed; the colours are yours.** If you have a better system, propose it and we will re-skin the existing pages to match. What we cannot have is one page diverging alone.
2. **Nothing reaches the family until the keeper approves it** — and **attribution is per-field**. Michael may suggest only a maiden name while Leonid suggests only a patronymic, on the same person, at once. Each is approved alone. Never one button over several fields.
3. **English · Russian · Hebrew, all three, always. Hebrew is RTL** and mirrors completely.
4. **Everything is editable in place.** No edit mode, no edit page.
5. **It is not competitive.** No points, levels, ranks or leaderboards. Progress means **lighting a person up** — the more the family tells, the more of them you can see.
6. **The data is what it is.** Do not design fields we cannot store; if you need one, say so and we will add it.

### The failure we are afraid of
Not weirdness. **Blandness.** Every family-history product on earth looks like a database with a serif font, and every "manage people" screen ever built is an admin panel. If a brief below tempts you toward the familiar version of that page, **that is the brief failing, not you.** Go somewhere else and tell us why.

---

## 2. What is currently true

Useful as ground, not as law. Everything here is **evidence of where the app is**, extracted from the one page that exists and has been verified — `2026-07-15--person--v1.html`. Depart from it deliberately, not accidentally.

### Ground
```css
background:#04070e;
background:radial-gradient(150% 100% at 50% -6%, #12233c 0%, #0a1526 44%, #04070e 100%);
```
A night sky. Everything else is light on it.

### The palette in use today
```css
--cream:#f4ecdb;  --muted:#9db0cc;  --dim:#6f83a3;
--hair:#ffffff18; --panel:#ffffff0b;
--gold:#f3cd84;   --gold-hi:#ffe6ad;    /* a human told us this */
--cool:#7fb4d8;   --cool-hi:#a9d2ee;    /* the app worked this out */
--edit:#c9a2ff;   --edit-hi:#ddc6ff;    /* waiting for the keeper */
--leaf:#8fd6a0;   /* growth, sparingly */
```
Auto-translation indicator: `#9a8bbd`.

### Type in use today
**Newsreader** (serif) — display, names, anything a person said · **Hanken Grotesk** (sans) — UI and body · **Azeret Mono** — eyebrows and small labels, uppercase, `letter-spacing:.24–.28em` · **Frank Ruhl Libre** — **Hebrew / RTL**, substituting for Newsreader.

### Motion in use today
`cubic-bezier(.16,.8,.28,1)`, **.2s–.42s**. Motion settles; it does not bounce.

### Icons
Inline stroke SVG, 24 box, ~1.7 stroke, `currentColor`.

## 3. The truth guardrail — the heart of it

**Every value on screen must declare where it came from.** A human's memory and a machine's inference must never wear the same clothes. This is not decoration; it is the promise the app makes to the family.

| Provenance | Colour | Says |
|---|---|---|
| **A human told us** | `--gold` #f3cd84 | *"Told by the family"* |
| **The app worked it out** | `--cool` #7fb4d8 | *"Assembled by the app"* |
| **Waiting for the keeper** | `--edit` #c9a2ff | *"Waiting for the keeper"* |
| **Machine-translated** | `#9a8bbd` | *"auto-translated"* + an offer: *"tell it properly"* |

**Never blend them.** A gold value with a cool halo is a lie. If something is part-told and part-inferred, show the parts separately.

**Auto-translation is always marked and always escapable** — the little `autotr` line offers the family the chance to tell it in their own words instead. That offer is the point: a machine translation is a placeholder for a human's voice, never a replacement.

---

## 4. The keeper flow — every field, every time

Any value can be in one of three states:

1. **Published** — gold or cool, per §4. This is what the family sees.
2. **Suggested** — violet `--edit`. Carries **who suggested it**: *"Suggested by Michael"*, plus a *"waiting"* chip.
3. **Declined** — gone from view.

**Attribution is per-field, not per-form.** Michael can suggest only a maiden name; Leonid can suggest only a patronymic; each carries its own author and its own approve/decline. **Never design a single approve button that swallows several unrelated fields.**

The keeper sees `Approve` / `Decline` on each. The contributor sees their own suggestion in violet with the waiting chip.

---

## 5. Three languages — EN · RU · HE

- **Every** label, value, and piece of copy exists in all three. Write all three in the handoff; do not stub RU/HE.
- **Hebrew is RTL** — `dir='rtl'`, mirrored layout, **Frank Ruhl Libre** for display type.
- Names in particular are **per-language** and have parts: `given · called · family · patronymic · maiden · honorific · nicknames[]`. All optional except what the person actually has.
  - **`called` ≠ `nickname`.** `called` is the everyday form of the formal name (Маргарита → **Рита**; Леонид → **Лёня**). `nickname` is a pet name (*Ritaleh*) and is a **list**.
- Transliteration is gender-aware (feminine surname forms: Церлин → **Церлина**).

---

## 6. Games live inside facets

A game is **not** its own icon and **not** its own destination. It sits inside the facet it exercises, scoped to the person on screen. Every game needs:

- **Entry** — a play marker on the facet, plus a card: icon · name · one-line sub · `Play`
- **Locked** — when there is not enough yet, say so warmly and say what would open it: *"Add a story and this opens"* — with a lock glyph, never a dead button
- **Scoped** — the game is about **this person**: *"Scoped to Rita"*
- **Return** — finishing lights the person up a little more

**Kindling is the progress model.** A facet's fill drives its glow directly:
```css
box-shadow: 0 0 calc(4px + var(--k)*18px) calc(var(--k)*3px) …
```
`--k` is 0→1. The payoff line is *"Six of eight facets kindled"* — never points, never a level, never a rank.

---

## 7. What to deliver — read this twice

**Deliver flat, static, self-contained HTML + CSS.** One file. Inline the CSS and any JS.

**Do not deliver a compiled React bundle.** We can currently rescue one — both we have received happened to embed the rendered page as a JSON string in `<script type="__bundler/template">` — but that is a lucky property of the export tool, **not a guarantee**, and it has cost us real time twice.

If flat HTML is impossible: **screenshots** are the next best thing, then a **hosted URL**.

**Show every state.** Published, suggested (violet + author + waiting chip), auto-translated, empty, locked. A design that only draws the happy path is not finished — the empty and waiting states are most of the real app's life.

**All three languages**, including RTL Hebrew.

---

## 8. Quality floor

- Mobile first. Thumb-reachable. Real families on real phones.
- Every interactive thing has a visible resting state, a hover/press state, and a focus ring.
- Nothing is conveyed by colour alone — the guardrail colours always carry words too.
- Empty states are **invitations**, not apologies: *"No one has told the story of this afternoon yet."* + *"Ask someone who might remember →"*
- Real-length content: Russian runs ~20% longer than English; Hebrew names are short and RTL. Do not design to lorem.
- **If a brief is wrong, say so.** Three pages have already dissolved under inspection because we named a concept and assumed a page. If a brief below describes something that should not exist, or should be part of something else, **that is the most valuable thing you can tell us.**


---

# PART TWO — the seven briefs


| # | Page | What it is |
|---|---|---|
| 1 | Person — name parts | a delta; the page exists and is built |
| 2 | Moment — no photograph | a delta; the page exists and is built |
| 3 | Place — modernise | a delta to an older design |
| 4 | Search | **new** |
| 5 | Tree + Who they knew | **new**, two screens |
| 6 | Contribute + three ways in | **new**, four screens — **the most important in the packet** |
| 7 | Manage curators | **new** |

**1–3 are deltas.** A page already exists and is built. Change the one thing named and leave the rest alone.
**4–7 are new.** Nothing is drawn. That is where you have the most room, and where we most want to be surprised.



---

## 1 · Person page: three more name parts


### What exists
The Person page is designed and built: eight facets — Name, Face, Life, Places, Story, Kin, Reel, More. The **Name** facet currently draws: display name, given, family, maiden, nicknames (a list, with *add a nickname*), and a former surname (*"was Golnik"*).

**Do not redraw the other seven facets. Do not restyle anything.** We want the Name facet, and only the Name facet, with three fields added.

### What we need
Three more name parts, **all optional**, **all per-language**:

| Field | What it is | Example |
|---|---|---|
| **called** | the everyday form of the formal name | Маргарита → **Рита** · Леонид → **Лёня** |
| **patronymic** | father's name, as Russian and many cultures use it | Мироновна |
| **honorific** | a title that belongs to the name | Dr · Savta |

#### The distinction that matters
**`called` is not a nickname.** *Рита* is what Маргарита is actually called — it is her name, in everyday use. *Ritaleh* is a pet name and belongs in `nicknames`, which is a list. `called` is a single value per language. **A person can have both, and they must not look alike.**

#### Real data to draw with
Rita Golnick, Russian: given **Маргарита** · called **Рита** · family **Бетито-Гольник** · patronymic *(none yet)*
Rita Golnick, Hebrew: given **ריטה** · family **בטיטו-גולניק** · called *(none)*
Rita Golnick, English: display **Rita Golnick** · nothing else set

That is the real shape of the data: **mostly empty**. Most people have two or three parts, not seven. **Design for the sparse case first** — a Name facet with three fields filled and four unset is the normal one, not the exception.

### States to draw
1. **Set + published** — the ordinary case
2. **Unset** — the field is not there. How does someone *add* a patronymic that has never existed? The facet already has *add a nickname* for the list; single fields need an equivalent that does not clutter a facet where most slots are empty.
3. **Suggested** — violet, *"Suggested by Michael"* + waiting chip, **on that one field alone**. Michael may suggest only the maiden name; Leonid may suggest only the patronymic, at the same time, on the same person. Each is approved or declined by itself. **Never one approve button across several fields.**
4. **Auto-transliterated** — the machine can guess a Russian or Hebrew name from the English. It must be marked (`#9a8bbd`) and it must offer the family the chance to correct it. Transliteration is gender-aware (Церлин → **Церлина**).

### The real question
Seven optional name parts × three languages is a lot of surface for a facet that is mostly empty. **The design problem is not the fields — it is not drowning the sparse case.** Solve that and this is done.


---

## 2 · Moment page: when there is no photograph


### What exists
The Moment page is designed and built. Its skeleton:

**the photograph** → **the story** (per language; gold if a human told it, cool if the machine translated it, with *"Told by…"*) → **where** → **when** → **the people in it** → **ways out** (to a Person, to a Place)

It has the full keeper queue: suggested stories and edits arrive in violet, the keeper approves or declines each.

**Do not redraw any of that. Do not restyle.** Everything below is about **one** change.

### What we need
**A memory does not need a photograph.** Someone can tell a story with no picture attached. Today the page leads with the image; with no image, it has no head.

Four kinds of memory:
| kind | what leads |
|---|---|
| **photo** | the photograph *(exists today — do not change it)* |
| **story** | **the words** — there is nothing else |
| **voice** | a recording — the family hears the person's actual voice |
| **object** | a photograph of the thing — so, a photo again |

So the real work is **story** and **voice**.

#### The story-led moment
When the words are all there is, the words become the hero. They get the display face, the size, the space the photograph had. This is the app's whole promise made literal — *someone told us this* — with nothing between the reader and the telling.

It should not look like a photo Moment with an empty hole where the picture goes. It should look like it was always meant to be words.

#### The voice-led moment
A recording of a family member telling something. It needs to be playable and it needs to feel like a person, not a media player. What the eye rests on while a voice speaks is the open question — we have no answer and are not attached to one.

### Keep identical
The story block, the teller, where, when, the people tagged, all three languages, the guardrail colours, the keeper queue, the ways out. **A memory is a memory** — only the head changes.

### One correction to fold in
The page currently shows the **uploader** as the teller. It must show **who told it** — a person in the family, who is often not the person who typed it in. Leon may upload a story that Rita told; the page must say **Rita**. Draw *"Told by…"* as a person, and draw the case where **nobody knows who told it** — a real and common state, and an invitation: someone in the family knows.

**Leon's steer:** an optional field — *"Who told the story?"* — with a **"me"** button beside it. Most of the time the person typing is the person telling, and that should cost one tap. But it must stay just as easy to say *"Rita told me this"*, because that is the case the whole field exists for.

### States to draw
1. A **story-led** memory, told by a person, in all three languages
2. A **voice-led** memory
3. **No teller known** — the invitation
4. **Empty** — *"No one has told the story of this moment yet."* This is the most common state in a young family archive. Make it an invitation, not an apology.
5. **Suggested** — violet, per-field, with its author


---

## 3 · Place page: bring it up to the system


### What exists
A Place page was designed (Tel-Aviv / Jaffo) with six sections:
**A place we stood** · **Seen here** · **Moments here** · **Ways in** · **See it on the globe** · *Located by The Living Forest*

Three are built and live: *Seen here*, *Moments here*, *Located by*. The design is sound and we are not questioning it.

### The problem
**That design predates three decisions that now define the app.** It has none of them:

1. **No languages.** The page is English only. There is no Russian, no Hebrew, no RTL. Every other page has all three.
2. **No keeper flow.** Nothing on it can be suggested, and nothing shows as waiting for approval.
3. **No editing in place.** A place has facts a family corrects — its name in three languages, what it was called then versus now, where it actually is. None of that can be touched.

### What we need
**The same page, in the system.** Not a redesign — a modernisation.

#### Languages
A place carries names the way a person does, and for the same reason: **Jaffo · Яффо · יפו** are one place with three names, and a family that moved between languages calls it different things in different decades. Hebrew is RTL and the whole page mirrors.

There is a harder case underneath, and it is the interesting one: **a place's name changes over time.** Leningrad became St Petersburg; the family lived in both, and it was one city. A place-name is not just multilingual — it is **historical**. We have no answer for this and would like to see one.

#### Keeper flow and editing in place
Same grammar as everywhere: a value is published (gold if a human told us, cool if the app worked it out), or suggested (violet, with its author and a waiting chip), approved or declined **one field at a time**.

#### The three unbuilt sections
*A place we stood*, *Ways in*, and *See it on the globe* were designed but never built. Draw them again in the current system, with languages and keeper states. If any of the three no longer earns its space now that the globe exists as a lens of its own, **say so** — we would rather delete a section than build one out of politeness.

### States to draw
1. A place with all three names, several moments, several people
2. A place with **one name and one photograph** — the common case
3. A place whose name **changed** — the historical case
4. A name **suggested**, waiting
5. A place the app located itself (cool) versus one a person placed (gold)


---

## 4 · Search


### The job
Find anything in the forest: a person, a place, a moment, a memory.

### Why it is not an ordinary search box
**The family thinks in three languages and does not know which one the answer is stored in.** Someone types *"Rita"* and the match is `ריטה`. Someone types *"Яффо"* and the place is filed as *Jaffo*. Someone types *"Маргарита"* and everyone calls her **Рита**. **The search must not care.** Typing a name in any language finds the person in every language.

Names in particular have parts — given, called, family, patronymic, maiden, honorific, nicknames — each in each language, each independently. *Ritaleh* must find Rita. **Мироновна** must find Rita.

### What results look like
Four things can match, and they are not alike:
- **a person** — a face, a name, and *how you are related to them*
- **a place** — where, and how many moments happened there
- **a moment** — the photograph, when, where
- **a memory** — the words, and who told them

A person is the most important result and should feel it. The others support.

### The parts that need real thought

**Matching across languages must be honest.** If someone types *"Rita"* and we surface `ריטה`, the family should see **why** — the match was on the Hebrew name. A result that appears without explanation feels like magic, and this app does not do magic: it says where things come from. Consider showing the matched name part, in the language it matched.

**The empty state is the real page.** A family archive is small and young. Searching finds nothing far more often than it finds something — and "no results" is the wrong answer, because the truth is usually *"nobody has told us that yet."* That is an invitation: **a gap someone can fill**. This is the single most important state in the page.

**Before you type.** What does the page show at rest? Recent people? Someone not visited in a while? A gap? This is an opportunity, not dead space.

### States to draw
1. Results across all four kinds
2. A **cross-language match**, with the reason visible
3. **Nothing found** — the invitation
4. **At rest**, before typing
5. All three languages, including RTL Hebrew — *the search field itself flips*


---

## 5 · Tree · kinship, and Who they knew


### Screen 1 — the Tree
A lens on the whole family, alongside the Sky and the Globe. Where the Sky is people as lights and the Globe is people in places, the **Tree is people by blood and marriage**.

#### What makes it hard
A family tree is the most drawn object in this entire field, and almost every version of it is **a corporate org chart with better fonts**. Boxes, lines, hierarchy, a root at the top. That is not this app. This app is a night sky with warm light in it, and the tree must belong to that world — **it must feel grown, not organised**.

Real families are also not tidy. There are second marriages, half-siblings, people whose parents are unknown, whole branches with one name and nothing else. **The tree must hold a family with holes in it** without looking broken — the holes are the point; they are what the family fills in.

We are **not** attached to any particular shape. If the honest answer is that it is not a tree at all, we want to know.

#### It must connect
Every node opens a Person. And **the thread back to you always lights the way home** — a founding promise of the app. From anywhere in the tree, the path from that person to *you* should be findable.

### Screen 2 — Who they knew
Reached from a Person's **Kin** facet. Not the whole family: **this one person's people**, and how each is related to them.

The difference from the tree is scope and intimacy. The tree is the forest; this is one person's circle — who they married, who they raised, who raised them, who stood beside them in photographs.

It should answer a question the tree cannot: **not "where does Rita sit in the family" but "who was Rita's life full of."**

### The relationship that isn't blood
Two people appear in eleven photographs together across forty years and are related to nobody. **The family knows exactly who they are to each other. The database does not.** Consider whether "who they knew" includes people the photographs connect, not only the ones the tree does.

### States to draw
1. A family with **holes** — unknown parents, a branch with one name
2. A person with a **large** circle, and one with almost nobody
3. **The thread back to you**, lit
4. A suggested relationship, waiting for the keeper
5. All three languages, RTL Hebrew — **a tree mirrors completely in RTL**


---

## 6 · Contribute: the hub, and three ways in


### The job
Everything in this app came from a person who bothered to tell it. **These four screens are where that happens.** If they are cold or fussy, the forest stays dark. This is the most important brief in the batch.

### Screen 1 — the hub
Where someone goes when they have something to give. It must answer *"what can I do?"* warmly and in about two seconds. The ways in: **add a memory** (built already — do not redraw), **propose a person**, **record a voice**, **fill a gap**.

The hub's real job is **making a person feel able**. A relative who has one photograph and no idea what to do with it should find their way in without reading anything.

### Screen 2 — Propose a person
Someone remembers a great-aunt nobody has entered. They may know only her name — perhaps only her first name, perhaps only in Russian, perhaps only what she was *called*.

**The whole design problem is: never ask for more than they have.** A form with fourteen fields turns a memory into homework and the aunt is lost. What is the smallest thing someone can give that is still worth keeping? Probably a single name. Everything after that is a bonus the app should invite, never demand.

The proposal goes to the keeper. The person does not appear in the forest until approved.

### Screen 3 — Record a voice
A relative tells something aloud, in their own voice, in their own language. **This is the app's most precious content type** — a voice outlives everything else here — and it is the one most likely to make someone self-conscious and quit.

Nobody who has been asked to "record now" has ever felt relaxed. The design problem is **not the recorder** — it is the moment before. What makes an elderly relative willing to start talking? A prompt? A question? Silence? We have no answer and are genuinely open.

It must also be about **someone**: this is Rita's voice, telling about Efim.

### Screen 4 — Gaps
The forest showing what it does not know. *"Nobody has told us where this was taken."* *"This person has no face."* *"Nobody knows who told this story."*

This is the screen that turns an archive into something with a pulse. Done wrong it is a nagging chore list. Done right it is **an invitation to a person who is the only one who can answer** — and it should feel like being needed, not audited.

**The tone must be right.** A gap is not a failure. It is a place the family has not reached yet, and someone alive today can still fill it. That urgency is real and must never become guilt.

### Threaded through all four
- **Nothing appears until the keeper approves.** The contributor must see their suggestion waiting, in violet, and feel it was received — not swallowed.
- A contributor **may not be a keeper**, and may be a child, or eighty. Both must manage.
- All three languages. Someone contributing in Russian must never be pushed through English.

### States to draw
1. Each screen at rest
2. Something **submitted, waiting** — the receipt
3. **Propose a person** with only one name given
4. **Gaps** with a great many, and with almost none


---

## 7 · Manage curators


### The job
The keeper decides who else can tend the forest.

### What a curator is
Every contribution passes a keeper before the family sees it. Today there is **one keeper** and he does all of it. That does not survive contact with an extended family — and more importantly, **the keeper is a single point of failure for a thing meant to outlive him.** This page is where that begins to be solved.

### The tone problem, which is the whole problem
Every screen ever built for this is **an admin panel**: roles, permissions, a table of users, checkboxes. That is the wrong instrument entirely. Nothing about this family app is administrative — and **"who may look after our family's memories" is one of the most personal questions in it.** It sits far closer to trust than to access control.

Language matters more than layout here. This app has *keepers*, *curators*, *the family* — not admins, users, or roles. The right screen probably feels like **asking someone to help**, not granting a privilege.

### What it must do
- Show who tends the forest now, and what each looks after
- **Invite** someone to help
- Let a keeper step back — gracefully, and without the forest going untended
- Show what is waiting for approval, and who it is waiting on

### The question underneath
Does a curator look after **everything**, or after **something**? A person who knew the Odessa branch is the right reader for Odessa memories and the wrong one for Haifa. Scoped curatorship is more true to how families actually hold their knowledge — but it is more machinery, and machinery is what this page must not feel like. **We do not know the answer.**

### The one that must not be forgotten
**What happens when the keeper is gone?** The app exists so that memory outlives people; the keeper role must outlive the keeper. Nobody wants to design that screen and it is the reason the page exists. It does not need solving here, but it should not be designed *against*.

### States to draw
1. One keeper, nobody else — **today's real state**
2. Several curators, with things waiting
3. An invitation **sent, not yet accepted**
4. All three languages, RTL Hebrew


---

# One last thing

The hardest state in this whole app is **empty**. A young family archive is mostly silence: people with no face, moments nobody has explained, stories nobody has claimed. That is not a failure mode to hide — **it is the app's normal condition, and its entire reason to exist.**

An empty state here is never an apology. It is an invitation to the one person still alive who can answer.

Design for that, and the rest follows.
