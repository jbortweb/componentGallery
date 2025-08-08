<template>
  <div
    class="profile-card-6 group relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-2xl p-6 border border-gray-700/50 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/30"
  >
    <!-- Tech grid background -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid grid-cols-12 grid-rows-12 h-full w-full">
        <div v-for="i in 144" :key="i" class="border border-cyan-500/10"></div>
      </div>
    </div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-cyan-600/80 hover:bg-cyan-500 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 border border-cyan-400/30 z-10 shadow-lg cursor-pointer"
      aria-label="Ver código del componente ProfileCard6"
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

    <!-- Tech-style profile -->
    <div class="relative z-10">
      <!-- Header with terminal styling -->
      <div class="mb-6">
        <div class="flex items-center space-x-2 mb-4">
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span class="text-cyan-400 text-xs font-mono">profile.exe</span>
        </div>

        <!-- Avatar with tech frame -->
        <div class="relative w-24 h-24 mx-auto mb-4">
          <div
            class="absolute inset-0 border-2 border-cyan-500/50 rounded-full"
          ></div>
          <div
            class="absolute -inset-1 border border-cyan-400/30 rounded-full"
          ></div>
          <img
            src="/mia.webp"
            alt="Miguel Santos"
            class="w-full h-full rounded-full object-cover border-2 border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300"
          />

          <!-- Status indicator -->
          <div
            class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-gray-900 rounded-full flex items-center justify-center"
          >
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- User info in terminal style -->
      <div class="space-y-3 mb-6">
        <div class="text-center">
          <p class="text-cyan-400 font-mono text-xs mb-1">$ whoami</p>
          <h3
            class="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors duration-300"
          >
            Miguel Santos
          </h3>
        </div>

        <div class="text-center">
          <p class="text-cyan-400 font-mono text-xs mb-1">$ cat role.txt</p>
          <p class="text-gray-300 font-mono text-sm">Backend Developer</p>
          <p class="text-gray-500 font-mono text-xs">Enterprise Corp</p>
        </div>

        <div class="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-3">
          <p class="text-cyan-400 font-mono text-xs mb-2">$ cat bio.md</p>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">
            Desarrollador backend especializado en arquitecturas escalables y
            microservicios
          </p>
        </div>
      </div>

      <!-- Skills as command output -->
      <div class="mb-6">
        <p class="text-cyan-400 font-mono text-xs mb-2">$ ls skills/</p>
        <div class="flex flex-wrap gap-2">
          <span
            class="px-3 py-1 bg-gray-800/80 text-cyan-300 text-xs font-mono rounded border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-gray-700/80 transition-all duration-300"
          >
            node.js
          </span>
          <span
            class="px-3 py-1 bg-gray-800/80 text-cyan-300 text-xs font-mono rounded border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-gray-700/80 transition-all duration-300"
          >
            python.js
          </span>
          <span
            class="px-3 py-1 bg-gray-800/80 text-cyan-300 text-xs font-mono rounded border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-gray-700/80 transition-all duration-300"
          >
            postgresql.js
          </span>
          <span
            class="px-3 py-1 bg-gray-800/80 text-cyan-300 text-xs font-mono rounded border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-gray-700/80 transition-all duration-300"
          >
            mongodb.js
          </span>
        </div>
      </div>

      <!-- Social connections -->
      <div>
        <p class="text-cyan-400 font-mono text-xs mb-3">$ ls connections/</p>
        <div class="flex justify-center space-x-3">
          <a
            href="https://www.linkedin.com/in/jordi-bort/"
            target="_blank"
            class="w-10 h-10 bg-gray-800/80 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 group/social"
            aria-label="linkedin.link"
          >
            <!-- LinkedIn Icon -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/jbortweb"
            target="_blank"
            class="w-10 h-10 bg-gray-800/80 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 group/social"
            aria-label="github.link"
          >
            <!-- GitHub Icon -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z"
              />
            </svg>
          </a>
          <a
            href="https://portafoliojbortweb.netlify.app/"
            target="_blank"
            class="w-10 h-10 bg-gray-800/80 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 group/social"
            aria-label="stackoverflow.link"
          >
            <!-- Stack Overflow Icon -->
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M15 17v-3h2v5H1v-5h2v3h12zM7.65 3.56l.85 1.94 7.75-3.4-.85-1.94L7.65 3.56zm1.34 3.63l1.47 1.66 6.7-5.93-1.47-1.66-6.7 5.93zm2.22 3.24l1.94 1.09 4.95-8.8-1.94-1.09-4.95 8.8zM15 12h-2v3h2v-3zm-7 0h5v2H8v-2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Subtle tech border glow -->
    <div
      class="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style="
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
      "
    ></div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Profile Card"
      cardVariant="Tech Terminal Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import { ProfileCard6 } from "../../../data/codes/cards/profiles/ProfileCard6.js";

const codeModal = ref(null);
const cardCode = ProfileCard6;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>