# Keith Chernek — Design System

**Site:** kchernek.com
**Last updated:** May 2026
**Purpose:** Single source of truth for all design decisions. Reference this document for any visual or structural work on the site.

---

## Brand identity

- **Brand mark:** "Keith Chernek" (never "Keith Chernek Photography")
- **Handle:** kchernek (matches all social handles for brand consistency)
- **Logo composition:** Script "KC" monogram above sans-serif "KEITH CHERNEK" wordmark, with tagline below
- **Tagline:** `EDITORIAL — PORTRAIT — DFW` (em-dashes as separators, all-caps)
- **Positioning:** Editorial + portrait + fashion photography. Editorial means Joey Wright / Josh Ryan tier (not Vogue tier).
- **Geographic anchor:** Dallas–Fort Worth / DFW
- **Swimwear:** Treated as a portfolio category, never as a brand identifier

---

## Color palette

Warm neutral system. No bright accent colors — the work provides the color.

```css
:root {
  --background:        #F3F1ED;  /* Warm off-white — page background */
  --surface:           #FFFFFF;  /* Pure white — card surfaces */
  --text-primary:      #2A2622;  /* Deep warm brown-black — body text, headlines */
  --text-secondary:    #6B6359;  /* Warm medium brown — buttons, card headers, prices */
  --text-muted:        #9A9088;  /* Warm tan-gray — taglines, captions, metadata */
  --border:            rgba(42, 38, 34, 0.14);  /* Subtle warm brown border */
  --accent-rare:       #4A5868;  /* Deep slate blue — link hovers, sparingly */
}
```

**Rules:**
- Never use pure black (#000) for text. Use `--text-primary` (#2A2622).
- Never use pure white (#FFFFFF) for the page background. Use `--background` (#F3F1ED).
- Pure white only appears on card surfaces and form fields where contrast against the background is needed.
- The accent slate blue is used rarely — for link hover states or moments of cool contrast. Never as a fill color on buttons or large surfaces.
- **Do not use olive green** (#525C46 or similar). Earlier iterations used olive; we moved away from it.

---

## Typography

Single font family: **Noto Sans**. Available weights: 300 (Light), 400 (Regular), 700 (Bold).

```css
:root {
  --font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Type scale & treatments

**Logo wordmark (KEITH CHERNEK)**
- Font: Noto Sans
- Weight: 300 (Light)
- Letter spacing: 0.28em
- Text transform: uppercase
- Size: ~2.2rem on desktop, smaller on mobile

**Tagline (EDITORIAL — PORTRAIT — DFW)**
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
- This pattern is magazine-coded and deliberate

---

## Layout principles

- **Background:** Warm off-white (`--background`), never pure white
- **Whitespace:** Generous around masthead and between sections
- **Borders:** Sharp corners (border-radius: 0) on buttons, cards, and UI elements
- **Header:** Centered logo + centered nav with thin top/bottom borders
- **Hero:** Full-bleed images on homepage and key landing pages
- **Max content width:** ~1035px for body content (matches original VS Code build)
- **Section padding:** 36px+ vertical, 4vw horizontal

### Mobile (≤640px)
- Pricing grids collapse to single column
- Nav reduces to hamburger or stacked items
- Reduce padding proportionally

---

## Motion & interaction

- **Header behavior:** Sticky, shrinks on scroll
- **Section entry animations:** Fade or slide-and-fade as user scrolls (subtle, not bouncy)
- **Hero parallax:** Allowed sparingly on hero sections only
- **Hover states:** Subtle color shift or weight change. No fancy effects that obscure content.
- **No autoplay** (except video heroes when intentional)
- **No bouncy animations** — keep motion intentional and editorial

---

## Site architecture

### Main navigation (top of every page)
```
PORTFOLIO | SERVICES | BOOK A SHOOT ▾ | CONNECT ▾
```

- No "Home" item — the logo serves as the home link
- Logo lives above the nav (magazine masthead style)

### Dropdowns

**Book a Shoot ▾**
- Model Development
- Commercial & Brand

**Connect ▾**
- Get in Touch (contact form)
- DFW Photowalks (external link, opens in new window: https://meetup.com/dfwphotowalks)

### Hidden / not in main nav
- About (exists, accessible at /about, not in main nav for now)
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
- **Hero image criteria:** Editorial-coded, high-resolution (2000px+ wide), subject clearly visible, intentional styling

### Portfolio (/portfolio)
- **Layout:** Project-based grid (2–3 columns desktop)
- **Each thumbnail:** A project (model name + brand, or shoot title)
- **Clicking a thumbnail:** Opens individual project gallery
- **Categories:** Editorial, Swimwear (initially). Add Digitals, Brand & Product when populated.
- **Captions:** Minimal. Model name + brand only. No SEO-bait alt text.

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

### About (/about) — hidden from main nav
- Brief, editorial bio
- Eventually: self-portrait
- References Josh Ryan workshop as credibility anchor
- See content doc for current draft

---

## UI patterns

### Pricing cards (Model Development page)
- Background: `--surface` (#FFFFFF)
- Card header: `--text-secondary` (#6B6359) background, white text, uppercase, letter-spaced
- Card body: Centered text, deliverables list, photo count, price, description, button
- Shadow: Subtle, warm-toned (no harsh black shadow)
- Border-radius: 0 (sharp corners)

### Buttons
- Background: `--text-secondary` (#6B6359)
- Hover background: `--text-primary` (#2A2622)
- Text color: White
- Border-radius: 0
- Padding: 14px 20px
- Full-width within container

### Footer
- Background: `--background` (#F3F1ED) — same as page
- Tagline: "DFW editorial and portrait photography" (small, muted text)
- Contact: keith@kchernek.com
- Location: Irving, TX 75039
- Social icons: Instagram + Threads (small, muted color)
- Copyright line

---

## Imagery direction

- **Style:** Editorial fashion / portrait. Joey Wright + Josh Ryan tier.
- **Hero criteria:** Sharp (2000px+ wide), intentional, subject-clear
- **Color harmony:** Warm tones favored, but cool-toned editorial work also fits
- **Project organization:** Each portfolio piece is a project, not a floating image
- **Captions:** Model name + brand. Nothing else.

---

## Brand voice

### What we say
- Specific verbs: "Shot for," "Editorial coverage for," "Content collaboration with"
- Confident framing: "Past work includes X, Y, Z"
- Brief over comprehensive
- Honest about credentials

### What we don't say
- ❌ "Worked with" (vague)
- ❌ "Passionate about photography"
- ❌ Childhood-camera origin stories
- ❌ "Aspire to inspire" or any motivational rhyme
- ❌ "And more" at the end of a client list
- ❌ Overusing em-dashes (they read as AI-generated when overused)

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

Three primary visitor types:

### 1. Aspiring model (Digitals)
**Problems:** Can't evaluate photographers. Worried about discomfort. Doesn't know what "good" digitals look like.
**Believes:** Hiring a photographer is a gamble. All sites look the same.
**Unsure about:** Will I look good. Will I be comfortable. Process. Price. Timeline.
**Came from:** IG bio click. Agency referral. Friend.

### 2. Working model (Editorial Test)
**Problems:** Book is heavy on commercial, light on editorial. Burned by photographers who oversold editorial credentials. Needs fast turnaround.
**Believes:** Can spot real editorial in 5 seconds. Most "editorial" photographers aren't.
**Unsure about:** Is this real editorial. Have you shot working models. Delivery timeline.
**Came from:** Network recommendation. Agent. IG algorithm.

### 3. Brand / agency (Commercial)
**Problems:** Deadline-driven, logistics-sensitive. Needs aesthetic match. Accountable to a boss.
**Believes:** Portfolio = evidence. Site is a proxy for professionalism. Will need to vet you.
**Unsure about:** Can you handle the scope. Pricing. Rights. References.
**Came from:** Brand site cross-reference. LinkedIn. Industry recommendation.

**The hero image does positioning work for all three audiences simultaneously.**

---

## Plugin & tool integration

When working with polish-oriented plugins, design tools, or other Claude Code extensions (frontend-design, shadcn-style component generators, animation libraries, etc.):

### Rules of engagement

- **This document is authoritative for ALL design tokens.** Colors, fonts, spacing, border-radius, motion, layout patterns — all derive from this doc. If a tool's defaults conflict with this doc, the doc wins.
- **Override the plugin's defaults explicitly in the prompt.** Don't assume a tool will read this document on its own. Tell it: "Use only the tokens defined in DESIGN_SYSTEM.md. Replace any default colors, fonts, or design choices with the values from this document."
- **Tools propose, this document approves.** Plugins are useful for generating options, not making final decisions. Always ask for 2-3 proposals when invoking a polish tool, then pick the one that fits the system.

### Where plugins ARE useful

- Micro-interactions: hover states, focus rings, subtle transitions
- Complex UI components: image galleries, lightboxes, carousels, image-grid systems
- Form input refinement
- Loading states
- Accessibility improvements (ARIA, keyboard nav, focus management)
- Animation timing refinement (within the constraints of the motion rules above)

### Where plugins are NOT useful

- Foundational layout (they'll impose their own grid system)
- Typography choices (they'll switch to Inter or system defaults)
- Color palette (they'll add accent colors that don't belong)
- Navigation patterns (they'll restyle to tech-SaaS conventions)
- Page architecture (already defined here)

### Reject these trendy patterns

Polish-oriented tools are often trained on currently-fashionable design trends that **do not match an editorial photography aesthetic**. Reject these unless explicitly requested:

- ❌ Soft gradients (especially purple-to-blue or pastel)
- ❌ Glassmorphism / frosted backgrounds
- ❌ Bouncy or spring-based micro-animations
- ❌ Rounded corners on buttons or cards (we use border-radius: 0)
- ❌ Neon-on-dark accents
- ❌ Generic SaaS landing page patterns (hero with floating phone mockup, three-feature-card grids, gradient hero text)
- ❌ Bright accent colors (blue CTAs, green success states with the wrong green)
- ❌ Modern serif logo treatments (Playfair Display, Cormorant — wedding-photographer-coded)

### The aesthetic test

Before accepting any plugin output, ask: **does this look like it could appear in a fashion magazine, or does it look like it could appear on a Stripe-clone landing page?**

The site's reference points are Joey Wright, Daniella Midenge, and Josh Ryan — not Linear, Vercel, or modern D2C consumer brands. If the polished output reads as the latter, reject it.

---

## Image assets

### Local image folder

Placeholder and final images live in:

```
C:\Users\Keith\Documents\Website-Building\portfolio-images
```

This is the canonical source for any image used on the site. When working with images in Claude Code:

- **Reference images by relative path from project root:** `./portfolio-images/[filename]`
- **Copy images into the project's web-facing directory** (e.g., `/public/images/` or similar, depending on final structure) before deployment — don't reference the absolute Windows path in production code
- **Naming convention for portfolio images:** `[shoot-name]-[number].jpg` or `[model-name]-[brand]-[number].jpg` for project-based work (e.g., `andi-bagus-01.jpg`)
- **Image specifications:**
  - Hero images: minimum 2000px on the long edge, ideally 2500–3000px
  - Portfolio thumbnails: 1200–1500px on the long edge (Squarespace/web will downsample further)
  - Color profile: sRGB
  - Format: JPG for photographs, PNG only when transparency is needed
  - Quality: 80% JPG quality is sufficient for web (Squarespace would re-compress anyway)

### How to use placeholder images

When the eventual image isn't yet chosen, use a placeholder from the `portfolio-images` folder that approximates the intended aesthetic for that page:

- **Homepage hero:** Use the strongest editorial-coded image currently in the folder. If nothing fits, leave as a blank section with a comment noting it needs a hero.
- **Portfolio thumbnails:** Use whatever's available; final selection happens during the cull
- **Project galleries:** Empty for now; populate when project image sets are ready

### When referencing images in prompts

When asking Claude Code to add or swap images, be specific:

- Good: "Use `./portfolio-images/josh-ryan-workshop-01.jpg` as the hero image"
- Bad: "Use a good editorial image"

If the prompt is vague, Claude Code may use a stock image URL or a placeholder service like placeholder.com. Always reference local files.

### Eventually replace placeholders

Track which images on the site are still placeholders. Before any meaningful site launch (or sharing with real prospects), every image should be intentional — not a stand-in. The masthead, the hero, and every portfolio thumbnail should be deliberate.

---

## Conversion pattern

Every page on the site ends with a clear next-step CTA. Visitors arrive at different scroll depths ready to convert. Single CTA buried at the top loses them; repeated CTAs after each section catches them where they are.

### Rules

- **Every content page ends with a CTA section.** No exceptions. Even the About page.
- **CTAs use the global button style** (warm brown background, white text, uppercase, letter-spaced, sharp corners).
- **CTA language is editorial-restrained, not high-arousal.** Use "Plan a Shoot," "Book a Shoot," "Get in Touch," "Connect" — never "Book Now!" "Get Ready to Turn Heads!" or anything with exclamation points.
- **Two-button pattern** allowed when there are genuinely two valid next steps (e.g., Services page → "Book a Shoot" OR "Connect"). Otherwise single button.
- **CTAs can repeat mid-page** on long pages. After Services overview block. After Process block. After Past Clients block. Don't be precious about repetition — visitors at scroll depth 60% need a CTA too.

### Page-by-page CTA mapping

| Page | Primary CTA | Secondary CTA (optional) |
|---|---|---|
| Homepage | View Portfolio | Book a Shoot |
| Portfolio | Book a Shoot | Connect |
| Portfolio sub-pages (Editorial, Swimwear) | Book a Shoot | View More Work |
| Services | Book a Shoot | Connect |
| Model Development | Request Booking (per card) | Connect |
| Commercial & Brand | Get in Touch | — |
| About (when visible) | Connect | Book a Shoot |
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

Not approved:
- "Book Now!" (too transactional)
- "Get Started" (generic SaaS language)
- "Click Here" (lazy)
- "Sign Up" (we're not selling subscriptions)
- Any CTA ending with an exclamation point

---

## FAQ pattern

Certain pages benefit from an FAQ section that removes friction by answering unspoken questions. This is especially important for audiences making vulnerable decisions (aspiring models, first-time clients).

### Where FAQs live

- **Model Development page:** YES — required. Aspiring model audience has the most questions.
- **Commercial & Brand page:** NO — brand visitors don't browse FAQs; they email and ask.
- **Services page:** NO — this is a positioning page, not a transactional one.
- **About page:** NO — FAQ would feel out of place.

### FAQ design rules

- 5-8 questions maximum (more than that signals the page itself isn't answering enough up front)
- Each Q is bold, A is regular weight
- Use the H3 + paragraph pattern from the design system, not custom accordion UI (keep it simple)
- Tone: matter-of-fact, reassuring without being saccharine, editorial-coded
- Length per answer: 1-3 sentences. Anything longer means it should be in main page copy, not an FAQ.

### Required FAQ questions for Model Development page

The following questions must be answered (exact wording can vary, but every one of these underlying questions must be addressed):

1. What should I wear / bring to the shoot?
2. Do I need modeling experience?
3. Can I bring someone with me to the shoot?
4. How long until I receive my photos?
5. What if I don't like the final photos?
6. Is hair and makeup included?
7. Where will the shoot take place?
8. What if I need to reschedule?

These map directly to the aspiring-model audience's "unsure about" list from the audience model section above.
