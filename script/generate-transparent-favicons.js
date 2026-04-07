import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = path.resolve('client', 'public');
const sourcePath = path.resolve('client', 'public', 'favicon.svg');
const outputPaths = {
  png32: path.join(root, 'favicon-32x32.png'),
  png16: path.join(root, 'favicon-16x16.png'),
  png192: path.join(root, 'android-chrome-192x192.png'),
  png512: path.join(root, 'android-chrome-512x512.png'),
  apple: path.join(root, 'apple-touch-icon.png'),
  ico: path.join(root, 'favicon.ico'),
};

async function createIcon(size, outputPath) {
  const buffer = await sharp(sourcePath)
    .resize({ width: size, height: size, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp(buffer).png().toFile(outputPath);
  console.log('Saved', outputPath);
  return outputPath;
}

async function main() {
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source file not found: ${sourcePath}`);
  }

  const png32 = await createIcon(32, outputPaths.png32);
  const png16 = await createIcon(16, outputPaths.png16);
  const png192 = await createIcon(192, outputPaths.png192);
  const png512 = await createIcon(512, outputPaths.png512);
  const apple = await createIcon(180, outputPaths.apple);
  const icoBuffer = await pngToIco([png16, png32]);
  fs.writeFileSync(outputPaths.ico, icoBuffer);
  console.log('Saved', outputPaths.ico);
}

main().catch((err) => {
  console.error(err?.message ?? err);
  if (err?.stack) console.error(err.stack);
  process.exit(1);
});