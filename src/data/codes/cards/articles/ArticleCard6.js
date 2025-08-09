export default `<template>
  <div
    class="article-card-6 group relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/25 hover:border-purple-400/50 w-96 mx-auto"
  >
    <!-- Futuristic grid overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-6 grid-rows-6 h-full w-full">
        <div
          v-for="i in 36"
          :key="i"
          class="border border-purple-400/20 animate-pulse"
          :style="{ 'animation-delay': (i * 0.1) + 's' }"
        ></div>
      </div>
    </div>

    <!-- Digital scan lines -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"
    ></div>


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
          <span class="text-purple-400">7 min</span>
        </div>
      </div>

      <!-- Holographic image -->
      <div class="relative mb-6">
        <div
          class="absolute inset-0 bg-purple-500/20 blur-xl rounded-lg group-hover:bg-purple-400/30 transition-colors duration-500"
        ></div>
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
          alt="Seguridad en Aplicaciones Web Modernas"
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
              class="px-2 py-1 bg-purple-900/50 text-purple-300 group-hover:text-white text-xs font-mono border border-purple-500/30 rounded hover:border-purple-400/50 transition-colors duration-300"
            >
              #security
            </span>
            <span
              class="px-2 py-1 bg-purple-900/50 text-purple-300 group-hover:text-white text-xs font-mono border border-purple-500/30 rounded hover:border-purple-400/50 transition-colors duration-300"
            >
              #web_development
            </span>
          </div>
        </div>

        <!-- Simple title without glitch effect -->
        <div class="relative">
          <h3
            class="text-xl font-bold text-white group-hover:text-white transition-colors duration-300 font-mono leading-tight"
          >
            Seguridad en Aplicaciones Web Modernas
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
            > Mejores prácticas para proteger tus aplicaciones web
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
              SC
            </div>
            <div>
              <p
                class="text-purple-300 group-hover:text-white font-mono text-sm"
              >
                Security Central
              </p>
              <p class="text-gray-400 group-hover:text-white text-xs font-mono">
                2 Ene 2024
              </p>
            </div>
          </div>

          <!-- Digital metrics -->
          <div class="flex items-center space-x-4 text-xs font-mono">
            <div
              class="flex items-center space-x-1 text-purple-400 group-hover:text-white transition-colors duration-300"
            >
              <span class="glow-text">♥</span>
              <span>423</span>
            </div>
            <div
              class="flex items-center space-x-1 text-purple-400 group-hover:text-white transition-colors duration-300"
            >
              <span class="glow-text">◊</span>
              <span>89</span>
            </div>
          </div>
        </div>

        <!-- Holographic action interface -->
        <div class="mt-6 flex justify-between items-center border-t border-purple-800/50 pt-4">
          <a
            href="#"
            class="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/25 glow-text cursor-pointer"
          >
            [LEER_MÁS]
          </a>
          <a
            href="#"
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
  </div>
</template>

<script setup>
// Lógica del componente aquí
</script>

<style scoped>
.glow-text {
  text-shadow: 0 0 5px currentColor;
}
</style>`;