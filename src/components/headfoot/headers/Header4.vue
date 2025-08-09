<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-blue-600/90 hover:bg-blue-500 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow-lg border border-blue-400/30 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-white pointer-events-none"
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

    <!-- Header moderno con glassmorphism y partículas flotantes -->
    <header
      class="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden"
    >
      <!-- Partículas animadas de fondo -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 15"
          :key="i"
          class="absolute bg-white/10 rounded-full animate-bounce"
          :class="`w-${Math.floor(Math.random() * 4) + 2} h-${
            Math.floor(Math.random() * 4) + 2
          }`"
          :style="{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            animationDuration: Math.random() * 3 + 2 + 's',
          }"
        ></div>
      </div>

      <!-- Barra de navegación glassmorphism -->
      <nav
        class="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <!-- Logo con efecto hover -->
            <div class="flex items-center">
              <div class="relative group">
                <div
                  class="absolute -inset-2 bg-gradient-to-r from-pink-400 to-violet-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"
                ></div>
                <div
                  class="relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
              </div>
              <span class="ml-3 text-2xl font-bold text-white">Nexodus</span>
            </div>

            <!-- Navegación desktop -->
            <div class="hidden md:flex items-center space-x-1">
              <a
                v-for="item in navItems"
                :key="item.name"
                href="#"
                class="px-4 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 relative group"
              >
                {{ item.name }}
                <span
                  class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                ></span>
              </a>
            </div>

            <!-- Botón CTA con animación -->
            <div class="hidden md:flex items-center space-x-4">
              <button class="relative group">
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"
                ></div>
                <div
                  class="relative bg-black/50 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full border border-white/20 group-hover:bg-white/10 transition duration-200"
                >
                  Comenzar
                </div>
              </button>
            </div>

            <!-- Menú hamburguesa móvil -->
            <div class="md:hidden">
              <button
                @click="toggleMobileMenu"
                class="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <svg
                  class="w-6 h-6"
                  :class="{
                    hidden: isMobileMenuOpen,
                    block: !isMobileMenuOpen,
                  }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  class="w-6 h-6"
                  :class="{
                    block: isMobileMenuOpen,
                    hidden: !isMobileMenuOpen,
                  }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero section moderna -->
      <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
        <div class="max-w-7xl mx-auto text-center">
          <div class="relative">
            <!-- Título principal con efectos -->
            <h1
              class="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200 mb-6 tracking-tight"
            >
              El Futuro
              <span
                class="block text-gradient bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 bg-clip-text"
              >
                Es Ahora
              </span>
            </h1>

            <!-- Subtítulo -->
            <p
              class="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Descubre una nueva forma de experimentar la tecnología con
              interfaces que desafían los límites de la creatividad
            </p>

            <!-- Botones de acción -->
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button class="group relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"
                ></div>
                <div
                  class="relative bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-transform duration-200"
                >
                  Explorar Ahora
                  <svg
                    class="w-5 h-5 inline-block ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button>

              <button
                class="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-200"
              >
                Ver Demo
                <svg
                  class="w-5 h-5 inline-block ml-2 group-hover:animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú móvil glassmorphism -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <div
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="toggleMobileMenu"
        ></div>
        <div
          class="relative bg-white/10 backdrop-blur-xl border-r border-white/20 w-80 h-full p-6 space-y-6"
        >
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-white">Menú</span>
            <button
              @click="toggleMobileMenu"
              class="p-2 rounded-lg bg-white/10 text-white"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav class="space-y-4">
            <a
              v-for="item in navItems"
              :key="item.name"
              href="#"
              class="block px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-colors text-lg font-medium"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </a>
          </nav>

          <div class="pt-6 border-t border-white/20">
            <button
              class="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>

      <!-- Code Modal -->
      <CodeModal
        ref="codeModal"
        cardType="Header Card"
        cardVariant="Glassmorphism moderno con partículas"
        :codeContent="cardCode"
      />
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Header4Code from "../../../data/codes/headfoot/headers/Header4.js";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Productos", href: "#" },
  { name: "Soluciones", href: "#" },
  { name: "Recursos", href: "#" },
  { name: "Empresa", href: "#" },
  { name: "Contacto", href: "#" },
];

// Modal setup
const codeModal = ref(null);
const cardCode = Header4Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Animación personalizada para el gradiente */
@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* Efectos de texto gradiente */
.text-gradient {
  background-size: 200% auto;
  animation: gradient-x 3s ease infinite;
}

/* Animación de las partículas */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(120deg);
  }
  66% {
    transform: translateY(5px) rotate(240deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>