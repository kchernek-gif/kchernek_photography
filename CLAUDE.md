# CLAUDE.md — Frontend Website Rules

This file loads automatically at the start of every Claude Code session in this repo.

This project is an evolving functional first draft, not a finalized brand identity. Design docs encode current direction and strategic positioning. When a request asks for visual exploration or refinement, treat the docs as guardrails, not as locks. Ask whether the request is exploration (new direction worth trying), refinement (improving execution within current direction), or production cleanup (fixing bugs or violations). Reflect that classification back before proceeding. If a proposed change violates a Non-Negotiable, surface the conflict; if it violates only a Current Default, propose it as an option and let the user decide.

---

## Top-level guardrail: don't pigeonhole

The site must not signal a single specialty visually. The chrome (palette, typography, layout, voice, motion) supports range across fashion verticals — apparel, swimwear, lingerie, beauty, accessories, lifestyle, beverage. A lingerie brand, a boot brand, a beauty brand, a swimwear brand, and a beverage brand should all see a photographer who could work with them.

Specialty is communicated through portfolio content, not through site aesthetics.

When making any design decision, ask: **does this signal "I do X" too strongly?** If yes, soften it. This is a strong guardrail. When a design decision raises an anti-pigeonhole concern, surface the conflict; don't silently resolve it.

---

## Authoritative documents

Read these before writing or changing anything visual:

1. **`DESIGN_SYSTEM.md`** — single source of truth for tokens, type, layout, palette, motion, page model, preference tiers
2. **`VOICE.md`** — single source of truth for brand voice, sentence-level tone, and copywriting moves
3. **`.impeccable/design.json`** — Impeccable's project context file for this repo. Impeccable is globally installed at `~/.claude/skills/impeccable/`; its slash commands (`/impeccable audit`, `/impeccable arrange`, `/impeccable typeset`, `/impeccable polish`) are available when that global install is active.
4. **This file (`CLAUDE.md`)** — floor of behaviors for every session
5. **`.agents/SKILLS_INVENTORY.md`** — skill purposes, invocation guidance, and stack-translation rules for each installed skill
6. **`.agents/skills/kchernek-website-director/SKILL.md`** — project director skill (added Phase 5; see Task 5)

If these documents conflict, surface the conflict explicitly rather than silently picking one. General resolution:
- VOICE.md wins on tone and sentence-level voice
- DESIGN_SYSTEM.md wins on visual, structural, and strategic positioning
- CLAUDE.md wins on environment, stack, and session-level behaviors

---

## Always do first

- At session start, invoke the kchernek-website-director skill. It loads the authoritative documents, classifies the request, and applies the right preference tier framework. This is the default protocol for any work on this repo.
- Read `DESIGN_SYSTEM.md` before any visual or structural change. The document is authoritative.
- Check the `brand_assets/` folder for logos, color guides, style guides, and images. If real assets exist, use them. Never use placeholders where real assets are available.
- When using polish-oriented skills (frontend-design, Taste Skill, Impeccable, Emil Kowalski), constrain them explicitly to the tokens and rules in `DESIGN_SYSTEM.md`. Skills propose, the design system approves.

---

## Project stack

This is **not a Tailwind / React / shadcn project**. The stack is:

- **Hand-written HTML** (one file per page, no SPA framework)
- **Hand-written CSS** (`styles.css` in the project root, with per-page `<style>` blocks for page-specific tweaks)
- **Vanilla JS components** loaded as ES modules from `components/` (nav, footer, motion as JS partials)
- **CSS custom properties** for the design tokens (defined in `:root`, see `DESIGN_SYSTEM.md`)

Do not:
- Add Tailwind via CDN
- Add a build step (no Vite, Webpack, Parcel, esbuild)
- Add React or any framework
- Add shadcn/ui or any component library
- Migrate existing CSS to utility classes
- Add inline styles where a CSS class would work — use `styles.css` or page-specific `<style>` blocks

Yes:
- Edit existing `styles.css` and per-page `<style>` blocks
- Add new CSS custom properties to `:root` when introducing new tokens
- Edit existing component JS files in `components/`
- Use modern CSS features (custom properties, grid, flexbox, container queries, `@starting-style`, `prefers-reduced-motion`)

---

## Local server

- **Always serve on localhost.** Never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

---

## Screenshot workflow

- Puppeteer is installed at `C:\Users\Keith\AppData\Local/Temp/puppeteer-test/`. Chrome cache is at `C:\Users\Keith/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten)
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG with the Read tool — Claude can see and analyze the image directly.
- When comparing to a reference, be specific: "heading is 32px but reference shows ~24px", "section padding is 64px but should be 48px"
- Always check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing, the navy accent application
- Mobile widths to test: 375px (iPhone), 768px (tablet), 1440px (desktop). Test all three for any layout change.

---

## Iteration loop

When working from a reference image OR comparing to the design system:

1. Implement the change
2. Screenshot from localhost
3. Read the screenshot
4. Compare against the reference or against `DESIGN_SYSTEM.md` tokens
5. Identify mismatches by specific measurement
6. Fix
7. Re-screenshot
8. Repeat until no visible differences remain or the user confirms it's done

Do **at least 2** comparison rounds. Stopping after one pass usually means the spacing or type is slightly off.

---

## Reference images

When the user attaches a reference image:

- Match layout, spacing, typography, and color **exactly** — within the constraints of `DESIGN_SYSTEM.md`
- Do not "improve" the reference. Do not add sections, features, content, or details that aren't in it.
- Swap in real content from the site where reference content is placeholder
- Use real images from `brand_assets/` or `portfolio-images/` — never `placehold.co` or stock URLs unless explicitly asked
- If the reference contradicts `DESIGN_SYSTEM.md`, surface the conflict and ask the user which wins. Default to the reference unless told otherwise (the user often shares references *to* update the design system).

When there's no reference, design from scratch using the tokens and rules in `DESIGN_SYSTEM.md`. Don't invent.

---

## Aesthetic test (apply to every output)

Before showing the user any visual change, ask:

> Does this look like it belongs on a contemporary fashion brand's campaign landing page, or does it look like it belongs in a literary fashion magazine, or does it look like it belongs on a SaaS landing page?

The target is the first. The site's reference points are Josh Ryan, Joey Wright, and Danny Batista — working commercial fashion and lifestyle photographers — and the campaign landing pages of brands they shoot for (Guess, Andi Bagus, Reformation, Buck Mason, Tecovas).

If the output reads as austere-magazine, intellectual-publication, or art-school-restrained → overcorrected toward editorial publication aesthetic. Pull it back toward brand-campaign warmth.

If the output reads as SaaS-landing-page, tech-product, or YC-startup → drifted toward AI slop. Pull it back toward fashion-brand campaign.

---

## Palette

```css
--background:            #F3F1ED;  /* Warm off-white page background */
--surface:               #FFFFFF;  /* Card surfaces only */
--text-primary:          #2A2622;  /* Body text, headlines */
--text-secondary:        #6B6359;  /* Card headers, prices */
--text-muted:            #706A63;  /* Taglines, captions, metadata */
--border:                rgba(42, 38, 34, 0.14);
--secondary-navy:        #1E2A38;  /* Primary button fill, link hovers, dividers */
--secondary-navy-hover:  #2A3A4C;
```

**Rules:**
- Never use pure black (`#000`) for text. Use `--text-primary`.
- Never use pure white (`#FFFFFF`) for backgrounds. Use `--background`.
- Navy is a confident accent — primary button fill, link hover, focus ring, occasional divider. Never body text, never large backgrounds, never hero treatment.
- Do not introduce new accent colors. The photography supplies any further color (skin tones, denim blue, brass, gold, terracotta, etc.).

---

## Typography

- **Body, nav, UI:** Noto Sans (weights 300, 400, 700)
- **Headings:** Noto Sans currently — single-family system. See DESIGN_SYSTEM.md > Typography for display-face status and approval requirements.
- Default away from: Inter, Manrope, Plus Jakarta Sans, Geist, Bricolage Grotesque, Playfair Display, Cormorant Garamond, Times New Roman, Georgia, system defaults. Introduce only with explicit user approval.

See `DESIGN_SYSTEM.md` for the full type scale and treatments.

---

## Motion vocabulary

Confident-commercial. Restrained but not austere. Should feel like a polished brand campaign landing page (Reformation, Buck Mason), not a SaaS micro-interaction and not an editorial publication.

**Yes:**
- Subtle fade-in on image lazy-load (200-300ms)
- Hover state: subtle color shift (warm-neutral → navy), 150-200ms ease-out
- Crossfade in lightbox
- Sticky header with subtle background treatment on scroll
- `prefers-reduced-motion` respected on every animation

**Avoid (require explicit approval and a brand-campaign-coded justification):**
- Bouncy or spring-based animations (no overshoot, no elastic)
- "Fly in from below" SaaS scroll animations
- GSAP scroll-driven entry animations
- Three.js or Spline 3D background graphics
- `transition-all` (specify exact properties)
- Autoplay videos (except hero videos when explicitly intentional)
- Animation on properties that trigger layout (width, height, top, left, margin, padding)
- Linear easing on UI (linear is for progress bars and looping backgrounds only)

**Performance rules:**
- Only animate `transform` and `opacity`. These are GPU-compositable.
- Use `will-change` only when an animation is about to fire, remove after
- Avoid scroll-linked animations; if needed, use `IntersectionObserver` not scroll listeners

---

## Interactive states (required on every clickable element)

Every link, button, form input, and clickable element must have:

1. **Default state** — base styling from design system
2. **Hover state** — color shift to navy or subtle weight change (not scale-up, not shadow change)
3. **Focus-visible state** — visible focus ring using `--secondary-navy`, 2px outline with 2px offset
4. **Active state** — slight darkening or compression (scale 0.98 max, never below 0.95)
5. **Disabled state** — reduced opacity (0.5), no hover behavior

No exceptions.

---

## Flag these patterns (AI slop)

Polish-oriented tools may suggest these. They conflict with current direction — flag them before applying. Introducing any requires explicit user approval.

- ❌ Inter font or any other AI-default sans
- ❌ Purple/blue/teal SaaS-style gradients
- ❌ Glassmorphism or frosted backgrounds
- ❌ Soft decorative shadows on cards or buttons
- ❌ Rounded corners on layout containers, images, or large surfaces (subtle 2-4px on small buttons/inputs is acceptable, sharp is default)
- ❌ Neon-on-dark accents
- ❌ Three.js or Spline 3D background graphics
- ❌ GSAP scroll-driven fly-in animations
- ❌ shadcn/ui rounded-card aesthetic
- ❌ Cards nested inside cards
- ❌ "As featured in" logo walls
- ❌ Big stat numbers with glowing accents
- ❌ Centered hero with floating phone mockup
- ❌ Three-feature-card grids below the hero
- ❌ Gradient hero text
- ❌ Bright accent colors anywhere

---

## Flag these patterns (editorial publication overcorrection)

Some skills overcorrect from "AI slop" into "literary fashion magazine." Also wrong for this site — flag them before applying. Introducing any requires explicit user approval.

- ❌ Austere maximalist whitespace that erases brand-confidence
- ❌ Intellectual serif body type
- ❌ Magazine-page-mimicry (folio numbers, drop caps, masthead numerals)
- ❌ Tiny-caption-as-art-statement treatments
- ❌ Art-school-restrained tone in copy
- ❌ Document Journal / AnOther / i-D aesthetic patterns (those are publications, this is a working photographer's site)

---

## Brand voice (when writing copy)

Confident, professional, partner-to-brands. Speaks to brands and agencies as peers. Project-focused, not personality-focused.

Avoid:
- "Passionate about photography"
- Childhood-camera origin stories
- "Aspire to inspire" or motivational rhymes
- "Worked with" (use "Shot for," "Campaign for," "Lookbook for")
- "Book Now!" or any CTA with an exclamation point
- "Y'all" or folksy DFW framings
- "Premium," "luxury," "exclusive" (trying too hard)
- Self-effacing phrases ("just trying my best," "hoping to," "would love to")

Approved CTAs: "Book a Shoot," "Plan a Shoot," "Request Booking," "Get in Touch," "Connect," "View Portfolio," "View More Work," "Inquire," "Start a Project"

See `DESIGN_SYSTEM.md` for the full voice rules.

---

## SEO discipline (apply to every new page or image)

This is non-negotiable. Reference: Danny Batista.

**File naming:** Every image follows `[year]-[shoot-or-brand-name]-[descriptor].jpg`. Never `IMG_1234.jpg`, `EmptyName_N.jpg`, or generic descriptors. If you encounter an existing file with a generic name, flag it for renaming rather than silently using it.

**Alt text:** Every `<img>` tag has descriptive alt text: `[Subject] [doing what] in [location/style], [brand context if applicable]`. Example: `"Model in Andi Bagus swimwear at outdoor pool, brand lookbook"`. Never `"image"` or `"photo"` or empty alt unless decorative.

**Page titles:** Pattern: `[Page topic] | Keith Chernek Photography | DFW Commercial Fashion Photographer`. Each page must have a unique title.

**Meta descriptions:** Unique per page, written not template-generated, max 155 characters, location keyword included naturally.

**H1:** Exactly one per page, contains the primary topic keyword.

**Internal links:** Descriptive anchor text. Never "click here" or "read more" without context.

**Schema markup:** JSON-LD in `<head>`. Person + LocalBusiness on home/about/contact. ImageGallery on portfolio set pages.

**Location keywords (approved):** Las Colinas, Irving, Dallas-Fort Worth, DFW, North Texas, Dallas, Fort Worth. Never folksy variants.

---

## Image handling

- Reference images from `./portfolio-images/[filename]` (relative path)
- Hero images: minimum 2000px long edge, ideally 2500-3000px
- Portfolio thumbnails: 1200-1500px long edge
- Format: JPG (80% quality), PNG only when transparency needed
- Color profile: sRGB
- Before launch: implement responsive `<picture>` markup with WebP variants on portfolio pages
- Always include `width` and `height` attributes on `<img>` to prevent layout shift (CLS)
- `loading="lazy"` and `decoding="async"` on portfolio thumbnails (never on hero — hero loads eagerly)

When user prompts are vague ("use a good image"), ask which specific file rather than picking. Don't invent paths.

---

## Skills available in this project

13 design and design-adjacent skills are installed in `.agents/skills/`. Impeccable is additionally installed globally at `~/.claude/skills/impeccable/`. They are tools, not autopilots.

See `.agents/SKILLS_INVENTORY.md` for the full list, source attribution, invocation guidance, and stack-translation rules for each skill.

### Stack-translation rule (applies to every skill)

This project is hand-written HTML + vanilla CSS + vanilla JS components. It does **not** use Tailwind, React, Next.js, GSAP, shadcn, or any build step. CLAUDE.md hard rule.

When a skill's suggestions assume one of those frameworks, do not introduce the framework. Translate the principle to the actual stack:

- Tailwind utility classes → CSS rules in `styles.css` using existing design tokens
- React components → corresponding markup in HTML pages + behavior in `/components/*.js`
- GSAP / scroll-driven motion → IntersectionObserver-driven opacity fades per DESIGN_SYSTEM.md Tier 2

If a skill's suggestion cannot be translated cleanly (e.g., it depends on a build step), surface the issue rather than silently rejecting or applying.

### Skill activation rules

- Skills are invoked by explicit user instruction. Do not auto-activate them.
- Skill suggestions must respect Preference Tiers in DESIGN_SYSTEM.md:
  - Tier 1 (Non-Negotiable): conflict stops the work, surfaces to user.
  - Tier 2 (Strong Preference): conflict gets proposed as an option, user decides.
  - Tier 3 (Current Default): apply if the user approved the skill invocation; show diff.
- When two skills disagree, the user picks. Do not silently resolve.
- Skills do not edit VOICE.md, DESIGN_SYSTEM.md, or any authoritative document. They suggest visual or code changes only.

### Impeccable

Globally installed at `~/.claude/skills/impeccable/`. Project context lives at `.impeccable/design.json`. Slash commands (`/impeccable audit`, `/impeccable arrange`, `/impeccable typeset`, `/impeccable polish`) are available when the global install is active. Skip `/animate`, `/delight`, `/colorize`, `/bolder` — wrong aesthetic for this site.

---

## Hard rules

- Do not migrate to Tailwind, React, or any framework
- Do not introduce shadcn/ui or any component library
- Default away from gradients, glassmorphism, and 3D background graphics; introduce only with explicit user approval and a brand-campaign-coded justification
- Do not introduce a second font without explicit user approval
- Do not introduce accent colors beyond navy without explicit user approval
- Do not improve a reference design — match it
- Do not add sections, features, or content not requested
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind colors anywhere (we're not using Tailwind, but in case any tool reaches for `bg-indigo-500` style colors, reject)
- Do not commit `.impeccable/design.json` changes without surfacing what changed
- Do not auto-rename or auto-move files without confirming with the user
