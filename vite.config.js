import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MahnoorMughal/',   // ← repo name exactly (case-sensitive)
  server: {
    port: 3000,
    open: true
  }
})