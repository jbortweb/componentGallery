<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-full mx-auto">
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
          <div class="w-full shadow-lg rounded-lg overflow-hidden">
            <component :is="getFooterComponent(index)" />
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
              Haz clic en el icono de código (&lt;/&gt;) en cualquier footer
              para ver el código fuente completo del componente.
            </p>
            <div class="text-sm text-blue-700">
              <p>
                <strong>Tecnologías:</strong> Vue 3 (Composition API), Tailwind
                CSS v4.1
              </p>
              <p>
                <strong>Características:</strong> Responsive design, enlaces
                organizados, información de contacto
              </p>
              <p>
                <strong>Tipos disponibles:</strong> Corporativo, Minimalista,
                Social, Newsletter, Multi-columna, Compacto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importar componentes Footer
import Footer1 from "../components/headfoot/Footer1.vue";
import Footer2 from "../components/headfoot/Footer2.vue";
import Footer3 from "../components/headfoot/Footer3.vue";
import Footer4 from "../components/headfoot/Footer4.vue";
import Footer5 from "../components/headfoot/Footer5.vue";
import Footer6 from "../components/headfoot/Footer6.vue";

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
