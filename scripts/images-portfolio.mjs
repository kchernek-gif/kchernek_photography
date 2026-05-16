import { join } from 'node:path';
import { processImages } from './_image-pipeline.mjs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const dryRun = process.argv.includes('--dry-run');

console.log('=== Image pipeline: portfolio ===');

try {
  await processImages({
    sourceDir:       join(ROOT, 'portfolio-images/_source/portfolio'),
    outputDir:       join(ROOT, 'portfolio-images/portfolio'),
    widths:          [800, 1200, 1600],
    jpgQuality:      80,
    webpQuality:     78,
    dryRun,
    skipExisting:    true,
    preserveSubdirs: true,
  });
} catch (err) {
  console.error(err);
  process.exit(1);
}
