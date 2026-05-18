import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    proxy: {
      '/exchange': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
