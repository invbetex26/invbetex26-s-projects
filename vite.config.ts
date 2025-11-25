import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Important for correct path resolution on GitHub Pages
  build: {
    outDir: 'dist',
  },
});