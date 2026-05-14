# Keith Chernek — Design System

**Site:** kchernek.com
**Last updated:** May 2026
**Purpose:** Single source of truth for all design decisions. Reference this document for any visual or structural work on the site.

---

## Brand identity

- **Brand mark:** "Keith Chernek" (never "Keith Chernek Photography")
- **Handle:** kchernek (matches all social handles for brand consistency)
- **Logo composition:** Script "KC" monogram above sans-serif "KEITH CHERNEK" wordmark, with tagline below
- **Tagline:** `FASHION — LIFESTYLE — DFW` (em-dashes as separators, all-caps)
- **Positioning:** Commercial Fashion & Lifestyle Photographer. Aspirational target: Josh Ryan × Guess kind of campaign work. Already producing pieces of this work for brands like Andi Bagus when opportunities arise.
- **Geographic anchor:** Las Colinas / Irving / Dallas–Fort Worth
- **Swimwear:** Treated as a portfolio category, never as a brand identifier

---

## Top-level guardrail: the anti-pigeonhole rule

The site must not signal a single specialty visually. The chrome (palette, typography, layout, voice, motion) supports range across fashion verticals — apparel, swimwear, lingerie, beauty, accessories, lifestyle, beverage, lifestyle goods. A lingerie brand, a boot brand, a beauty brand, a swimwear brand, and a beverage brand should all see a photographer who could work with them.

Specialty is communicated through portfolio content. The chrome of the site itself stays brand-accessible.

When making any design decision, ask: **does this signal "I do X" too strongly?** If yes, soften it. This rule overrides all other rules.

---

## Aesthetic test

Before accepting any design choice, ask: **does this look like it belongs on a contemporary fashion brand's campaign landing page, or does it look like it belongs in a literary fashion magazine?**

The site's reference points are Josh Ryan, Joey Wright, and Danny Batista — working commercial fashion and lifestyle photographers — and the campaign landing pages of brands they shoot for (Guess, Andi Bagus, Reformation, Buck Mason, Tecovas). The site is NOT trying to read like Document Journal, AnOther Magazine, or i-D. Those are publications. This is a working photographer's portfolio targeting brand and agency work.

If the output reads as austere-magazine, intellectual-publication, or art-school-restrained, it's overcorrected toward editorial publication aesthetic. Pull it back toward brand-campaign warmth.

If the output reads as SaaS-landing-page, tech-product, or YC-startup, it's drifted toward AI slop. Pull it back toward fashion-brand campaign.

---

## Reference hierarchy

| Reference | What we take from them |
|---|---|
| Joey Wright | Functional structure: navigation, organization, booking flow, page model |
| Danny Batista | SEO discipline: file naming, page naming, alt text, location keywords |
| Josh Ryan | Aspirational aesthetic: campaign-photographer feel, light, mood |
| Andi Bagus / Reformation / Buck Mason / Tecovas | Adjacent brand-campaign aesthetics to study for chrome treatments |

Joey Wright's site is the **functional** reference, not the visual one. Keep his navigation and organization. Do not copy his palette, type, or specific layout details. The goal is to develop a visual identity distinct enough that someone visiting both sites wouldn't say "these look the same."

---

## Color palette

Warm neutrals + navy secondary. No bright accent colors — the photography supplies any further color.

```css
:root {
  --background:        #F3F1ED;  /* Warm off-white — page background */
  --surface:           #FFFFFF;  /* Pure white — card surfaces */
  --text-primary:      #2A2622;  /* Deep warm brown-black — body text, headlines */
  --text-secondary:    #6B6359;  /* Warm medium brown — buttons, card headers, prices */
  --text-muted:        #9A9088;  /* Warm tan-gray — taglines, captions, metadata */
  --border:            rgba(42, 38, 34, 0.14);  /* Subtle warm brown border */
  --secondary-navy:    #1E2A38;  /* Deep warm navy — link hovers, button accents, dividers */
  --secondary-navy-hover: #2A3A4C;  /* Slightly lighter navy for hover states */
}
```

### Color rules

- Never use pure black (`#000`) for text. Use `--text-primary` (`#2A2622`).
- Never use pure white (`#FFFFFF`) for the page background. Use `--background` (`#F3F1ED`).
- Pure white only appears on card surfaces and form fields where contrast against the background is needed.
- The current site leans too brown overall. The navy secondary is meant to break that up.

### Where navy applies

Navy is a confident accent, never a fill. Apply navy to:

- Primary button fill on Inquire / Book / Contact / Send CTAs (replacing the all-brown button)
- Link hover states (replacing whatever the current treatment is)
- Active nav item indicator (small underline or dot)
- Section dividers on long pages (thin 1px line, used sparingly)
- Form input focus ring

### Where navy does NOT apply

- Body text or heading text
- Large background areas
- Card backgrounds
- Image borders or frames
- Hero element on the home page
- Anywhere on the masthead

### Rejected color choices

- **Pure black (#000):** never for text. Use `--text-primary`.
- **Pure white (#FFFFFF):** never for backgrounds. Use `--background`.
- **Olive green** (#525C46 or similar): earlier iterations used olive; we moved away from it.
- **Tech blues** (cobalt, cyan, primary blue): the navy is intentionally warm/deep. Bright blues read SaaS.
- **Accent reds, oranges, mustards:** the photography provides warm color. Don't double up.

---

## Typography

Single font family: **Noto Sans** (testing alternatives is on the table — see polish playbook Phase 4). Available weights: 300 (Light), 400 (Regular), 700 (Bold).

```css
:root {
  --font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

If a paired display face is introduced for headings (under evaluation), it should be brand-campaign-coded — clean, confident, modern. NOT editorial-publication-coded (austere serifs) and NOT wedding-photographer-coded (Playfair, Cormorant, script). Candidates under evaluation: Söhne, GT America, Untitled Sans, Public Sans, Fraunces.

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

- **Background:** Warm off-white (`--background`), never pure white
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

---

## Motion & interaction

Motion vocabulary: **confident-commercial**. Restrained but not austere. Should feel like a polished brand campaign landing page (Reformation, Buck Mason), not a SaaS micro-interaction and not an editorial publication.

- **Header behavior:** Sticky, shrinks on scroll
- **Section entry animations:** Subtle fade or fade-and-rise on scroll. No "fly in from below" SaaS pattern. No bouncy springs.
- **Hero parallax:** Allowed sparingly on hero sections only
- **Hover states:** Subtle color shift (warm-neutral → navy), 150-200ms ease-out. No scale-up bouncy effects.
- **Image lazy-load:** Fade-in only, 200-300ms.
- **Lightbox:** Crossfade, no swipe-flip or 3D rotation.
- **No autoplay** except video heroes when intentional
- **No 3D background graphics** (Three.js, Spline) — wrong product type
- **No GSAP scroll-driven fly-in animations** — SaaS-coded
- **No bouncy animations** — keep motion intentional

If in doubt about a motion choice, ask: would this animation look at home on a Reformation campaign landing page? If yes, ship it. If it's something you'd see on Stripe or Vercel, cut it.

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
- ❌ Overusing em-dashes (they read as AI-generated when overused)
- ❌ "Book Now!" or any CTA with an exclamation point
- ❌ "Y'all" or folksy DFW framings
- ❌ Self-effacing phrases ("just trying my best," "hoping to," "would love to")
- ❌ "Premium," "luxury," "exclusive" — these signal trying too hard

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

## Plugin & tool integration

When working with polish-oriented plugins, design tools, or other Claude Code extensions (Taste Skill, Impeccable, Emil Kowalski skill, frontend-design, shadcn-style component generators, animation libraries):

### Rules of engagement

- **This document is authoritative for ALL design tokens.** Colors, fonts, spacing, border-radius, motion, layout patterns — all derive from this doc and `.impeccable.md`. If a tool's defaults conflict with this doc, the doc wins.
- **Override the plugin's defaults explicitly in the prompt.** Don't assume a tool will read this document on its own. Tell it: "Use only the tokens defined in DESIGN_SYSTEM.md. Replace any default colors, fonts, or design choices with the values from this document."
- **Tools propose, this document approves.** Plugins are useful for generating options, not making final decisions. Always ask for 2-3 proposals when invoking a polish tool, then pick the one that fits the system.

### Where plugins ARE useful

- Micro-interactions: hover states, focus rings, subtle transitions
- Complex UI components: image galleries, lightboxes, carousels, image-grid systems
- Form input refinement
- Loading states
- Accessibility improvements (ARIA, keyboard nav, focus management)
- Animation timing refinement (within the constraints of the motion rules above)
- SEO audits (alt text, meta tags, schema markup, file naming)

### Where plugins are NOT useful

- Foundational layout (they'll impose their own grid system)
- Typography choices (they'll switch to Inter or system defaults)
- Color palette (they'll add accent colors that don't belong)
- Navigation patterns (they'll restyle to tech-SaaS conventions)
- Page architecture (already defined here)
- Brand voice (they'll drift toward generic marketing copy)

### Reject these trendy patterns

Polish-oriented tools are often trained on currently-fashionable design trends. Reject these unless explicitly requested:

- ❌ Soft gradients (especially purple-to-blue or pastel)
- ❌ Glassmorphism / frosted backgrounds
- ❌ Bouncy or spring-based micro-animations
- ❌ Neon-on-dark accents
- ❌ Generic SaaS landing page patterns (hero with floating phone mockup, three-feature-card grids, gradient hero text)
- ❌ Bright accent colors (tech-blue CTAs, green success states with the wrong green)
- ❌ Wedding-photographer-coded type (Playfair Display, Cormorant — wrong vertical entirely)
- ❌ Three.js or Spline 3D background graphics
- ❌ GSAP scroll-driven fly-in animations
- ❌ shadcn/ui rounded-card aesthetic
- ❌ "As featured in" logo walls with grayscale brand marks
- ❌ Big stat numbers with glowing accents

### Reject these editorial-publication patterns

Some polish tools may overcorrect from "AI slop" into "literary fashion magazine" — that's also wrong for this site. Reject:

- ❌ Austere maximalist whitespace that erases brand-confidence
- ❌ Intellectual-publication serif body type (Tiempos Text used for paragraphs, etc.)
- ❌ Tiny-caption-as-art-statement treatments
- ❌ Magazine-page-mimicry layouts (folio numbers, drop caps, masthead numerals)
- ❌ Tone that reads as art school over commercial

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

### Rules

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

## Signature design moves

This section documents the deliberate, repeated design choices that make the site visually distinctive — not just consistent. Populate as moves are decided and implemented.

- **Navy as confident accent:** the warm-neutral palette is broken up by a single deep warm navy used as the primary button fill, link hover state, and section divider. Navy never appears as body text, large background, or hero treatment.
- **[Distinctive move from Phase 3 of polish playbook — to be added when implemented]**
- **[Typography pair, if introduced from Phase 4 — to be added when implemented]**

Every signature move must pass the anti-pigeonhole test before being added to this list.
