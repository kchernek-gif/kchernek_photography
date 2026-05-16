import { readFile, walkHtml, fail, summary } from './_lib.mjs';
import { resolve, relative, dirname, join, normalize } from 'node:path';
import { existsSync } from 'node:fs';

const ROOT = resolve(import.meta.dirname, '..');

const SKIP_SCHEME = /^(https?|mailto|tel|data|javascript):/i;
const ANCHOR_ONLY = /^#/;

function stripFragment(href) {
  return href.replace(/[?#].*$/, '');
}

function resolveHref(href, fromFile) {
  const clean = stripFragment(href);
  if (!clean || clean === '/') {
    return join(ROOT, 'index.html');
  }
  if (clean.startsWith('/')) {
    const resolved = join(ROOT, clean);
    if (!normalize(resolved).startsWith(normalize(ROOT))) return null;
    if (!/\.[a-z]+$/i.test(clean)) {
      const withHtml = resolved + '.html';
      if (existsSync(withHtml)) return withHtml;
      return join(resolved, 'index.html');
    }
    return resolved;
  }
  const resolved = resolve(dirname(fromFile), clean);
  if (!normalize(resolved).startsWith(normalize(ROOT))) return null;
  return resolved;
}

const HREF_RE        = /\bhref\s*=\s*["']([^"']+)["']/gi;
const SRC_RE         = /\bsrc\s*=\s*["']([^"']+)["']/gi;
const SCRIPT_LINK_RE = /<(script|link)\b/i;

let issues = 0;
let linksChecked = 0;

for (const filepath of walkHtml(ROOT)) {
  const rel = relative(ROOT, filepath);
  const content = readFile(filepath);
  const stripped = content.replace(/<!--[\s\S]*?-->/g, '');
  const lines = stripped.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    let m;
    HREF_RE.lastIndex = 0;
    while ((m = HREF_RE.exec(line)) !== null) {
      const href = m[1].trim();
      if (SKIP_SCHEME.test(href) || ANCHOR_ONLY.test(href)) continue;
      linksChecked++;
      const target = resolveHref(href, filepath);
      if (target === null) {
        fail(`Path traversal or unresolvable`, [`${rel}:${i + 1}  href="${href}"`]);
        issues++;
      } else if (!existsSync(target)) {
        fail(`Broken internal link`, [`${rel}:${i + 1}  href="${href}"  →  ${relative(ROOT, target)}`]);
        issues++;
      }
    }

    if (SCRIPT_LINK_RE.test(line)) {
      SRC_RE.lastIndex = 0;
      while ((m = SRC_RE.exec(line)) !== null) {
        const src = m[1].trim();
        if (SKIP_SCHEME.test(src) || ANCHOR_ONLY.test(src)) continue;
        linksChecked++;
        const target = resolveHref(src, filepath);
        if (target === null) {
          fail(`Path traversal or unresolvable`, [`${rel}:${i + 1}  src="${src}"`]);
          issues++;
        } else if (!existsSync(target)) {
          fail(`Broken asset reference`, [`${rel}:${i + 1}  src="${src}"  →  ${relative(ROOT, target)}`]);
          issues++;
        }
      }
    }
  }
}

if (issues === 0) {
  console.log(`check:links: PASS (${linksChecked} link${linksChecked === 1 ? '' : 's'} resolved)`);
} else {
  summary('check:links', issues);
}

process.exit(issues > 0 ? 1 : 0);
