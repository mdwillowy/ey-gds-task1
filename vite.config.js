import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ey-gds-task1/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    host: 'localhost',
  },
});
