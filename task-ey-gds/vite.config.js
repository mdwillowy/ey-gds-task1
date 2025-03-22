import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  serve: {
    port: 5173,
    host: 'localhost',
  },
  public: {
    directory: 'public',
  },
});