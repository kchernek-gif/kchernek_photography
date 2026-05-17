---
name: Keith Chernek Photography
description: Commercial fashion and lifestyle photographer — DFW campaign-grade portfolio
colors:
  pre-dawn-linen: "#F3F1ED"
  surface-white: "#FFFFFF"
  dried-ink: "#2A2622"
  film-grain: "#6B6359"
  chalk-dust: "#706A63"
  campaign-denim: "#1E2A38"
  campaign-denim-hover: "#2A3A4C"
typography:
  display:
    fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "0"
  headline:
    fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "0"
  title:
    fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.13em"
  body:
    fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  none: "0"
  subtle: "2px"
spacing:
  xs: "14px"
  sm: "28px"
  md: "48px"
  lg: "60px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.campaign-denim}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.campaign-denim-hover}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  hero-cta:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: "14px 0"
---

# Design System: Keith Chernek Photography

## 1. Overview

**Creative North Star: "The Reference Board"**

Brands and agencies read this site the way a creative director reads a mood board. The aesthetic signals capability before a word is read. Every visual decision is a casting choice: does this look like it belongs beside a Guess campaign brief, an Andi Bagus lookbook, or a Reformation product page? If the answer is no, it doesn't belong. At the same time, the direction should not feel like a pinterest page or a collage as a moodboard; the website should communicate a mature confidence and ability to be well organized and plan a brand campaign.

The system is warm-neutral in tone and deliberately restrained in decoration. Color comes almost entirely from the photography. The typography is confident and light — large headings in weight 300 assert presence without shouting. The chrome (palette, type, spacing, motion) is intentionally vertical-agnostic: a swimwear brand, a boot brand, a beauty brand, and a beverage brand should all see a photographer capable of shooting their campaign.

This system explicitly rejects: SaaS landing-page patterns, literary fashion publication austerity, wedding photographer type treatments, generic AI tool defaults, and any pattern that signals a single fashion vertical more strongly than the portfolio content does.

**Key Characteristics:**
- Photography-first: decoration exists to frame work, not to compete with it
- Warm neutrals throughout; Campaign Denim is the only accent and it earns every appearance
- Sharp edges and flat surfaces — no radius on cards, images, or containers
- Large light headings paired with small bold uppercase labels
- Motion defaults to calm opacity and small GPU-composited transform polish; flying, bouncing, scroll-jacking, and decorative parallax require explicit user approval
- Forms and booking flows feel like a creative brief, not a software subscription

## 2. Colors: The Warm Studio Palette

The palette reads as the inside of a photography studio at golden hour: warm off-white surfaces, deep warm ink, and one confident navy that anchors calls to action.

### Primary
- **Campaign Denim** (`#1E2A38`): The single accent color. Deep warm navy — the color of dark indigo denim or a director's suit. Used exclusively for: primary button fill, link hover states, focus rings, active nav states. Appears on less than 10% of any surface. Its rarity is the point.
- **Campaign Denim Hover** (`#2A3A4C`): The hover/active state of Campaign Denim. Lighter, not brighter. Applied automatically on all button and link hovers. Never used as a standalone fill.

### Neutral
- **Pre-Dawn Linen** (`#F3F1ED`): The page background. Warm off-white with a brown-tan cast — not gray, not cream, not paper-white. The warmth reads as intentional, not accidental. Also: the footer background and the mobile nav dropdown background.
- **Surface White** (`#FFFFFF`): For card surfaces only. Currently used on form inputs and the contact form background. Not used as a page or section background.
- **Dried Ink** (`#2A2622`): Primary text — all headlines, body text, labels. Deep warm brown-black; never pure black.
- **Film Grain** (`#6B6359`): Secondary text — used for supporting copy, metadata, and captions where warmth and subordination are both needed.
- **Chalk Dust** (`#706A63`): Muted text — captions, footer taglines, location metadata, form placeholder text. The quietest voice in the system.

### Derived values (not standalone tokens)
- **Warm Border** (`rgba(42, 38, 34, 0.14)`): Derived from Dried Ink at 14% opacity. Used for all dividers, card borders, input borders, and nav rule lines.
- **Tint Warm** (`rgba(42, 38, 34, 0.04)`): Dried Ink at 4% opacity. Hover background on dropdown menu items. Nearly invisible — a whisper, not a fill.
- **Shadow Warm** (`rgba(42, 38, 34, 0.08)`): Dried Ink at 8% opacity. The only shadow in the system. Used for the scroll-triggered header drop shadow.

### Named Rules
**The One Voice Rule.** Campaign Denim appears on less than 10% of any surface. It is reserved for: button fill, link hover, focus rings, active nav state. It does not appear as a section background, a hero treatment, or a decorative accent. The photography supplies all other color.

**The No Pure Tone Rule.** No pure black (#000) for text — use Dried Ink. No pure white (#FFF) for backgrounds — use Pre-Dawn Linen or Surface White.

## 3. Typography

**Body and UI Font:** Noto Sans (weights 300, 400, 700 via Google Fonts)
**Display Font:** Noto Sans — single-family system. After eliminating the full reflex-reject list, no remaining Google Fonts serif candidate improved the system without introducing editorial-publication coding. The single-family approach is the right call; commitment is through scale (clamp to 3rem) and tracking (0.02em on H1), not a second typeface. A second family is permitted as future exploration with explicit user approval; see DESIGN_SYSTEM.md > Typography.

**Character:** A single sans family across all registers, differentiated entirely by weight and scale. The pattern is binary: either large + light + sentence-case (H1, package names, prices) or small + bold + uppercase + letter-spaced (labels, nav, buttons, section headers). There is no middle ground. This creates confident hierarchy without introducing a second face.

### Hierarchy

- **Display** (weight 300, clamp(1.8rem, 3.5vw, 3rem), line-height 1.2, letter-spacing 0.02em, sentence case): Page titles (H1) only. "Model Development." "Portfolio." "Book an Editorial Test." Light weight at large scale reads as campaign art direction, not editorial austerity. Tracking added for optical presence at display sizes.
- **Headline** (weight 300, 1.5rem, line-height 1.2, sentence case): Package and session names within booking flows. "Digitals." "Editorial Test." Subordinate to Display but uses the same light-sentence-case logic.
- **Service Name** (weight 400, 1.35rem, sentence case): Service category names on the Services page. Not bold, not uppercase — a confident statement, not a label.
- **Title** (weight 700, 0.9rem, uppercase, letter-spacing 0.13em): Section headings (H2). "Questions." "Important Info." The small-bold-uppercase pole of the hierarchy.
- **Body** (weight 400, 1rem, line-height 1.75–1.8): All prose, descriptions, FAQ answers. Max line length 65–75ch.
- **Label** (weight 700, 0.68–0.72rem, uppercase, letter-spacing 0.14–0.18em): Navigation links, button text, form labels, category captions. The most compact and utilitarian voice.
- **Caption** (weight 400, 0.65–0.8rem): Footer taglines, gallery date metadata, muted supporting text. Color: Chalk Dust.
- **Price** (weight 300, 1.85rem, letter-spacing -0.01em): Package pricing. Uses the light scale to feel confident rather than transactional. Color: Film Grain.

### Named Rules
**The Two-Register Rule.** Every typographic element is either large + light + sentence-case, or small + bold + uppercase. Nothing in between. A 1rem weight-600 subheading is a violation of this rule. The contrast between the registers is what creates hierarchy.

**The No Serif Rule.** Playfair Display, Cormorant Garamond, and all script faces should not be introduced without explicit user approval — they signal wedding photographer or editorial publication, both wrong registers for a working commercial fashion photographer.

## 4. Elevation

This system is flat by default. Depth is conveyed through typographic hierarchy, border-top rules, and spatial separation — not through shadows or layering.

Shadows appear in exactly two contexts:
1. The sticky site header acquires a drop shadow (`0 4px 16px rgba(42, 38, 34, 0.08)`) when the user has scrolled past the top. This is a functional state indicator, not decoration.
2. Form inputs sit on Surface White against the Pre-Dawn Linen page background — the contrast is elevation enough.

### Shadow Vocabulary
- **Header Scroll Shadow** (`0 4px 16px rgba(42, 38, 34, 0.08)`): Applied via a `::after` pseudo-element on the sticky header, opacity-transitioned from 0 to 1 when `.shrunk` class is added by IntersectionObserver. GPU-composited (opacity only, no box-shadow animation).

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. No card shadows, no hover lifts, no decorative blur or glass effects. Depth is created by composition and typography, not by simulated light. If you are reaching for `box-shadow`, ask whether border-top or whitespace accomplishes the same spatial separation.

**The No Glassmorphism Rule.** Backdrop-filter, frosted glass, translucent panels: avoid by default. These patterns signal SaaS tools and AI-generated design.

## 5. Components

### Buttons

Campaign Denim on sharp-cornered rectangles. Full-width within their container when used in booking contexts; auto-width inline when used as page CTAs.

- **Shape:** Sharp corners (border-radius: 0). No softening.
- **Primary:** Campaign Denim background (`#1E2A38`), white text, 16px top/bottom padding, 28px left/right. Font: weight 700, 0.68rem, uppercase, letter-spacing 0.18em.
- **Hover:** Campaign Denim Hover (`#2A3A4C`), 0.2s ease transition on background-color only.
- **Active:** `scale(0.98)` transform — tactile but restrained, never below 0.95.
- **Focus:** 2px solid Campaign Denim outline, 2px offset.
- **Disabled:** opacity 0.55, cursor not-allowed.
- **Hero CTA (ghost variant):** White text, no background, border-bottom `1px solid rgba(255,255,255,0.5)`. On hover: border-color transitions to full white. Used only overlaid on the hero image.

### Inputs and Form Fields

- **Style:** 1px solid Film Grain border, Pre-Dawn Linen/Surface White background, 0 border-radius, 11px/14px padding.
- **Focus:** 2px solid Campaign Denim outline, 2px offset-offset, border-color shifts to Campaign Denim.
- **Placeholder text:** Chalk Dust color, opacity 1.
- **Textarea:** Same as input, `resize: vertical`, minimum 120px height.
- **Select:** Same as input, custom chevron via SVG data URL (Film Grain fill). `appearance: none`.
- **Label:** 0.65rem, weight 700, uppercase, letter-spacing 0.12em, Chalk Dust color.
- **Field note (optional label modifier):** weight 400, no text-transform, no letter-spacing — used for `(optional)` annotations inline in labels. Applied via `.field-note` class.

### Navigation

Centered masthead above a bordered nav row. Desktop: horizontal links at 0.6rem / weight 700 / uppercase. Mobile: hamburger toggles a full-width dropdown overlay.

- **Default:** Dried Ink text, no underline.
- **Hover:** Campaign Denim, 0.2s ease.
- **Active:** Campaign Denim, same as hover.
- **Focus:** 2px solid Campaign Denim outline, 2px offset.
- **Dropdown:** Pre-Dawn Linen background, Warm Border, shadow-warm shadow. Items: 0.6rem / weight 700 / uppercase. Opens with anchored opacity + subtle scale/transform polish, not a large slide. Hover: Tint Warm background + Campaign Denim text. Keyboard-accessible: Escape closes, click-outside closes.
- **Mobile:** Hamburger with animated bars (translateY + rotate on open). Full-width overlay below nav row. All touch targets minimum 44px.

### Portfolio Gallery Grid

Two-column grid of portrait thumbnails (aspect-ratio 3:4). Hover: scale(1.04) on the image, GPU-composited (will-change scoped to hover state, cleared on transitionend).

- **Focus:** 2px solid Campaign Denim outline on `.category-thumb` container, 3px offset.
- **Labels below thumbnail:** Category/project name in the Label type style (uppercase, 0.75rem, weight 700). Metadata (location, year) in Caption style (0.72rem, weight 400, Chalk Dust).
- **Mobile (≤640px):** Single column.

### Session Options (Model Development page)

The anti-SaaS booking comparison. Two options sit on Pre-Dawn Linen with no card surface — no white background, no shadow. A 2px Dried Ink border-top anchors each option.

- **Option name:** Headline scale (1.5rem, weight 300, sentence case). States the package as a confident noun: "Digitals." "Editorial Test."
- **Feature list:** 0.875rem, weight 400, dash-prefixed bullets in Chalk Dust (`—`).
- **Price:** Price scale (1.85rem, weight 300, Film Grain). Border-top in Warm Border separates it from the feature list.
- **Description:** 0.875rem, weight 400, Dried Ink, line-height 1.75.
- **CTA:** Full-width Primary button, links to the dedicated inquiry page.

### Inquiry Pages (Two-Column Layout)

Used for dedicated booking flows (Digitals and Editorial Test). Context panel left, form right.

- **Left column (session-context):** Sticky at `top: 120px` on desktop. Shows price, session description, what's included list, and a back-link to the overview page. Stickiness releases at 768px.
- **Price display:** Uses the Price type scale above. Separated from the list by a Warm Border rule below.
- **Right column (inquiry-form-wrap):** Anchored by a 2px Dried Ink border-top (matching session option heading treatment). Contains the form only.
- **Back link:** 0.68rem / weight 700 / uppercase / Chalk Dust color. Hover: Campaign Denim. Prefixed with `←`.
- **Mobile (≤768px):** Single column, context above form.

## 6. Do's and Don'ts

### Do:
- **Do** use Pre-Dawn Linen (`#F3F1ED`) as the page background — never pure white.
- **Do** use Dried Ink (`#2A2622`) for all primary text — never pure black.
- **Do** keep Campaign Denim to ≤10% of any surface: buttons, link hovers, focus rings, active nav states only.
- **Do** use sharp corners (border-radius: 0) on all containers, images, cards, and buttons. Subtle radius (2px max) is acceptable on small form inputs only.
- **Do** animate only `opacity` and `transform`. Never `width`, `height`, `top`, `left`, `margin`, or `padding`.
- **Do** scope `will-change` to the hover state — add it on `:hover`, clear it on `transitionend`. Never set it globally on a component.
- **Do** write form labels in the Label style: uppercase, weight 700, Chalk Dust. Mark optional fields with a `.field-note` span (weight 400, no uppercase, no letter-spacing) inline in the label.
- **Do** anchor booking option comparisons with a border-top (`2px solid Dried Ink`), not a card surface. The photography site is not a SaaS pricing page.
- **Do** let the hero image carry all the visual weight on the homepage. Both CTAs live inside the image; the page goes hero → footer with no intermediate bands.
- **Do** treat the Two-Register Rule as the current preference: every text element is either display/headline/price (large, light, sentence case) or label/title/nav (small, bold, uppercase). Departing requires explicit user approval.

### Don't:
- **Don't** use Inter, Manrope, Plus Jakarta Sans, or any other AI-default sans. Noto Sans only, or a deliberate campaign-coded display face introduced with explicit approval.
- **Don't** use purple, blue, or teal SaaS-style gradients. The only blue in this system is Campaign Denim, and it is never a gradient.
- **Don't** use glassmorphism, neumorphism, frosted backgrounds, or `backdrop-filter` for any decorative purpose.
- **Don't** use rounded cards, soft decorative shadows, or nested cards. The shadcn/ui and Stripe-pricing aesthetic is an explicit anti-reference.
- **Avoid** creating isolated CTA sections between the hero and the footer on the homepage; the current composition carries both CTAs inside the hero. Departing requires explicit user approval.
- **Don't** use all-caps weight-700 labels for service names or package names. Those get the sentence-case weight-300 or weight-400 headline treatment.
- **Don't** use fly-in-from-below choreography. Tiny origin-aware transforms for dropdowns, mobile nav, image reveals, and press feedback are allowed when they stay calm and serve spatial clarity.
- **Don't** set `will-change: transform` globally on gallery thumbnails. Scope it to hover; every thumbnail getting its own GPU layer on page load is a memory cost without any benefit.
- **Don't** use `transition-all`. Specify exact properties: `transition: background-color 0.2s ease`, `transition: opacity 0.6s ease`, etc.
- **Don't** use em dashes outside their defined contexts. See DESIGN_SYSTEM.md > Em-dash policy.
- **Don't** use SaaS CTA language: "Get Started," "Sign Up," "Book Now!" Use: "Book a Shoot," "View Portfolio," "Send Inquiry," "Request Booking."
- **Don't** signal a single fashion vertical through the chrome. If a design choice makes the site read as "swimwear photographer" or "lingerie photographer" instead of "commercial fashion and lifestyle photographer," it violates the anti-pigeonhole rule and must be revised.
