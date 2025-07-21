// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/myshop/', // Replace 'myshop' with your repo name
  plugins: [react()],
});
