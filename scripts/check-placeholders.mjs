import { readFile, walkHtml, fail, summary } from './_lib.mjs';
import { resolve, relative } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const PLACEHOLDER_PATTERNS = [
  /Placeholder_images\//i,
  /EmptyName_/i,
  /\bIMG_\d+/i,
  /\bDSC_?\d+/i,
  /\b_DSC\d+/i,
  /\d{6}_JR_WORKSHOP\d+/i,
];

function isBadSrc(value) {
  return PLACEHOLDER_PATTERNS.some(re => re.test(value));
}

const SRC_RE     = /\bsrc\s*=\s*["']([^"']+)["']/gi;
const SRCSET_RE  = /\bsrcset\s*=\s*["']([^"']+)["']/gi;
const CONTENT_RE = /\bcontent\s*=\s*["']([^"']+)["']/gi;
const IMAGE_TAG_RE = /<(img|source)\b[^>]*>/gi;

function srcsetUrls(value) {
  return value
    .split(',')
    .map(entry => entry.trim().split(/\s+/)[0])
    .filter(Boolean);
}

let issues = 0;
let imagesChecked = 0;

for (const filepath of walkHtml(ROOT)) {
  const rel = relative(ROOT, filepath);
  const content = readFile(filepath);
  const stripped = content.replace(/<!--[\s\S]*?-->/g, '');
  const lines = stripped.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/<meta\b/i.test(line) && /(og:image|twitter:image)/i.test(line)) {
      let m;
      CONTENT_RE.lastIndex = 0;
      while ((m = CONTENT_RE.exec(line)) !== null) {
        if (isBadSrc(m[1])) {
          fail(`Placeholder OG/Twitter image`, [`${rel}:${i + 1}  content="${m[1]}"`]);
          issues++;
        }
      }
    }
  }

  let tagMatch;
  IMAGE_TAG_RE.lastIndex = 0;
  while ((tagMatch = IMAGE_TAG_RE.exec(stripped)) !== null) {
    const tag = tagMatch[0];
    const lineNum = stripped.slice(0, tagMatch.index).split('\n').length;

    SRC_RE.lastIndex = 0;
    let m;
    while ((m = SRC_RE.exec(tag)) !== null) {
      imagesChecked++;
      if (isBadSrc(m[1])) {
        fail(`Placeholder image src`, [`${rel}:${lineNum}  src="${m[1]}"`]);
        issues++;
      }
    }

    SRCSET_RE.lastIndex = 0;
    while ((m = SRCSET_RE.exec(tag)) !== null) {
      for (const src of srcsetUrls(m[1])) {
        imagesChecked++;
        if (isBadSrc(src)) {
          fail(`Placeholder image srcset`, [`${rel}:${lineNum}  srcset="${src}"`]);
          issues++;
        }
      }
    }
  }
}

if (issues === 0) {
  console.log(`check:placeholders: PASS (${imagesChecked} image${imagesChecked === 1 ? '' : 's'} checked, none use placeholder paths)`);
} else {
  summary('check:placeholders', issues);
}

process.exit(issues > 0 ? 1 : 0);
