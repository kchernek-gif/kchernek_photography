import { join } from 'node:path';
import { processImages } from './_image-pipeline.mjs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const dryRun = process.argv.includes('--dry-run');

const FOLDERS = [
  'Cowgirl-Swimwear',
  'Editorial_Studio',
  'Studio_Black_White',
  'Flower-Swimwear',
];

// Prevents generated -800w.jpg / -1200w.jpg / -1600w.jpg from being
// re-processed as source images on subsequent runs (webp variants are
// already safe — .webp is not in SOURCE_EXTENSIONS).
const sourceFilter = (filePath) => !/-\d+w\.(jpg|jpeg)$/i.test(filePath);

let grandSource   = 0;
let grandVariants = 0;
let grandBytes    = 0;

for (const folder of FOLDERS) {
  console.log(`\n=== Image pipeline: shoots (${folder}) ===`);
  const dir = join(ROOT, 'portfolio-images', folder);

  try {
    const stats = await processImages({
      sourceDir:       dir,
      outputDir:       dir,
      widths:          [800, 1200, 1600],
      jpgQuality:      80,
      webpQuality:     78,
      dryRun,
      skipExisting:    true,
      preserveSubdirs: false,
      sourceFilter,
    });

    grandSource   += stats.totalSourceProcessed;
    grandVariants += stats.totalOutputWritten;
    grandBytes    += stats.totalBytes;
  } catch (err) {
    console.error(`  ERROR processing ${folder}: ${err.message}`);
    process.exit(1);
  }
}

console.log('\n=== Shoots pipeline: all folders complete ===');
console.log(`Total source images:    ${grandSource}`);
console.log(`Total variants written: ${grandVariants}`);
if (!dryRun) {
  const mb = (grandBytes / (1024 * 1024)).toFixed(1);
  console.log(`Total bytes written:    ${mb} MB`);
}
