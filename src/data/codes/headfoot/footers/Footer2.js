export default `<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center mb-6">
            <img src="../assets/vite.svg" alt="Logo" class="h-8 w-8 mr-3" />
            <span class="text-xl font-bold">Brand</span>
          </div>
          <p class="text-gray-300 mb-6">
            Innovando el futuro digital con soluciones creativas y tecnología de
            vanguardia.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.122.771 2.165-.083.317-.402.635-.826.635-.61 0-1.125-.317-1.125-.317-.394-.655-.394-1.635.112-2.741.89-1.957.889-2.741.889-2.741 0-1.033-.394-2.143-.889-2.741-.097-.118-.112-.122-.771-2.165.083-.317.402-.635.826-.635.61 0 1.125.317 1.125.317.394.655.394 1.635-.112 2.741z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Servicios</h3>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Desarrollo Web</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Diseño UI/UX</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Marketing Digital</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Consultoría</a
              >
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Empresa</h3>
          <ul class="space-y-4">
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Acerca de</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Equipo</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Carreras</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-300 hover:text-white transition-colors"
                >Blog</a
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Newsletter</h3>
          <p class="text-gray-300 mb-4">
            Mantente al día con nuestras últimas noticias y ofertas.
          </p>
          <form class="space-y-4">
            <input
              type="email"
              placeholder="Tu email"
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 Brand. Todos los derechos reservados.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors"
              >Política de Privacidad</a
            >
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors"
              >Términos de Servicio</a
            >
            <a
              href="#"
              class="text-gray-400 hover:text-white text-sm transition-colors"
              >Cookies</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Componente footer
</script>

<style scoped>
/* Estilos del footer */
</style>`