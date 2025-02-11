import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: 'bundle-analysis.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    minify: 'esbuild',
    treeshake: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['jwt-decode'],
  },
});
