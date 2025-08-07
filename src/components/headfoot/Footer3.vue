<template>
  <footer
    ref="footerRef"
    class="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    :class="{ 'animate-fade-in-up': isVisible }"
  >
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-4 -left-4 w-72 h-72 bg-purple-600 rounded-full opacity-20 animate-pulse"
        :style="{ transform: `translateY(${scrollY * 0.1}px)` }"
      ></div>
      <div
        class="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-600 rounded-full opacity-10 animate-bounce"
        :style="{ transform: `translateY(${scrollY * -0.05}px)` }"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-600 rounded-full opacity-15"
        :style="{
          transform: `translateY(${scrollY * 0.08}px) rotate(${
            scrollY * 0.1
          }deg)`,
        }"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <!-- Company Section -->
        <div
          ref="companyRef"
          class="lg:col-span-1 transform transition-all duration-700"
          :class="{
            'translate-y-0 opacity-100': companyVisible,
            'translate-y-8 opacity-0': !companyVisible,
          }"
        >
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Company</h3>
          </div>
          <p class="text-purple-200 mb-6 leading-relaxed">
            Innovamos el futuro digital con soluciones tecnológicas que
            transforman ideas en realidades extraordinarias.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Sections -->
        <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            ref="linksRef1"
            class="transform transition-all duration-700 delay-200"
            :class="{
              'translate-y-0 opacity-100': linksVisible,
              'translate-y-8 opacity-0': !linksVisible,
            }"
          >
            <h4 class="text-lg font-semibold mb-4 text-purple-200">
              Productos
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Aplicaciones Web</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Apps Móviles</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >APIs</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Integraciones</a
                >
              </li>
            </ul>
          </div>

          <div
            ref="linksRef2"
            class="transform transition-all duration-700 delay-400"
            :class="{
              'translate-y-0 opacity-100': linksVisible,
              'translate-y-8 opacity-0': !linksVisible,
            }"
          >
            <h4 class="text-lg font-semibold mb-4 text-purple-200">
              Servicios
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Consultoría</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Desarrollo</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Diseño UX/UI</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Soporte 24/7</a
                >
              </li>
            </ul>
          </div>

          <div
            ref="linksRef3"
            class="transform transition-all duration-700 delay-600"
            :class="{
              'translate-y-0 opacity-100': linksVisible,
              'translate-y-8 opacity-0': !linksVisible,
            }"
          >
            <h4 class="text-lg font-semibold mb-4 text-purple-200">Recursos</h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Documentación</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Tutoriales</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-purple-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >Comunidad</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div
        ref="newsletterRef"
        class="border-t border-purple-600 border-opacity-30 pt-8 mb-8 transform transition-all duration-700 delay-800"
        :class="{
          'translate-y-0 opacity-100': newsletterVisible,
          'translate-y-8 opacity-0': !newsletterVisible,
        }"
      >
        <div class="max-w-md mx-auto text-center">
          <h4 class="text-xl font-semibold mb-4">
            🚀 Únete a nuestra comunidad
          </h4>
          <p class="text-purple-200 mb-6">
            Recibe las últimas novedades y tips de desarrollo directamente en tu
            email.
          </p>
          <div class="flex gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              class="flex-1 px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <button
              class="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        ref="bottomRef"
        class="border-t border-purple-600 border-opacity-30 pt-6 flex flex-col md:flex-row justify-between items-center transform transition-all duration-700 delay-1000"
        :class="{
          'translate-y-0 opacity-100': bottomVisible,
          'translate-y-8 opacity-0': !bottomVisible,
        }"
      >
        <div class="text-purple-200 text-sm mb-4 md:mb-0">
          © 2024 Company. Diseñado con ❤️ para el futuro digital.
        </div>
        <div class="flex space-x-6 text-sm">
          <a href="#" class="text-purple-300 hover:text-white transition-colors"
            >Privacidad</a
          >
          <a href="#" class="text-purple-300 hover:text-white transition-colors"
            >Términos</a
          >
          <a href="#" class="text-purple-300 hover:text-white transition-colors"
            >Cookies</a
          >
        </div>
      </div>
    </div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-20 w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center cursor-pointer transition-all"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-4 h-4 text-white pointer-events-none"
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
    </button>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Footer"
      cardVariant="Con animaciones de scroll"
      :codeContent="cardCode"
    />
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import CodeModal from "../CodeModal.vue";
import { headCodes } from "../../data/headCodes.js";

// Modal setup
const codeModal = ref(null);
const cardCode = headCodes.Footer3;

// Refs for animations
const footerRef = ref(null);
const companyRef = ref(null);
const linksRef1 = ref(null);
const linksRef2 = ref(null);
const linksRef3 = ref(null);
const newsletterRef = ref(null);
const bottomRef = ref(null);

// Animation states
const isVisible = ref(false);
const companyVisible = ref(false);
const linksVisible = ref(false);
const newsletterVisible = ref(false);
const bottomVisible = ref(false);
const scrollY = ref(0);

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const handleScroll = () => {
  scrollY.value = window.scrollY;

  if (footerRef.value) {
    const rect = footerRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Main footer visibility
    if (rect.top < windowHeight * 0.8) {
      isVisible.value = true;
    }

    // Staggered animations for sections
    if (rect.top < windowHeight * 0.7) {
      companyVisible.value = true;
    }
    if (rect.top < windowHeight * 0.6) {
      linksVisible.value = true;
    }
    if (rect.top < windowHeight * 0.5) {
      newsletterVisible.value = true;
    }
    if (rect.top < windowHeight * 0.4) {
      bottomVisible.value = true;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check initial state
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}
</style>
