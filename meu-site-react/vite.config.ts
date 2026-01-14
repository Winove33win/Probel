import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  publicDir: path.resolve(__dirname, '../public'),
  build: {
    outDir: 'dist',
  },
});
