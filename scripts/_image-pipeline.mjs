import { existsSync, mkdirSync, statSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, basename, extname, dirname, relative } from 'node:path';
import sharp from 'sharp';

const SOURCE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

async function* walkDir(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

export async function processImages(config) {
  const {
    sourceDir,
    outputDir,
    widths,
    jpgQuality,
    webpQuality,
    dryRun = false,
    skipExisting = true,
    preserveSubdirs = false,
  } = config;

  let totalSourceProcessed = 0;
  let totalOutputWritten = 0;
  let totalOutputSkipped = 0;
  let totalBytes = 0;

  for await (const sourcePath of walkDir(sourceDir)) {
    const ext = extname(sourcePath).toLowerCase();
    if (!SOURCE_EXTENSIONS.has(ext)) {
      console.log(`  skip (not an image): ${relative(sourceDir, sourcePath)}`);
      continue;
    }

    const base = basename(sourcePath, ext);
    const relDir = relative(sourceDir, dirname(sourcePath));
    const targetDir = preserveSubdirs && relDir
      ? join(outputDir, relDir)
      : outputDir;

    if (!dryRun) {
      mkdirSync(targetDir, { recursive: true });
    }

    totalSourceProcessed++;
    const variantLog = [];

    for (const width of widths) {
      const variants = [
        { suffix: '.jpg',  options: { quality: jpgQuality } },
        { suffix: '.webp', options: { quality: webpQuality } },
      ];

      for (const { suffix, options } of variants) {
        const outName = `${base}-${width}w${suffix}`;
        const outPath = join(targetDir, outName);

        if (skipExisting && existsSync(outPath)) {
          totalOutputSkipped++;
          variantLog.push(`${width}w${suffix} (skipped)`);
          continue;
        }

        if (dryRun) {
          variantLog.push(`${width}w${suffix} (would write)`);
          continue;
        }

        try {
          const pipeline = sharp(sourcePath)
            .withMetadata({})
            .toColorspace('srgb')
            .resize({ width, fit: 'inside', withoutEnlargement: true });

          if (suffix === '.webp') {
            await pipeline.webp(options).toFile(outPath);
          } else {
            await pipeline.jpeg(options).toFile(outPath);
          }

          const size = statSync(outPath).size;
          totalOutputWritten++;
          totalBytes += size;
          variantLog.push(`${width}w${suffix} (${formatBytes(size)})`);
        } catch (err) {
          console.error(`  ERROR writing ${outName}: ${err.message}`);
        }
      }
    }

    const rel = relative(sourceDir, sourcePath);
    console.log(`  [${rel}] → ${variantLog.join(', ')}`);
  }

  const skippedNote = totalOutputSkipped > 0
    ? `, ${totalOutputSkipped} skipped (already existed)`
    : '';
  console.log(`\nProcessed: ${totalSourceProcessed} source image${totalSourceProcessed !== 1 ? 's' : ''}`);
  console.log(`Output:    ${totalOutputWritten} file${totalOutputWritten !== 1 ? 's' : ''} written${skippedNote}`);
  if (!dryRun) {
    console.log(`Total size: ${formatBytes(totalBytes)}`);
  }
}
