<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative w-full max-w-xl mx-auto h-96 overflow-hidden rounded-lg cursor-pointer"
  >
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-[1100] w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border-0 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-white pointer-events-none"
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
    <figure
      class="group relative overflow-hidden w-full h-full bg-[#42b078] text-center cursor-pointer"
    >
      <img
        src="https://vida-laboral.netlify.app/img/habita.webp"
        alt="img13"
        class="relative block min-h-full max-w-none w-[calc(100%+20px)] opacity-80 -translate-x-[10px] transition-all duration-[350ms] group-hover:opacity-40 group-hover:translate-x-0"
      />
      <figcaption
        class="absolute top-0 left-0 w-full h-full p-8 text-white uppercase text-xl text-left"
      >
        <h2
          class="relative overflow-hidden py-2 m-0 font-light word-spacing-tight"
        >
          JBORTWEB <span class="font-extrabold">Frontend developer</span>
          <span class="h2-underline"></span>
        </h2>
        <p
          class="py-4 m-0 tracking-wide text-[0.685rem] opacity-0 translate-x-full transition-all duration-[350ms] group-hover:opacity-100 group-hover:translate-x-0"
        >
          Realizado con Vue y Tailwind.
        </p>
        <a
          href="#"
          class="absolute top-0 left-0 w-full h-full z-[1000] opacity-0 text-[0] whitespace-nowrap indent-[200%]"
        ></a>
      </figcaption>
    </figure>

    <CodeModal
      ref="codeModal"
      cardType="Image Effect"
      cardVariant="Efecto texto"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import imageEffect5Code from "../../../data/codes/effects/imageEffect/imageEffect5.js";

const codeModal = ref(null);
const cardCode = imageEffect5Code;
const isHovered = ref(false);

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
.word-spacing-tight {
  word-spacing: -0.15em;
}

.h2-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #fff;
  content: "";
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.35s;
}

.group:hover .h2-underline {
  transform: translate3d(0, 0, 0);
}
</style>