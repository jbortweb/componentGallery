<template>
  <div
    class="profile-card-4 group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 border border-orange-200/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden"
  >
    <!-- Warm background elements -->
    <div
      class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"
    ></div>
    <div
      class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500 delay-100"
    ></div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-orange-600 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10 cursor-pointer"
      aria-label="Ver código del componente ProfileCard4"
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

    <!-- Profile section with warm colors -->
    <div class="relative z-10 text-center mb-6">
      <div class="relative inline-block">
        <!-- Avatar with subtle glow effect -->
        <div class="relative w-24 h-24 mx-auto mb-4">
          <div
            class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-50 blur-lg group-hover:opacity-70 transition-opacity duration-300"
          ></div>
          <img
            src="/mia.webp"
            alt="David Rodriguez"
            class="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Status indicator -->
        <div
          class="absolute -top-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full flex items-center justify-center"
        >
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <h3
        class="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
      >
        David Rodriguez
      </h3>

      <p class="text-orange-600 font-semibold text-sm mb-1">DevOps Engineer</p>
      <p class="text-gray-600 text-sm">Cloud Systems</p>
    </div>

    <!-- Bio section -->
    <div class="relative z-10 mb-6">
      <p class="text-gray-700 text-sm leading-relaxed text-center px-2">
        Especialista en infraestructura cloud y automatización de procesos
      </p>
    </div>

    <!-- Skills with warm badges -->
    <div class="relative z-10 mb-6">
      <div class="flex flex-wrap gap-2 justify-center">
        <span
          class="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200 group-hover:from-orange-200 group-hover:to-red-200 transition-colors duration-300"
        >
          AWS
        </span>
        <span
          class="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200 group-hover:from-orange-200 group-hover:to-red-200 transition-colors duration-300"
        >
          Docker
        </span>
        <span
          class="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200 group-hover:from-orange-200 group-hover:to-red-200 transition-colors duration-300"
        >
          Kubernetes
        </span>
        <span
          class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200"
        >
          +1
        </span>
      </div>
    </div>

    <!-- Social links with warm theme -->
    <div class="relative z-10 flex justify-center space-x-3">
      <a
        href="https://www.linkedin.com/in/jordi-bort/"
        target="_blank"
        class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 border border-orange-200 flex items-center justify-center text-orange-600 hover:from-orange-200 hover:to-red-200 hover:text-orange-700 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group/social"
        aria-label="Perfil de linkedin"
      >
        <!-- LinkedIn Icon -->
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          />
        </svg>
      </a>
      <a
        href="https://github.com/jbortweb"
        target="_blank"
        class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 border border-orange-200 flex items-center justify-center text-orange-600 hover:from-orange-200 hover:to-red-200 hover:text-orange-700 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group/social"
        aria-label="Perfil de github"
      >
        <!-- GitHub Icon -->
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z"
          />
        </svg>
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 border border-orange-200 flex items-center justify-center text-orange-600 hover:from-orange-200 hover:to-red-200 hover:text-orange-700 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group/social"
        aria-label="Perfil de twitter"
      >
        <!-- Twitter Icon -->
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 001.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 00-7 3.74 11.65 11.65 0 01-8.45-4.3 4.1 4.1 0 001.27 5.49A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84"
          />
        </svg>
      </a>
    </div>

    <!-- Floating decorative elements -->
    <div
      class="absolute top-16 right-6 w-3 h-3 bg-orange-300 rounded-full opacity-50 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 delay-200"
    ></div>
    <div
      class="absolute bottom-20 left-8 w-2 h-2 bg-red-300 rounded-full opacity-60 group-hover:opacity-90 group-hover:scale-150 transition-all duration-500 delay-300"
    ></div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Profile Card"
      cardVariant="Warm Geometric Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import { ProfileCard4 } from "../../../data/codes/cards/profiles/ProfileCard4.js";

const codeModal = ref(null);
const cardCode = ProfileCard4;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>