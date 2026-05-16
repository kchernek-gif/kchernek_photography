import { readFile, walkHtml, fail, summary } from './_lib.mjs';
import { resolve, relative, join, normalize, basename } from 'node:path';
import { existsSync } from 'node:fs';

const ROOT    = resolve(import.meta.dirname, '..');
const SITEMAP = join(ROOT, 'sitemap.xml');
const SKIP_FILE = /^google[a-z0-9]+\.html$/i;

function parseSitemapLocs(xml) {
  const locs = [];
  const re = /<loc>([\s\S]*?)<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) locs.push(m[1].trim());
  return locs;
}

function urlToFilePath(url) {
  const path = url.replace(/^https?:\/\/[^/]+/, '');
  if (path === '/' || path === '') return join(ROOT, 'index.html');
  return join(ROOT, path.replace(/\/$/, ''));
}

const locs = parseSitemapLocs(readFile(SITEMAP));

const sitemapPaths = new Set();
const missingFromDisk = [];

for (const loc of locs) {
  const fsPath = urlToFilePath(loc);
  sitemapPaths.add(normalize(fsPath));
  if (!existsSync(fsPath)) {
    missingFromDisk.push({ loc, rel: relative(ROOT, fsPath) });
  }
}

const missingFromSitemap = [];

for (const filepath of walkHtml(ROOT)) {
  if (SKIP_FILE.test(basename(filepath))) continue;
  if (!sitemapPaths.has(normalize(filepath))) {
    missingFromSitemap.push(relative(ROOT, filepath));
  }
}

const issues = missingFromDisk.length + missingFromSitemap.length;

if (missingFromDisk.length > 0) {
  fail('In sitemap.xml but missing from disk:', missingFromDisk.map(e => `${e.loc}  →  ${e.rel}`));
}
if (missingFromSitemap.length > 0) {
  fail('On disk but missing from sitemap.xml:', missingFromSitemap);
}

if (issues === 0) {
  console.log(`check:sitemap: PASS (sitemap.xml matches disk — ${locs.length} URLs)`);
} else {
  summary('check:sitemap', issues);
}

process.exit(issues > 0 ? 1 : 0);
