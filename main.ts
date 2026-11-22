/**
 * Broadsheet News Image Entry Handler
 * 
 * Delivers the compiled broadsheet entry image to the designated output path
 * for the make.fun system. Built using Node 22 native modules.
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
