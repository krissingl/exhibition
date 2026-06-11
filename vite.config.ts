import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name for GitHub Pages sub-path hosting
// change to '/' if you configure a custom domain
export default defineConfig({
  plugins: [react()],
  base: '/exhibition/',
})
