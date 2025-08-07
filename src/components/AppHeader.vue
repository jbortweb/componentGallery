<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link
            to="/"
            class="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <svg
              class="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>Component Gallery</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <!-- Cards Menu -->
            <div class="relative group">
              <button
                class="flex items-center text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                @click="toggleCardsMenu"
                @blur="closeCardsMenuOnBlur"
              >
                Cards
                <svg
                  class="ml-1 w-4 h-4 transform transition-transform duration-200"
                  :class="{ 'rotate-180': isCardsMenuOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- Cards Dropdown -->
              <div
                v-show="isCardsMenuOpen"
                class="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                @mouseenter="keepCardsMenuOpen"
                @mouseleave="closeCardsMenu"
              >
                <router-link
                  to="/cards/productos"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  @click="closeCardsMenu"
                >
                  Productos
                </router-link>
                <router-link
                  to="/cards/perfiles"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  @click="closeCardsMenu"
                >
                  Perfiles
                </router-link>
                <router-link
                  to="/cards/articulos"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                  @click="closeCardsMenu"
                >
                  Artículos
                </router-link>
              </div>
            </div>

            <!-- Head & Foot Menu -->
            <router-link
              to="/head-foot"
              class="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Head & Foot
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span class="sr-only">Abrir menú principal</span>
            <svg
              class="h-6 w-6"
              :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
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
              class="h-6 w-6"
              :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
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

      <!-- Mobile Navigation -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 bg-white"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Cards Mobile Menu -->
          <div>
            <button
              @click="toggleMobileCardsMenu"
              class="w-full flex items-center justify-between text-gray-900 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors"
            >
              Cards
              <svg
                class="w-4 h-4 transform transition-transform duration-200"
                :class="{ 'rotate-180': isMobileCardsMenuOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Mobile Cards Submenu -->
            <div v-show="isMobileCardsMenuOpen" class="pl-4 space-y-1">
              <router-link
                to="/cards/productos"
                class="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                Productos
              </router-link>
              <router-link
                to="/cards/perfiles"
                class="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                Perfiles
              </router-link>
              <router-link
                to="/cards/articulos"
                class="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-sm transition-colors"
                @click="closeMobileMenu"
              >
                Artículos
              </router-link>
            </div>
          </div>

          <!-- Head & Foot Mobile -->
          <router-link
            to="/head-foot"
            class="block text-gray-900 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium transition-colors"
            @click="closeMobileMenu"
          >
            Head & Foot
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Estado de los menús
const isCardsMenuOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isMobileCardsMenuOpen = ref(false);

// Métodos para el menú de cards (desktop)
const toggleCardsMenu = () => {
  isCardsMenuOpen.value = !isCardsMenuOpen.value;
};

const closeCardsMenu = () => {
  isCardsMenuOpen.value = false;
};

const keepCardsMenuOpen = () => {
  isCardsMenuOpen.value = true;
};

const closeCardsMenuOnBlur = (event) => {
  // Cerrar el menú después de un pequeño delay para permitir clics en el dropdown
  setTimeout(() => {
    if (!event.relatedTarget || !event.relatedTarget.closest(".group")) {
      isCardsMenuOpen.value = false;
    }
  }, 150);
};

// Métodos para el menú móvil
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isMobileCardsMenuOpen.value = false;
  }
};

const toggleMobileCardsMenu = () => {
  isMobileCardsMenuOpen.value = !isMobileCardsMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isMobileCardsMenuOpen.value = false;
};

// Cerrar menús cuando se hace clic fuera
const handleClickOutside = (event) => {
  const target = event.target;
  if (!target.closest(".group") && !target.closest(".md\\:hidden")) {
    isCardsMenuOpen.value = false;
  }
  if (!target.closest(".md\\:hidden")) {
    isMobileMenuOpen.value = false;
    isMobileCardsMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
