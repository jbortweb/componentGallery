<template>
  <div class="article-card-5 group relative bg-white rounded-none shadow-xl border-l-4 border-red-500 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-red-600">
    <!-- Magazine-style header stripe -->
    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
    
    <!-- Code button -->
    <button 
      @click="showCode"
      class="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white p-2 rounded-none transition-all duration-300 hover:scale-110 shadow-lg z-10"
      aria-label="Ver código del componente ArticleCard5"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="p-6 pt-8">
      <!-- Magazine-style header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-1 h-16 bg-red-500"></div>
          <div class="space-y-1">
            <div class="flex space-x-2">
              <span 
                v-for="tag in article.tags.slice(0, 1)" 
                :key="tag"
                class="px-2 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wide"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-xs text-gray-500 uppercase tracking-wide font-semibold">{{ article.readTime }} Read</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-400 uppercase">{{ article.date }}</p>
        </div>
      </div>

      <!-- Bold magazine title -->
      <h3 class="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300 uppercase tracking-tight">
        {{ article.title }}
      </h3>

      <!-- Magazine-style image -->
      <div class="relative mb-6 -mx-6">
        <img 
          :src="article.image" 
          :alt="article.title"
          class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Bold overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-6 right-6">
          <p class="text-white text-sm leading-relaxed font-medium">
            {{ article.excerpt }}
          </p>
        </div>
      </div>

      <!-- Magazine-style author section -->
      <div class="border-t-2 border-red-500 pt-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-red-500 text-white font-black text-lg flex items-center justify-center">
              {{ article.author.split(' ').map(n => n[0]).join('') }}
            </div>
            <div>
              <p class="font-bold text-gray-900 uppercase text-sm tracking-wide">{{ article.author }}</p>
              <p class="text-xs text-gray-500 uppercase font-semibold">Contributing Writer</p>
            </div>
          </div>

          <!-- Bold engagement stats -->
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <p class="text-xl font-black text-red-500">{{ article.likes }}</p>
              <p class="text-xs text-gray-500 uppercase font-bold">Likes</p>
            </div>
            <div class="text-center">
              <p class="text-xl font-black text-red-500">{{ article.comments }}</p>
              <p class="text-xs text-gray-500 uppercase font-bold">Comments</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Magazine corner fold effect -->
      <div class="absolute top-0 right-0 w-8 h-8 bg-gray-200 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-red-100 transition-colors duration-300"></div>
    </div>

    <!-- Magazine spine effect -->
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-400 group-hover:w-2 transition-all duration-300"></div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  article: {
    type: Object,
    required: true
  }
})

const showCodeModal = inject('showCodeModal')

const showCode = () => {
  showCodeModal('ArticleCard5')
}
</script>