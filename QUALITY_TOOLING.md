# Site Quality Tooling

Four tools cover automated quality checking for this site. Three run in GitHub Actions on every push/PR; the fourth is an optional local dev tool.

---

## Lighthouse CI — performance, SEO, and accessibility scoring

**What it does:** Loads each page in a headless browser, scores it across Performance, Accessibility, Best Practices, and SEO, and uploads a full report.

**Config:** `lighthouserc.cjs`  
**Run locally:** `npm run ci:lighthouse` (requires the dev server to be running first: `npm run serve`)  
**In CI:** Runs automatically via `.github/workflows/site-quality.yml`

Thresholds are currently set to `warn` level — issues appear in the report but do not fail the build. To tighten them, change `warn` to `error` in `lighthouserc.cjs` and raise the `minScore` values.

---

## Pa11y CI — specific accessibility issue detection

**What it does:** Runs WCAG 2.0 Level A checks against each page and reports individual violations (e.g. missing alt text, insufficient colour contrast, unlabelled form inputs) with element selectors.

**Config:** `.pa11yci.json`  
**Run locally:** `npm run ci:a11y` (requires the dev server)  
**In CI:** Runs automatically; `threshold: 10` allows up to 10 errors per page before the step fails, making early runs informative rather than blocking.

Lighthouse CI scores accessibility at a category level; Pa11y CI gives you the specific line-level violations. Use both together.

---

## Lychee — broken link detection

**What it does:** Crawls every `<a href>` in HTML and Markdown files, requests each URL, and reports 404s and other failures.

**Config:** `lychee.toml`  
**In CI:** Runs via the `lycheeverse/lychee-action` GitHub Action with `fail: false`, so broken links appear in the Actions log without blocking the build.  
**Run locally:** Lychee is a standalone Rust binary, not an npm package.

Install locally (choose one):
```
# macOS
brew install lychee

# Linux
curl -sL https://raw.githubusercontent.com/lycheeverse/lychee/master/install.sh | bash

# Windows (scoop)
scoop install lychee

# Cargo
cargo install lychee
```

Then run: `npm run ci:links`

---

## Lighthouse MCP Server — optional local AI-assisted audit

**Not part of CI.** The Lighthouse MCP Server is a local tool that exposes Lighthouse results to Claude so you can ask questions like "why is this page slow?" or "what's causing the accessibility score to drop?" directly in conversation.

It is not installed by default. See the [Lighthouse MCP Server docs](https://github.com/google/lighthouse) if you want to set it up for local dev sessions.

---

## Running everything locally

```bash
# 1. Install new dev dependencies (run once after pulling this branch)
npm install

# 2. Start the local dev server in a separate terminal
npm run serve

# 3. In another terminal, run all CI quality checks
npm run ci:quality        # Lighthouse CI + Pa11y CI
npm run ci:links          # Lychee (requires lychee binary installed)
```

## Tightening thresholds over time

1. **Lighthouse:** change `['warn', ...]` to `['error', ...]` in `lighthouserc.cjs` and raise `minScore` (0.8–0.9 is production-grade).
2. **Pa11y:** lower `threshold` in `.pa11yci.json` toward 0; switch `standard` from `WCAG2A` to `WCAG2AA` for stricter coverage.
3. **Lychee:** set `fail: true` in the workflow step once the link baseline is clean.
4. **Workflow:** remove `continue-on-error: true` from steps once scores are stable.
