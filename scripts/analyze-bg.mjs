import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 1,
  });

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Find "café" position
  const cafeBox = await page.evaluate(() => {
    const span = Array.from(document.querySelectorAll('h1 span')).find(
      (s) => s.textContent.trim() === 'café'
    );
    if (!span) return null;
    const r = span.getBoundingClientRect();
    return {
      left: Math.round(r.left),
      top: Math.round(r.top),
      width: Math.round(r.width),
      height: Math.round(r.height),
    };
  });

  if (!cafeBox) {
    console.log('café span not found');
    process.exit(1);
  }

  // Screenshot a wider region around café (to sample bg around the word)
  const pad = 40;
  const regionShot = await page.screenshot({
    clip: {
      x: Math.max(0, cafeBox.left - pad),
      y: Math.max(0, cafeBox.top - pad),
      width: cafeBox.width + pad * 2,
      height: cafeBox.height + pad * 2,
    },
  });
  await writeFile('/tmp/cafe-region.png', regionShot);

  // Analyze colors: sample background around the word (avoid text pixels)
  // Use sharp to get stats
  const { data, info } = await sharp(regionShot)
    .resize(100, 40, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Compute average R G B
  let r = 0,
    g = 0,
    b = 0,
    count = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }
  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);

  console.log(`Average bg around café: rgb(${r}, ${g}, ${b})`);
  console.log(`Hex: #${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
} finally {
  await browser.close();
}
