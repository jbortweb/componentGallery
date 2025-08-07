<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-full mx-auto">
      <!-- Hero Section -->
      <section class="relative py-20 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span class="block">Header</span>
              <span class="block text-blue-600">Gallery</span>
            </h1>
            <p
              class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Una colección de headers modernos e interactivos construidos con
              <span class="font-semibold text-green-600">Vue 3</span>,
              <span class="font-semibold text-purple-600">Vite</span> y
              <span class="font-semibold text-blue-600">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Sección de Headers -->
      <div class="space-y-16">
        <div
          v-for="(header, index) in headerData"
          :key="header.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">
              {{ header.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente header -->
          <div
            class="w-[95%] mx-auto border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <component :is="getHeaderComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Sección de instrucciones -->
      <div
        class="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-6 mx-4 sm:mx-6 lg:mx-8"
      >
        <div class="flex items-start">
          <svg
            class="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">
              Cómo usar estos componentes
            </h3>
            <p class="text-blue-800 mb-3">
              Haz clic en el icono de código (&lt;/&gt;) en cualquier header
              para ver el código fuente completo del componente.
            </p>
            <div class="text-sm text-blue-700">
              <p>
                <strong>Tecnologías:</strong> Vue 3 (Composition API), Tailwind
                CSS v4.1
              </p>
              <p>
                <strong>Características:</strong> Responsive design, efectos
                animados, glassmorphism, matriz effects
              </p>
              <p>
                <strong>Temas disponibles:</strong> Minimalista, Gaming,
                Artístico, Glassmorphism, Terminal, Espacial
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Casos de Uso Recomendados -->
      <div
        class="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mx-4 sm:mx-6 lg:mx-8"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Casos de Uso Recomendados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9m-9 9V3m0 9H3"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Sitios Web</h3>
            <p class="text-sm text-gray-600 mt-1">
              Páginas corporativas y portfolios
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Aplicaciones</h3>
            <p class="text-sm text-gray-600 mt-1">
              Interfaces de software y dashboards
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
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
            </div>
            <h3 class="font-semibold text-gray-900">E-commerce</h3>
            <p class="text-sm text-gray-600 mt-1">
              Tiendas online y marketplaces
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Blogs</h3>
            <p class="text-sm text-gray-600 mt-1">
              Publicaciones y contenido editorial
            </p>
          </div>
        </div>
      </div>

      <!-- Back to Categories -->
      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <svg
            class="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al Inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importar componentes Header
import Header1 from "../components/headfoot/Header1.vue";
import Header2 from "../components/headfoot/Header2.vue";
import Header3 from "../components/headfoot/Header3.vue";
import Header4 from "../components/headfoot/Header4.vue";
import Header5 from "../components/headfoot/Header5.vue";
import Header6 from "../components/headfoot/Header6.vue";

// Datos de headers
const headerData = [
  {
    id: "header1",
    name: "Header Minimalista",
    description: "Diseño limpio con efectos neumorfismo y navegación elegante",
  },
  {
    id: "header2",
    name: "Header Gaming",
    description: "Tema cyberpunk con efectos neon y animaciones de terminal",
  },
  {
    id: "header3",
    name: "Header Artístico",
    description: "Estilo creativo con efectos de pintura y colores vibrantes",
  },
  {
    id: "header4",
    name: "Header Glassmorphism",
    description: "Diseño moderno con partículas flotantes y efectos de vidrio",
  },
  {
    id: "header5",
    name: "Header Terminal",
    description: "Interfaz de terminal con efectos matriz y typewriter",
  },
  {
    id: "header6",
    name: "Header Espacial",
    description: "Tema galáctico con estrellas animadas y efectos orbitales",
  },
];

// Funciones para obtener componentes
const getHeaderComponent = (index) => {
  const components = [Header1, Header2, Header3, Header4, Header5, Header6];
  return components[index];
};
</script>

<style scoped>
/* Animaciones suaves */
.w-full {
  transition: all 0.3s ease;
}

.shadow-lg {
  transition: box-shadow 0.3s ease;
}

.shadow-lg:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
