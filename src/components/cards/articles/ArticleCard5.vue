<template>
  <div
    class="article-card-5 group relative bg-white rounded-none shadow-xl border-l-4 border-red-500 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-red-600"
  >
    <!-- Magazine-style header stripe -->
    <div
      class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
    ></div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white p-3 rounded-none transition-all duration-300 hover:scale-110 shadow-lg z-10 cursor-pointer"
      aria-label="Ver código del componente ArticleCard5"
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

    <div class="p-6 pt-8">
      <!-- Magazine-style header -->
      <div class="flex flex-wrap gap-2">
        <span
          class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:bg-slate-200 transition-colors duration-300"
        >
          DevOps
        </span>
        <span
          class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:bg-slate-200 transition-colors duration-300"
        >
          CI/CD
        </span>
        <span
          class="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:bg-slate-200 transition-colors duration-300"
        >
          Automation
        </span>
      </div>
      <!-- Bold magazine title -->
      <h3
        class="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300 uppercase tracking-tight"
      >
        DevOps: Automatización y CI/CD
      </h3>

      <!-- Magazine-style image -->
      <div class="relative mb-6 -mx-6">
        <img
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop"
          alt="DevOps: Automatización y CI/CD"
          class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Bold overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>
        <div class="absolute bottom-4 left-6 right-6">
          <p class="text-white text-sm leading-relaxed font-medium">
            Implementa pipelines de CI/CD efectivos para tu equipo
          </p>
        </div>
      </div>

      <!-- Magazine-style author section -->
      <div class="border-t-2 border-red-500 pt-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div
              class="w-12 h-12 bg-red-500 text-white font-black text-lg flex items-center justify-center"
            >
              DT
            </div>
            <div>
              <p
                class="font-bold text-gray-900 uppercase text-sm tracking-wide"
              >
                DevOps Pro
              </p>
              <p class="text-xs text-gray-500 uppercase font-semibold">
                Contributing Writer
              </p>
            </div>
          </div>

          <!-- Bold engagement stats -->
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <p class="text-xl font-black text-red-500">245</p>
              <p class="text-xs text-gray-500 uppercase font-bold">Likes</p>
            </div>
            <div class="text-center">
              <p class="text-xl font-black text-red-500">38</p>
              <p class="text-xs text-gray-500 uppercase font-bold">Comments</p>
            </div>
          </div>
        </div>

        <!-- Magazine-style action buttons -->
        <div class="mt-6 flex justify-between items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-black text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            Leer más
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            class="text-red-500 hover:text-red-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300 cursor-pointer"
          >
            + Artículos
          </a>
        </div>
      </div>

      <!-- Magazine corner fold effect -->
      <div
        class="absolute top-0 right-0 w-8 h-8 bg-gray-200 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-red-100 transition-colors duration-300"
      ></div>
    </div>

    <!-- Magazine spine effect -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-400 group-hover:w-2 transition-all duration-300"
    ></div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Article Card"
      cardVariant="Magazine Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import { ArticleCard5 } from "../../../data/codes/cards/articles/ArticleCard5.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = ArticleCard5;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>