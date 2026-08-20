/* eslint-disable prettier/prettier */
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/planejai/',
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
