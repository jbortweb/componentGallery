<template>
  <footer class="transparent-footer">
    <!-- Animación del cohete -->
    <div class="rocket-animation">
      <div class="rocket">🚀</div>
      <div class="rocket-trail"></div>
    </div>

    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo y descripción -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <svg
              class="w-8 h-8 text-blue-400"
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
            <span class="text-xl font-bold">Component Gallery</span>
          </div>
          <p class="text-gray-400 max-w-md">
            Una colección de componentes modernos e interactivos construidos con
            Vue 3, Vite y Tailwind CSS. Perfectos para inspirarte en tus
            próximos proyectos.
          </p>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4"
          >
            Enlaces Rápidos
          </h3>
          <div class="flex flex-row gap-6">
            <ul class="space-y-2 min-w-[120px]">
              <li>
                <router-link
                  to="/"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Inicio
                </router-link>
              </li>
              <li>
                <router-link
                  to="/cards/productos"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Productos
                </router-link>
              </li>
              <li>
                <router-link
                  to="/cards/perfiles"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Perfiles
                </router-link>
              </li>
              <li>
                <router-link
                  to="/cards/articulos"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Artículos
                </router-link>
              </li>
            </ul>
            <ul class="space-y-2 min-w-[120px]">
              <li>
                <router-link
                  to="/headers"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Headers
                </router-link>
              </li>
              <li>
                <router-link
                  to="/footers"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Footers
                </router-link>
              </li>
              <li>
                <router-link
                  to="/carousel"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Carousels
                </router-link>
              </li>
              <li>
                <router-link
                  to="/slider"
                  class="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  Sliders
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- Información del desarrollador -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4"
          >
            Desarrollador
          </h3>
          <div class="space-y-2">
            <a
              href="https://portafoliojbortweb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors block"
            >
              Portafolio
            </a>
            <a
              href="https://vida-laboral.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors block"
            >
              Vida Laboral
            </a>
          </div>

          <!-- Redes sociales -->
          <div class="mt-6 flex space-x-4">
            <a
              href="https://github.com/jbortweb"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jordi-bort/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Línea divisoria y copyright -->
      <div class="mt-8 border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            Este proyecto es de código abierto y damos la bienvenida a
            <a
              href="https://github.com/jbortweb/componentGallery"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-400 transition-colors cursor-pointer underline underline-offset-2"
            >
              colaboraciones </a
            >. ¡Tu participación es valiosa!
          </p>
          <div class="mt-4 md:mt-0 flex items-center space-x-2">
            <img src="/logo.svg" alt="Vite" class="w-10 h-10" />
            <span class="text-gray-400 text-sm">
              Creado por
              <a
                href="https://portafoliojbortweb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-400 transition-colors cursor-pointer underline underline-offset-2"
              >
                jbortweb
              </a>
              con Vue 3 + Tailwind
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No se necesitan imports ni variables reactivas
</script>

<style scoped>
/* Footer transparente */
.transparent-footer {
  background: transparent;
  color: white;
  width: 100%;
  position: relative;
  margin-top: 4rem;
}

/* Animación del cohete */
.rocket-animation {
  position: relative;
  width: 100%;
  height: 60px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.rocket {
  position: absolute;
  font-size: 2rem;
  top: 50%;
  transform: translateY(-50%);
  animation: rocket-flight 8s linear infinite;
  z-index: 2;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
}

.rocket-trail {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  background: linear-gradient(
    to left,
    transparent,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: trail-follow 8s linear infinite;
  z-index: 1;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
  border-radius: 2px;
}

@keyframes rocket-flight {
  0% {
    left: -60px;
    transform: translateY(-50%) rotate(35deg);
  }
  25% {
    left: 25%;
    transform: translateY(-50%) rotate(40deg);
  }
  50% {
    left: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  75% {
    left: 75%;
    transform: translateY(-50%) rotate(50deg);
  }
  100% {
    left: calc(100% + 60px);
    transform: translateY(-50%) rotate(55deg);
  }
}

@keyframes trail-follow {
  0% {
    left: -60px;
    width: 0;
    opacity: 0;
  }
  20% {
    left: calc(20% - 80px);
    width: 80px;
    opacity: 1;
  }
  40% {
    left: calc(40% - 100px);
    width: 100px;
    opacity: 1;
  }
  60% {
    left: calc(60% - 120px);
    width: 120px;
    opacity: 1;
  }
  80% {
    left: calc(80% - 140px);
    width: 140px;
    opacity: 1;
  }
  100% {
    left: calc(100% - 160px);
    width: 160px;
    opacity: 0;
  }
}

/* Efectos adicionales para el cohete */
@keyframes rocket-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
  }
}

.rocket:hover {
  animation: rocket-flight 8s ease-in-out infinite,
    rocket-glow 2s ease-in-out infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .rocket {
    font-size: 1.5rem;
  }

  .rocket-animation {
    height: 40px;
  }

  @keyframes trail-follow {
    0% {
      left: -40px;
      width: 0;
      opacity: 0;
    }
    20% {
      left: calc(20% - 60px);
      width: 60px;
      opacity: 1;
    }
    40% {
      left: calc(40% - 70px);
      width: 70px;
      opacity: 1;
    }
    60% {
      left: calc(60% - 80px);
      width: 80px;
      opacity: 1;
    }
    80% {
      left: calc(80% - 90px);
      width: 90px;
      opacity: 1;
    }
    100% {
      left: calc(100% - 100px);
      width: 100px;
      opacity: 0;
    }
  }
}
</style>
