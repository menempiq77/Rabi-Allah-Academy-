import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://menempiq77.github.io/Rabi-Allah-Academy-/ on GitHub Pages.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
