export default `<template>
  <div
    class="relative w-full max-w-sm mx-auto h-72 perspective-1000 cursor-pointer"
  >
    <!-- Contenedor del book flip -->
    <div
      class="book-container group w-full h-full relative preserve-3d transition-transform duration-700 hover:rotate-y-15"
    >
      <!-- Página frontal (imagen) -->
      <div
        class="book-page book-front absolute inset-0 w-full h-full backface-hidden"
      >
        <div
          class="w-full h-full bg-white rounded-lg overflow-hidden shadow-lg border-0"
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format"
            alt="Desarrollador trabajando"
            class="w-full h-full object-cover"
          />

          <!-- Overlay sutil -->
          <div
            class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"
          ></div>

          <!-- Título en la esquina inferior -->
          <div
            class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
          >
            <h3 class="text-white font-bold text-lg">Diseño Creativo</h3>
          </div>
        </div>
      </div>

      <!-- Página trasera (contenido) -->
      <div
        class="book-page book-back absolute inset-0 w-full h-full backface-hidden rotate-y-180"
      >
        <div
          class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-center text-white border-0"
        >
          <h3 class="text-2xl font-bold mb-4 text-center">Diseño Creativo</h3>

          <p class="text-gray-300 text-sm leading-relaxed mb-6 text-center">
            Explora el mundo del diseño digital con tecnologías modernas y
            efectos visuales impactantes.
          </p>

          <!-- Enlaces sociales centrados -->
          <div class="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/jordi-bort/"
              target="_blank"
              class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300"
              title="LinkedIn"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/jbortweb"
              target="_blank"
              class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 hover:scale-110 transition-all duration-300"
              title="GitHub"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400/50 hover:scale-110 transition-all duration-300"
              title="Twitter"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
            </a>
          </div>

          <!-- Decoración adicional -->
          <div
            class="mt-6 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          ></div>
        </div>
      </div>

      <!-- Efecto de sombra en el borde del libro -->
      <div class="book-shadow absolute inset-0 pointer-events-none">
        <div
          class="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-black/30 via-black/10 to-black/30 transform translate-x-0 transition-transform duration-700 group-hover:translate-x-1"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Utilities para efecto 3D page flip */
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.rotate-y-15 {
  transform: rotateY(15deg);
}

/* Contenedor del libro */
.book-container {
  transform-origin: left center;
}

/* Páginas del libro */
.book-page {
  transform-origin: left center;
  border-radius: 8px;
}

.book-front {
  z-index: 2;
}

.book-back {
  z-index: 1;
}

/* Efecto hover - rotar la página */
.book-container:hover {
  transform: rotateY(-25deg);
}

/* Sombra del libro para mayor realismo */
.book-shadow {
  z-index: 3;
  pointer-events: none;
}

/* Animación suave para todas las transformaciones */
.book-container,
.book-page,
.book-shadow > div {
  transition: transform 0.7s ease-out;
}

/* Efecto de profundidad en hover */
.book-container:hover .book-front {
  transform: rotateY(-180deg);
}

.book-container:hover .book-back {
  transform: rotateY(0deg);
}

/* Sombra más pronunciada en hover */
.book-container:hover .book-shadow > div {
  transform: translateX(4px);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
}

/* Efectos adicionales para mayor realismo */
.book-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.1) 2%,
    transparent 4%
  );
  z-index: 4;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.7s ease-out;
}

.book-container:hover::before {
  opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .book-container:hover {
    transform: rotateY(-20deg);
  }
}
</style>`;
