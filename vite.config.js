import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 상대 경로로 빌드해서 GitHub Pages(/my-portfolio/)와 Vercel(/) 어디서든 그대로 동작해요.
export default defineConfig({
  base: './',
  plugins: [react()],
});
