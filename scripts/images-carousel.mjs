import { join } from 'node:path';
import { processImages } from './_image-pipeline.mjs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const dryRun = process.argv.includes('--dry-run');

console.log('=== Image pipeline: carousel ===');

try {
  await processImages({
    sourceDir:       join(ROOT, 'portfolio-images/_source/carousel'),
    outputDir:       join(ROOT, 'portfolio-images/carousel'),
    widths:          [1200, 1800, 2400],
    jpgQuality:      80,
    webpQuality:     78,
    dryRun,
    skipExisting:    true,
    preserveSubdirs: false,
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
