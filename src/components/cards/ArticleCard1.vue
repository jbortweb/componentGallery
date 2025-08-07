<template>
  <div
    class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-100 relative group"
  >
    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 shadow-lg border border-gray-200 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-gray-700 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </button>

    <!-- Image with overlay -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      ></div>
      <div class="absolute top-4 left-4">
        <span
          class="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold"
        >
          {{ article.readTime }}
        </span>
      </div>
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="text-white text-xl font-bold leading-tight mb-2">
          {{ article.title }}
        </h3>
      </div>
    </div>

    <div class="p-6">
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        {{ article.excerpt }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in article.tags.slice(0, 2)"
          :key="tag"
          class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Author info -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <span class="text-white text-sm font-bold">{{
              article.author.charAt(0)
            }}</span>
          </div>
          <div class="ml-3">
            <p class="text-sm font-semibold text-gray-900">
              {{ article.author }}
            </p>
            <p class="text-xs text-gray-500">{{ formatDate(article.date) }}</p>
          </div>
        </div>
        <button
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      <!-- Stats -->
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-100"
      >
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-red-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
            <span class="text-sm text-gray-600">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-gray-400 mr-1"
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
            <span class="text-sm text-gray-600">{{ article.comments }}</span>
          </div>
        </div>

        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 inline-block cursor-pointer"
        >
          Leer más
        </a>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Article Card"
      cardVariant="Modern Style"
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
const cardCode = cardCodes.ArticleCard1;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>
