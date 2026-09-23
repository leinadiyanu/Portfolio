import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If deploying to GitHub Pages as a project site (username.github.io/repo-name),
  // uncomment and set this to your repo name:
  // base: '/repo-name/',
})
