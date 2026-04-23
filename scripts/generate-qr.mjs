import QRCode from 'qrcode';
import sharp from 'sharp';
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Buffer } from 'node:buffer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'qr-codes');
const LOGO_SVG_PATH = resolve(ROOT, 'src/assets/branding/safras-logotipo.svg');

const ENCODED_URL = 'https://safrasenegocios.com.br/qr';
const BRAND = '#1f6b3a';
const PAPER = '#ffffff';

const PADDING = 4;
const MODULE_PX = 20;
const DOT_RADIUS_RATIO = 0.5;
const LOGO_RATIO = 0.16;
const LOGO_SAFE_PAD_MODULES = 2;

async function loadLogoInline() {
  const raw = await readFile(LOGO_SVG_PATH, 'utf8');
  const vbMatch = raw.match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/);
  if (!vbMatch) throw new Error('logo SVG sem viewBox');
  const vbW = parseFloat(vbMatch[1]);
  const vbH = parseFloat(vbMatch[2]);
  const inner = raw
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .trim();
  return { inner, vbW, vbH };
}

function renderSVG({ matrix, size, color, background, logo }) {
  const total = size + PADDING * 2;
  const W = total * MODULE_PX;

  const finders = [
    { x: 0, y: 0 },
    { x: size - 7, y: 0 },
    { x: 0, y: size - 7 },
  ];
  const inFinder = (x, y) =>
    finders.some((f) => x >= f.x && x < f.x + 7 && y >= f.y && y < f.y + 7);

  let logoZone = null;
  if (logo) {
    const logoSize = W * LOGO_RATIO;
    const safeZone = logoSize + MODULE_PX * LOGO_SAFE_PAD_MODULES * 2;
    const center = W / 2;
    logoZone = {
      min: center - safeZone / 2,
      max: center + safeZone / 2,
    };
  }
  const inLogoZone = (px, py) =>
    logoZone &&
    px >= logoZone.min &&
    px <= logoZone.max &&
    py >= logoZone.min &&
    py <= logoZone.max;

  const dots = [];
  const r = MODULE_PX * DOT_RADIUS_RATIO;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!matrix[y * size + x]) continue;
      if (inFinder(x, y)) continue;
      const cx = (x + PADDING) * MODULE_PX + MODULE_PX / 2;
      const cy = (y + PADDING) * MODULE_PX + MODULE_PX / 2;
      if (inLogoZone(cx, cy)) continue;
      dots.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" />`);
    }
  }

  const finderSVGs = finders
    .map((f) => {
      const ox = (f.x + PADDING) * MODULE_PX;
      const oy = (f.y + PADDING) * MODULE_PX;
      const outerSize = 7 * MODULE_PX;
      const middleOffset = MODULE_PX;
      const middleSize = 5 * MODULE_PX;
      const innerOffset = 2 * MODULE_PX;
      const innerSize = 3 * MODULE_PX;
      const outerR = MODULE_PX * 1.75;
      const middleR = MODULE_PX * 1.25;
      const innerR = MODULE_PX * 0.75;
      return `
  <rect x="${ox}" y="${oy}" width="${outerSize}" height="${outerSize}" rx="${outerR}" ry="${outerR}" fill="${color}" />
  <rect x="${ox + middleOffset}" y="${oy + middleOffset}" width="${middleSize}" height="${middleSize}" rx="${middleR}" ry="${middleR}" fill="${background}" />
  <rect x="${ox + innerOffset}" y="${oy + innerOffset}" width="${innerSize}" height="${innerSize}" rx="${innerR}" ry="${innerR}" fill="${color}" />`;
    })
    .join('');

  let logoSVG = '';
  if (logo) {
    const logoSize = W * LOGO_RATIO;
    const bgSize = logoSize + MODULE_PX * LOGO_SAFE_PAD_MODULES * 2;
    const bgOffset = (W - bgSize) / 2;
    const logoOffset = (W - logoSize) / 2;
    const bgR = MODULE_PX * 2;
    const scale = logoSize / Math.max(logo.vbW, logo.vbH);
    logoSVG = `
  <rect x="${bgOffset}" y="${bgOffset}" width="${bgSize}" height="${bgSize}" rx="${bgR}" ry="${bgR}" fill="${background}" />
  <g transform="translate(${logoOffset} ${logoOffset}) scale(${scale})">
    ${logo.inner}
  </g>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${W}" width="${W}" height="${W}">
  <rect width="${W}" height="${W}" fill="${background}" />
  ${dots.join('\n  ')}
  ${finderSVGs}${logoSVG}
</svg>
`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  console.log(`QR encoding: ${ENCODED_URL}\n`);

  const logo = await loadLogoInline();
  const qr = QRCode.create(ENCODED_URL, { errorCorrectionLevel: 'H' });
  const size = qr.modules.size;
  const matrix = qr.modules.data;

  const svg = renderSVG({ matrix, size, color: BRAND, background: PAPER, logo });
  const svgPath = resolve(OUT_DIR, 'qr-safras.svg');
  const pngPath = resolve(OUT_DIR, 'qr-safras.png');

  await writeFile(svgPath, svg);
  const png = await sharp(Buffer.from(svg), { density: 300 })
    .resize(1024, 1024)
    .png()
    .toBuffer();
  await writeFile(pngPath, png);

  console.log(`  ✓ qr-safras.svg  (${size}×${size} mod, ECC H, 100% vetor)`);
  console.log(`  ✓ qr-safras.png  (1024×1024, raster pra preview)`);
  console.log(`\nSaídas em: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
