<template>
  <!-- Modal usando dialog nativo -->
  <dialog
    ref="modal"
    class="backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-transparent border-none p-4 max-w-4xl w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl m-auto"
    @click="handleBackdropClick"
  >
    <div class="bg-white rounded-2xl overflow-hidden">
      <!-- Header del modal -->
      <div
        class="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50"
      >
        <div>
          <h3 class="text-xl font-bold text-gray-900">Código del Componente</h3>
          <p class="text-sm text-gray-600 mt-1">
            {{ cardType }} - {{ cardVariant }}
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <button
            @click="copyCode"
            class="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>{{ copied ? "Copiado!" : "Copiar" }}</span>
          </button>
          <button
            @click="closeModal"
            class="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Contenido del código -->
      <div class="p-6 max-h-[70vh] overflow-y-auto">
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre
            class="text-sm text-gray-100 font-mono leading-relaxed"
          ><code>{{ codeContent }}</code></pre>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  cardType: {
    type: String,
    required: true,
  },
  cardVariant: {
    type: String,
    required: true,
  },
  codeContent: {
    type: String,
    required: true,
  },
});

const modal = ref(null);
const copied = ref(false);

const openModal = () => {
  if (modal.value) {
    modal.value.showModal();
  }
};

const closeModal = () => {
  if (modal.value) {
    modal.value.close();
  }
};

const handleBackdropClick = (event) => {
  if (event.target === modal.value) {
    closeModal();
  }
};

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.codeContent);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Error al copiar:", err);
  }
};

// Exponer la función openModal para que el componente padre pueda llamarla
defineExpose({
  openModal,
});
</script>

<style scoped>
/* Animaciones para el modal */
dialog {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
}

dialog[open] {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

dialog::backdrop {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

dialog[open]::backdrop {
  opacity: 1;
}

/* Estilos para el código */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
