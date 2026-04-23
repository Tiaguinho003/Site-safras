import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
  });

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const h1 = await page.locator('#hero-titulo').boundingBox();
  if (h1) {
    const shot = await page.screenshot({
      clip: {
        x: Math.max(0, h1.x - 30),
        y: Math.max(0, h1.y - 30),
        width: Math.min(1600, h1.width + 60),
        height: h1.height + 60,
      },
    });
    await writeFile('/tmp/title-hd.png', shot);
    console.log(`title: x=${h1.x} y=${h1.y} w=${h1.width} h=${h1.height}`);
  }
} finally {
  await browser.close();
}
