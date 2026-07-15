# Brief — Search

> **Rev 2026-07-15 19:40** · Batch B · **a new page** · *(Design #6)*
> **Append `docs/design-house-rules.md` below this brief before sending.**

## The job
Find anything in the forest: a person, a place, a moment, a memory.

## Why it is not an ordinary search box
**The family thinks in three languages and does not know which one the answer is stored in.** Someone types *"Rita"* and the match is `ריטה`. Someone types *"Яффо"* and the place is filed as *Jaffo*. Someone types *"Маргарита"* and everyone calls her **Рита**. **The search must not care.** Typing a name in any language finds the person in every language.

Names in particular have parts — given, called, family, patronymic, maiden, honorific, nicknames — each in each language, each independently. *Ritaleh* must find Rita. **Мироновна** must find Rita.

## What results look like
Four things can match, and they are not alike:
- **a person** — a face, a name, and *how you are related to them*
- **a place** — where, and how many moments happened there
- **a moment** — the photograph, when, where
- **a memory** — the words, and who told them

A person is the most important result and should feel it. The others support.

## The parts that need real thought

**Matching across languages must be honest.** If someone types *"Rita"* and we surface `ריטה`, the family should see **why** — the match was on the Hebrew name. A result that appears without explanation feels like magic, and this app does not do magic: it says where things come from. Consider showing the matched name part, in the language it matched.

**The empty state is the real page.** A family archive is small and young. Searching finds nothing far more often than it finds something — and "no results" is the wrong answer, because the truth is usually *"nobody has told us that yet."* That is an invitation: **a gap someone can fill**. This is the single most important state in the page.

**Before you type.** What does the page show at rest? Recent people? Someone not visited in a while? A gap? This is an opportunity, not dead space.

## States to draw
1. Results across all four kinds
2. A **cross-language match**, with the reason visible
3. **Nothing found** — the invitation
4. **At rest**, before typing
5. All three languages, including RTL Hebrew — *the search field itself flips*
