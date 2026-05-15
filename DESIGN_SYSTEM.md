# Keith Chernek — Design System

**Site:** kchernek.com
**Last updated:** May 2026
**Purpose:** Single source of truth for the site's current visual direction, strategic positioning, and implementation guardrails. This document is intended to guide both humans and AI-assisted tools (Claude Code, Codex, Cursor, polish plugins, design systems, etc.) while still allowing room for thoughtful aesthetic evolution.

---

# Design System Maturity

This document defines the **current direction** of the site — not a permanently locked visual identity.

Some aspects are considered foundational and stable:

* Anti-pigeonhole positioning
* Brand-accessible commercial aesthetic
* Crawlability and SEO discipline
* Audience positioning
* Professional, restrained tone

Other areas are intentionally open to refinement and exploration:

* Typography pairings
* Spacing rhythm
* Motion polish
* Layout density
* Component styling
* Color nuance
* Image presentation systems
* Micro-interactions
* Homepage composition

The goal is not to freeze the website visually. The goal is to prevent drift into aesthetics that conflict with the brand positioning.

Thoughtful evolution is encouraged.

---

# Preference Tiers

Every rule in this design system belongs to one of three tiers. When a request conflicts with a rule, the response depends on which tier the rule is in.

## Tier 1 — Non-Negotiable

Violating these breaks the strategic positioning of the site. Surface the conflict and stop; do not silently apply.

- Anti-pigeonhole positioning. The site framework must not over-signal one fashion vertical. Specialization is communicated through portfolio content.
- Campaign-feel over magazine, SaaS, or template aesthetic.
- Photography is the primary visual element. Decoration frames the work, never competes with it.
- Core navigation and business-critical info must remain crawlable as plain HTML and accessible without JavaScript.
- Brand voice is confident, restrained, commercial, partner-to-brands. No exclamation points, no folksy DFW framings, no motivational rhymes.

## Tier 2 — Strong Preference

These reflect current direction. Departing requires explicit user approval and a brand-campaign-coded justification.

- Warm-neutral palette with Campaign Denim as the only accent.
- Sharp corners across containers, images, and cards. Subtle radius (2-4px max) only on small form inputs.
- Flat-by-default surfaces. No decorative shadows on cards. Two allowed shadows: scroll-state header, form input contrast.
- Motion limited to opacity, GPU-composited transform, IntersectionObserver-driven fades. No GSAP, no scroll-driven flying entries, no spring/bounce.
- Em-dash policy per the DESIGN_SYSTEM.md > Em-dash policy section.
- Noto Sans single-family typography system.

## Tier 3 — Current Default

These are the current implementation but are open to refinement. Propose alternatives as options; don't reject as violations.

- Specific spacing values, line heights, letter spacings, and the type scale.
- Homepage composition (single hero, two CTAs, no intermediate bands).
- Specific copy in CONTENT.md, beyond the voice rules.
- Portfolio gallery layout density and grid choices.
- Microinteraction timings and hover-state details.
- Imagegen and ImageGallery schema field selections.

## How to use these tiers in a Claude Code session

- "This violates Tier 1 — surfacing for your decision." → Stop and ask.
- "This crosses Tier 2 — proposing it as an option." → Show both the current approach and the alternative, let the user pick.
- "This is a Tier 3 default — here's the change." → Apply it.

---

# Non-Negotiables

1. The site must not pigeonhole the photographer into a single vertical.
2. The site should feel closer to a contemporary fashion/lifestyle campaign landing page than a magazine, SaaS startup, or generic photographer template.
3. Photography is always the primary visual element.
4. Core navigation and business-critical information must remain crawlable and accessible.
5. Copy should remain confident, restrained, commercial, and brand-facing.
6. The website should communicate range, professionalism, and creative competence without overexplaining itself.

---

## Brand identity

- **Brand mark:** "Keith Chernek" (never "Keith Chernek Photography")
- **Handle:** kchernek (matches all social handles for brand consistency)
- **Logo composition:** Script "KC" monogram above sans-serif "KEITH CHERNEK" wordmark, with tagline below
- **Tagline:** `FASHION — LIFESTYLE — DFW` (em-dashes as separators, all-caps)
- **Positioning:** Commercial Fashion & Lifestyle Photographer. Aspirational target: Josh Ryan × Guess kind of campaign work. Already producing pieces of this work for brands like Andi Bagus when opportunities arise.
- **Geographic anchor:** Las Colinas / Irving / Dallas–Fort Worth

The site should position Keith as:

* commercially capable,
* aesthetically current,
* campaign-oriented,
* and adaptable across multiple fashion/lifestyle verticals.

---

## Top-level guardrail: the anti-pigeonhole rule

The site must not visually overcommit to:

* swimwear,
* lingerie,
* editorial publication aesthetics,
* weddings,
* fine art photography,
* influencer culture,
* or a single commercial vertical.

The chrome (layout, typography, color, spacing, motion, voice) should support range across fashion verticals:

* apparel,
* beauty,
* accessories,
* lifestyle,
* beverage,
* swimwear,
* lingerie,
* denim,
* western,
* and campaign-style work equally well.

A lingerie brand, a boot brand, a beauty brand, a swimwear brand, and a beverage brand should all see a photographer who could work with them. 

Portfolio imagery communicates specialization. The site framework itself should remain broadly brand-accessible.

When making design decisions, ask:

> Does this visually over-signal one niche?

If yes, soften it.

---

## Aesthetic test

Current direction:

* warm-modern,
* restrained,
* campaign-oriented,
* commercially polished,
* photography-first,
* quietly confident.

The visual language should feel at home beside:

* fashion campaigns,
* lookbook pages,
* contemporary brand landing pages,
* and creative agency portfolio sites.

The site should avoid:

* literary fashion publication aesthetics,
* overly intellectual editorial minimalism,
* generic tech startup aesthetics,
* over-designed creative developer portfolios,
* and trend-heavy UI gimmicks.


If the output reads as SaaS-landing-page, tech-product, or YC-startup, it's drifted toward AI slop. Pull it back toward fashion-brand campaign.

---

## Reference hierarchy

| Reference | What we take from them |
|---|---|
| Joey Wright | Functional structure: navigation, organization, booking flow, page model |
| Danny Batista | SEO discipline: file naming, page naming, alt text, location keywords |
| Josh Ryan | Aspirational aesthetic: campaign-photographer feel, light, mood |
| Andi Bagus / Reformation / Buck Mason / Tecovas | Adjacent brand-campaign aesthetics to study for chrome treatments |

Joey Wright's site is the **functional** reference, not the visual one. Keep his navigation and organization. Do not copy his palette, type, or specific layout details. References are directional, not prescriptive.

The goal is not imitation.

---

# Visual Exploration Philosophy

Design tools, polish systems, and AI-assisted workflows are encouraged to:

* propose elevated refinements,
* improve sophistication,
* refine typography,
* improve motion,
* improve spacing,
* improve responsive behavior,
* and modernize presentation.

However:

* all exploration must preserve the strategic positioning of the site,
* avoid SaaS drift,
* avoid literary-editorial drift,
* and preserve the anti-pigeonhole rule.

Tools should be treated as creative collaborators, not enemies.

---

## Color palette

Current implementation leans:

* warm-neutral,
* low-saturation,
* restrained,
* with dark navy accents.

This palette is a starting direction, not an immutable identity.

The photography should provide most of the emotional color.

## Current Tokens

```css
:root {
  --background:        #F3F1ED;  /* Warm off-white — page background */
  --surface:           #FFFFFF;  /* Pure white — card surfaces */
  --text-primary:      #2A2622;  /* Deep warm brown-black — body text, headlines */
  --text-secondary:    #6B6359;  /* Warm medium brown — buttons, card headers, prices */
  --text-muted:        #706A63;  /* Warm tan-gray — taglines, captions, metadata */
  --border:            rgba(42, 38, 34, 0.14);  /* Subtle warm brown border */
  --secondary-navy:    #1E2A38;  /* Deep warm navy — link hovers, button accents, dividers */
  --secondary-navy-hover: #2A3A4C;  /* Slightly lighter navy for hover states */
}
```

## Color Guidance

* Avoid pure black body text.
* Avoid pure white page backgrounds.
* Avoid loud accent colors unless strategically justified.
* Navy is intended as a restrained accent, not a dominant brand color.
* The palette may evolve cooler, richer, or more contrast-heavy later if it improves campaign feel.

---

### Rejected color choices

- **Olive green** (#525C46 or similar): earlier iterations used olive; we moved away from it.
- **Tech blues** (cobalt, cyan, primary blue): the navy is intentionally warm/deep. Bright blues read SaaS.
- **Accent reds, oranges, mustards:** the photography provides warm color. Don't double up.

---

# Typography

Current implementation uses:

* Noto Sans
* light-weight headlines
* restrained uppercase utility typography
* generous spacing

Typography is still under active refinement.

Future exploration may include:

* cleaner display faces,
* improved headline contrast,
* or more premium campaign-oriented pairings.

Avoid:

* wedding-photographer typography,
* literary-publication serif systems,
* over-stylized fashion-magazine typography,
* trendy startup typography systems.

The goal is:

* modern,
* confident,
* commercially polished,
* and restrained.

Suggested weights: 300 (Light), 400 (Regular), 700 (Bold).

```css
:root {
  --font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Current state: Noto Sans single-family system across all weights and registers. A paired display face is not currently in use. Introducing a second family is permitted as a future exploration if motivated by a specific design need, requires explicit user approval before implementation, and must be brand-campaign-coded (not editorial-publication-coded, not wedding-photographer-coded).

### Type scale & treatments

**Logo wordmark (KEITH CHERNEK)**
- Font: Noto Sans
- Weight: 300 (Light)
- Letter spacing: 0.28em
- Text transform: uppercase
- Size: ~2.2rem on desktop, smaller on mobile

**Tagline (FASHION — LIFESTYLE — DFW)**
- Font: Noto Sans
- Weight: 400 (Regular)
- Letter spacing: 0.48em
- Text transform: uppercase
- Size: ~0.58rem (very small)
- Color: `--text-muted`

**H1 — Page titles**
- Weight: 300 (Light)
- Size: ~2.5–3rem
- Text transform: none (sentence case)
- Letter spacing: 0
- Line height: 1.2

**H2 — Section headers**
- Weight: 700 (Bold)
- Size: ~0.9rem (small)
- Text transform: uppercase
- Letter spacing: 0.13em
- Line height: 1.4

**H3 / H4 — Subsection headers**
- Weight: 700 (Bold)
- Size: ~0.75rem (smaller)
- Text transform: uppercase
- Letter spacing: 0.12em

**Body text**
- Weight: 400 (Regular)
- Size: 1rem (16px base)
- Line height: 1.7–1.8
- Color: `--text-primary`

**Buttons**
- Weight: 700 (Bold)
- Size: ~0.68rem
- Text transform: uppercase
- Letter spacing: 0.18em

**Navigation links**
- Weight: 700 (Bold)
- Size: ~0.6rem
- Text transform: uppercase
- Letter spacing: 0.14em

### Typography pattern

- Large + light + sentence-case = page-defining headlines (H1)
- Small + bold + uppercase + letter-spaced = everything else (H2, H3, H4, nav, buttons)
- This pattern is brand-campaign-coded and deliberate

---

## Layout principles

Current direction favors:

* hero-led composition,
* generous whitespace,
* restrained UI density,
* centered masthead structure,
* and photography-first presentation.

- **Background:** Warm off-white (`--background`)
- **Whitespace:** Generous around masthead and between sections
- **Borders:** Sharp corners on layout containers, cards, and images (border-radius: 0). Subtle radius (2-4px) acceptable on buttons and form inputs if it serves the brand-confident feel — test both, default to sharp.
- **Header:** Centered logo + centered nav with thin top/bottom borders
- **Hero:** Full-bleed images on homepage and key landing pages
- **Max content width:** ~1035px for body content
- **Section padding:** 36px+ vertical, 4vw horizontal

### Mobile (≤640px)
- Pricing grids collapse to single column
- Nav reduces to hamburger or stacked items
- Reduce padding proportionally

However:

* layout systems may evolve significantly as the site matures.

The homepage should remain:

* statement-oriented,
* visually strong,
* and uncluttered.

But restrained supporting elements are allowed when they improve:

* SEO,
* crawlability,
* orientation,
* credibility,
* or conversion.

Visual restraint should not come at the expense of usability.

---

# Motion Philosophy

Motion should feel:

* subtle,
* intentional,
* polished,
* campaign-oriented,
* and calm.

Good references:

* Reformation
* Buck Mason
* premium creative agency sites

Bad references:

* Stripe-style SaaS microinteractions
* aggressive scroll choreography
* bouncing animations
* overproduced GSAP demos

Motion exists to support elegance, not demand attention.

---

## Site architecture

### Main navigation (top of every page)
```
PORTFOLIO | SERVICES | ABOUT | BOOK A SHOOT ▾ | CONNECT ▾
```

- No "Home" item — the logo serves as the home link
- Logo lives above the nav (masthead style)

### Dropdowns

**Book a Shoot ▾**
- Model Development
- Commercial & Brand

**Connect ▾**
- Get in Touch (contact form)
- DFW Photowalks (external link, opens in new window: https://meetup.com/dfwphotowalks)

### Hidden / not in main nav
- Portfolio category sub-pages: Editorial, Swimwear (linked from within Portfolio page)
- Future categories: Digitals, Brand & Product (added when content exists)

### Deliberate exclusions
- No Education / teaching pages
- No Tools & Presets
- No Magazine
- No Newsletter
- No Blog / Journal
- No Cart / e-commerce
- These were on Joey Wright's mature site but are not appropriate for this stage

---

## Page model

### Homepage
- **Purpose:** Statement page. Single hero element + minimal CTA.
- **Structure:** Centered logo masthead → nav → full-bleed hero image → minimal footer
- **NO:** Gallery grid on homepage. Portfolio teasers. About snippets. Services bullet points.
- **Hero image criteria:** Brand-campaign-coded, high-resolution (2000px+ wide), subject clearly visible, intentional styling. Image must not signal a single vertical too strongly (per the anti-pigeonhole rule).

### Portfolio (/portfolio)
- **Layout:** Project-based grid (2–3 columns desktop)
- **Each thumbnail:** A project (model name + brand, or shoot title)
- **Clicking a thumbnail:** Opens individual project gallery
- **Categories:** Editorial, Swimwear (initially). Add Digitals, Brand & Product when populated.
- **Captions:** Minimal. Model name + brand only. No SEO-bait alt text — but image alt text on the underlying <img> elements is comprehensive (see SEO section).

### Services (/services)
- **Purpose:** Positioning page, NOT a booking page
- **Structure:** Overview header → service categories with short descriptions → "How I work" paragraph → CTA to Book a Shoot
- **NO pricing on this page**

### Book a Shoot — Model Development (/model-development)
- **Audience:** Aspiring and working models
- **Structure:** Two-card pricing layout side-by-side
- **Two packages:**
  - Digitals package
  - Editorial Test package
- **Each card includes:** Deliverables list, photo count, price, description paragraph, "Request Booking" CTA
- **Below cards:** "Important Info" section (booking process, deposit, what to bring, retouching policy, image rights)

### Book a Shoot — Commercial & Brand (/commercial)
- **Audience:** Brands, agencies, marketing managers
- **Structure:** Different from Model Development — project-based, not package-based
- **Sections:** What you offer (product, lookbook, social content, events) → Process → Past clients/credentials → CTA
- **NO fixed pricing** — "Pricing varies by scope. Get in touch to discuss your project."
- **Embed credibility:** Walmart, FloSports, Andi Bagus, AvalTheBrand naturally referenced

### Connect (/contact or /get-in-touch)
- Contact form: Name, Email, Message only (no Phone, no Subject)
- Form submits to: keith@kchernek.com
- Submit button text: "Send Inquiry" or "Get in Touch" (not "Submit")
- Form must be wired to a real handler (Formspree, Resend, or Vercel serverless) before launch — non-negotiable

### About (/about)
- Brief, brand-accessible bio
- Self-portrait: portfolio-images/about/keith-chernek-photographer-portrait-dfw.jpg
- References Josh Ryan workshop as credibility anchor
- Named credits: Walmart, FloSports, Andi Bagus, AvalTheBrand, "more than a dozen independent fashion magazines"
- See content doc for current draft

---

## UI patterns

### Pricing cards (Model Development page)
- Background: `--surface` (#FFFFFF)
- Card header: `--text-secondary` (#6B6359) background, white text, uppercase, letter-spaced
- Card body: Centered text, deliverables list, photo count, price, description, button
- Shadow: Subtle, warm-toned (no harsh black shadow)
- Border-radius: 0 (sharp corners) on the card itself; subtle radius acceptable on the button inside

### Buttons
- **Primary button:** Background `--secondary-navy` (#1E2A38), white text. Hover: `--secondary-navy-hover` (#2A3A4C).
- **Legacy/secondary button** (where navy isn't right): Background `--text-secondary` (#6B6359), white text, hover `--text-primary` (#2A2622).
- Text color: White
- Border-radius: 0 (or up to 2-4px if testing soft commercial feel)
- Padding: 14px 20px
- Full-width within container

### Form inputs
- Border: 1px solid `--border`
- Focus ring: 2px `--secondary-navy` outline
- Background: `--surface`

### Footer
- Background: `--background` (#F3F1ED) — same as page
- Tagline: "DFW commercial fashion and lifestyle photography" (small, muted text)
- Contact: keith@kchernek.com (mailto link)
- Location: Irving, TX 75039
- Social icons: Instagram + Threads (small, muted color; hover state = navy)
- Copyright line

---

## Imagery direction

- **Style:** Commercial fashion and lifestyle. Josh Ryan / Joey Wright tier. Brand-campaign-coded.
- **Hero criteria:** Sharp (2000px+ wide), intentional, subject-clear, vertical-agnostic where possible
- **Color harmony:** Warm tones favored, but cool-toned commercial work also fits
- **Project organization:** Each portfolio piece is a project, not a floating image
- **Captions on portfolio thumbnails:** Model name + brand. Nothing else.
- **Underlying alt text on <img> tags:** Descriptive (see SEO section)

---

# SEO & AEO Philosophy

SEO and AI crawlability are core infrastructure, not afterthoughts.

The site should be understandable to:

* humans,
* Google,
* AI crawlers,
* answer engines,
* and accessibility tools.

## Core Rules

* Important text must exist in semantic HTML.
* Navigation should remain crawlable without JavaScript.
* Images require descriptive filenames and alt text.
* Each page should clearly communicate:

  * who it is for,
  * what it offers,
  * where it operates,
  * and how to inquire.
* Portfolio pages should include short crawlable descriptions.
* Do not rely solely on imagery to communicate services.

---

## SEO discipline

This section is new and reflects the Danny Batista reference. SEO is not an afterthought — it's a workstream.

### File naming

Every image follows the pattern: `[year]-[shoot-or-brand-name]-[descriptor].jpg`

Examples:
- `2025-andi-bagus-swimwear-marina-01.jpg`
- `2025-jr-workshop-keith-chernek-editorial-01.jpg`
- `2025-model-development-digitals-portrait-01.jpg`

Never: `IMG_1234.jpg`, `EmptyName_3.jpg`, `Untitled.jpg`, generic descriptors.

### Alt text

Every `<img>` tag has alt text following the pattern:
`[Subject] [doing what] in [location/style], [shoot or brand context if applicable]`

Examples:
- `"Model in Andi Bagus swimwear at outdoor pool, brand lookbook"`
- `"Model in denim and white tank at marina dock, lifestyle test shoot"`
- `"Portrait headshot of model with natural light, modeling digital"`

Avoid keyword stuffing. Write alt text as if describing the image to someone who can't see it, with brand and location context where natural.

### Page titles

Pattern: `[Page topic] | Keith Chernek Photography | DFW Commercial Fashion Photographer`

Examples:
- `Portfolio | Keith Chernek Photography | DFW Commercial Fashion Photographer`
- `Model Development | Keith Chernek Photography | DFW Commercial Fashion Photographer`
- `Commercial & Brand Photography in Dallas-Fort Worth | Keith Chernek Photography`

### Meta descriptions

- Unique per page, written not template-generated
- Max 155 characters
- Include location keyword naturally
- No keyword stuffing

### H1 conventions

- Each page has exactly one H1
- H1 contains the primary topic keyword for that page
- H1 visible text matches the page title's topic portion

### Internal linking

- Every portfolio set links to relevant booking page
- Every booking page links to relevant portfolio sets
- Anchor text is descriptive ("View commercial portfolio," not "click here")
- No orphan pages

### Schema markup

JSON-LD structured data in `<head>`:
- `index.html`: Person schema (Keith Chernek, photographer, Las Colinas TX) + LocalBusiness
- `about.html`: detailed Person schema
- `contact.html`: LocalBusiness with full contact details
- Portfolio set pages: ImageGallery schema

### Location keywords

Use naturally on About, Contact, home, and Services pages. Approved geographic phrasings:
- Las Colinas
- Irving, TX
- Dallas-Fort Worth (or DFW)
- North Texas
- Dallas
- Fort Worth

Do NOT use folksy framings: "y'all," "deep in the heart of," "Big D."

---

## Brand voice

Confident, professional, partner-to-brands. Speaks to brands and agencies as peers, not as a hopeful supplicant. Project-focused, not personality-focused.

### What we say

- Specific verbs: "Shot for," "Campaign for," "Lookbook for," "Content collaboration with"
- Confident framing: "Past work includes X, Y, Z"
- Project-focused: "I produce campaign-grade imagery for fashion, lifestyle, and accessory brands"
- Brief over comprehensive
- Honest about credentials

### What we don't say

- ❌ "Worked with" (vague)
- ❌ "Passionate about photography"
- ❌ Childhood-camera origin stories
- ❌ "Aspire to inspire" or any motivational rhyme
- ❌ "And more" at the end of a client list
- ❌ Em-dash overuse in body copy — see Em-dash policy below
- ❌ "Book Now!" or any CTA with an exclamation point
- ❌ "Y'all" or folksy DFW framings
- ❌ Self-effacing phrases ("just trying my best," "hoping to," "would love to")
- ❌ "Premium," "luxury," "exclusive" — these signal trying too hard

## Em-dash policy

Em-dashes are reserved for the brand tagline (FASHION — LIFESTYLE — DFW) and equivalent typographic separators in brand chrome. In body copy, CTAs, descriptions, and form labels, use commas, colons, semicolons, or sentence breaks instead. The reason: overused em-dashes read as AI-generated.

---

### Named clients/collaborators (real, defensible)

- Walmart (corporate portrait work)
- FloSports (event coverage — flomarching.com)
- Andi Bagus (content partnership — andibagus.com)
- AvalTheBrand (content collaboration)

### Editorial publications

- "Published across more than a dozen independent fashion magazines" (aggregate framing)
- Do NOT name individual Kavyar magazines
- Do NOT cite Maxim Australia (paid placement)

### Credibility anchors

- Josh Ryan workshop study (mention on About page)

---

## Audience model (informs every page)

Four primary visitor types, in priority order:

### 1. Brand decision-makers (Commercial)
**Problems:** Deadline-driven, logistics-sensitive. Needs aesthetic match. Accountable to a boss or creative director. Vetting multiple photographers.
**Believes:** Portfolio = evidence. Site is a proxy for professionalism. Will need to vet you. Looking for someone they can hand a brief to and trust to deliver.
**Unsure about:** Can you handle the scope. Pricing. Rights. References. Whether you can match a specific campaign aesthetic.
**Came from:** Brand site cross-reference. LinkedIn. Industry recommendation. Google search for "DFW fashion photographer."

### 2. Modeling agencies
**Problems:** Roster needs diverse test work. Tired of photographers who only deliver one look. Need fast turnaround.
**Believes:** A photographer's portfolio reveals their range immediately. Single-vertical work signals limited utility.
**Unsure about:** Whether you can produce different "looks" in a single session. Whether the work is fresh enough for their current roster.
**Came from:** Network recommendation. Industry contact. Other agency photographers.

### 3. Working model (Editorial Test)
**Problems:** Book is heavy on commercial, light on editorial test. Burned by photographers who oversold credentials. Needs fast turnaround.
**Believes:** Can spot real campaign-quality work in 5 seconds. Most "editorial" photographers aren't.
**Unsure about:** Is this real campaign-quality work. Have you shot working models. Delivery timeline.
**Came from:** Network recommendation. Agent. Instagram algorithm.

### 4. Aspiring model (Digitals)
**Problems:** Can't evaluate photographers. Worried about discomfort. Doesn't know what "good" digitals look like.
**Believes:** Hiring a photographer is a gamble. All sites look the same.
**Unsure about:** Will I look good. Will I be comfortable. Process. Price. Timeline.
**Came from:** Instagram bio click. Agency referral. Friend.

**The hero image does positioning work for all four audiences simultaneously. It must read as brand-campaign-quality without committing to a single vertical.**

---

# Plugin & Tool Guidance

Design plugins, polish systems, and AI tools are encouraged to:

* improve refinement,
* propose elevated interactions,
* improve typography,
* improve galleries,
* improve responsive polish,
* improve accessibility,
* and modernize execution quality.

They should NOT:

* impose generic SaaS aesthetics,
* add unnecessary trend effects,
* overcomplicate the interface,
* or overpower the photography.

When using tools:

* preserve strategic direction,
* but allow visual evolution.

---

# Pre-Merge Checklist

Before shipping:

* One H1 per page
* Semantic navigation exists
* Meta title + description exist
* Images have descriptive alt text
* Mobile layout tested
* No obvious SaaS patterns
* No literary-editorial overcorrection
* CTA language matches brand voice
* Core pages remain crawlable without JS
* Photography remains dominant visual element

---


## Image assets

### Local image folder

Placeholder and final images live in:

```
C:\Users\Keith\Documents\Website-Building\portfolio-images
```

This is the canonical source for any image used on the site. When working with images in Claude Code:

- **Reference images by relative path from project root:** `./portfolio-images/[filename]`
- **Copy images into the project's web-facing directory** (e.g., `/public/images/` or similar) before deployment — don't reference the absolute Windows path in production code
- **Naming convention for portfolio images:** see SEO section above. Pattern: `[year]-[shoot-or-brand-name]-[descriptor].jpg`
- **Image specifications:**
  - Hero images: minimum 2000px on the long edge, ideally 2500–3000px
  - Portfolio thumbnails: 1200–1500px on the long edge
  - Color profile: sRGB
  - Format: JPG for photographs, PNG only when transparency is needed
  - Quality: 80% JPG quality is sufficient for web
  - Responsive `<picture>` markup with WebP variants on portfolio pages (before launch)

### How to use placeholder images

When the eventual image isn't yet chosen, use a placeholder from the `portfolio-images` folder that approximates the intended aesthetic:

- **Homepage hero:** Use the strongest brand-campaign-coded image currently in the folder. Replace `EmptyName_3.jpg` urgently.
- **Portfolio thumbnails:** Use whatever's available; final selection happens during the cull
- **Project galleries:** Empty for now; populate when project image sets are ready

### When referencing images in prompts

Always reference by descriptive path:
- Good: "Use `./portfolio-images/2025-jr-workshop-keith-chernek-editorial-01.jpg` as the hero image"
- Bad: "Use a good editorial image"

### Eventually replace placeholders

Every image on the site should be intentional before launch. The masthead, hero, every portfolio thumbnail. Audit before pointing DNS at the production deployment.

---

## Conversion pattern

Every page on the site ends with a clear next-step CTA — but CTAs are calibrated to the audience for that page, not blanket-applied.

### Suggestions

- **Content pages end with a CTA section.** Most pages have one.
- **Some exceptions are acceptable.** If a page (e.g., About) reads better without a hard CTA at the bottom because the work itself is the CTA, that's allowed. The earlier "no exceptions" rule was overcorrected from SaaS conversion thinking.
- **CTAs use the navy primary button style** (navy background, white text, uppercase, letter-spaced, sharp or near-sharp corners).
- **CTA language is confident-restrained, not high-arousal.** Use "Plan a Shoot," "Book a Shoot," "Get in Touch," "Connect," "Inquire" — never "Book Now!" or anything with exclamation points.
- **Two-button pattern** allowed when there are genuinely two valid next steps. Otherwise single button.
- **CTAs can repeat mid-page** on long pages. After Services overview block. After Process block. After Past Clients block.

### Page-by-page CTA mapping

| Page | Primary CTA | Secondary CTA (optional) |
|---|---|---|
| Homepage | View Portfolio | Book a Shoot |
| Portfolio | Book a Shoot | Connect |
| Portfolio sub-pages (Editorial, Swimwear) | Book a Shoot | View More Work |
| Services | Book a Shoot | Connect |
| Model Development | Request Booking (per card) | Connect |
| Commercial & Brand | Get in Touch | — |
| About | Connect | Book a Shoot |
| Connect | Form is the CTA | — |

### CTA language library

Approved phrasings:
- "Book a Shoot"
- "Plan a Shoot"
- "Request Booking"
- "Get in Touch"
- "Connect"
- "View Portfolio"
- "View More Work"
- "Inquire"
- "Start a Project"

Not approved:
- "Book Now!" (too transactional)
- "Get Started" (generic SaaS language)
- "Click Here" (lazy)
- "Sign Up" (we're not selling subscriptions)
- "Let's Chat!" (too informal for brand-confident voice)
- Any CTA ending with an exclamation point

---

## FAQ pattern

Certain pages benefit from an FAQ section that removes friction by answering unspoken questions. Especially important for audiences making vulnerable decisions (aspiring models, first-time clients).

### Where FAQs live

- **Model Development page:** YES — required. Aspiring model audience has the most questions.
- **Commercial & Brand page:** NO — brand visitors don't browse FAQs; they email and ask.
- **Services page:** NO — this is a positioning page, not a transactional one.
- **About page:** NO — FAQ would feel out of place.

### FAQ design rules

- 5-8 questions maximum
- Each Q is bold, A is regular weight
- Use the H3 + paragraph pattern, not custom accordion UI
- Tone: matter-of-fact, reassuring without being saccharine, brand-confident
- Length per answer: 1-3 sentences

### Required FAQ questions for Model Development page

The following questions must be answered (exact wording can vary):

1. What should I wear / bring to the shoot?
2. Do I need modeling experience?
3. Can I bring someone with me to the shoot?
4. How long until I receive my photos?
5. What if I don't like the final photos?
6. Is hair and makeup included?
7. Where will the shoot take place?
8. What if I need to reschedule?

These map directly to the aspiring-model audience's "unsure about" list from the audience model section above.

---

# Guiding Principle

If rules conflict, prioritize in this order:

1. Clear commercial positioning
2. Crawlability and usability
3. Anti-pigeonhole flexibility
4. Photography presentation
5. Visual restraint
6. Decorative polish

The site should ultimately feel like:

> a contemporary fashion/lifestyle photographer capable of handling real commercial work — not a template, not a magazine, and not a startup landing page.

