export const ProductCard1 = `<template>
  <div
    class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm mx-auto relative group"
  >

    <!-- Premium Badge -->
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop"
        alt="iPhone 15 Pro"
        class="w-full h-52 object-cover"
      />
      <div class="absolute top-4 left-4">
        <span
          class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
        >
          PREMIUM
        </span>
      </div>
      <div class="absolute top-4 right-14">
        <button
          class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <svg
            class="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span
          class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          999€
        </span>
        <div class="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
          <svg
            class="w-4 h-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-yellow-700 font-semibold text-sm">4.8</span>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-2">iPhone 15 Pro</h3>
      <p class="text-gray-600 text-sm mb-4 line-height-relaxed">
        El iPhone más avanzado con chip A17 Pro y cámara de 48MP
      </p>

      <div class="flex items-center justify-between mb-4">
        <span class="text-xs text-gray-500">1247 reseñas</span>
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-xs text-green-600 font-medium">En stock</span>
        </div>
      </div>

      <button
        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Comprar Ahora
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductCard1'
}
</script>
`;