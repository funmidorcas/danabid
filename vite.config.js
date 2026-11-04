import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    fs: {
      strict: false,
      allow: ['..', 'C:/Users/DORCAS/.gemini/antigravity/brain/d153ac53-0df1-4c25-bdea-9c195645710e']
    }
  }
})
