<template>
  <div
    class="article-card-4 group relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl shadow-lg border border-emerald-200/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
  >
    <!-- Nature-inspired background elements -->
    <div
      class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"
    ></div>
    <div
      class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 delay-100"
    ></div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10 cursor-pointer"
      aria-label="Ver código del componente ArticleCard4"
      title="Ver código del componente"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    </button>

    <!-- Article image with nature effect -->
    <div class="relative mb-6">
      <div class="overflow-hidden rounded-t-2xl">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"
        ></div>
      </div>

      <!-- Floating leaves decoration -->
      <div
        class="absolute top-4 left-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div
          class="leaf w-6 h-6 bg-emerald-400/40 rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-500"
        ></div>
      </div>
      <div
        class="absolute bottom-4 right-4 opacity-40 group-hover:opacity-80 transition-opacity duration-500 delay-100"
      >
        <div
          class="leaf w-4 h-4 bg-teal-400/50 rounded-full transform -rotate-12 group-hover:-rotate-45 transition-transform duration-500"
        ></div>
      </div>
    </div>

    <div class="p-6 pt-0">
      <!-- Header with organic style -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="flex -space-x-1">
            <span
              v-for="tag in article.tags.slice(0, 2)"
              :key="tag"
              class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200 group-hover:bg-emerald-200 transition-colors duration-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="text-xs text-emerald-600 font-medium">
          {{ article.readTime }}
        </div>
      </div>

      <!-- Title with organic typography -->
      <h3
        class="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-emerald-700 transition-colors duration-300"
      >
        {{ article.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ article.excerpt }}
      </p>

      <!-- Author info with nature theme -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm"
          >
            {{ article.author.charAt(0) }}
          </div>
          <div>
            <p class="text-sm font-medium text-gray-800">
              {{ article.author }}
            </p>
            <p class="text-xs text-gray-500">{{ article.date }}</p>
          </div>
        </div>

        <!-- Engagement stats -->
        <div class="flex items-center space-x-4 text-xs text-gray-500">
          <div
            class="flex items-center space-x-1 hover:text-emerald-600 transition-colors duration-300"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
            <span>{{ article.likes }}</span>
          </div>
          <div
            class="flex items-center space-x-1 hover:text-emerald-600 transition-colors duration-300"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>{{ article.comments }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Organic border effect -->
    <div
      class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-700 ease-out rounded-full"
    ></div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Article Card"
      cardVariant="Natural Reading Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../CodeModal.vue";
import { cardCodes } from "../../data/cardCodes.js";

defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ArticleCard4;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.leaf {
  border-radius: 50% 0 50% 50%;
}
</style>