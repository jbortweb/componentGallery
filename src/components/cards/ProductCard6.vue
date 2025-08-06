<template>
  <div class="product-card-6 group relative bg-black rounded-2xl overflow-hidden border border-cyan-500/30 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
    <!-- Neon grid background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-8 grid-rows-8 h-full w-full">
        <div v-for="i in 64" :key="i" class="border border-cyan-500/20 animate-pulse" :style="`animation-delay: ${i * 0.1}s`"></div>
      </div>
    </div>

    <!-- Scanning line effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="scan-line absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
    </div>

    <!-- Code button -->
    <button 
      @click="showCode"
      class="absolute top-4 right-4 bg-cyan-600/80 hover:bg-cyan-500 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 border border-cyan-400/50 z-10 shadow-lg shadow-cyan-500/50"
      aria-label="Ver código del componente ProductCard6"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="relative z-10 p-6">
      <!-- Neon product image -->
      <div class="relative mb-6">
        <div class="absolute inset-0 bg-cyan-500/20 blur-xl rounded-xl group-hover:bg-cyan-400/30 transition-colors duration-500"></div>
        <img 
          :src="product.image" 
          :alt="product.title"
          class="relative z-10 w-full h-48 object-cover rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/30 transition-all duration-500 filter contrast-125 saturate-110"
        />
        <!-- Holographic overlay -->
        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl mix-blend-overlay"></div>
        
        <!-- Corner accents -->
        <div class="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
        <div class="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
        <div class="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
        <div class="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
      </div>

      <!-- Cyberpunk content -->
      <div class="space-y-4">
        <!-- Category and status -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span class="text-cyan-400 text-xs font-mono uppercase tracking-wider">{{ product.category }}</span>
          </div>
          <div class="flex items-center space-x-2 text-cyan-300">
            <span class="text-xs font-mono">RATING:</span>
            <span class="text-sm font-bold text-cyan-400">{{ product.rating }}/5</span>
          </div>
        </div>

        <!-- Glitch title effect -->
        <div class="relative">
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 font-mono">
            {{ product.title }}
          </h3>
          <!-- Glitch overlay -->
          <h3 class="absolute inset-0 text-xl font-bold text-cyan-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0.5 translate-y-0.5 mix-blend-multiply">
            {{ product.title }}
          </h3>
        </div>

        <!-- Description with terminal styling -->
        <div class="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-3">
          <div class="flex items-center space-x-2 mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-cyan-400 text-xs font-mono ml-auto">product.info</span>
          </div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">
            > {{ product.description }}
          </p>
        </div>

        <!-- Price and action with neon effect -->
        <div class="flex items-center justify-between pt-4 border-t border-cyan-500/30">
          <div class="space-y-1">
            <p class="text-2xl font-bold text-cyan-400 font-mono glow-text">{{ product.price }}</p>
            <p class="text-xs text-gray-400 font-mono">{{ product.reviews }} reviews.log</p>
          </div>
          
          <button class="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-300 hover:scale-105 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/50">
            BUY.exe
          </button>
        </div>
      </div>
    </div>

    <!-- Animated border glow -->
    <div class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: xor;"></div>
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
  showCodeModal('ProductCard6')
}
</script>

<style scoped>
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400px); }
}

.animate-scan {
  animation: scan 3s ease-in-out infinite;
}

.glow-text {
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
}

/* Cyberpunk grid animation */
.grid div:nth-child(odd) {
  animation-duration: 2s;
}

.grid div:nth-child(even) {
  animation-duration: 3s;
}
</style>