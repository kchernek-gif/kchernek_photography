import { readdirSync, readFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const USE_COLOR = process.stdout.isTTY;
const GREEN = USE_COLOR ? '\x1b[32m' : '';
const RED   = USE_COLOR ? '\x1b[31m' : '';
const DIM   = USE_COLOR ? '\x1b[2m'  : '';
const RESET = USE_COLOR ? '\x1b[0m'  : '';

const SKIP_DIRS = new Set(['node_modules', '.git', '.claude', '.agents', 'partials', 'WORKFLOW_ARCHIVE']);

export function* walkHtml(rootDir) {
  function* walk(dir) {
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); }
    catch { return; }
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name)) continue;
        yield* walk(fullPath);
      } else if (entry.isFile() && extname(entry.name) === '.html') {
        const rel = relative(rootDir, fullPath);
        if (rel.toLowerCase().includes('placeholder')) continue;
        yield fullPath;
      }
    }
  }
  yield* walk(rootDir);
}

export function readFile(filepath) {
  return readFileSync(filepath, 'utf8');
}

export function pass(message) {
  console.log(`${GREEN}PASS${RESET}: ${message}`);
}

export function fail(message, lines = []) {
  console.log(`${RED}FAIL${RESET}: ${message}`);
  for (const line of lines) {
    console.log(`  ${DIM}${line}${RESET}`);
  }
}

export function summary(name, failures) {
  const s = failures === 1 ? '' : 's';
  if (failures === 0) {
    console.log(`\n${GREEN}${name}: PASS${RESET}`);
  } else {
    console.log(`\n${RED}${name}: FAIL (${failures} issue${s})${RESET}`);
  }
}
