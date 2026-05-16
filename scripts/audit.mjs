import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

const CHECKS = [
  { name: 'check:forms',        script: 'check-forms.mjs' },
  { name: 'check:placeholders', script: 'check-placeholders.mjs' },
  { name: 'check:links',        script: 'check-links.mjs' },
  { name: 'check:seo',          script: 'check-seo.mjs' },
  { name: 'check:sitemap',      script: 'check-sitemap.mjs' },
  { name: 'check:voice',        script: 'check-voice.mjs', warnOnly: true },
];

let failed = 0;

for (const { name, script, warnOnly } of CHECKS) {
  console.log(`\n${'─'.repeat(48)}`);
  console.log(`Running ${name}…`);
  console.log('─'.repeat(48));

  const result = spawnSync(
    process.execPath,
    [resolve(import.meta.dirname, script)],
    { cwd: ROOT, stdio: 'inherit' }
  );

  if (!warnOnly && result.status !== 0) failed++;
}

console.log(`\n${'═'.repeat(48)}`);
if (failed === 0) {
  console.log('audit: PASS — all checks passed');
} else {
  console.log(`audit: FAIL — ${failed} check${failed === 1 ? '' : 's'} failed`);
}
console.log('═'.repeat(48));

process.exit(failed > 0 ? 1 : 0);
