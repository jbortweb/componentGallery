<template>
  <div
    class="article-card-6 group relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/25 hover:border-purple-400/50"
  >
    <!-- Futuristic grid overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-6 grid-rows-6 h-full w-full">
        <div
          v-for="i in 36"
          :key="i"
          class="border border-purple-400/20 animate-pulse"
          :style="`animation-delay: ${i * 0.1}s`"
        ></div>
      </div>
    </div>

    <!-- Digital scan lines -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"
    ></div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-purple-600/80 hover:bg-purple-500 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 border border-purple-400/50 z-60 shadow-lg cursor-pointer"
      aria-label="Ver código del componente ArticleCard6"
      title="Ver código del componente"
    >
      <svg
        class="w-4 h-4 pointer-events-none"
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

    <div class="relative z-10 p-6">
      <!-- Futuristic header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div class="text-white text-xs font-mono uppercase tracking-wider">
            Article.exe
          </div>
        </div>
        <div
          class="flex items-center space-x-2 text-xs text-purple-300 font-mono"
        >
          <span>Runtime:</span>
          <span class="text-purple-400">{{ article.readTime }}</span>
        </div>
      </div>

      <!-- Holographic image -->
      <div class="relative mb-6">
        <div
          class="absolute inset-0 bg-purple-500/20 blur-xl rounded-lg group-hover:bg-purple-400/30 transition-colors duration-500"
        ></div>
        <img
          :src="article.image"
          :alt="article.title"
          class="relative z-10 w-full h-40 object-cover rounded-lg border border-purple-500/50 shadow-lg filter contrast-125 saturate-110 group-hover:shadow-purple-500/50 transition-all duration-500"
        />
        <!-- Holographic overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-cyan-500/10 to-pink-500/10 rounded-lg mix-blend-overlay"
        ></div>

        <!-- Corner brackets -->
        <div
          class="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400 opacity-70"
        ></div>
        <div
          class="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400 opacity-70"
        ></div>
        <div
          class="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400 opacity-70"
        ></div>
        <div
          class="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400 opacity-70"
        ></div>
      </div>

      <!-- Digital content -->
      <div class="space-y-4">
        <!-- Tags as system labels -->
        <div class="flex items-center space-x-2">
          <span class="text-purple-400 text-xs font-mono">Tags:</span>
          <div class="flex space-x-2">
            <span
              v-for="tag in article.tags.slice(0, 2)"
              :key="tag"
              class="px-2 py-1 bg-purple-900/50 text-purple-300 group-hover:text-white text-xs font-mono border border-purple-500/30 rounded hover:border-purple-400/50 transition-colors duration-300"
            >
              #{{ tag.toLowerCase().replace(" ", "_") }}
            </span>
          </div>
        </div>

        <!-- Simple title without glitch effect -->
        <div class="relative">
          <h3
            class="text-xl font-bold text-white group-hover:text-white transition-colors duration-300 font-mono leading-tight"
          >
            {{ article.title }}
          </h3>
        </div>

        <!-- Terminal-style description -->
        <div class="bg-black/30 border border-purple-500/30 rounded-lg p-4">
          <div class="flex items-center space-x-2 mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-purple-400 text-xs font-mono ml-auto"
              >content.txt</span
            >
          </div>
          <p
            class="text-gray-300 group-hover:text-white text-sm font-mono leading-relaxed"
          >
            > {{ article.excerpt }}
          </p>
        </div>

        <!-- Author and stats in terminal style -->
        <div
          class="flex items-center justify-between pt-4 border-t border-purple-500/30"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded border border-purple-400/50 flex items-center justify-center text-white font-mono font-bold text-xs shadow-lg"
            >
              {{
                article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              }}
            </div>
            <div>
              <p
                class="text-purple-300 group-hover:text-white font-mono text-sm"
              >
                {{ article.author }}
              </p>
              <p class="text-gray-400 group-hover:text-white text-xs font-mono">
                {{ article.date }}
              </p>
            </div>
          </div>

          <!-- Digital metrics -->
          <div class="flex items-center space-x-4 text-xs font-mono">
            <div
              class="flex items-center space-x-1 text-purple-400 group-hover:text-white transition-colors duration-300"
            >
              <span class="glow-text">♥</span>
              <span>{{ article.likes }}</span>
            </div>
            <div
              class="flex items-center space-x-1 text-purple-400 group-hover:text-white transition-colors duration-300"
            >
              <span class="glow-text">◊</span>
              <span>{{ article.comments }}</span>
            </div>
          </div>
        </div>

        <!-- Holographic action interface -->
        <div
          class="mt-6 flex justify-between items-center border-t border-purple-800/50 pt-4"
        >
          <a
            :href="article.url"
            target="_blank"
            rel="noopener noreferrer"
            class="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/25 glow-text cursor-pointer"
          >
            [LEER_MÁS]
          </a>
          <a
            :href="article.secondaryUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple-400 hover:text-white font-mono text-xs transition-colors duration-300 glow-text cursor-pointer"
          >
            >_ EXPLORAR
          </a>
        </div>
      </div>
    </div>

    <!-- Animated border effect -->
    <div
      class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style="
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
      "
    ></div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Article Card"
      cardVariant="Futuristic Hologram Style"
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
const cardCode = cardCodes.ArticleCard6;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
.glow-text {
  text-shadow: 0 0 5px currentColor;
}
</style>