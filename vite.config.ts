import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ViteStarter',
      fileName: (format) => `vite-starter.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled into your library
      external: [],
      output: {
        // Global variables to use in UMD build for externalized deps
        globals: {},
      },
    },
  },
  plugins: [dts()],
});
