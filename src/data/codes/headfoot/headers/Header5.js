export default `<template>
  <!-- Header con diseño de terminal/matriz -->
  <header class="relative bg-black overflow-hidden">
    <!-- Efecto matriz de fondo -->
    <div class="absolute inset-0 opacity-20">
      <canvas ref="matrixCanvas" class="w-full h-full"></canvas>
    </div>
    
    <!-- Líneas geométricas decorativas -->
    <div class="absolute inset-0 pointer-events-none">
      <svg class="w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00ff41" />
            <stop offset="100%" stop-color="#0080ff" />
          </linearGradient>
        </defs>
        <line x1="0" y1="50%" x2="100%" y2="0%" stroke="url(#lineGradient)" stroke-width="2"/>
        <line x1="0" y1="100%" x2="50%" y2="0%" stroke="url(#lineGradient)" stroke-width="1"/>
        <line x1="50%" y1="100%" x2="100%" y2="30%" stroke="url(#lineGradient)" stroke-width="1"/>
      </svg>
    </div>

    <!-- Navegación principal -->
    <nav class="relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo tipo terminal -->
          <div class="flex items-center group">
            <div class="relative">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                <span class="text-black font-mono font-bold text-lg">&gt;_</span>
              </div>
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div class="ml-4">
              <span class="text-green-400 font-mono text-xl font-bold tracking-wider">CYBERTECH</span>
              <div class="text-green-300/60 text-xs font-mono">v2.1.3</div>
            </div>
          </div>

          <!-- Navegación desktop estilo terminal -->
          <div class="hidden md:flex items-center space-x-1">
            <div 
              v-for="(item, index) in navItems" 
              :key="item.name"
              class="relative group"
              @mouseenter="typeEffect(index)"
            >
              <a 
                href="#" 
                class="px-4 py-2 text-green-400 hover:text-green-300 font-mono text-sm border border-green-500/0 hover:border-green-500/30 rounded transition-all duration-300 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/20"
              >
                <span class="relative">
                  {{ item.name }}
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <!-- Efecto de cursor parpadeante -->
              <span 
                class="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"
              >
                |
              </span>
            </div>
          </div>

          <!-- Botón de acceso y menú móvil -->
          <div class="flex items-center space-x-4">
            <!-- Botón de acceso principal -->
            <button class="hidden md:block relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div class="relative bg-black border border-green-500 text-green-400 font-mono font-bold py-3 px-6 rounded-lg group-hover:bg-green-500/10 transition duration-200">
                <span class="text-green-400">[</span> ACCESO <span class="text-green-400">]</span>
              </div>
            </button>

            <!-- Menú hamburguesa móvil -->
            <button 
              @click="toggleMobileMenu"
              class="md:hidden p-2 border border-green-500/30 rounded text-green-400 hover:bg-green-500/10 transition-colors"
            >
              <svg class="w-6 h-6" :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="w-6 h-6" :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero section estilo terminal -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-16 pb-24">
      <div class="max-w-7xl mx-auto">
        <div class="relative">
          <!-- Terminal window -->
          <div class="bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-lg shadow-2xl shadow-green-500/10">
            <!-- Terminal header -->
            <div class="flex items-center justify-between p-4 border-b border-green-500/30">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="text-green-400 font-mono text-sm">terminal@cybertech:~$</div>
            </div>
            
            <!-- Terminal content -->
            <div class="p-6 font-mono text-green-400">
              <div class="space-y-2">
                <div class="flex items-center">
                  <span class="text-green-500">user@cybertech:~$</span>
                  <span class="ml-2" ref="typewriterText">{{ currentText }}</span>
                  <span class="animate-pulse">|</span>
                </div>
                
                <div v-if="showOutput" class="pl-4 space-y-1 animate-fade-in">
                  <div class="text-green-300">Inicializando sistema neural avanzado...</div>
                  <div class="text-blue-400">Cargando módulos de IA...</div>
                  <div class="text-yellow-400">Estableciendo conexión cuántica...</div>
                  <div class="text-green-400">✓ Sistema listo para el futuro digital</div>
                </div>
              </div>
              
              <!-- Título principal -->
              <div class="mt-8 mb-6">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">
                  <span class="text-white">CYBER</span>
                  <span class="text-green-400">TECH</span>
                  <span class="text-blue-400">.exe</span>
                </h1>
                <p class="text-xl text-green-300/80 max-w-3xl">
                  >> Desarrollando el futuro digital con tecnología cuántica avanzada
                </p>
              </div>
              
              <!-- Botones de acción estilo terminal -->
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="group relative">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div class="relative bg-black border border-green-500 text-green-400 font-mono font-bold py-3 px-6 rounded group-hover:bg-green-500/10 transition duration-200">
                    > INICIAR_SESION.exe
                  </div>
                </button>
                
                <button class="border border-green-500/50 text-green-400 font-mono py-3 px-6 rounded hover:bg-green-500/10 hover:border-green-500 transition-all duration-200">
                  > explorar_sistema.sh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú móvil estilo terminal -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 md:hidden"
    >
      <div class="fixed inset-0 bg-black/90 backdrop-blur-sm" @click="toggleMobileMenu"></div>
      <div class="relative bg-gray-900/95 backdrop-blur-xl border-r border-green-500/30 w-80 h-full">
        <!-- Terminal mobile header -->
        <div class="flex items-center justify-between p-4 border-b border-green-500/30">
          <span class="text-green-400 font-mono text-lg font-bold">MENU.sys</span>
          <button @click="toggleMobileMenu" class="p-2 border border-green-500/30 rounded text-green-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Terminal mobile navigation -->
        <nav class="p-4 space-y-2 font-mono">
          <a 
            v-for="(item, index) in navItems" 
            :key="item.name"
            href="#" 
            class="block px-4 py-3 text-green-400 border border-green-500/0 hover:border-green-500/30 rounded hover:bg-green-500/5 transition-all duration-200"
            @click="toggleMobileMenu"
          >
            <span class="text-green-500">[{{ index + 1 }}]</span> {{ item.name }}
          </a>
        </nav>
        
        <!-- Terminal mobile footer -->
        <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-green-500/30">
          <button class="w-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500 text-green-400 font-mono font-bold py-3 px-6 rounded hover:bg-green-500/30 transition duration-200">
            > ACCESO_TOTAL.exe
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Estado del menú móvil
const isMobileMenuOpen = ref(false)

// Referencias del DOM
const matrixCanvas = ref(null)
const typewriterText = ref(null)

// Estado del efecto typewriter
const currentText = ref('')
const showOutput = ref(false)

// Elementos de navegación
const navItems = [
  { name: 'SISTEMA', href: '#' },
  { name: 'MODULOS', href: '#' },
  { name: 'NEURAL_NET', href: '#' },
  { name: 'QUANTUM', href: '#' },
  { name: 'DATA_CORE', href: '#' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Efecto typewriter
const typeEffect = (index) => {
  // Efecto simple de hover
}

// Efecto matriz de fondo
const initMatrixEffect = () => {
  if (!matrixCanvas.value) return
  
  const canvas = matrixCanvas.value
  const ctx = canvas.getContext('2d')
  
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
  
  const characters = '01ア力子カネハミホマムメナニヌ0123456789ABCDEF'
  const fontSize = 14
  const columns = canvas.width / fontSize
  
  const drops = []
  for (let i = 0; i < columns; i++) {
    drops[i] = 1
  }
  
  const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = '#00ff41'
    ctx.font = \`\${fontSize}px monospace\`
    
    for (let i = 0; i < drops.length; i++) {
      const text = characters[Math.floor(Math.random() * characters.length)]
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      
      drops[i]++
    }
  }
  
  const interval = setInterval(draw, 33)
  
  return () => clearInterval(interval)
}

// Efecto typewriter para el terminal
const initTypewriter = () => {
  const messages = [
    'hack_the_planet.exe',
    'neural_network_init.py',
    'quantum_compute --start',
    'cyber_defense.sh --active'
  ]
  
  let messageIndex = 0
  let charIndex = 0
  
  const type = () => {
    if (charIndex < messages[messageIndex].length) {
      currentText.value = messages[messageIndex].substring(0, charIndex + 1)
      charIndex++
      setTimeout(type, 100)
    } else {
      setTimeout(() => {
        showOutput.value = true
        setTimeout(() => {
          showOutput.value = false
          charIndex = 0
          messageIndex = (messageIndex + 1) % messages.length
          currentText.value = ''
          setTimeout(type, 1000)
        }, 3000)
      }, 1000)
    }
  }
  
  setTimeout(type, 1000)
}

// Lifecycle hooks
let matrixCleanup
onMounted(() => {
  matrixCleanup = initMatrixEffect()
  initTypewriter()
})

onUnmounted(() => {
  if (matrixCleanup) {
    matrixCleanup()
  }
})
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

/* Efectos de glow */
.glow-green {
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
}

/* Responsive canvas */
canvas {
  display: block;
}
</style>`