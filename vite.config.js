import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false // Ceci désactivera l'overlay d'erreur si vous préférez
    }
  }
})
