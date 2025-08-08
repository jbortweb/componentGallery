<template>
  <div class="relative group w-full">
    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-gray-300 hover:bg-gray-200 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 shadow-neumorphism-inset cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-gray-600"
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

    <!-- Tarjeta Neumorfismo -->
    <div
      class="bg-gray-300 rounded-3xl p-8 shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-500 transform hover:scale-102 relative overflow-hidden"
    >
      <!-- Subtle gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-3xl"
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- Avatar with 3D effect -->
        <div class="flex justify-center mb-6">
          <div class="relative group/avatar">
            <div
              class="w-24 h-24 rounded-full shadow-neumorphism-inset bg-gray-300 p-2 transform transition-all duration-300 group-hover/avatar:shadow-neumorphism-inset-hover"
            >
              <img
                src="/mia.webp"
                alt="Carlos Mendoza"
                class="w-full h-full rounded-full object-cover shadow-inner"
              />
            </div>
            <!-- 3D floating status -->
            <div
              class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full shadow-neumorphism flex items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <div
                class="w-3 h-3 bg-green-500 rounded-full shadow-neumorphism-inset animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- Info with depth -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-2 tracking-wide">
            Carlos Mendoza
          </h3>
          <div
            class="bg-gray-300 rounded-2xl p-3 shadow-neumorphism-inset mb-2"
          >
            <p class="text-gray-600 font-medium">UI/UX Designer</p>
          </div>
          <p class="text-gray-500 text-sm font-medium">@ Design Studio</p>
        </div>

        <!-- Bio in recessed area -->
        <div class="mb-6">
          <div class="bg-gray-300 rounded-2xl p-4 shadow-neumorphism-inset">
            <p
              class="text-gray-600 text-sm text-center leading-relaxed line-clamp-3"
            >
              Diseñador creativo especializado en experiencias digitales
              intuitivas
            </p>
          </div>
        </div>

        <!-- 3D Skills -->
        <div class="mb-6">
          <div class="grid grid-cols-2 gap-3">
            <div
              class="bg-gray-300 text-gray-700 text-xs font-medium px-3 py-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-center transform hover:-translate-y-1 animate-fade-in-scale"
              style="animation-delay: 0ms"
            >
              Figma
            </div>
            <div
              class="bg-gray-300 text-gray-700 text-xs font-medium px-3 py-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-center transform hover:-translate-y-1 animate-fade-in-scale"
              style="animation-delay: 100ms"
            >
              Adobe XD
            </div>
            <div
              class="bg-gray-300 text-gray-700 text-xs font-medium px-3 py-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-center transform hover:-translate-y-1 animate-fade-in-scale"
              style="animation-delay: 200ms"
            >
              Prototyping
            </div>
            <div
              class="bg-gray-300 text-gray-700 text-xs font-medium px-3 py-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-center transform hover:-translate-y-1 animate-fade-in-scale"
              style="animation-delay: 300ms"
            >
              User Research
            </div>
          </div>
        </div>

        <!-- 3D Social buttons -->
        <div class="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/jordi-bort/"
            target="_blank"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg
              class="w-5 h-5 text-blue-600 group-hover/social:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="https://portafoliojbortweb.netlify.app/"
            target="_blank"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg
              class="w-5 h-5 text-pink-600 group-hover/social:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 13.8h-3.185V24h-4.84V13.8H6.185V9.442h3.358V6.294c0-2.855 1.168-4.55 4.55-4.55h2.833v4.362h-1.775c-1.331 0-1.419.497-1.419 1.419v1.917h3.185L15.568 13.8z"
              />
            </svg>
          </a>
        </div>

        <!-- 3D Connect Button -->
        <button
          class="w-full bg-gray-300 text-gray-700 py-4 px-6 rounded-2xl font-bold shadow-neumorphism hover:shadow-neumorphism-hover active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 relative overflow-hidden group/btn"
        >
          <span class="relative z-10">Conectar</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"
          ></div>
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Profile Card"
      cardVariant="Neumorphism Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import { ProfileCard2 } from "../../../data/codes/cards/profiles/ProfileCard2.js";

const codeModal = ref(null);
const cardCode = ProfileCard2;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Neumorphism shadows */
.shadow-neumorphism {
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.shadow-neumorphism-hover {
  box-shadow: 25px 25px 75px #bebebe, -25px -25px 75px #ffffff;
}

.shadow-neumorphism-inset {
  box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff;
}

.shadow-neumorphism-inset-hover {
  box-shadow: inset 15px 15px 30px #bebebe, inset -15px -15px 30px #ffffff;
}

.shadow-neumorphism-pressed {
  box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff;
}

/* Animaciones personalizadas */
@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.6s ease-out forwards;
  opacity: 0;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>