<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Tarjetas de Perfiles
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre nuestra colección de 6 diseños únicos para tarjetas de perfil
          profesional. Perfectas para mostrar información de equipo, testimonios
          o perfiles de usuario.
        </p>
      </div>

      <!-- Instructions -->
      <div class="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <div class="flex items-start">
          <svg
            class="w-6 h-6 text-purple-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-purple-900 mb-2">
              Tarjetas de Perfil Profesional
            </h3>
            <p class="text-purple-800 mb-3">
              Cada diseño incluye diferentes layouts para mostrar información
              personal, habilidades y enlaces sociales.
            </p>
            <div class="text-sm text-purple-700">
              <p>
                <strong>Incluye:</strong> Avatar, información personal,
                habilidades, redes sociales
              </p>
              <p>
                <strong>Casos de uso:</strong> Equipos, testimonios,
                directorios, portfolios
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="profiles"
          title="Perfiles - Vista Carrusel"
          description="Explora los diferentes estilos de tarjetas de perfil profesional"
          :autoPlay="false"
        >
          <template #default="{ item, index }">
            <component :is="getProfileComponent(index)" :profile="item" />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet & Mobile: Grid View -->
      <div class="lg:hidden">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Todos los Diseños
          </h2>
          <p class="text-gray-600">
            Vista en cuadrícula de todos los componentes de perfil disponibles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(profile, index) in profiles"
            :key="profile.id"
            class="bg-white rounded-xl shadow-lg p-6"
          >
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                ProfileCard{{ index + 1 }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ getCardDescription(index) }}
              </p>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getProfileComponent(index)" :profile="profile" />
            </div>
          </div>
        </div>
      </div>

      <!-- Component Info Section -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          Información de los Componentes
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(info, index) in componentInfo"
            :key="index"
            class="border border-gray-200 rounded-lg p-4"
          >
            <h3 class="font-semibold text-gray-900 mb-2">
              ProfileCard{{ index + 1 }}
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              {{ info.description }}
            </p>
            <div class="space-y-1">
              <p class="text-xs text-gray-500">
                <strong>Layout:</strong> {{ info.layout }}
              </p>
              <p class="text-xs text-gray-500">
                <strong>Características:</strong> {{ info.features }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Usage Examples -->
      <div
        class="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Casos de Uso Recomendados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Páginas de Equipo</h3>
            <p class="text-sm text-gray-600 mt-1">
              Mostrar miembros del equipo con roles y contacto
            </p>
          </div>

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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Testimonios</h3>
            <p class="text-sm text-gray-600 mt-1">
              Mostrar reseñas y opiniones de clientes
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Portafolios</h3>
            <p class="text-sm text-gray-600 mt-1">
              Presentar trabajos y proyectos personales
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Directorios</h3>
            <p class="text-sm text-gray-600 mt-1">
              Crear listas de contactos profesionales
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
import { computed } from "vue";
import CardCarousel from "../components/carousel/CardCarousel.vue";
import ProfileCard1 from "../components/cards/ProfileCard1.vue";
import ProfileCard2 from "../components/cards/ProfileCard2.vue";
import ProfileCard3 from "../components/cards/ProfileCard3.vue";
import ProfileCard4 from "../components/cards/ProfileCard4.vue";
import ProfileCard5 from "../components/cards/ProfileCard5.vue";
import ProfileCard6 from "../components/cards/ProfileCard6.vue";
import { cardData } from "../data/cardData.js";

// Datos de perfiles
const profiles = computed(() => cardData.profiles);

// Componentes de perfiles
const profileComponents = [
  ProfileCard1,
  ProfileCard2,
  ProfileCard3,
  ProfileCard4,
  ProfileCard5,
  ProfileCard6,
];

// Función para obtener el componente correcto
const getProfileComponent = (index) => {
  return profileComponents[index] || ProfileCard1;
};

// Descripciones de las tarjetas
const getCardDescription = (index) => {
  const descriptions = [
    "Layout vertical con avatar centrado",
    "Diseño horizontal con información lateral",
    "Estilo compacto con habilidades destacadas",
    "Diseño premium con efectos glassmorphism",
    "Layout clásico con redes sociales integradas",
    "Estilo moderno con animaciones suaves",
  ];
  return descriptions[index] || "Diseño único";
};

// Información detallada de componentes
const componentInfo = [
  {
    description:
      "Layout vertical con avatar prominente y información bien estructurada.",
    layout: "Vertical",
    features: "Avatar grande, bio expandida, enlaces sociales",
  },
  {
    description:
      "Diseño horizontal que aprovecha el espacio lateral para más información.",
    layout: "Horizontal",
    features: "Layout eficiente, información compacta, CTA integrado",
  },
  {
    description:
      "Estilo compacto que destaca las habilidades con tags visuales.",
    layout: "Compacto",
    features: "Tags de habilidades, información esencial, diseño limpio",
  },
  {
    description:
      "Diseño premium con efectos glassmorphism y elementos flotantes.",
    layout: "Premium",
    features: "Efectos glass, sombras avanzadas, gradientes sutiles",
  },
  {
    description: "Layout clásico con integración completa de redes sociales.",
    layout: "Clásico",
    features: "Redes sociales, información completa, diseño tradicional",
  },
  {
    description: "Estilo moderno con animaciones suaves y micro-interacciones.",
    layout: "Moderno",
    features: "Animaciones CSS, hover effects, diseño responsive",
  },
];
</script>
