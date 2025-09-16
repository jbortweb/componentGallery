export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 cursor-crosshair"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >

    <!-- Imagen principal -->
    <img
      ref="mainImg"
      :src="imageUrl"
      alt="Producto con zoom"
      class="w-full h-full object-cover rounded-lg"
      @load="handleImageLoad"
    />

    <!-- Lupa circular -->
    <div
      v-if="showLens"
      class="absolute pointer-events-none w-40 h-40 border-4 border-blue-500 rounded-full overflow-hidden lupa"
      :style="{
        left: lensPosition.x + 'px',
        top: lensPosition.y + 'px',
        '--bg-image': 'url(https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg)',
        '--bg-size':
          backgroundSize.width + 'px ' + backgroundSize.height + 'px',
        '--bg-position':
          backgroundPosition.x + 'px ' + backgroundPosition.y + 'px',
      }"
    >
      <!-- Vista ampliada -->
      <div class="w-full h-full lente"></div>
    </div>

    <!-- Texto informativo con animación -->
    <div
      class="absolute bottom-4 left-4 transition-all duration-500 ease-out"
      :class="[
        showLens
          ? 'transform translate-x-0 translate-y-0 opacity-100'
          : 'transform translate-x-8 translate-y-8 opacity-0',
      ]"
    >
      <div
        class="bg-black/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-gray-700"
      >
        <h3 class="text-lg font-bold text-white mb-1">Laptop-Game</h3>
        <p class="text-xl font-semibold text-blue-400">760 €</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

// Refs
const mainImg = ref(null);
const showLens = ref(false);

// Configuración
const imageUrl = ref(
  "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg"
);
const zoomFactor = 3;
const lensSize = 160;

// Estados reactivos
const lensPosition = reactive({ x: 0, y: 0 });
const backgroundSize = reactive({ width: 0, height: 0 });
const backgroundPosition = reactive({ x: 0, y: 0 });

// Dimensiones de la imagen
let imageRect = null;

const handleImageLoad = () => {
  calculateImageDimensions();
};

const calculateImageDimensions = () => {
  if (!mainImg.value) return;

  imageRect = mainImg.value.getBoundingClientRect();

  // Calcular el tamaño del fondo para el zoom
  backgroundSize.width = imageRect.width * zoomFactor;
  backgroundSize.height = imageRect.height * zoomFactor;
};

const handleMouseMove = (event) => {
  if (!mainImg.value || !imageRect) return;

  const rect = mainImg.value.getBoundingClientRect();

  // Coordenadas del mouse relativas a la imagen
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Verificar que el mouse esté dentro de la imagen
  if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
    showLens.value = true;

    // Posición de la lupa
    lensPosition.x = x;
    lensPosition.y = y;

    // Calcular la posición del background para mostrar la parte correcta ampliada
    const lensRadius = lensSize / 2;

    // Porcentaje de posición del mouse en la imagen (0-1)
    const percentX = x / rect.width;
    const percentY = y / rect.height;

    // Posición del background para centrar la parte ampliada
    backgroundPosition.x = lensRadius - percentX * backgroundSize.width;
    backgroundPosition.y = lensRadius - percentY * backgroundSize.height;
  } else {
    showLens.value = false;
  }
};

const handleMouseLeave = () => {
  showLens.value = false;
};

// Recalcular dimensiones al cambiar el tamaño de ventana
onMounted(() => {
  window.addEventListener("resize", calculateImageDimensions);
});
</script>
<style scoped>
.lupa {
  transform: translate(-50%, -50%);
}

.lente {
  background-image: var(--bg-image);
  background-size: var(--bg-size);
  background-position: var(--bg-position);
  background-repeat: no-repeat;
  background-attachment: local;
}
</style>`
