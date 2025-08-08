export const ProductCard3 = `<template>
  <div
    class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-700 relative group"
  >
   

    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-green-400 text-xs font-mono uppercase tracking-wider"
          >Available</span
        >
      </div>

      <div class="relative mb-6">
        <img
          src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop"
          alt="AirPods Pro"
          class="w-full h-40 object-cover rounded-xl"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"
        ></div>
        <div class="absolute bottom-3 left-3">
          <span
            class="bg-gray-800/90 text-white px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm"
          >
            Audio
          </span>
        </div>
      </div>

      <h3 class="text-white text-xl font-bold mb-2 leading-tight">
        AirPods Pro
      </h3>
      <p class="text-gray-400 text-sm mb-4 leading-relaxed">
        Audio inmersivo con cancelación activa de ruido
      </p>

      <div class="flex items-center justify-between mb-6">
        <div class="text-left">
          <div class="text-2xl font-bold text-white">249€</div>
          <div class="text-gray-400 text-xs">Precio final</div>
        </div>
        <div class="text-right">
          <div class="flex items-center">
            <span class="text-yellow-400 text-lg mr-1">★</span>
            <span class="text-white font-semibold">4.7</span>
          </div>
          <div class="text-gray-400 text-xs">634 reviews</div>
        </div>
      </div>

      <div class="space-y-3">
        <button
          class="w-full bg-white text-gray-900 py-3 px-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg"
        >
          Comprar Ahora
        </button>
        <button
          class="w-full border border-gray-600 text-gray-300 py-3 px-4 rounded-xl font-medium hover:border-gray-500 hover:text-white transition-all duration-200"
        >
          Más Información
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard3'
}
</script>
`;