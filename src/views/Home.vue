<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50"
  >
    <!-- Hero Section -->
    <section class="relative py-20 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            <span class="block">Component</span>
            <span class="block text-blue-600">Gallery</span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
            Una colección de componentes modernos e interactivos construidas con
            <span class="font-semibold text-green-600">Vue 3</span>,
            <span class="font-semibold text-purple-600">Vite</span> y
            <span class="font-semibold text-blue-600">Tailwind CSS</span>
          </p>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div
          class="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"
        ></div>
        <div
          class="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse delay-1000"
        ></div>
        <div
          class="absolute bottom-40 left-20 w-24 h-24 bg-green-200 rounded-full opacity-50 animate-pulse delay-2000"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-18 h-18 bg-indigo-200 rounded-full opacity-50 animate-pulse delay-500"
        ></div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué encontrarás aquí?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de componentes organizados por categorías,
            cada uno con su código fuente visible y copiable.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Cards Feature -->
          <div
            class="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
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
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Componentes de Cards
            </h3>
            <p class="text-gray-600 mb-4">
              Tarjetas de productos, perfiles y artículos con diseños únicos y
              modernos.
            </p>
            <router-link
              to="/cards/productos"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver Cards
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </div>

          <!-- Headers & Footers Feature -->
          <div
            class="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
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
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Headers & Footers
            </h3>
            <p class="text-gray-600 mb-4">
              Componentes de navegación y pie de página con temas únicos:
              minimalista, gaming, glassmorphism y más.
            </p>
            <div class="flex flex-col space-y-2">
              <router-link
                to="/headers"
                class="inline-flex items-center justify-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Ver Headers
                <svg
                  class="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </router-link>
              <router-link
                to="/footers"
                class="inline-flex items-center justify-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Ver Footers
                <svg
                  class="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Code Feature -->
          <div
            class="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-white"
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
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Código Visible
            </h3>
            <p class="text-gray-600 mb-4">
              Cada componente incluye un botón para ver y copiar su código
              fuente completo.
            </p>
            <span class="inline-flex items-center text-green-600 font-medium">
              Listo para usar
              <svg
                class="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructions Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cómo usar los componentes
          </h2>
          <p class="text-lg text-gray-600">
            Sigue estos simples pasos para integrar cualquier componente en tu
            proyecto
          </p>
        </div>

        <div class="space-y-8">
          <!-- Step 1 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
            >
              1
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Explora los componentes
              </h3>
              <p class="text-gray-600">
                Navega por las diferentes categorías (Productos, Perfiles,
                Artículos) y encuentra el diseño que más te guste.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
            >
              2
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Ve el código
              </h3>
              <p class="text-gray-600">
                Haz clic en el botón de código (&lt;/&gt;) en cualquier tarjeta
                para abrir el modal con el código fuente completo.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
            >
              3
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Copia y personaliza
              </h3>
              <p class="text-gray-600">
                Copia el código, pégalo en tu proyecto Vue 3 y personaliza los
                datos y estilos según tus necesidades.
              </p>
            </div>
          </div>

          <!-- Step 4 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg"
            >
              ✓
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">¡Listo!</h3>
              <p class="text-gray-600">
                Tu componente está listo para usar. Todos los componentes están
                optimizados para Vue 3 y Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tecnologías utilizadas
          </h2>
          <p class="text-lg text-gray-600">
            Construido con las tecnologías más modernas para el desarrollo
            frontend
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Vue 3 -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-green-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Vue 3</h3>
            <p class="text-sm text-gray-600">Framework progresivo</p>
          </div>

          <!-- Vite -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-purple-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.283L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.286 10.578Z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Vite</h3>
            <p class="text-sm text-gray-600">Build tool ultrarrápido</p>
          </div>

          <!-- Tailwind -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Tailwind CSS</h3>
            <p class="text-sm text-gray-600">CSS utility-first</p>
          </div>

          <!-- Vue Router -->
          <div class="text-center">
            <div
              class="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Vue Router</h3>
            <p class="text-sm text-gray-600">Enrutamiento SPA</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Esta página no necesita lógica adicional por ahora
</script>
