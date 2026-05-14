# Portfolio Image Preparation Rules

## Purpose

This repository stores portfolio images for kchernek.com.

All portfolio images should follow consistent naming, metadata, export, and SEO standards so the website can be updated cleanly using tools such as Claude Code, Codex, Cursor, or future automation scripts.

The goal is:
- clean organization
- scalable SEO structure
- accessibility-friendly image metadata
- consistent website preparation
- long-term maintainability

---

# Folder Structure

Portfolio images are organized by individual photoshoots.

Example:

```text
portfolio-photos/

  PORTFOLIO_IMAGE_PREP.md
  shoot-info-template.txt

  western-swimwear-fort-worth-2025/
    shoot-info.txt
    IMG_4451.jpg
    IMG_4452.jpg

  studio-model-digitals-dallas-2025/
    shoot-info.txt
    DSC_1123.jpg
```

Each shoot folder should contain:
- final exported website-ready images
- a `shoot-info.txt` metadata file

---

# Shoot Metadata Requirements

Each shoot folder should include:

```text
shoot-info.txt
```

Recommended structure:

```text
Model:
Location:
City:
State:
Shoot Date:
Shoot Type:
Wardrobe / Styling:
Keywords:
Notes:
```

Example:

```text
Model: Jane
Location: Fort Worth Stockyards
City: Fort Worth
State: Texas
Shoot Date: 2025-07-20
Shoot Type: Western swimwear editorial
Wardrobe / Styling: Denim swimwear, cowboy boots, cowboy hat
Keywords: swimwear, western, editorial, Fort Worth, Texas
Notes: Golden hour outdoor shoot with rustic western architecture.
```

If metadata is missing:
- infer only when obvious
- otherwise flag for review
- never invent information

---

# Filename Rules

All filenames should be:
- lowercase
- hyphen-separated
- descriptive
- SEO-friendly
- readable by humans

Preferred format:

```text
[shoot-type]-[city]-[state]-[descriptor]-[number].jpg
```

Examples:

```text
western-swimwear-fort-worth-texas-jane-01.jpg
studio-model-digitals-dallas-texas-jane-01.jpg
fitness-gym-photoshoot-san-antonio-texas-will-06.jpg
restaurant-food-photography-dallas-texas-01.jpg
```

Avoid:

```text
IMG_4455.jpg
DSC_8891.jpg
final-edit-copy.jpg
best-shot.jpg
```

---

# Filename Standards

## Use
- lowercase only
- hyphens only
- descriptive keywords
- two-digit numbering (`01`, `02`, `03`)

## Do Not Use
- spaces
- underscores
- special characters
- keyword stuffing
- subjective language
- duplicate naming structures

Avoid words like:
- best
- sexy
- hot
- amazing
- final-final

---

# Canonical Location Naming

Maintain consistent location naming.

## Use

```text
dallas-texas
fort-worth-texas
las-colinas-texas
miami-florida
los-angeles-california
dfw-texas
```

## Avoid

```text
ft-worth
dtx
la
socal
```

Always prioritize consistency over shorthand.

---

# SEO Keyword Philosophy

Use natural keywords based on the actual shoot content.

Examples:
- dallas photographer
- fort worth photographer
- swimwear photography
- editorial portrait photography
- model digitals
- agency digitals
- food photography
- restaurant photography
- cocktail photography
- commercial photography

Do not keyword stuff filenames or alt text.

---

# Alt Text Rules

Every image uploaded to the website should have alt text.

Alt text should:
- describe the image naturally
- support accessibility
- support SEO
- accurately reflect visible content

Preferred format:

```text
[subject description] during a [shoot type] in [city], [state].
```

Example:

```text
Model in western-inspired swimwear posing during an editorial photoshoot in Fort Worth, Texas.
```

Avoid:
- keyword stuffing
- exaggerated descriptions
- unnecessary repetition
- sexualized language

Bad example:

```text
hot sexy model best photographer dallas texas swimwear shoot
```

---

# Image Titles

Use clean descriptive image titles when needed.

Example:

```text
Western Swimwear Editorial in Fort Worth, Texas
```

Optional captions should remain simple and descriptive.

---

# Model Name Privacy

Do not publicly expose full model names unless explicitly approved.

Preferred usage:
- first name only
- initials
- generic descriptor
- omit entirely

Examples:

```text
western-swimwear-fort-worth-texas-model-01.jpg
western-swimwear-fort-worth-texas-jane-01.jpg
```

Avoid:
- full legal names
- agency-sensitive information
- personal identifiers

---

# Image Export Standards

All website images should be web-ready.

## Recommended Export Settings

- format: `.jpg` or `.webp`
- color space: `sRGB`
- long edge: `2000–3000px`
- optimized for web
- maintain high visual quality
- avoid unnecessarily large file sizes

## Target File Size

Preferred:
- under 1MB when possible
- under 2MB maximum unless necessary

---

# Quality Control

Flag images that are:
- improperly named
- duplicates
- unfinished edits
- low resolution
- incorrect color space
- oversized
- missing metadata
- missing alt text

---

# Renaming Rules

Do not rename files unnecessarily.

If an existing filename is already:
- descriptive
- SEO-friendly
- consistent

then keep it.

Only rename when:
- filenames are generic
- naming is inconsistent
- SEO structure is poor
- organization would substantially improve

---

# Metadata Output

When preparing website uploads, optionally generate:

```text
image-metadata.json
```

Suggested structure:

```json
{
  "shoot": {
    "model": "",
    "location": "",
    "city": "",
    "state": "",
    "date": "",
    "shoot_type": "",
    "keywords": []
  },
  "images": [
    {
      "original_filename": "",
      "recommended_filename": "",
      "alt_text": "",
      "title": "",
      "caption": ""
    }
  ]
}
```

---

# AI Workflow Expectations

When AI tools process this repository they should:

1. Read all `shoot-info.txt` files
2. Analyze filenames
3. Preserve good filenames
4. Suggest improved filenames only when needed
5. Generate alt text
6. Generate titles/captions if requested
7. Flag missing information
8. Preserve repository organization
9. Avoid inventing metadata
10. Maintain consistent SEO structure

---

# Final Checklist

Before website upload confirm:

- filenames are SEO-friendly
- exports are web-ready
- images are in sRGB
- alt text exists
- metadata exists
- no duplicate exports remain
- no RAW files are included
- no private information is exposed
- folder organization is clean

---

# Example

Original filename:

```text
IMG_4455.jpg
```

Shoot info:

```text
Shoot Type: Western swimwear editorial
City: Fort Worth
State: Texas
Model: Jane
```

Recommended filename:

```text
western-swimwear-fort-worth-texas-jane-01.jpg
```

Recommended alt text:

```text
Model in western-inspired swimwear during an editorial photoshoot in Fort Worth, Texas.
```