import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mon-portefeuille/',  // Remplacez par le nom de votre repository GitHub
});
