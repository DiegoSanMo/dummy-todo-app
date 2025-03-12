import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dummy-todo-app/',
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "assets",
  },
})
