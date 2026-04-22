import sharp from "sharp";

const files = [
  "/mnt/c/Users/flavi/OneDrive/Imagens/Instagram_Safras/Safras-logos/Safras-logotipo.png",
  "/mnt/c/Users/flavi/OneDrive/Imagens/Instagram_Safras/Safras-logos/Safras-logo-ori.png",
];

function toHex(r, g, b) {
  return "#" + [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
}

async function analyze(path) {
  const { data } = await sharp(path)
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });

  const colors = new Map();
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    if (a < 200) continue;
    if (r > 240 && g > 240 && b > 240) continue;
    if (r < 15 && g < 15 && b < 15) continue;
    // Quantize to nearest 4 to merge near-identical colors
    const qr = Math.round(r / 4) * 4;
    const qg = Math.round(g / 4) * 4;
    const qb = Math.round(b / 4) * 4;
    const key = `${qr},${qg},${qb}`;
    colors.set(key, (colors.get(key) || 0) + 1);
  }

  return [...colors.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([rgb, count]) => {
      const [r, g, b] = rgb.split(",").map(Number);
      return { hex: toHex(r, g, b), count, rgb: `rgb(${r},${g},${b})` };
    });
}

for (const f of files) {
  console.log(`\n=== ${f.split("/").pop()} ===`);
  const top = await analyze(f);
  for (const c of top) {
    console.log(`  ${c.hex}  ${c.rgb.padEnd(20)}  pixels: ${c.count}`);
  }
}
