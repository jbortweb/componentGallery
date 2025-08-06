<template>
  <div class="product-card-5 group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
    <!-- Minimalist top accent -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"></div>
    
    <!-- Code button -->
    <button 
      @click="showCode"
      class="absolute top-4 right-4 bg-gray-900 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg"
      aria-label="Ver código del componente ProductCard5"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <!-- Clean product image -->
    <div class="p-6 pb-4">
      <div class="relative overflow-hidden rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
        <img 
          :src="product.image" 
          :alt="product.title"
          class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <!-- Minimal overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>

    <!-- Product content with clean typography -->
    <div class="px-6 pb-6 space-y-4">
      <!-- Category and rating -->
      <div class="flex items-center justify-between">
        <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">{{ product.category }}</span>
        <div class="flex items-center space-x-1">
          <div class="flex space-x-1">
            <div v-for="star in 5" :key="star" class="w-3 h-3">
              <svg 
                :class="star <= Math.floor(product.rating) ? 'text-gray-900' : 'text-gray-200'" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          <span class="text-sm font-medium text-gray-600 ml-2">{{ product.rating }}</span>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
        {{ product.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Reviews count -->
      <p class="text-xs text-gray-400">{{ product.reviews }} reseñas verificadas</p>

      <!-- Price and action -->
      <div class="flex items-end justify-between pt-4">
        <div>
          <p class="text-3xl font-bold text-gray-900">{{ product.price }}</p>
        </div>
        
        <button class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          Añadir
        </button>
      </div>
    </div>

    <!-- Subtle hover line animation -->
    <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-500 ease-out"></div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const showCodeModal = inject('showCodeModal')

const showCode = () => {
  showCodeModal('ProductCard5')
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>