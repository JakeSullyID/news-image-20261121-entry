/**
 * Delivery helper script for the daily news image artifact.
 */

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

function deliverEntryImage(): void {
  const sourceUrl = new URL('./entry.png', import.meta.url);
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const targetPath = join(targetDir, 'entry.png');

  mkdirSync(dirname(targetPath), { recursive: true });
  copyFileSync(sourceUrl, targetPath);
  console.log(`Delivered broadsheet entry image successfully to ${targetPath}`);
}

deliverEntryImage();
