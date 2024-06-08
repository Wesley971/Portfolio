import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Assurez-vous que cela correspond au basename utilisé dans votre routeur
});
