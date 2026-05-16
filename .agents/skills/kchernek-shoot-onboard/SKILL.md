---
name: kchernek-shoot-onboard
description: Invoke when adding a new portfolio shoot to the kchernek_photography repo. Reads the shoot-info.txt for a shoot, validates against PORTFOLIO_IMAGE_PREP.md spec, generates canonical filenames for raw images, renames source files in place, generates image-metadata.json with alt text per image, and optionally invokes the image pipeline to produce responsive variants. Use whenever new shoot images are placed in a `source/` sub-folder under portfolio-images/.
---

# kchernek Shoot Onboarding

Workflow protocol for adding a new portfolio shoot. Encodes the full sequence: validate shoot-info, rename images per the SEO spec, generate accessibility metadata, produce variants.

## When to invoke

Invoke when the user has placed new shoot images and a shoot-info.txt into a `source/` sub-folder under portfolio-images/. The trigger phrase is typically "onboard the new shoot at portfolio-images/<folder-name>/" or "process the [shoot name] images."

Do NOT invoke for image refinement (re-cropping, color correction, retouching) or pipeline-only operations (regenerating variants of already-named files). Use the image pipeline directly for those.

## Protocol

### Step 1: Confirm the shoot folder structure

Verify the target shoot folder exists at `portfolio-images/<folder-name>/source/`. Inside `source/`, confirm:
- `shoot-info.txt` is present
- One or more `.jpg` or `.jpeg` files are present (the raw images)

If `shoot-info.txt` is missing, stop. Direct the user to create one based on the template at `portfolio-images/Studio_Black_White/source/shoot-info.txt`.

If no images are present, stop. The user hasn't actually placed any content.

### Step 2: Load and validate shoot-info.txt

Read the shoot-info.txt. The required fields, per PORTFOLIO_IMAGE_PREP.md:
- Model
- Location
- City
- State
- Shoot Date
- Shoot Type
- Wardrobe / Styling
- Keywords

Optional:
- Notes

For each missing or blank field:
- If the field is critical for filename or alt text (Model, City, State, Shoot Type), stop and ask the user to fill it before proceeding.
- If the field is optional context (Wardrobe, Notes), warn the user but proceed.

Confirm Keywords are natural-language descriptors, not stuffed lists. Reference PORTFOLIO_IMAGE_PREP.md's "SEO Keyword Philosophy" section for examples.

### Step 3: Propose a folder name

Based on shoot-info.txt, propose a shoot folder name following existing conventions. Examples:
- `2026-spring-editorial-fort-worth` (year + season + shoot type + city)
- `Studio-Cowgirl-2026` (style-driven, capitalized like existing folders)
- `cowgirl-swimwear` (shoot-type-driven, lowercase like a slug)

The existing folders use mixed conventions (`Cowgirl-Swimwear` mixed case, `Editorial_Studio` underscored, `Flower-Swimwear` mixed case). Propose a name that matches the user's preferred style. Confirm before any renaming.

### Step 4: Propose canonical image filenames

For each source image, propose a filename following PORTFOLIO_IMAGE_PREP.md's format:
`[shoot-type]-[city]-[state]-[descriptor]-[number].jpg`

Examples:
- `western-swimwear-fort-worth-texas-jane-01.jpg`
- `studio-editorial-dallas-texas-monica-01.jpg`
- `commercial-product-las-colinas-texas-01.jpg`

Rules per PORTFOLIO_IMAGE_PREP.md:
- All lowercase
- Hyphens only (no underscores, no spaces)
- Two-digit numbering with leading zero (01, 02, 03)
- Descriptor is the model first name (capitalized in real life, lowercase in filename) OR a content descriptor for non-model shoots

Show the user a table mapping original filenames to proposed filenames. Wait for approval before renaming. If the user wants changes, accept them — the proposal is a starting point.

### Step 5: Rename source images in place

After approval, rename each source image using `git mv` so git tracks the rename rather than registering delete + add.

After renaming, verify:
- All renamed files exist in `source/`
- No files were accidentally deleted
- The naming pattern is consistent (sequential numbering, no gaps unless explicitly intentional)

### Step 6: Generate image-metadata.json

Create `portfolio-images/<folder-name>/source/image-metadata.json` following the existing format (see `portfolio-images/Studio_Black_White/source/image-metadata.json` as the model).

Required structure:
```json
{
  "shoot": {
    "folder": "<folder-name>",
    "model": "<from shoot-info>",
    "location": "<from shoot-info>",
    "city": "<from shoot-info>",
    "state": "<from shoot-info>",
    "date": "<from shoot-info>",
    "shoot_type": "<from shoot-info>",
    "wardrobe": "<from shoot-info, or 'Not specified' if blank>",
    "keywords": ["<parsed from shoot-info>"]
  },
  "flags": {
    "srgb_verified": false,
    "wardrobe_missing": "<true if shoot-info wardrobe is blank>"
  },
  "images": [
    {
      "original_filename": "<filename before rename>",
      "recommended_filename": "<canonical filename after rename>",
      "file_size_mb": "<number>",
      "dimensions": "<WxH>",
      "alt_text": "<generated per PORTFOLIO_IMAGE_PREP.md alt text rules>",
      "title": "<shoot type — city, state abbrev>",
      "caption": ""
    }
  ]
}
```

Alt text generation follows PORTFOLIO_IMAGE_PREP.md's "Alt Text Rules":
- Preferred format: "[subject description] during a [shoot type] in [city], [state]."
- Vary the descriptions across images to avoid identical alt text on adjacent photos.
- For specific wardrobe items mentioned in shoot-info, integrate them naturally: "Model in white cherry-print swimsuit during a poolside swimwear editorial in Dallas, Texas."
- Avoid keyword stuffing, sexualized language, or exaggerated descriptions.

For file_size_mb and dimensions: use `ls -l` for size, and `identify` (ImageMagick) or sharp's metadata read for dimensions. If neither is available, leave dimensions blank and flag for manual fill-in.

### Step 7: Run the image pipeline

Once originals are renamed and metadata exists, run the pipeline to generate responsive variants:

```bash
npm run images:shoots
```

This will scan all existing shoot folders' `source/` sub-folders. Because `skipExisting: true`, only the new shoot's images will be processed. Existing variants are untouched.

If the new shoot folder is not yet in the hardcoded list in `scripts/images-shoots.mjs`, this is an opportunity to either:
- Add it to the script and commit (preferred for permanent shoots)
- Run the pipeline manually for just the new folder (one-off)

### Step 8: Verify

After variants generate, verify:
- `ls portfolio-images/<folder-name>/` shows the variants (3 widths × 2 formats × N images = 6N files)
- File sizes follow the expected pattern (variants 5-15× smaller than originals)
- `npm run audit` passes (no broken links, no SEO regressions, etc.)

### Step 9: Hand off

The shoot is now ready to be referenced from HTML. The user's next step (not this skill's job) is to:
- Create or update a portfolio sub-page HTML referencing the new variants via `<picture>` elements
- Update sitemap.xml if a new page was added
- Update CONTENT.md if the shoot represents a new project worth describing

This skill's output is "shoot folder is renamed, validated, has metadata, and has variants generated." Page-creation and copy-writing are separate workflows.

## What this skill is not

This skill does not:
- Edit, retouch, or color-correct images
- Write portfolio sub-page HTML (separate task — use VOICE.md and EDITORIAL_PORTFOLIO_SEO_STRATEGY.md as guides)
- Decide which images make the final cut (curation is the user's call)
- Modify the canonical PORTFOLIO_IMAGE_PREP.md spec (that's a deliberate spec change, not a routine workflow)

## Failure modes to avoid

- Renaming files without showing the proposed mapping first
- Generating alt text that's identical across multiple images (vary the descriptions)
- Generating alt text that violates VOICE.md or PORTFOLIO_IMAGE_PREP.md (no "stunning," "beautiful," "sexy," etc.)
- Running the pipeline before metadata is in place (variants need their canonical names)
- Inventing shoot-info fields the user didn't provide (flag missing fields, don't guess)
- Using mixed-case or underscored filenames (lowercase + hyphens only per spec)

## Relationship to other docs

- `portfolio-images/PORTFOLIO_IMAGE_PREP.md` — the canonical spec for filename rules, folder structure, alt text format, SEO keyword philosophy, model name privacy. This skill applies that spec; it does not redefine it.
- `VOICE.md` — alt text inherits VOICE.md's filler-word rules. No "elevated," "polished" as filler, "stunning," "premium." Specific over decorative.
- `EDITORIAL_PORTFOLIO_SEO_STRATEGY.md` — for guidance on the portfolio sub-page that will eventually reference the new shoot's variants.
- `scripts/images-shoots.mjs` — the pipeline this skill invokes in Step 7.

If this skill ever appears to contradict any of those, the documents win. Surface the contradiction so the protocol can be updated.
