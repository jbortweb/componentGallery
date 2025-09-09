export default `<template>
  <footer
    class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
  >
    <!-- Patrones de fondo animados -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div
          class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"
        ></div>
        <div
          class="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse delay-300"
        ></div>
        <div
          class="absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-500"
        ></div>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Sección superior -->
      <div class="text-center mb-16">
        <div class="flex justify-center items-center space-x-3 mb-6">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-7 h-7 text-white"
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
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            Company
          </h2>
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Transformamos ideas innovadoras en experiencias digitales
          extraordinarias. Únete a nuestra comunidad de creadores y visionarios.
        </p>
      </div>

      <!-- Grid de servicios con iconos de gradiente -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <!-- Desarrollo Web -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25"
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
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors"
          >
            Desarrollo Web
          </h3>
          <p class="text-gray-400 text-sm">
            Aplicaciones web modernas y responsivas
          </p>
        </div>

        <!-- Apps Móviles -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25"
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
                d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors"
          >
            Apps Móviles
          </h3>
          <p class="text-gray-400 text-sm">iOS y Android nativas</p>
        </div>

        <!-- Diseño UI/UX -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25"
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
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors"
          >
            Diseño UI/UX
          </h3>
          <p class="text-gray-400 text-sm">
            Interfaces intuitivas y atractivas
          </p>
        </div>

        <!-- Soluciones Cloud -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/25"
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
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors"
          >
            Cloud & DevOps
          </h3>
          <p class="text-gray-400 text-sm">Infraestructura escalable</p>
        </div>
      </div>

      <!-- Sección de contacto y redes sociales -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <!-- Información de contacto -->
        <div>
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <div
              class="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded mr-3"
            ></div>
            Contacto
          </h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">hola@company.com</p>
                <p class="text-gray-400 text-sm">Respuesta en 24h</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">+34 123 456 789</p>
                <p class="text-gray-400 text-sm">Lun - Vie, 9:00 - 18:00</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">Madrid, España</p>
                <p class="text-gray-400 text-sm">Oficina principal</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <div
              class="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded mr-3"
            ></div>
            Enlaces
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Servicios</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Portfolio</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Carreras</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Sobre nosotros</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Contacto</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Soporte</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >FAQ</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <div
              class="w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded mr-3"
            ></div>
            Newsletter
          </h3>
          <p class="text-gray-300 mb-4">
            Recibe tips de desarrollo y noticias del sector directamente en tu
            email.
          </p>
          <div class="space-y-4">
            <input
              type="email"
              placeholder="tu@email.com"
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <!-- Redes sociales con iconos de gradiente -->
      <div
        class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700"
      >
        <div class="mb-6 md:mb-0">
          <p class="text-gray-400">
            © 2024 Company. Creando el futuro digital.
          </p>
        </div>

        <div class="flex space-x-4">
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-700/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Componente footer con iconos de gradiente
</script>`