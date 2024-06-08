import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Remplacez 'mon-portefeuille' par le nom de votre dépôt GitHub
});
