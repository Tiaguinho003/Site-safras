import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 1,
  });

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  const shot = await page.screenshot({
    clip: { x: 0, y: 0, width: 1600, height: 900 },
  });
  await writeFile('/tmp/hero-now.png', shot);
  console.log('saved /tmp/hero-now.png');
} finally {
  await browser.close();
}
