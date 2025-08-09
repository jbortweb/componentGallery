export default `<template>
  <div
    class="article-card-5 group relative bg-white rounded-none shadow-xl border-l-4 border-red-500 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-red-600 w-96 mx-auto"
  >
    <!-- Magazine-style header stripe -->
    <div
      class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
    ></div>

    <div class="p-6 pt-8">
      <!-- Magazine-style header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-1 h-16 bg-red-500"></div>
          <div class="space-y-1">
            <div class="flex space-x-2">
              <span
                class="px-2 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wide"
              >
                DevOps
              </span>
            </div>
            <p
              class="text-xs text-gray-500 uppercase tracking-wide font-semibold"
            >
              6 min Read
            </p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-400 uppercase">8 Ene 2024</p>
        </div>
      </div>

      <!-- Bold magazine title -->
      <h3
        class="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300 uppercase tracking-tight"
      >
        DevOps: Automatización y CI/CD
      </h3>

      <!-- Magazine-style image -->
      <div class="relative mb-6 -mx-6">
        <img
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop"
          alt="DevOps: Automatización y CI/CD"
          class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Bold overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>
        <div class="absolute bottom-4 left-6 right-6">
          <p class="text-white text-sm leading-relaxed font-medium">
            Implementa pipelines de CI/CD efectivos para tu equipo
          </p>
        </div>
      </div>

      <!-- Magazine-style author section -->
      <div class="border-t-2 border-red-500 pt-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div
              class="w-12 h-12 bg-red-500 text-white font-black text-lg flex items-center justify-center"
            >
              DT
            </div>
            <div>
              <p
                class="font-bold text-gray-900 uppercase text-sm tracking-wide"
              >
                DevOps Pro
              </p>
              <p class="text-xs text-gray-500 uppercase font-semibold">
                Contributing Writer
              </p>
            </div>
          </div>

          <!-- Bold engagement stats -->
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <p class="text-xl font-black text-red-500">245</p>
              <p class="text-xs text-gray-500 uppercase font-bold">Likes</p>
            </div>
            <div class="text-center">
              <p class="text-xl font-black text-red-500">
                38
              </p>
              <p class="text-xs text-gray-500 uppercase font-bold">Comments</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Magazine action buttons -->
      <div class="mt-6 pt-4 border-t-2 border-red-500 flex justify-between items-center">
        <a
          href="#"
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-black text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
        >
          LEER MÁS
        </a>
        <a
          href="#"
          class="text-red-500 hover:text-red-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300 cursor-pointer"
        >
          + ARTÍCULOS
        </a>
      </div>

      <!-- Magazine corner fold effect -->
      <div
        class="absolute top-0 right-0 w-8 h-8 bg-gray-200 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-red-100 transition-colors duration-300"
      ></div>
    </div>

    <!-- Magazine spine effect -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-400 group-hover:w-2 transition-all duration-300"
    ></div>
  </div>
</template>

<script setup>
// Lógica del componente aquí
</script>`;