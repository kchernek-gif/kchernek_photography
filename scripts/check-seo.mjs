import { readFile, walkHtml, fail, summary } from './_lib.mjs';
import { resolve, relative, basename } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const SKIP_FILE = /^google[a-z0-9]+\.html$/i;

function count(re, str) {
  return (str.match(re) ?? []).length;
}

function extract(re, str) {
  const m = str.match(re);
  return m ? m[1] : null;
}

const pages = [];
let issues = 0;
let warnings = 0;

for (const filepath of walkHtml(ROOT)) {
  const rel = relative(ROOT, filepath);
  const name = basename(filepath);
  if (SKIP_FILE.test(name)) continue;

  const content = readFile(filepath);
  const stripped = content.replace(/<!--[\s\S]*?-->/g, '');
  const pageIssues = [];

  // H1 count
  const h1Count = count(/<h1[\s>]/gi, stripped);
  if (h1Count === 0) pageIssues.push('Missing <h1>');
  if (h1Count > 1)  pageIssues.push(`Multiple <h1> tags (${h1Count} found)`);

  // <title>
  const title = extract(/<title[^>]*>([\s\S]*?)<\/title>/i, stripped);
  if (!title) pageIssues.push('Missing <title>');

  // <meta name="description">
  if (!/<meta\s[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["'][^"']+["']/i.test(stripped) &&
      !/<meta\s[^>]*content\s*=\s*["'][^"']+["'][^>]*name\s*=\s*["']description["']/i.test(stripped)) {
    pageIssues.push('Missing <meta name="description">');
  }

  // og:image
  if (!/<meta\s[^>]*property\s*=\s*["']og:image["'][^>]*content\s*=\s*["'][^"']+["']/i.test(stripped) &&
      !/<meta\s[^>]*content\s*=\s*["'][^"']+["'][^>]*property\s*=\s*["']og:image["']/i.test(stripped)) {
    pageIssues.push('Missing <meta property="og:image">');
  }

  // twitter:image
  if (!/<meta\s[^>]*name\s*=\s*["']twitter:image["'][^>]*content\s*=\s*["'][^"']+["']/i.test(stripped) &&
      !/<meta\s[^>]*content\s*=\s*["'][^"']+["'][^>]*name\s*=\s*["']twitter:image["']/i.test(stripped)) {
    pageIssues.push('Missing <meta name="twitter:image">');
  }

  // Empty or missing alt on non-decorative <img>
  // [^>]* matches across newlines (negated class includes \n), so multi-line tags are handled
  const imgTagRe = /<img\b[^>]*>/gi;
  let imgMatch;
  imgTagRe.lastIndex = 0;
  while ((imgMatch = imgTagRe.exec(content)) !== null) {
    const tag = imgMatch[0];
    const lineNum = content.slice(0, imgMatch.index).split('\n').length;
    if (/aria-hidden\s*=\s*["']true["']/i.test(tag)) continue;
    if (/\balt\s*=\s*["']["']/i.test(tag)) {
      pageIssues.push(`Empty alt on non-decorative <img> at line ${lineNum}`);
    } else if (!/\balt\s*=/i.test(tag)) {
      pageIssues.push(`Missing alt attribute on <img> at line ${lineNum}`);
    }
  }

  if (pageIssues.length > 0) {
    fail(rel, pageIssues.map(msg => `  ${msg}`));
    issues += pageIssues.length;
  }

  pages.push({ rel, title: title ?? '' });
}

// Duplicate title warning
const titleMap = new Map();
for (const { rel, title } of pages) {
  if (!title) continue;
  const norm = title.trim().toLowerCase();
  if (!titleMap.has(norm)) titleMap.set(norm, []);
  titleMap.get(norm).push(rel);
}
for (const [title, files] of titleMap) {
  if (files.length > 1) {
    console.log(`WARNING: Duplicate <title> "${title}"`);
    for (const f of files) console.log(`  ${f}`);
    warnings++;
  }
}

if (issues === 0 && warnings === 0) {
  console.log(`check:seo: PASS (${pages.length} page${pages.length === 1 ? '' : 's'} checked)`);
} else if (issues === 0) {
  console.log(`check:seo: PASS (${pages.length} pages checked, ${warnings} warning${warnings === 1 ? '' : 's'})`);
} else {
  summary('check:seo', issues);
  if (warnings > 0) console.log(`  (plus ${warnings} warning${warnings === 1 ? '' : 's'})`);
}

process.exit(issues > 0 ? 1 : 0);
