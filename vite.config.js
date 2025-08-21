import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/My-portfolio/",   // 👈 must match your repo name
  plugins: [tailwindcss()],
})