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

    <!-- Header minimalista con diseño neumorfismo -->
    <header
      class="relative bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm overflow-hidden"
    >
      <!-- Formas geométricas sutiles de fondo -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2"
        ></div>
      </div>

      <!-- Navegación principal -->
      <nav class="relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo minimalista -->
            <div class="flex items-center group">
              <div class="relative">
                <div
                  class="w-10 h-10 bg-white rounded-xl shadow-lg shadow-gray-200/50 flex items-center justify-center group-hover:shadow-blue-200/50 transition-all duration-300"
                >
                  <div
                    class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                  ></div>
                </div>
              </div>
              <div class="ml-3">
                <span class="text-xl font-bold text-gray-800 tracking-tight"
                  >Minimal</span
                >
                <div class="text-xs text-gray-500 -mt-1">Design Studio</div>
              </div>
            </div>

            <!-- Navegación desktop elegante -->
            <div class="hidden md:flex items-center">
              <div
                class="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full p-1 shadow-lg shadow-gray-200/50"
              >
                <a
                  v-for="item in navItems"
                  :key="item.name"
                  href="#"
                  class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 text-sm font-medium relative group"
                >
                  {{ item.name }}
                  <span
                    class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 rounded-full group-hover:w-6 transition-all duration-200 transform -translate-x-1/2"
                  ></span>
                </a>
              </div>
            </div>

            <!-- Botón CTA y menú móvil -->
            <div class="flex items-center space-x-4">
              <!-- Botón de contacto -->
              <button
                class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span class="font-medium">Contacto</span>
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
              </button>

              <!-- Menú hamburguesa elegante -->
              <button
                @click="toggleMobileMenu"
                class="md:hidden p-3 bg-white rounded-xl shadow-lg text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  class="w-5 h-5"
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
                  class="w-5 h-5"
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

      <!-- Hero section minimalista -->
      <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-4xl">
            <!-- Título principal -->
            <h1
              class="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
            >
              Diseño
              <span
                class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              >
                Minimalista
              </span>
            </h1>

            <!-- Subtítulo -->
            <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Creamos experiencias digitales elegantes y funcionales que
              destacan por su simplicidad y efectividad
            </p>

            <!-- Botones de acción -->
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <button class="group relative">
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"
                ></div>
                <div
                  class="relative bg-white px-8 py-4 rounded-2xl text-gray-900 font-semibold hover:bg-gray-50 transition duration-200"
                >
                  Ver Portfolio
                </div>
              </button>

              <button
                class="px-8 py-4 text-gray-600 hover:text-gray-900 font-semibold transition-colors flex items-center space-x-2"
              >
                <span>Conocer más</span>
                <svg
                  class="w-5 h-5"
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
              </button>
            </div>

            <!-- Métricas -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-900 mb-1">150+</div>
                <div class="text-sm text-gray-500">Proyectos</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-900 mb-1">5</div>
                <div class="text-sm text-gray-500">Años</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div class="text-sm text-gray-500">Satisfacción</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div class="text-sm text-gray-500">Soporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú móvil elegante -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <div
          class="fixed inset-0 bg-black/20 backdrop-blur-sm"
          @click="toggleMobileMenu"
        ></div>
        <div
          class="relative bg-white/95 backdrop-blur-xl w-80 h-full shadow-2xl"
        >
          <!-- Header del menú -->
          <div
            class="flex items-center justify-between p-6 border-b border-gray-200"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
              ></div>
              <span class="font-bold text-gray-900">Minimal</span>
            </div>
            <button @click="toggleMobileMenu" class="p-2 text-gray-600">
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

          <!-- Navegación móvil -->
          <nav class="p-6 space-y-2">
            <a
              v-for="item in navItems"
              :key="item.name"
              href="#"
              class="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors font-medium"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </a>
          </nav>

          <!-- Footer del menú móvil -->
          <div
            class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200"
          >
            <button
              class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:scale-105 transition-transform"
            >
              Comenzar Proyecto
            </button>
          </div>
        </div>
      </div>

      <!-- Code Modal -->
      <CodeModal
        ref="codeModal"
        cardType="Header Card"
        cardVariant="Diseño minimalista con neumorfismo"
        :codeContent="cardCode"
      />
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Header1Code from "../../../data/codes/headfoot/headers/Header1.js";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "About", href: "#" },
];

// Modal setup
const codeModal = ref(null);
const cardCode = Header1Code;

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
/* Sombras suaves para el neumorfismo */
.shadow-neumorphic {
  box-shadow: 8px 8px 16px rgba(163, 177, 198, 0.2),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
}

.shadow-neumorphic-inset {
  box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.2),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
}
</style>