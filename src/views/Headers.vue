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
          <div class="w-full shadow-lg rounded-lg overflow-hidden">
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
