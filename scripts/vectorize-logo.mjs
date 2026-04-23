import potrace from 'potrace';
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const INPUT = resolve(ROOT, 'src/assets/branding/safras-logotipo.png');
const OUTPUT = resolve(ROOT, 'src/assets/branding/safras-logotipo.svg');
const BRAND = '#1f6b3a';

const trace = promisify(potrace.trace);

async function main() {
  const flattened = await sharp(INPUT)
    .flatten({ background: '#ffffff' })
    .greyscale()
    .toBuffer();

  const svg = await trace(flattened, {
    turdSize: 2,
    threshold: 180,
    color: BRAND,
    background: 'transparent',
    optTolerance: 0.2,
  });

  await writeFile(OUTPUT, svg);
  console.log(`✓ ${OUTPUT}`);
  console.log(`  tamanho: ${svg.length} bytes`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
