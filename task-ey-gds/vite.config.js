import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ey-gds-task1/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist', // Output directory for the build
  },
  server: {
    port: 5173, // Port for the development server
    host: 'localhost', // Host for the development server
  },
});