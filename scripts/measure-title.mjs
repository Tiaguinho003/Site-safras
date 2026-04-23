import { chromium } from 'playwright';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 1,
  });

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const measurements = await page.evaluate(() => {
    const h1 = document.getElementById('hero-titulo');
    const find = (txt) =>
      Array.from(h1.querySelectorAll('span')).find(
        (s) => s.textContent.trim() === txt && s.children.length === 0
      );

    const getBox = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        left: Math.round(r.left),
        top: Math.round(r.top),
        right: Math.round(r.right),
        bottom: Math.round(r.bottom),
        width: Math.round(r.width),
        height: Math.round(r.height),
      };
    };

    return {
      trad: getBox(find('Tradição')),
      noMercadoDe: getBox(find('no mercado de')),
      cafe: getBox(find('café')),
    };
  });

  console.log(JSON.stringify(measurements, null, 2));
} finally {
  await browser.close();
}
