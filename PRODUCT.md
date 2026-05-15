# Project Design Context

## Register

brand

## Project

Commercial fashion and lifestyle photography site for Keith Chernek, based in Las Colinas, Irving (Dallas-Fort Worth metro).

## Positioning

Commercial Fashion and Lifestyle Photographer. Aspirational target work: brand campaigns and lookbooks in the style of Josh Ryan x Guess. Already doing pieces of this work for brands like Andi Bagus when opportunities arise.

## Audience priority

1. Brand decision-makers at fashion, swimwear, accessory, and lifestyle brands
2. Modeling agencies looking for photographers who can produce diverse test work
3. Working models booking editorial test shoots
4. Aspiring models booking digitals

## Top-level guardrail

The site must not signal a single specialty visually. The chrome should support range across fashion verticals (lingerie, swimwear, beauty, apparel, accessories, lifestyle). A lingerie brand, swimwear brand, boot brand, beauty brand, and beverage brand should all see a photographer who could work with them.

## Reference points

- Joey Wright's site for functional structure (navigation, organization, booking flow)
- Danny Batista's site for SEO discipline (file naming, page naming, alt text, location keywords)
- Josh Ryan x Guess campaign work for aspirational aesthetic
- Andi Bagus, Reformation, Buck Mason, Tecovas campaign imagery for adjacent aesthetics

## Flag as wrong context — these conflict with current direction

- Inter font (AI slop)
- Purple/blue/teal SaaS-style gradients
- Glassmorphism, neumorphism, soft decorative shadows on cards
- shadcn/ui rounded-card aesthetic
- Three.js or Spline 3D background graphics
- GSAP scroll-driven fly-in animations
- Bouncy or playful motion vocabulary
- "As featured in" logo walls
- Big stat numbers with glowing accents
- Cards nested in cards
- Editorial-publication-coded patterns (austere, intellectual, magazine-page-mimicry)
- Wedding-photographer-coded patterns (Playfair Display, Cormorant Garamond, script faces)
- SaaS pricing table aesthetic (colored card headers, feature matrix, identical card grids)

## Acceptable motion

- Subtle hover state on portfolio thumbnails (scale 1.04, GPU-composited)
- Opacity fade-in on scroll (IntersectionObserver, no translateY)
- Sticky header with shadow treatment on scroll
- Other motion patterns require explicit user approval and a brand-campaign-coded justification

## Palette

- Primary: warm neutrals (off-white, warm gray, deep brown-black)
- Secondary: navy (#1E2A38) — deep warm navy similar to dark indigo denim or a classic suit. Used sparingly for accent — link hover states, button fill, secondary CTAs. NOT a tech blue, NOT a cobalt.
- The site currently leans too brown; navy as secondary is meant to break that up without competing with the photography.

## Typography

- Body, nav, UI: clean confident sans, currently Noto Sans (open to testing alternatives)
- Headings: Noto Sans weight 300, clamp(1.8rem, 3.5vw, 3rem), letter-spacing 0.02em. Noto Sans single-family system. A second display face is not currently in use; future exploration is permitted with explicit user approval. See DESIGN_SYSTEM.md > Typography.
- Service names, package names: sentence-case at 1.35–1.5rem / weight 400 — statements, not category labels

## Voice

Confident, professional, partner-to-brands. Speaks to brands and agencies as peers. Project-focused, not personality-focused. No exclamation points, no "Book Now!" energy. See DESIGN_SYSTEM.md > Em-dash policy.

## Quality bar

Flagship, not MVP. This site has to make a brand decision-maker think "this person can deliver a campaign for me."

## Recent design decisions

- Homepage: hero carries both CTAs (View Portfolio left, Book a Shoot right), no dead-air section below
- Services page: service names in sentence-case weight-400 (not all-caps weight-700)
- Model development: session options as editorial rows (border-top, no card surface), linking out to dedicated inquiry pages
- Inquiry pages: two-column layout (sticky context left, form right), Formspree with package-specific fields
