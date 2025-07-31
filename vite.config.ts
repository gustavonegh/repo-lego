import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Necesario para los alias (@/)

export default defineConfig({
  plugins: [react()], // Soporte para React
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Mapea @/ a ./src
      '@/components': path.resolve(__dirname, './src/components') // Mapea @/components a ./src/components
    }
  }
})
