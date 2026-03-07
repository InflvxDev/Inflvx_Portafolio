// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  image: {
    // passthroughImageService: no requiere sharp. <Image> sigue
    // aportando width/height automáticos, loading y fetchpriority.
    // Para optimización WebP/AVIF en producción: instalar sharp con
    // `pnpm approve-builds` y eliminar esta configuración.
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});