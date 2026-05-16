import { readFile, walkHtml, fail, summary } from './_lib.mjs';
import { resolve, relative } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const BAD_ACTION   = /action\s*=\s*["'][^"']*YOUR_FORM_ID[^"']*["']/i;
const EMPTY_ACTION = /action\s*=\s*["'](#?)["']/i;

let issues = 0;
let formsTotal = 0;

for (const filepath of walkHtml(ROOT)) {
  const rel = relative(ROOT, filepath);
  const content = readFile(filepath);

  // Strip HTML comments before checking
  const stripped = content.replace(/<!--[\s\S]*?-->/g, '');

  const lines = stripped.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/<form[\s>]/i.test(line)) formsTotal++;

    if (BAD_ACTION.test(line)) {
      const match = line.match(/action\s*=\s*["']([^"']+)["']/i);
      const val = match ? match[1] : line.trim();
      fail(`Unfilled form endpoint`, [`${rel}:${i + 1}  action="${val}"`]);
      issues++;
    } else if (/<form[\s>]/i.test(line) && EMPTY_ACTION.test(line)) {
      fail(`Empty or hash action on <form>`, [`${rel}:${i + 1}  ${line.trim()}`]);
      issues++;
    }
  }
}

if (issues === 0) {
  console.log(`check:forms: PASS (${formsTotal} form${formsTotal === 1 ? '' : 's'} verified)`);
} else {
  summary('check:forms', issues);
}

process.exit(issues > 0 ? 1 : 0);
