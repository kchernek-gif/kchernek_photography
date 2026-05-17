import { readFile, walkHtml } from './_lib.mjs';
import { resolve, relative } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const CHECKS = [
  { label: 'lowercase "i" pronoun', re: /(?<![<\w-])(?<!\w)\bi\b(?=\s+[a-z])/g },
  { label: '"really" intensifier',  re: /\breally\b/gi },
  { label: '"very" intensifier',    re: /\bvery\b/gi },
  { label: '"pretty" intensifier',  re: /\bpretty\b/gi },
  { label: '"though" sentence-end', re: /\bthough[.!?]/gi },
  { label: '"elevated"',            re: /\belevated\b/gi },
  { label: '"polished"',            re: /\bpolished\b/gi },
  { label: '"stunning"',            re: /\bstunning\b/gi },
  { label: '"premium"',             re: /\bpremium\b/gi },
  { label: '"luxury"',              re: /\bluxury\b/gi },
  { label: '"exclusive"',           re: /\bexclusive\b/gi },
  { label: '"curated"',             re: /\bcurated\b/gi },
  { label: '"bespoke"',             re: /\bbespoke\b/gi },
  { label: '"effortless"',          re: /\beffortless\b/gi },
  { label: '"capture"/"captured"',  re: /\bcapture[ds]?\b/gi },
];

const findings = [];

for (const filepath of walkHtml(ROOT)) {
  const rel = relative(ROOT, filepath);
  const content = readFile(filepath);
  // Strip <style>, <script>, and HTML comments entirely (contents and tags)
  // so CSS property values, JS string literals, and dev notes inside comments
  // don't trigger voice patterns. Then strip remaining individual tags so the
  // patterns only match visible prose.
  const text = content
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ');
  const lines = text.split('\n');

  for (const { label, re } of CHECKS) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      re.lastIndex = 0;
      if (re.test(line)) {
        findings.push({ label, file: rel, lineNum: i + 1, context: line.slice(0, 120) });
      }
    }
  }
}

console.log(`check:voice: PASS (${findings.length} flagged phrase${findings.length === 1 ? '' : 's'} for manual review)`);

for (const { label, file, lineNum, context } of findings) {
  console.log(`  [${label}]  ${file}:${lineNum}`);
  console.log(`    ${context}`);
}

process.exit(0);
