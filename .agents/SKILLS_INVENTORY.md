# Skills Inventory

**Last reviewed:** 2026-05-15
**Lockfile:** skills-lock.json
**Repo skills directory:** .agents/skills/

This document summarizes each installed skill: its purpose, when to invoke it, and any
stack-translation rule that applies. The full SKILL.md for each skill lives in its directory.

---

## Source map

| Skill | Parent | Source |
|---|---|---|
| brandkit | taste-skill | Leonxlnx/taste-skill |
| design-taste-frontend | taste-skill (main) | Leonxlnx/taste-skill |
| full-output-enforcement | taste-skill | Leonxlnx/taste-skill |
| gpt-taste | taste-skill | Leonxlnx/taste-skill |
| high-end-visual-design | taste-skill | Leonxlnx/taste-skill |
| image-to-code | taste-skill | Leonxlnx/taste-skill |
| imagegen-frontend-mobile | taste-skill | Leonxlnx/taste-skill |
| imagegen-frontend-web | taste-skill | Leonxlnx/taste-skill |
| industrial-brutalist-ui | taste-skill | Leonxlnx/taste-skill |
| minimalist-ui | taste-skill | Leonxlnx/taste-skill |
| redesign-existing-projects | taste-skill | Leonxlnx/taste-skill |
| stitch-design-taste | taste-skill | Leonxlnx/taste-skill |
| emil-design-eng | standalone | emilkowalski/skill |
| impeccable | standalone | pbakaus/impeccable — globally installed at `~/.claude/skills/impeccable/`; not a repo-local skill folder |

---

## Project stack reminder

This repo is hand-written HTML + vanilla CSS + vanilla JS components. It does **not** use
Tailwind, React, Next.js, GSAP, shadcn, or any build step. CLAUDE.md hard rule.

When any skill's suggestions assume one of those frameworks, **do not introduce the framework**.
Translate the principle to the actual stack. Examples:

- A taste-skill suggestion of `class="bg-stone-50 text-stone-900"` becomes a corresponding
  rule in `styles.css` using the existing design tokens.
- A gpt-taste suggestion of "GSAP ScrollTrigger pinning" becomes either an
  IntersectionObserver-driven opacity fade or is declined, depending on whether the motion
  is compatible with DESIGN_SYSTEM.md's Tier 2 motion rules.
- A design-taste-frontend suggestion of "extract this as a React Client Component" becomes
  "add the corresponding behavior to the appropriate component JS file in `/components/`."

When a skill suggestion cannot be translated cleanly (e.g., it depends on a build step),
surface the issue rather than silently rejecting or applying.

---

## When to invoke each skill

### Default-safe — use freely, no translation needed

**emil-design-eng** — Motion philosophy and micro-interaction polish. Stack-agnostic. Invoke
when working on transitions, hover states, or scroll behavior.

**high-end-visual-design** — Blocks generic AI defaults (Inter, gradients, glassmorphism).
Stack-agnostic. Invoke as a guardrail during any visual polish pass.

**redesign-existing-projects** — Audit-and-upgrade pass on existing pages. Explicitly
compatible with vanilla CSS. Invoke for "this page feels generic, what's wrong" requests.

**full-output-enforcement** — Anti-truncation behavioral skill. Invoke for long file rewrites
and multi-document edits where Claude would otherwise truncate output.

**imagegen-frontend-web** — Generates section-by-section design reference images. Output is
images, not code. Invoke for design ideation before implementation.

---

### Use with stack translation

**design-taste-frontend** (main taste-skill) — Senior UI/UX rules. Assumes Tailwind + React.
Apply its principles (metric-based design, typography rules, component architecture thinking,
hardware-accelerated CSS) to the actual vanilla CSS / vanilla JS stack. Do not introduce
Tailwind or React.

**brandkit** — Brand-kit board generation. Image output. Useful when proposing visual identity
refinements; not used for code work.

**gpt-taste** — GSAP motion + AIDA structure. GSAP is not in the stack. When invoked, translate
motion principles to opacity-and-transform-only animations per DESIGN_SYSTEM.md Tier 2. AIDA
structure is fine to consider for page composition; motion suggestions need translation or
rejection per DESIGN_SYSTEM.md.

**stitch-design-taste** — Generates DESIGN.md files for Google Stitch. DESIGN.md already exists
at repo root. Invoke when regenerating or updating that file.

**imagegen-frontend-mobile** — Mobile app screen ideation. This project is a website, not a
mobile app. Invoke only if mocking up a companion app or Instagram-style screen for reference.

---

### Use sparingly — aesthetic mismatch risk

**industrial-brutalist-ui** — Swiss/military brutalist aesthetic. Wrong register for
fashion-campaign positioning. Invoke only if exploring a deliberately edgy editorial direction;
results need heavy filtering against DESIGN_SYSTEM.md.

**minimalist-ui** — Clean editorial + bento grids. Partial alignment with current direction.
Bento grids do not appear elsewhere on the site; invoke selectively. Filter results against
DESIGN_SYSTEM.md.

**image-to-code** — Designed for Codex, not Claude Code. The agent contract differs. Invoke
with caution; results may not match expected behavior in this environment.

---

### Resolved per Task 1 (Phase 5)

**impeccable** — Globally installed at `~/.claude/skills/impeccable/`. Its project context for
this repo lives at `.impeccable/design.json`. Slash commands (`/impeccable audit`,
`/impeccable arrange`, `/impeccable typeset`, `/impeccable polish`) are available when the
global install is active. Invoke for systematic polish passes; skip `/animate`, `/delight`,
`/colorize`, `/bolder` — wrong aesthetic for this site.

---

## Skill activation rules

1. Skills do not auto-activate. The user invokes them explicitly.
2. When a skill is invoked and its suggestion crosses a Preference Tier in DESIGN_SYSTEM.md:
   - **Tier 1 (Non-Negotiable):** stop and surface the conflict. Do not apply.
   - **Tier 2 (Strong Preference):** propose as an option alongside the documented preference.
     User decides.
   - **Tier 3 (Current Default):** apply if the user has approved the skill invocation; show
     the diff.
3. Skills do not edit VOICE.md, DESIGN_SYSTEM.md, or any authoritative document. They suggest
   visual or code changes only.
4. When two skills disagree on the same task, the user picks. Do not silently resolve.
