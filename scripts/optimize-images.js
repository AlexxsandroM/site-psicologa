import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminAvif from 'imagemin-avif';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

async function optimizeImages() {
  console.log('🖼️  Otimizando imagens para WebP e AVIF...');

  try {
    // Convert to WebP
    await imagemin([`${assetsDir}/*.{png,jpg,jpeg}`], {
      destination: assetsDir,
      plugins: [
        imageminWebp({ quality: 80 })
      ]
    });
    console.log('✅ Imagens convertidas para WebP');

    // Convert to AVIF
    await imagemin([`${assetsDir}/*.{png,jpg,jpeg}`], {
      destination: assetsDir,
      plugins: [
        imageminAvif({ quality: 65 })
      ]
    });
    console.log('✅ Imagens convertidas para AVIF');

    console.log('🎉 Otimização concluída!');
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error);
    process.exit(1);
  }
}

optimizeImages();
