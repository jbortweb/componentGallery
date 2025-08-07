<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-full mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Headers & Footers</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Explora nuestra colección completa de componentes de navegación. 6
          headers únicos y 6 footers profesionales para complementar tus
          proyectos web.
        </p>
      </div>

      <!-- Headers Section -->
      <div class="mb-20">
        <div class="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Headers</h2>
          <p class="text-gray-600">
            Componentes de navegación superior con diseños únicos y
            funcionalidades avanzadas
          </p>
        </div>

        <div class="space-y-16">
          <div
            v-for="(header, index) in headerData"
            :key="header.id"
            class="w-full"
          >
            <!-- Título centrado y elegante -->
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Header{{ index + 1 }}
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
      </div>

      <!-- Footers Section -->
      <div class="mb-16">
        <div class="text-center mb-8 px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Footers</h2>
          <p class="text-gray-600">
            Componentes de pie de página con información completa y diseños
            profesionales
          </p>
        </div>

        <div class="space-y-12">
          <div
            v-for="(footer, index) in footerData"
            :key="footer.id"
            class="w-full"
          >
            <div
              class="bg-white shadow-lg mb-4 mx-4 sm:mx-6 lg:mx-8 rounded-lg"
            >
              <div class="p-4 border-b border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  Footer{{ index + 1 }} - {{ footer.name }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{ getFooterDescription(index) }}
                </p>
              </div>
            </div>

            <div class="w-full">
              <component :is="getFooterComponent(index)" />
            </div>
          </div>
        </div>
      </div>

      <!-- Instructions Section -->
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
              Haz clic en el icono de código (&lt;/&gt;) en cualquier header o
              footer para ver el código fuente completo del componente.
            </p>
            <div class="text-sm text-blue-700">
              <p>
                <strong>Tecnologías:</strong> Vue 3 (Composition API), Tailwind
                CSS v4.1
              </p>
              <p>
                <strong>Características:</strong> Responsive design, efectos de
                scroll, animaciones, modal de código integrado
              </p>
              <p>
                <strong>Vista:</strong> Todos los componentes se muestran en su
                tamaño completo para una mejor visualización
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

// Importar componentes Footer
import Footer1 from "../components/headfoot/Footer1.vue";
import Footer2 from "../components/headfoot/Footer2.vue";
import Footer3 from "../components/headfoot/Footer3.vue";
import Footer4 from "../components/headfoot/Footer4.vue";
import Footer5 from "../components/headfoot/Footer5.vue";
import Footer6 from "../components/headfoot/Footer6.vue";

// Header data
const headerData = [
  {
    id: 1,
    name: "Header1",
    description: "Sticky transparente con menú hamburguesa",
  },
  {
    id: 2,
    name: "Header2",
    description: "Gradientes animados con efectos hover",
  },
  {
    id: 3,
    name: "Header3",
    description: "Responsive al scroll con efectos dinámicos",
  },
  {
    id: 4,
    name: "Header4",
    description: "Menú lateral deslizante con overlay",
  },
  {
    id: 5,
    name: "Header5",
    description: "Logo centrado con barra de contacto",
  },
  {
    id: 6,
    name: "Header6",
    description: "Fondo difuminado con glassmorphism",
  },
];

// Footer data
const footerData = [
  {
    id: 1,
    name: "Footer1",
    description: "Simple y oscuro responsive",
  },
  {
    id: 2,
    name: "Footer2",
    description: "Grid de enlaces organizado",
  },
  {
    id: 3,
    name: "Footer3",
    description: "Con animaciones de scroll",
  },
  {
    id: 4,
    name: "Footer4",
    description: "Con formulario de contacto",
  },
  {
    id: 5,
    name: "Footer5",
    description: "Con iconos de gradiente",
  },
  {
    id: 6,
    name: "Footer6",
    description: "Glassmorphism con efectos especiales",
  },
];

// Funciones para obtener componentes
const getHeaderComponent = (index) => {
  const components = [Header1, Header2, Header3, Header4, Header5, Header6];
  return components[index] || Header1;
};

const getFooterComponent = (index) => {
  const components = [Footer1, Footer2, Footer3, Footer4, Footer5, Footer6];
  return components[index] || Footer1;
};

// Description getters
const getHeaderDescription = (index) => {
  const descriptions = [
    "Header fijo transparente con efecto blur y menú hamburguesa responsivo",
    "Header con gradientes animados y efectos hover dinámicos",
    "Header que responde al scroll con cambios de estilo dinámicos",
    "Header con menú lateral deslizante y efectos de overlay",
    "Header con logo centrado y barra superior de contacto",
    "Header con fondo difuminado y efectos de glassmorphism",
  ];
  return descriptions[index] || "Componente de header";
};

const getFooterDescription = (index) => {
  const descriptions = [
    "Footer simple con diseño oscuro y enlaces organizados",
    "Footer con grid extenso de enlaces y sección de newsletter",
    "Footer con animaciones de scroll y efectos parallax",
    "Footer completo con formulario de contacto integrado",
    "Footer moderno con iconos de gradiente y efectos visuales",
    "Footer con glassmorphism y partículas flotantes animadas",
  ];
  return descriptions[index] || "Componente de footer";
};
</script>
