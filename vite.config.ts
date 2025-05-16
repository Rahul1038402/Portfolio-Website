import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
    server: {
    allowedHosts: ['c41c-2405-201-403c-40d6-512e-ecb-1632-60b7.ngrok-free.app'],
    // Alternatively, allow all hosts:
    // allowedHosts: 'all'
  },
})
