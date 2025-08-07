<template>
  <div class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Título -->
        <div class="flex items-center">
          <router-link
            to="/"
            class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span class="text-blue-600">Component</span>Gallery
          </router-link>
        </div>

        <!-- Pestañas de navegación -->
        <nav class="flex space-x-1">
          <!-- Dropdown de Cards -->
          <div class="relative group">
            <button
              @click="toggleDropdown('cards')"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              :class="{
                'bg-blue-100 text-blue-700 border border-blue-200':
                  isCardsActive,
              }"
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span class="hidden sm:inline">Cards</span>
              <span
                class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs"
                :class="{ 'bg-blue-200 text-blue-800': isCardsActive }"
                >18</span
              >
              <svg
                class="w-4 h-4 transform transition-transform"
                :class="{ 'rotate-180': dropdowns.cards }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown de Cards -->
            <div
              v-if="dropdowns.cards"
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              <router-link
                to="/cards/productos"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                @click="closeDropdowns"
              >
                <div class="flex items-center space-x-2">
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Productos</span>
                  <span class="ml-auto text-xs text-gray-500">6</span>
                </div>
              </router-link>
              <router-link
                to="/cards/perfiles"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                @click="closeDropdowns"
              >
                <div class="flex items-center space-x-2">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Perfiles</span>
                  <span class="ml-auto text-xs text-gray-500">6</span>
                </div>
              </router-link>
              <router-link
                to="/cards/articulos"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                @click="closeDropdowns"
              >
                <div class="flex items-center space-x-2">
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                    />
                  </svg>
                  <span>Artículos</span>
                  <span class="ml-auto text-xs text-gray-500">6</span>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Dropdown de Layout -->
          <div class="relative group">
            <button
              @click="toggleDropdown('layout')"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              :class="{
                'bg-blue-100 text-blue-700 border border-blue-200':
                  isLayoutActive,
              }"
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
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              <span class="hidden sm:inline">Layout</span>
              <span
                class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs"
                :class="{ 'bg-blue-200 text-blue-800': isLayoutActive }"
                >12</span
              >
              <svg
                class="w-4 h-4 transform transition-transform"
                :class="{ 'rotate-180': dropdowns.layout }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Dropdown de Layout -->
            <div
              v-if="dropdowns.layout"
              class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
            >
              <router-link
                to="/headers"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                @click="closeDropdowns"
              >
                <div class="flex items-center space-x-2">
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
                      d="M4 6h16M4 6V4a2 2 0 012-2h12a2 2 0 012 2v2M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6"
                    />
                  </svg>
                  <span>Headers</span>
                  <span class="ml-auto text-xs text-gray-500">6</span>
                </div>
              </router-link>
              <router-link
                to="/footers"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                @click="closeDropdowns"
              >
                <div class="flex items-center space-x-2">
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
                      d="M4 18h16M4 18v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 18V6a2 2 0 012-2h12a2 2 0 012 2v12"
                    />
                  </svg>
                  <span>Footers</span>
                  <span class="ml-auto text-xs text-gray-500">6</span>
                </div>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Overlay para cerrar dropdowns -->
    <div
      v-if="hasOpenDropdown"
      class="fixed inset-0 z-40"
      @click="closeDropdowns"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Estado de los dropdowns
const dropdowns = ref({
  cards: false,
  layout: false,
});

// Propiedades computadas para determinar si una sección está activa
const isCardsActive = computed(() => {
  return route.path.startsWith("/cards/");
});

const isLayoutActive = computed(() => {
  return (
    route.path === "/headers" ||
    route.path === "/footers" ||
    route.path === "/head-foot"
  );
});

const hasOpenDropdown = computed(() => {
  return Object.values(dropdowns.value).some((isOpen) => isOpen);
});

// Funciones
const toggleDropdown = (name) => {
  // Cerrar otros dropdowns
  Object.keys(dropdowns.value).forEach((key) => {
    if (key !== name) dropdowns.value[key] = false;
  });
  // Activar/desactivar el dropdown seleccionado
  dropdowns.value[name] = !dropdowns.value[name];
};

const closeDropdowns = () => {
  Object.keys(dropdowns.value).forEach((key) => {
    dropdowns.value[key] = false;
  });
};
</script>

<style scoped>
/* Transiciones suaves para dropdowns */
.group:hover .group-hover\\:block {
  display: block;
}

/* Asegurar apilamiento correcto del z-index */
.relative {
  z-index: auto;
}

.z-50 {
  z-index: 50;
}

.z-40 {
  z-index: 40;
}
</style>


