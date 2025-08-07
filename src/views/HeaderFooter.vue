<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Headers & Footers</h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Próximamente: una colección completa de componentes de encabezados y
          pies de página para completar tus proyectos web con elementos de
          navegación profesional.
        </p>
      </div>

      <!-- Coming Soon Section -->
      <div
        class="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-12 text-center"
      >
        <div class="max-w-3xl mx-auto">
          <!-- Icon -->
          <div
            class="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg
              class="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            Próximamente disponible
          </h2>

          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Estamos trabajando en una colección completa de componentes de
            navegación que incluirá headers responsivos, footers informativos y
            elementos de navegación modernos para completar tus proyectos.
          </p>

          <!-- Features Preview -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            <div
              class="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <div
                class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
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
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">
                Headers Responsivos
              </h3>
              <p class="text-sm text-gray-600">
                Navegación adaptativa con menús desplegables y hamburguesa
              </p>
            </div>

            <div
              class="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/20"
            >
              <div
                class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">
                Footers Informativos
              </h3>
              <p class="text-sm text-gray-600">
                Pies de página con enlaces, información de contacto y redes
                sociales
              </p>
            </div>

            <div
              class="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-white/20 md:col-span-2 lg:col-span-1"
            >
              <div
                class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Navegación Móvil</h3>
              <p class="text-sm text-gray-600">
                Elementos optimizados para dispositivos móviles
              </p>
            </div>
          </div>

          <!-- Progress -->
          <div
            class="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8"
          >
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-gray-700"
                >Progreso de desarrollo</span
              >
              <span class="text-sm text-gray-600">25%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                style="width: 25%"
              ></div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/cards/productos"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Explorar Cards Disponibles
              <svg
                class="ml-2 w-5 h-5"
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
            </router-link>

            <a
              href="https://portafoliojbortweb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Seguir el Progreso
              <svg
                class="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- What to Expect -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          ¿Qué puedes esperar?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Headers -->
          <div>
            <h3
              class="text-xl font-semibold text-gray-900 mb-4 flex items-center"
            >
              <div
                class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 11l7-7 7 7M5 19l7-7 7 7"
                  />
                </svg>
              </div>
              Componentes de Header
            </h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Navegación principal responsiva
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Menús desplegables multinivel
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Navegación móvil con hamburguesa
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Headers con búsqueda integrada
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Efectos de scroll y sticky headers
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Múltiples variaciones de diseño
              </li>
            </ul>
          </div>

          <!-- Footers -->
          <div>
            <h3
              class="text-xl font-semibold text-gray-900 mb-4 flex items-center"
            >
              <div
                class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              Componentes de Footer
            </h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Footers informativos con enlaces
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Redes sociales integradas
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Formularios de newsletter
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Información de contacto
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Copyright y legal
              </li>
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
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
                Diseños responsive completos
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div
        class="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Cronograma de Desarrollo
        </h2>

        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div class="flex items-center">
              <div
                class="w-4 h-4 bg-green-500 rounded-full mr-4 flex-shrink-0"
              ></div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900">
                  Fase 1: Investigación y Diseño
                </h3>
                <p class="text-gray-600 text-sm">
                  Análisis de patrones de diseño y creación de wireframes
                </p>
                <span class="text-xs text-green-600 font-medium"
                  >✓ Completado</span
                >
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="w-4 h-4 bg-blue-500 rounded-full mr-4 flex-shrink-0"
              ></div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900">
                  Fase 2: Desarrollo de Headers
                </h3>
                <p class="text-gray-600 text-sm">
                  Creación de 6 componentes de navegación únicos
                </p>
                <span class="text-xs text-blue-600 font-medium"
                  >🔄 En progreso</span
                >
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="w-4 h-4 bg-gray-300 rounded-full mr-4 flex-shrink-0"
              ></div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900">
                  Fase 3: Desarrollo de Footers
                </h3>
                <p class="text-gray-600 text-sm">
                  Implementación de pies de página informativos
                </p>
                <span class="text-xs text-gray-500 font-medium"
                  >⏳ Próximamente</span
                >
              </div>
            </div>

            <div class="flex items-center">
              <div
                class="w-4 h-4 bg-gray-300 rounded-full mr-4 flex-shrink-0"
              ></div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-900">
                  Fase 4: Testing y Optimización
                </h3>
                <p class="text-gray-600 text-sm">
                  Pruebas de responsividad y rendimiento
                </p>
                <span class="text-xs text-gray-500 font-medium"
                  >⏳ Próximamente</span
                >
              </div>
            </div>
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
// Esta página no necesita lógica adicional por ahora
</script>
