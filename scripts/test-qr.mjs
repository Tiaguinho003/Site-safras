import jsQR from 'jsqr';
import sharp from 'sharp';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'qr-codes');
const EXPECTED = 'https://safrasenegocios.com.br/qr';

async function decodePng(path) {
  const { data, info } = await sharp(path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const clamped = new Uint8ClampedArray(data.buffer, data.byteOffset, data.length);
  return jsQR(clamped, info.width, info.height, { inversionAttempts: 'dontInvert' });
}

async function main() {
  const files = (await readdir(OUT_DIR))
    .filter((f) => f.endsWith('.png'))
    .sort();
  let allOk = true;
  console.log(`Testando ${files.length} PNGs (esperado: "${EXPECTED}")\n`);
  for (const f of files) {
    const full = resolve(OUT_DIR, f);
    try {
      const result = await decodePng(full);
      if (!result) {
        console.log(`  ✗ ${f.padEnd(32)} ILEGÍVEL`);
        allOk = false;
      } else if (result.data === EXPECTED) {
        console.log(`  ✓ ${f.padEnd(32)} OK (${result.data})`);
      } else {
        console.log(`  ✗ ${f.padEnd(32)} URL ERRADA: ${result.data}`);
        allOk = false;
      }
    } catch (err) {
      console.log(`  ✗ ${f.padEnd(32)} ERRO: ${err.message}`);
      allOk = false;
    }
  }
  if (!allOk) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
