import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    // Optimización de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar Vue y Vue Router en su propio chunk
          vue: ['vue', 'vue-router'],
          // Separar los componentes por categorías
          'cards-components': [
            './src/components/cards/articles/ArticleCard1.vue',
            './src/components/cards/articles/ArticleCard2.vue',
            './src/components/cards/articles/ArticleCard3.vue',
            './src/components/cards/articles/ArticleCard4.vue',
            './src/components/cards/articles/ArticleCard5.vue',
            './src/components/cards/articles/ArticleCard6.vue',
            './src/components/cards/products/ProductCard1.vue',
            './src/components/cards/products/ProductCard2.vue',
            './src/components/cards/products/ProductCard3.vue',
            './src/components/cards/products/ProductCard4.vue',
            './src/components/cards/products/ProductCard5.vue',
            './src/components/cards/products/ProductCard6.vue',
            './src/components/cards/profiles/ProfileCard1.vue',
            './src/components/cards/profiles/ProfileCard2.vue',
            './src/components/cards/profiles/ProfileCard3.vue',
            './src/components/cards/profiles/ProfileCard4.vue',
            './src/components/cards/profiles/ProfileCard5.vue',
            './src/components/cards/profiles/ProfileCard6.vue'
          ],
          // Separar headers y footers
          'layout-components': [
            './src/components/headfoot/headers/Header1.vue',
            './src/components/headfoot/headers/Header2.vue',
            './src/components/headfoot/headers/Header3.vue',
            './src/components/headfoot/headers/Header4.vue',
            './src/components/headfoot/headers/Header5.vue',
            './src/components/headfoot/headers/Header6.vue',
            './src/components/headfoot/footers/Footer1.vue',
            './src/components/headfoot/footers/Footer2.vue',
            './src/components/headfoot/footers/Footer3.vue',
            './src/components/headfoot/footers/Footer4.vue',
            './src/components/headfoot/footers/Footer5.vue',
            './src/components/headfoot/footers/Footer6.vue'
          ]
        }
      }
    },
    // Aumentar el límite de advertencia a 1000 kB
    chunkSizeWarningLimit: 1000
  }
})
