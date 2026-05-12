# Keith Chernek Website — Claude Code Workflow

**Purpose:** Step-by-step prompts to use with Claude Code in VS Code. Build the site incrementally, one prompt per step. Reference `DESIGN_SYSTEM.md` and `CONTENT.md` for any decisions.

---

## Setup (do this first, once)

### Step 1: Place the docs in your project

Save these three files at the root of your `Website-Building` folder:

```
/Website-Building
  /DESIGN_SYSTEM.md
  /CONTENT.md
  /WORKFLOW.md (this file)
  /index.html (your current homepage)
  /[other files]
```

### Step 2: Initial context-setting prompt

Open Claude Code in VS Code. First message of every session:

```
Before we work, read DESIGN_SYSTEM.md and CONTENT.md fully. These are the source of truth for all design and copy decisions on this site. When you make any change, verify it against these documents. If a request conflicts with the design system, flag it before making the change.

The site we're building: kchernek.com — editorial and portrait photography portfolio for Keith Chernek, based in Dallas–Fort Worth.

The current state: index.html has a basic two-card pricing layout using olive/green colors and old Joey Wright copy. We need to update it to match DESIGN_SYSTEM.md.

Confirm you've read both docs and summarize the key design decisions back to me before we continue.
```

This ensures every Claude Code session starts with full context.

---

## Build sequence (do in order)

### Step 3: Update the foundation — colors, fonts, and nav

```
Update index.html to align with DESIGN_SYSTEM.md. Specifically:

1. Replace the olive color palette with the warm neutral system from DESIGN_SYSTEM.md. Use CSS custom properties (--background, --text-primary, etc.) defined at :root.

2. Update the nav to match the architecture in DESIGN_SYSTEM.md. Remove Education, Tools & Presets, Magazine, and Newsletter. Final nav should be: PORTFOLIO | SERVICES | BOOK A SHOOT | CONNECT.

3. Update the masthead: keep the centered KC monogram + KEITH CHERNEK wordmark. Change the tagline from "PHOTOGRAPHY" to "EDITORIAL — PORTRAIT — DFW" (with em-dashes, all caps, wide letter-spacing per the design system).

4. Verify font is Noto Sans throughout.

Don't touch the pricing cards yet — we'll do those next. Show me the diff before saving.
```

### Step 4: Convert pricing cards to Digitals + Editorial Test

```
The two pricing cards currently show "Signature Swim Shoot" and "Signature Swim Shoot Plus" with Joey Wright's verbatim copy. Replace them with the Digitals and Editorial Test packages from CONTENT.md.

Specifically:
- Card 1: DIGITALS package (use copy from CONTENT.md)
- Card 2: EDITORIAL TEST package (use copy from CONTENT.md)
- Leave the price placeholder as $[PRICE TBD] — we'll fill in real prices later
- Update card header colors from olive to --text-secondary (#6B6359)
- Keep border-radius: 0 (sharp corners)
- Both cards should have a "Request Booking" button

After updating, verify the cards still display correctly on mobile (single column at ≤640px).
```

### Step 5: Build the homepage

```
Currently index.html shows the Model Development page (the pricing cards). We need to restructure so index.html is the actual homepage per DESIGN_SYSTEM.md page model.

Homepage structure:
- Centered logo masthead (KC monogram + KEITH CHERNEK + EDITORIAL — PORTRAIT — DFW tagline)
- Centered nav below masthead with thin top/bottom borders
- Full-bleed hero image section (use a placeholder image for now — I'll swap in the real one later)
- Minimal footer

The pricing cards should move to a new page: /book-a-shoot/model-development/

Create the new file structure:
- index.html — homepage (new, minimal)
- /book-a-shoot/model-development.html — the existing pricing cards
- /services.html — placeholder
- /commercial.html — placeholder
- /portfolio.html — placeholder
- /contact.html — placeholder
- /about.html — placeholder (use copy from CONTENT.md)

Use relative paths for nav links so this works locally and once deployed. Show me the file tree before creating the files.
```

### Step 6: Build the Services page

```
Build /services.html using the copy from CONTENT.md "Services page" section.

Structure:
- Same header/nav as homepage
- Page H1: "Photography & Creative Services"
- Intro paragraph
- Four service category blocks (Editorial Portrait Sessions, Model Development, Brand & Product, Event Coverage) — each with an H3 heading and short description
- "How I work" paragraph
- Closing CTA with two buttons: "Book a Shoot" and "Connect"

Match the typography hierarchy from DESIGN_SYSTEM.md exactly: H1 light + sentence case, H2/H3 bold + uppercase + letter-spaced. No pricing on this page.
```

### Step 7: Build the Commercial & Brand page

```
Build /commercial.html using copy from CONTENT.md "Commercial & Brand page" section.

Structure:
- Header/nav (same as other pages)
- H1: "Commercial & Brand"
- Intro paragraph
- Capabilities section (H2 + paragraph + bulleted list, where bullets are styled per design system)
- Past clients sentence naturally embedded (Walmart, FloSports, Andi Bagus, AvalTheBrand)
- Process section (numbered 1-5 with H3 labels and brief descriptions)
- Closing CTA — no fixed pricing, "Get in touch" CTA only

This page should NOT use pricing cards. It's a written page with sections, not transactional.
```

### Step 8: Build the Contact / Connect page

```
Build /contact.html using copy from CONTENT.md "Connect / Contact page" section.

Structure:
- Header/nav
- H1: "Let's Connect"
- Intro paragraph
- Contact form: three fields only (Name, Email, Message), submit button labeled "Send Inquiry"
- The form should POST to a placeholder action attribute — I'll wire up the backend later
- "Response within 48 hours" line below the form

Style the form per design system: sharp corners, --surface (#FFFFFF) background on input fields, --text-secondary border, button matches the global button style.
```

### Step 9: Build the About page (hidden from main nav but exists)

```
Build /about.html using the exact copy from CONTENT.md "About page" section. Single column, max-width readable, no images for now (placeholder for self-portrait later). Same header/nav.

This page should be accessible at /about but NOT linked from the main navigation per DESIGN_SYSTEM.md.
```

### Step 10: Build the Portfolio page (skeleton)

```
Build /portfolio.html as a skeleton.

Structure:
- Header/nav
- H1: "Portfolio"
- Two category sub-pages linked: Editorial and Swimwear
- Grid layout (2 columns desktop, 1 column mobile) with placeholder thumbnails for each category
- Each thumbnail = a category, clicking takes you to /portfolio/editorial.html or /portfolio/swimwear.html
- Create the two sub-page files as empty skeletons with header/nav and an H1 — we'll fill in actual project galleries later

Don't add Digitals or Brand & Product as categories yet — those come later when we have content.
```

### Step 11: Footer (global component)

```
Create a reusable footer that's included on every page.

Footer contents per DESIGN_SYSTEM.md and CONTENT.md:
- Tagline: "DFW editorial and portrait photography" (small, muted text)
- Contact: keith@kchernek.com
- Location: Irving, TX 75039
- Social icons: Instagram + Threads (small SVG icons, --text-muted color)
- Copyright line: "© 2026 Keith Chernek"

- The Social icons should act as links to the sites listed in the CONTENT.md file

If we're using static HTML, suggest the cleanest way to share this across pages — either an HTML include pattern, a build step, or a manual partial. Recommend an approach based on the project's current structure.
```

### Step 12: Responsive polish

```
Pass through all pages and verify mobile responsiveness:

1. At ≤640px:
   - Nav collapses to a hamburger or stacked items (your choice — recommend the better approach)
   - Pricing grid becomes single column
   - Headings scale down proportionally
   - Footer stacks vertically
   - Padding reduces

2. Check that the masthead doesn't get cramped on mobile
3. Verify the hero image scales appropriately and doesn't get pixelated
4. Test that all CTAs are tap-friendly (minimum 44px tap target height)

Show me a list of any responsive issues you find before fixing them so I can review.
```

---

## After the core build

### Step 13: Motion and animation pass

```
Add the motion per DESIGN_SYSTEM.md:

1. Sticky header that shrinks on scroll (reduce padding when scrolled >100px)
2. Fade-in animation on sections as they enter viewport (use Intersection Observer)
3. Subtle hover states on nav items and buttons
4. NO bouncy animations, NO autoplay video, NO fancy effects that obscure content

Use CSS transitions where possible, JavaScript only where necessary. Keep total added JS minimal.
```

### Step 14: SEO and meta

```
Add proper SEO meta tags to every page:

- Page-specific <title> tags
- Meta description (use the one from CONTENT.md for homepage; write page-specific ones for others)
- Open Graph tags for social sharing (og:title, og:description, og:image)
- Twitter Card tags
- Favicon link (we'll need to create the favicon separately — for now use a placeholder)

Suggest a base og:image — should be a wide rectangular crop of an editorial image. For now, use the hero placeholder.
```

### Step 15: Deployment prep

```
Prepare the site for deployment. Specifically:

1. Audit for any localhost references or absolute paths that need to be relative
2. Verify all internal links work (no broken /portfolio/editorial.html if the file doesn't exist yet)
3. Minify CSS if not already
4. Verify images are optimized (suggest formats — WebP with JPG fallbacks?)
5. Add a robots.txt allowing all crawlers
6. Add a sitemap.xml listing all real pages (exclude /about since it's hidden from nav)

What deployment platform am I targeting? Recommend best options for static HTML/CSS sites (Netlify, Vercel, GitHub Pages, Cloudflare Pages).
```

---

## Prompting principles (use these throughout)

1. **One change at a time.** Don't bundle "update colors and add a new page" into one prompt. Separate them.

2. **Always reference the docs.** Start each substantive prompt with "Per DESIGN_SYSTEM.md..." or "Using copy from CONTENT.md..."

3. **Ask for the diff first.** "Show me the diff before saving" prevents Claude Code from making unwanted changes invisibly.

4. **Flag conflicts.** "If this conflicts with the design system, flag it before making the change."

5. **Verify visually.** After every change, open the file in a browser and look at it. Don't trust that code changes produced the visual result you wanted.

6. **Commit often.** Use git after each successful step. If something breaks, you can revert without losing earlier progress.

---

## When to update the docs

If we make new design decisions during the build, update `DESIGN_SYSTEM.md` or `CONTENT.md` immediately. The docs should always reflect the current state of decisions, not the original state. This way every future Claude Code session has accurate context.

Examples of changes that should update the docs:
- New page added to the architecture
- Color values refined
- Typography scales adjusted
- New copy written for a section
- Decision to add or remove a feature

Treat the docs as living documents. They are the source of truth.
