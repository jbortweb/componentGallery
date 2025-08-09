import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    strictPort: false
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue-vendor'
            }
            return 'vendor'
          }
          if (id.includes('/components/cards/')) {
            return 'cards'
          }
          if (id.includes('/components/headfoot/')) {
            return 'layout'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})


