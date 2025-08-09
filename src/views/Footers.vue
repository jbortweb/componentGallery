<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <section class="relative py-20 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span class="block">Footer</span>
              <span class="block text-blue-600">Gallery</span>
            </h1>
            <p
              class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Una colección de footers modernos e interactivos construidos con
              <span class="font-semibold text-green-600">Vue 3</span>,
              <span class="font-semibold text-purple-600">Vite</span> y
              <span class="font-semibold text-blue-600">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Sección de Footers -->
      <div class="space-y-16">
        <div
          v-for="(footer, index) in footerData"
          :key="footer.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">
              {{ footer.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente footer -->
          <div
            class="w-[95%] mx-auto border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <component :is="getFooterComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="blue" />

      <!-- Casos de Uso Recomendados -->
      <div
        class="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 rounded-xl p-8"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Casos de Uso Recomendados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Sitios Corporativos</h3>
            <p class="text-sm text-gray-600 mt-1">
              Empresas y organizaciones profesionales
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Blogs</h3>
            <p class="text-sm text-gray-600 mt-1">
              Sitios de contenido y publicaciones
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3"
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Portfolios</h3>
            <p class="text-sm text-gray-600 mt-1">
              Sitios creativos y profesionales
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
// Importar componentes Footer
import Footer1 from "../components/headfoot/footers/Footer1.vue";
import Footer2 from "../components/headfoot/footers/Footer2.vue";
import Footer3 from "../components/headfoot/footers/Footer3.vue";
import Footer4 from "../components/headfoot/footers/Footer4.vue";
import Footer5 from "../components/headfoot/footers/Footer5.vue";
import Footer6 from "../components/headfoot/footers/Footer6.vue";
import ComponentInstructions from "../components/ComponentInstructions.vue";

// Datos de footers
const footerData = [
  {
    id: "footer1",
    name: "Footer Corporativo",
    description: "Diseño profesional con múltiples secciones de información",
  },
  {
    id: "footer2",
    name: "Footer Minimalista",
    description: "Estilo limpio y simple con información esencial",
  },
  {
    id: "footer3",
    name: "Footer Social",
    description: "Enfocado en redes sociales y contenido dinámico",
  },
  {
    id: "footer4",
    name: "Footer Newsletter",
    description: "Incluye suscripción y formulario de contacto",
  },
  {
    id: "footer5",
    name: "Footer Multi-columna",
    description: "Organización avanzada con múltiples categorías",
  },
  {
    id: "footer6",
    name: "Footer Compacto",
    description: "Diseño condensado con información básica",
  },
];

// Funciones para obtener componentes
const getFooterComponent = (index) => {
  const components = [Footer1, Footer2, Footer3, Footer4, Footer5, Footer6];
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
