export const headCodes = {
  // Componentes de Header
  Header1: `<template>
  <!-- Header minimalista con diseño neumorfismo -->
  <header class="relative bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm overflow-hidden">
    <!-- Formas geométricas sutiles de fondo -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
    </div>

    <!-- Navegación principal -->
    <nav class="relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo minimalista -->
          <div class="flex items-center group">
            <div class="relative">
              <div class="w-10 h-10 bg-white rounded-xl shadow-lg shadow-gray-200/50 flex items-center justify-center group-hover:shadow-blue-200/50 transition-all duration-300">
                <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              </div>
            </div>
            <div class="ml-3">
              <span class="text-xl font-bold text-gray-800 tracking-tight">Minimal</span>
              <div class="text-xs text-gray-500 -mt-1">Design Studio</div>
            </div>
          </div>

          <!-- Navegación desktop elegante -->
          <div class="hidden md:flex items-center">
            <div class="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full p-1 shadow-lg shadow-gray-200/50">
              <a 
                v-for="item in navItems" 
                :key="item.name"
                href="#" 
                class="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-200 text-sm font-medium relative group"
              >
                {{ item.name }}
                <span class="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 rounded-full group-hover:w-6 transition-all duration-200 transform -translate-x-1/2"></span>
              </a>
            </div>
          </div>

          <!-- Botón CTA y menú móvil -->
          <div class="flex items-center space-x-4">
            <!-- Botón de contacto -->
            <button class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              <span class="font-medium">Contacto</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            <!-- Menú hamburguesa elegante -->
            <button 
              @click="toggleMobileMenu"
              class="md:hidden p-3 bg-white rounded-xl shadow-lg text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero section minimalista -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl">
          <!-- Título principal -->
          <h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Diseño
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Minimalista
            </span>
          </h1>
          
          <!-- Subtítulo -->
          <p class="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Creamos experiencias digitales elegantes y funcionales que destacan por su simplicidad y efectividad
          </p>
          
          <!-- Botones de acción -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <button class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div class="relative bg-white px-8 py-4 rounded-2xl text-gray-900 font-semibold hover:bg-gray-50 transition duration-200">
                Ver Portfolio
              </div>
            </button>
            
            <button class="px-8 py-4 text-gray-600 hover:text-gray-900 font-semibold transition-colors flex items-center space-x-2">
              <span>Conocer más</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          <!-- Métricas -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div class="text-sm text-gray-500">Proyectos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 mb-1">5</div>
              <div class="text-sm text-gray-500">Años</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 mb-1">98%</div>
              <div class="text-sm text-gray-500">Satisfacción</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-gray-900 mb-1">24/7</div>
              <div class="text-sm text-gray-500">Soporte</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú móvil elegante -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 md:hidden"
    >
      <div class="fixed inset-0 bg-black/20 backdrop-blur-sm" @click="toggleMobileMenu"></div>
      <div class="relative bg-white/95 backdrop-blur-xl w-80 h-full shadow-2xl">
        <!-- Header del menú -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <span class="font-bold text-gray-900">Minimal</span>
          </div>
          <button @click="toggleMobileMenu" class="p-2 text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Navegación móvil -->
        <nav class="p-6 space-y-2">
          <a 
            v-for="item in navItems" 
            :key="item.name"
            href="#" 
            class="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors font-medium"
            @click="toggleMobileMenu"
          >
            {{ item.name }}
          </a>
        </nav>
        
        <!-- Footer del menú móvil -->
        <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <button class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:scale-105 transition-transform">
            Comenzar Proyecto
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Estado del menú móvil
const isMobileMenuOpen = ref(false)

// Elementos de navegación
const navItems = [
  { name: 'Inicio', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'About', href: '#' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
/* Sombras suaves para el neumorfismo */
.shadow-neumorphic {
  box-shadow: 
    8px 8px 16px rgba(163, 177, 198, 0.2),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
}

.shadow-neumorphic-inset {
  box-shadow: 
    inset 4px 4px 8px rgba(163, 177, 198, 0.2),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
}
</style>`,

  Header2: `<template>
  <!-- Header gaming con efectos neon -->
  <header class="relative bg-black overflow-hidden">
    <!-- Efecto de scanlines -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="scanlines"></div>
    </div>
    
    <!-- Cuadrícula de fondo -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="grid-pattern"></div>
    </div>
    
    <!-- Líneas de energía animadas -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="energy-line energy-line-1"></div>
      <div class="energy-line energy-line-2"></div>
      <div class="energy-line energy-line-3"></div>
    </div>

    <!-- Navegación gaming -->
    <nav class="relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo gaming -->
          <div class="flex items-center group">
            <div class="relative">
              <!-- Efecto de glow -->
              <div class="absolute -inset-2 bg-cyan-500/20 blur-md rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300"></div>
              <div class="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center border border-cyan-400/50 shadow-lg shadow-cyan-500/25">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <!-- Parpadeo de estado -->
              <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
            <div class="ml-4">
              <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">NEXUS</span>
              <div class="text-cyan-300 text-xs font-mono uppercase tracking-widest">Gaming Platform</div>
            </div>
          </div>

          <!-- Navegación estilo gaming -->
          <div class="hidden md:flex items-center space-x-1">
            <div 
              v-for="(item, index) in navItems" 
              :key="item.name"
              class="relative group"
            >
              <a 
                href="#" 
                class="px-4 py-2 text-cyan-300 hover:text-white font-mono text-sm uppercase tracking-wide border border-cyan-500/0 hover:border-cyan-500/50 rounded transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <!-- Efecto de barrido -->
                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span class="relative">{{ item.name }}</span>
                <!-- Número de índice -->
                <span class="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {{ index + 1 }}
                </span>
              </a>
            </div>
          </div>

          <!-- Panel de control gaming -->
          <div class="flex items-center space-x-4">
            <!-- Indicadores de sistema -->
            <div class="hidden md:flex items-center space-x-3 bg-gray-900/80 border border-cyan-500/30 rounded-lg px-4 py-2">
              <div class="flex items-center space-x-1">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-green-400 text-xs font-mono">ONLINE</span>
              </div>
              <div class="w-px h-4 bg-cyan-500/30"></div>
              <div class="text-cyan-300 text-xs font-mono">FPS: 60</div>
            </div>

            <!-- Botón principal -->
            <button class="hidden md:block relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div class="relative bg-black border border-cyan-500 text-cyan-400 font-mono font-bold py-3 px-6 rounded-lg group-hover:bg-cyan-500/10 transition duration-300 uppercase tracking-wide">
                [ PLAY ]
              </div>
            </button>

            <!-- Menú móvil -->
            <button 
              @click="toggleMobileMenu"
              class="md:hidden p-2 bg-gray-900/80 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- HUD Principal -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-7xl mx-auto">
        <!-- Terminal de comando -->
        <div class="bg-gray-900/90 border border-cyan-500/30 rounded-lg p-6 mb-8 shadow-2xl shadow-cyan-500/10">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <div class="text-cyan-400 text-sm font-mono ml-4">NEXUS_TERMINAL v3.1.4</div>
          </div>
          
          <div class="font-mono text-cyan-300 text-sm space-y-1">
            <div class="flex items-center">
              <span class="text-purple-400">user@nexus:~$</span>
              <span class="ml-2 text-green-400">initialize_gaming_mode.exe</span>
            </div>
            <div class="text-yellow-400">► Loading game assets...</div>
            <div class="text-blue-400">► Connecting to servers...</div>
            <div class="text-green-400">✓ System ready for gaming</div>
          </div>
        </div>

        <!-- Título principal -->
        <div class="text-center mb-12">
          <h1 class="text-6xl md:text-8xl font-black mb-6">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              GAME
            </span>
            <span class="block text-white font-mono tracking-widest">
              ON
            </span>
          </h1>
          
          <p class="text-xl text-cyan-300/80 mb-8 max-w-3xl mx-auto font-mono">
            &gt; Entra al futuro del gaming con tecnología de próxima generación
          </p>
          
          <!-- Controles de juego -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="group relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div class="relative bg-black border border-cyan-500 text-cyan-400 font-mono font-bold py-4 px-8 rounded-xl group-hover:bg-cyan-500/10 transition duration-300">
                [ START_GAME ]
              </div>
            </button>
            
            <button class="border border-cyan-500/50 text-cyan-400 font-mono py-4 px-8 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300">
              [ VIEW_LEADERBOARD ]
            </button>
          </div>
        </div>

        <!-- Estadísticas de gaming -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div class="bg-gray-900/80 border border-cyan-500/30 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-cyan-400 font-mono" ref="playersCount">0</div>
            <div class="text-xs text-cyan-300/60 font-mono uppercase">Players</div>
          </div>
          <div class="bg-gray-900/80 border border-purple-500/30 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-400 font-mono" ref="gamesCount">0</div>
            <div class="text-xs text-purple-300/60 font-mono uppercase">Games</div>
          </div>
          <div class="bg-gray-900/80 border border-blue-500/30 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-blue-400 font-mono" ref="serversCount">0</div>
            <div class="text-xs text-blue-300/60 font-mono uppercase">Servers</div>
          </div>
          <div class="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-green-400 font-mono">24/7</div>
            <div class="text-xs text-green-300/60 font-mono uppercase">Uptime</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú móvil gaming -->
    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-50 md:hidden"
    >
      <div class="fixed inset-0 bg-black/90" @click="toggleMobileMenu"></div>
      <div class="relative bg-gray-900/95 border-r border-cyan-500/30 w-80 h-full">
        <!-- Header del menú -->
        <div class="flex items-center justify-between p-6 border-b border-cyan-500/30">
          <span class="text-cyan-400 font-mono text-lg font-bold uppercase">NEXUS_MENU</span>
          <button @click="toggleMobileMenu" class="p-2 border border-cyan-500/30 rounded text-cyan-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Navegación móvil -->
        <nav class="p-6 space-y-2 font-mono">
          <a 
            v-for="(item, index) in navItems" 
            :key="item.name"
            href="#" 
            class="flex items-center justify-between px-4 py-3 text-cyan-400 border border-cyan-500/0 hover:border-cyan-500/30 rounded hover:bg-cyan-500/5 transition-all duration-200 uppercase tracking-wide text-sm"
            @click="toggleMobileMenu"
          >
            <span>{{ item.name }}</span>
            <span class="text-xs text-purple-400">[{{ index + 1 }}]</span>
          </a>
        </nav>
        
        <!-- Footer del menú móvil -->
        <div class="absolute bottom-0 left-0 right-0 p-6 border-t border-cyan-500/30">
          <button class="w-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500 text-cyan-400 font-mono font-bold py-4 px-6 rounded hover:bg-cyan-500/30 transition duration-300 uppercase">
            [ START_GAME ]
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado del menú móvil
const isMobileMenuOpen = ref(false)

// Referencias para contadores
const playersCount = ref(null)
const gamesCount = ref(null)
const serversCount = ref(null)

// Elementos de navegación
const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Games', href: '#' },
  { name: 'Leaderboard', href: '#' },
  { name: 'Profile', href: '#' },
  { name: 'Store', href: '#' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Animación de contadores
const animateCounters = () => {
  const counters = [
    { ref: playersCount, target: 12847 },
    { ref: gamesCount, target: 543 },
    { ref: serversCount, target: 28 }
  ]
  
  counters.forEach(({ ref: counterRef, target }) => {
    if (!counterRef.value) return
    
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      counterRef.value.textContent = Math.floor(current).toLocaleString()
    }, 30)
  })
}

// Lifecycle
onMounted(() => {
  setTimeout(animateCounters, 1000)
})
</script>

<style scoped>
/* Efectos de scanlines */
.scanlines {
  background: linear-gradient(transparent 50%, rgba(0, 255, 255, 0.03) 50%);
  background-size: 100% 4px;
  height: 100%;
  animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
  0% { background-position: 0 0; }
  100% { background-position: 0 4px; }
}

/* Patrón de cuadrícula */
.grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Líneas de energía */
.energy-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: energy-flow 3s ease-in-out infinite;
}

.energy-line-1 {
  top: 20%;
  width: 200px;
  animation-delay: 0s;
}

.energy-line-2 {
  top: 50%;
  width: 150px;
  animation-delay: 1s;
}

.energy-line-3 {
  top: 80%;
  width: 300px;
  animation-delay: 2s;
}

@keyframes energy-flow {
  0%, 100% { 
    transform: translateX(-100%);
    opacity: 0;
  }
  50% { 
    transform: translateX(100vw);
    opacity: 1;
  }
}

/* Glow effects */
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}
</style>`,
  Header3: `<template>
  <!-- Header artístico con elementos creativos -->
  <header
    class="relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 overflow-hidden"
  >
    <!-- Formas abstractas de fondo -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Círculos grandes -->
      <div
        class="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float-delayed"
      ></div>

      <!-- Formas geométricas -->
      <div
        class="absolute top-1/4 right-20 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-red-400/30 transform rotate-45 animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 left-20 w-16 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full animate-bounce"
        style="animation-duration: 4s"
      ></div>

      <!-- Líneas curvas decorativas -->
      <svg
        class="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 400"
      >
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#gradient1)"
          stroke-width="3"
          fill="none"
        />
        <path
          d="M0,200 Q250,150 500,200 T1000,200"
          stroke="url(#gradient2)"
          stroke-width="2"
          fill="none"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f97316" />
            <stop offset="100%" stop-color="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#eab308" />
            <stop offset="100%" stop-color="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <!-- Navegación artística -->
    <nav class="relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24">
          <!-- Logo creativo -->
          <div class="flex items-center group">
            <div class="relative">
              <!-- Anillo exterior giratorio -->
              <div
                class="absolute -inset-4 border-2 border-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-spin-slow opacity-30"
              ></div>
              <!-- Logo principal -->
              <div
                class="w-16 h-16 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 transform rotate-3 group-hover:rotate-6"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 3c-1.27 0-2.4.58-2.85 1.28L6.92 7.5H3v13h18V7.5h-3.92L14.85 4.28C14.4 3.58 13.27 3 12 3zm0 2c.73 0 1.4.41 1.7.72L15.08 8.5H8.92L10.3 5.72C10.6 5.41 11.27 5 12 5zm5 5.5v8H7v-8h10zm-5 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"
                  />
                </svg>
              </div>
              <!-- Partículas decorativas -->
              <div
                class="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping"
              ></div>
              <div
                class="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
              ></div>
            </div>
            <div class="ml-4">
              <span
                class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600"
                >ArtStudio</span
              >
              <div class="text-sm text-gray-600 font-medium italic">
                Creative Agency
              </div>
            </div>
          </div>

          <!-- Navegación artística -->
          <div class="hidden md:flex items-center space-x-2">
            <div
              v-for="item in navItems"
              :key="item.name"
              class="relative group"
            >
              <a
                href="#"
                class="px-5 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 relative overflow-hidden rounded-full"
                @mouseenter="createBrushStroke($event)"
              >
                <!-- Efecto de pincelada -->
                <span
                  class="absolute inset-0 bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"
                ></span>
                <span class="relative">{{ item.name }}</span>
                <!-- Salpicadura de pintura -->
                <div
                  class="absolute -bottom-1 left-1/2 w-2 h-2 bg-orange-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 transform -translate-x-1/2"
                ></div>
              </a>
            </div>
          </div>

          <!-- Paleta de colores y menú -->
          <div class="flex items-center space-x-4">
            <!-- Paleta de colores -->
            <div
              class="hidden md:flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-lg"
            >
              <div
                class="w-6 h-6 bg-pink-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                title="Rosa"
              ></div>
              <div
                class="w-6 h-6 bg-orange-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                title="Naranja"
              ></div>
              <div
                class="w-6 h-6 bg-yellow-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                title="Amarillo"
              ></div>
              <div
                class="w-6 h-6 bg-red-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                title="Rojo"
              ></div>
            </div>

            <!-- Botón creativo -->
            <button
              class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span>Crear</span>
            </button>

            <!-- Menú móvil -->
            <button
              @click="toggleMobileMenu"
              class="md:hidden p-3 bg-white/70 backdrop-blur-sm rounded-2xl text-gray-700 hover:text-gray-900 transition-colors shadow-lg"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Galería creativa -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <!-- Título artístico -->
          <h1 class="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600"
            >
              CREAR
            </span>
            <span class="block text-gray-800 transform -skew-y-1">
              ES VIVIR
            </span>
          </h1>

          <!-- Subtítulo -->
          <p
            class="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Transformamos ideas en obras de arte digital que conectan, inspiran
            y trascienden
          </p>

          <!-- Botones creativos -->
          <div
            class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <button class="group relative overflow-hidden">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"
              ></div>
              <div
                class="relative bg-white px-8 py-4 rounded-2xl text-gray-900 font-bold hover:bg-gray-50 transition duration-300 flex items-center space-x-2"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Ver Portfolio</span>
              </div>
            </button>

            <button
              class="px-8 py-4 text-gray-700 hover:text-gray-900 font-bold transition-colors flex items-center space-x-2 border-2 border-gray-300 hover:border-orange-400 rounded-2xl"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Hablemos</span>
            </button>
          </div>

          <!-- Exposición de trabajos -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div class="group cursor-pointer">
              <div
                class="aspect-square bg-gradient-to-br from-pink-300 to-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-rotate-3"
              >
                <div
                  class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                >
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">150+</div>
                    <div class="text-sm text-white/80">Proyectos</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="group cursor-pointer">
              <div
                class="aspect-square bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-3"
              >
                <div
                  class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                >
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">5+</div>
                    <div class="text-sm text-white/80">Años</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="group cursor-pointer">
              <div
                class="aspect-square bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-rotate-2"
              >
                <div
                  class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                >
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">99%</div>
                    <div class="text-sm text-white/80">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="group cursor-pointer">
              <div
                class="aspect-square bg-gradient-to-br from-red-300 to-red-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-2"
              >
                <div
                  class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                >
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-2">∞</div>
                    <div class="text-sm text-white/80">Creatividad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú móvil artístico -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
      <div
        class="fixed inset-0 bg-black/40 backdrop-blur-sm"
        @click="toggleMobileMenu"
      ></div>
      <div
        class="relative bg-gradient-to-br from-pink-50/95 via-orange-50/95 to-yellow-50/95 backdrop-blur-xl w-80 h-full shadow-2xl"
      >
        <!-- Header del menú -->
        <div
          class="flex items-center justify-between p-6 border-b border-orange-200"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl transform rotate-12"
            ></div>
            <span class="font-black text-gray-900 text-lg">ArtStudio</span>
          </div>
          <button
            @click="toggleMobileMenu"
            class="p-2 text-gray-700 bg-white/50 rounded-xl"
          >
            <svg
              class="w-6 h-6"
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

        <!-- Navegación móvil -->
        <nav class="p-6 space-y-3">
          <a
            v-for="(item, index) in navItems"
            :key="item.name"
            href="#"
            class="flex items-center space-x-3 px-4 py-3 text-gray-700 bg-white/50 rounded-2xl hover:bg-white/70 transition-colors font-semibold"
            @click="toggleMobileMenu"
          >
            <div
              class="w-3 h-3 rounded-full"
              :class="{
                'bg-pink-400': index === 0,
                'bg-orange-400': index === 1,
                'bg-yellow-400': index === 2,
                'bg-red-400': index === 3,
              }"
            ></div>
            <span>{{ item.name }}</span>
          </a>
        </nav>

        <!-- Footer del menú móvil -->
        <div
          class="absolute bottom-0 left-0 right-0 p-6 border-t border-orange-200"
        >
          <button
            class="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-transform shadow-lg"
          >
            Crear Proyecto
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Contacto", href: "#" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Efecto de pincelada en hover
const createBrushStroke = (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Crear salpicaduras de pintura
  for (let i = 0; i < 3; i++) {
    const splash = document.createElement("div");
    splash.className = "fixed w-2 h-2 rounded-full pointer-events-none z-50";
    splash.style.left = x + "px";
    splash.style.top = y + "px";
    splash.style.transform = "translate(-50%, -50%)";

    const colors = ["bg-pink-400", "bg-orange-400", "bg-yellow-400"];
    splash.className += " " + colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(splash);

    // Animar salpicadura
    splash.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        {
          transform: \`translate(\${(Math.random() - 0.5) * 80}px, \${
            (Math.random() - 0.5) * 80
          }px) scale(1)\`,
          opacity: 0,
        },
      ],
      {
        duration: 600,
        easing: "ease-out",
      }
    ).onfinish = () => splash.remove();
  }
};
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(3deg);
  }
  66% {
    transform: translateY(10px) rotate(-2deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(15px) rotate(-3deg);
  }
  66% {
    transform: translateY(-10px) rotate(2deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

/* Blur personalizado */
.blur-3xl {
  filter: blur(64px);
}
</style>`,
  Header4: `<template>
  <header
    class="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"
  >
    <!-- Partículas flotantes de fondo -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Partículas grandes -->
      <div
        class="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"
        style="animation-delay: 0s"
      ></div>
      <div
        class="absolute top-32 right-20 w-6 h-6 bg-pink-300/30 rounded-full animate-float"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute bottom-40 left-32 w-3 h-3 bg-violet-300/40 rounded-full animate-float"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-64 left-1/2 w-5 h-5 bg-blue-300/25 rounded-full animate-float"
        style="animation-delay: 3s"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-4 h-4 bg-indigo-300/35 rounded-full animate-float"
        style="animation-delay: 4s"
      ></div>
      <div
        class="absolute top-20 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-float"
        style="animation-delay: 5s"
      ></div>

      <!-- Partículas medianas -->
      <div
        class="absolute top-1/4 left-20 w-2 h-2 bg-pink-400/40 rounded-full animate-float"
        style="animation-delay: 1.5s"
      ></div>
      <div
        class="absolute bottom-1/3 right-40 w-3 h-3 bg-violet-400/30 rounded-full animate-float"
        style="animation-delay: 2.5s"
      ></div>
      <div
        class="absolute top-1/2 right-16 w-2 h-2 bg-blue-400/35 rounded-full animate-float"
        style="animation-delay: 3.5s"
      ></div>

      <!-- Formas geométricas flotantes -->
      <div
        class="absolute top-16 left-1/4 w-8 h-8 border border-white/20 rotate-45 animate-float"
        style="animation-delay: 0.5s"
      ></div>
      <div
        class="absolute bottom-32 right-1/4 w-6 h-6 border border-pink-300/30 rotate-12 animate-float"
        style="animation-delay: 2.2s"
      ></div>

      <!-- Círculos de gradiente -->
      <div
        class="absolute top-40 right-32 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-violet-600/20 rounded-full blur-sm animate-float"
        style="animation-delay: 1.2s"
      ></div>
      <div
        class="absolute bottom-48 left-16 w-16 h-16 bg-gradient-to-br from-blue-400/15 to-indigo-600/25 rounded-full blur-sm animate-float"
        style="animation-delay: 3.8s"
      ></div>
    </div>

    <!-- Overlay de gradiente para profundidad -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"
    ></div>

    <!-- Navegación principal con glassmorphism -->
    <nav class="relative z-20 p-4 sm:p-6">
      <div class="max-w-7xl mx-auto">
        <div
          class="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
        >
          <!-- Logo con efectos -->
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-pink-400 to-violet-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <span class="text-white font-bold text-xl tracking-wide"
              >GlassTech</span
            >
          </div>

          <!-- Navegación desktop -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              v-for="item in navItems"
              :key="item.name"
              href="#"
              class="px-4 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 relative group"
            >
              {{ item.name }}
              <span
                class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
              ></span>
            </a>
          </div>

          <!-- Botón CTA con animación -->
          <div class="hidden md:flex items-center space-x-4">
            <button class="relative group">
              <div
                class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"
              ></div>
              <div
                class="relative bg-black/50 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full border border-white/20 group-hover:bg-white/10 transition duration-200"
              >
                Comenzar
              </div>
            </button>
          </div>

          <!-- Menú hamburguesa móvil -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <svg
                class="w-6 h-6"
                :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="w-6 h-6"
                :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
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
      </div>
    </nav>

    <!-- Hero section moderna -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
      <div class="max-w-7xl mx-auto text-center">
        <div class="relative">
          <!-- Título principal con efectos -->
          <h1
            class="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200 mb-6 tracking-tight"
          >
            El Futuro
            <span
              class="block text-gradient bg-gradient-to-r from-pink-400 via-violet-400 to-indigo-400 bg-clip-text"
            >
              Es Ahora
            </span>
          </h1>

          <!-- Subtítulo -->
          <p
            class="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Descubre una nueva forma de experimentar la tecnología con
            interfaces que desafían los límites de la creatividad
          </p>

          <!-- Botones de acción -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button class="group relative">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"
              ></div>
              <div
                class="relative bg-white text-gray-900 font-bold py-4 px-8 rounded-2xl hover:scale-105 transition-transform duration-200"
              >
                Explorar Ahora
                <svg
                  class="w-5 h-5 inline-block ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </button>

            <button
              class="group bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-200"
            >
              Ver Demo
              <svg
                class="w-5 h-5 inline-block ml-2 group-hover:animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú móvil glassmorphism -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
      <div
        class="fixed inset-0 bg-black/50 backdrop-blur-sm"
        @click="toggleMobileMenu"
      ></div>
      <div
        class="relative bg-white/10 backdrop-blur-xl border-r border-white/20 w-80 h-full p-6 space-y-6"
      >
        <div class="flex justify-between items-center">
          <span class="text-2xl font-bold text-white">Menú</span>
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg bg-white/10 text-white"
          >
            <svg
              class="w-6 h-6"
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

        <nav class="space-y-4">
          <a
            v-for="item in navItems"
            :key="item.name"
            href="#"
            class="block px-4 py-3 rounded-xl text-white hover:bg-white/10 transition-colors text-lg font-medium"
            @click="toggleMobileMenu"
          >
            {{ item.name }}
          </a>
        </nav>

        <div class="pt-6 border-t border-white/20">
          <button
            class="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Productos", href: "#" },
  { name: "Soluciones", href: "#" },
  { name: "Recursos", href: "#" },
  { name: "Empresa", href: "#" },
  { name: "Contacto", href: "#" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
/* Animación personalizada para el gradiente */
@keyframes gradient-x {
  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

/* Efectos de texto gradiente */
.text-gradient {
  background-size: 200% auto;
  animation: gradient-x 3s ease infinite;
}

/* Animación de las partículas */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(120deg);
  }
  66% {
    transform: translateY(5px) rotate(240deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>`,
  Header5: `<template>
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
    ctx.font = \`${fontSize}px monospace\`
    
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
</style>`,
  Header6: `<template>
  <!-- Header con diseño de espacio/galaxia -->
  <header
    class="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden min-h-[400px]"
  >
    <!-- Estrellas animadas de fondo -->
    <div class="absolute inset-0">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
    </div>

    <!-- Planetas decorativos -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Planeta grande -->
      <div
        class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"
      ></div>
      <!-- Planeta pequeño -->
      <div
        class="absolute bottom-10 left-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-bounce"
        style="animation-duration: 3s"
      ></div>
      <!-- Anillo planetario -->
      <div
        class="absolute top-32 right-16 w-40 h-40 border-4 border-purple-300/20 rounded-full animate-spin"
        style="animation-duration: 20s"
      ></div>
    </div>

    <!-- Navegación espacial -->
    <nav class="relative z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo espacial -->
          <div class="flex items-center group">
            <div class="relative">
              <!-- Efecto de órbita -->
              <div
                class="absolute -inset-4 border border-purple-400/30 rounded-full animate-spin"
                style="animation-duration: 8s"
              ></div>
              <div
                class="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <span class="text-white font-bold text-xl tracking-wider"
                >STELLAR</span
              >
              <div class="text-purple-300 text-xs">Space Explorer v3.0</div>
            </div>
          </div>

          <!-- Navegación estilo espacial -->
          <div class="hidden md:flex items-center space-x-6">
            <div
              v-for="item in navItems"
              :key="item.name"
              class="relative group"
            >
              <a
                href="#"
                class="px-4 py-2 text-white/80 hover:text-white transition-all duration-300 relative"
                @mouseenter="createStarBurst($event)"
              >
                {{ item.name }}
                <!-- Efecto de órbita en hover -->
                <div
                  class="absolute inset-0 border border-purple-400/0 group-hover:border-purple-400/50 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-0"
                ></div>
                <!-- Línea brillante inferior -->
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </div>
          </div>

          <!-- Controles de misión -->
          <div class="flex items-center space-x-4">
            <!-- Panel de control -->
            <div
              class="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2"
            >
              <div
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></div>
              <span class="text-white text-sm font-mono">ONLINE</span>
            </div>

            <!-- Botón de lanzamiento -->
            <button class="hidden md:block relative group">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"
              ></div>
              <div
                class="relative bg-gray-900/80 backdrop-blur-sm border border-purple-400/50 text-white font-bold py-3 px-6 rounded-full group-hover:bg-gray-900/60 transition duration-300"
              >
                🚀 LAUNCH
              </div>
            </button>

            <!-- Menú móvil -->
            <button
              @click="toggleMobileMenu"
              class="md:hidden p-2 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Centro de comando espacial -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Título principal -->
        <div class="relative">
          <h1
            class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-6 tracking-tight"
          >
            EXPLORA
            <span
              class="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text"
            >
              EL COSMOS
            </span>
          </h1>

          <!-- Subtítulo -->
          <p
            class="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Embárcate en una odisea digital a través de las infinitas
            posibilidades del universo tecnológico
          </p>

          <!-- Panel de control de misión -->
          <div
            class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <button class="group relative overflow-hidden">
              <div
                class="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"
              ></div>
              <div
                class="relative bg-gray-900/80 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl border border-purple-400/30 group-hover:bg-gray-900/60 transition duration-300"
              >
                <div class="flex items-center space-x-2">
                  <span>🚀 INICIAR MISIÓN</span>
                  <div
                    class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  ></div>
                </div>
              </div>
            </button>

            <button
              class="group bg-white/5 backdrop-blur-sm border border-purple-400/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div class="flex items-center space-x-2">
                <span>🌌 EXPLORAR GALAXIA</span>
                <svg
                  class="w-5 h-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>

          <!-- Estadísticas del viaje -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div
              class="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4"
            >
              <div
                class="text-2xl font-bold text-purple-400"
                ref="countPlanets"
              >
                0
              </div>
              <div class="text-sm text-white/60">Planetas</div>
            </div>
            <div
              class="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4"
            >
              <div class="text-2xl font-bold text-blue-400" ref="countStars">
                0
              </div>
              <div class="text-sm text-white/60">Estrellas</div>
            </div>
            <div
              class="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4"
            >
              <div class="text-2xl font-bold text-cyan-400" ref="countGalaxies">
                0
              </div>
              <div class="text-sm text-white/60">Galaxias</div>
            </div>
            <div
              class="bg-white/5 backdrop-blur-sm border border-pink-400/20 rounded-xl p-4"
            >
              <div class="text-2xl font-bold text-pink-400" ref="countUsers">
                0
              </div>
              <div class="text-sm text-white/60">Exploradores</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú móvil espacial -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
      <div
        class="fixed inset-0 bg-black/80 backdrop-blur-sm"
        @click="toggleMobileMenu"
      ></div>
      <div
        class="relative bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl border-r border-purple-400/30 w-80 h-full"
      >
        <!-- Header del menú -->
        <div
          class="flex items-center justify-between p-6 border-b border-purple-400/30"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full"
            ></div>
            <span class="text-white font-bold text-lg">STELLAR NAV</span>
          </div>
          <button
            @click="toggleMobileMenu"
            class="p-2 bg-white/5 border border-purple-400/30 rounded-full text-white"
          >
            <svg
              class="w-6 h-6"
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

        <!-- Navegación móvil -->
        <nav class="p-6 space-y-4">
          <a
            v-for="item in navItems"
            :key="item.name"
            href="#"
            class="flex items-center space-x-3 px-4 py-3 text-white bg-white/5 border border-purple-400/20 rounded-xl hover:bg-white/10 hover:border-purple-400/40 transition-all duration-200"
            @click="toggleMobileMenu"
          >
            <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span class="font-medium">{{ item.name }}</span>
          </a>
        </nav>

        <!-- Footer del menú móvil -->
        <div
          class="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-400/30"
        >
          <button
            class="w-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 border border-purple-400/30 text-white font-bold py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/30 hover:via-blue-500/30 hover:to-cyan-500/30 transition duration-300"
          >
            🚀 INICIAR MISIÓN
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Referencias para contadores animados
const countPlanets = ref(null);
const countStars = ref(null);
const countGalaxies = ref(null);
const countUsers = ref(null);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Misiones", href: "#" },
  { name: "Explorar", href: "#" },
  { name: "Flota", href: "#" },
  { name: "Base", href: "#" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Efecto starburst en hover
const createStarBurst = (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Crear partículas brillantes (efecto simple)
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.className =
      "fixed w-1 h-1 bg-purple-400 rounded-full pointer-events-none z-50";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.transform = \`translate(-50%, -50%)\`;

    document.body.appendChild(particle);

    // Animar partícula
    particle.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        {
          transform: \`translate(\${(Math.random() - 0.5) * 100}px, \${
            (Math.random() - 0.5) * 100
          }px) scale(1)\`,
          opacity: 0,
        },
      ],
      {
        duration: 800,
        easing: "ease-out",
      }
    ).onfinish = () => particle.remove();
  }
};

// Animación de contadores
const animateCounters = () => {
  const counters = [
    { ref: countPlanets, target: 1247 },
    { ref: countStars, target: 89432 },
    { ref: countGalaxies, target: 156 },
    { ref: countUsers, target: 50823 },
  ];

  counters.forEach(({ ref: counterRef, target }) => {
    if (!counterRef.value) return;

    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counterRef.value.textContent = Math.floor(current).toLocaleString();
    }, 20);
  });
};

// Lifecycle
onMounted(() => {
  setTimeout(animateCounters, 1000);
});
</script>

<style scoped>
/* Animación de estrellas */
.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 70px 130px #fff, 180px 80px #fff, 250px 160px #fff,
    320px 50px #fff, 450px 90px #fff, 580px 140px #fff, 650px 200px #fff,
    720px 30px #fff, 890px 120px #fff, 950px 170px #fff, 1020px 60px #fff,
    1150px 100px #fff;
  animation: animStar 50s linear infinite;
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 120px 180px #fff, 280px 130px #fff, 350px 210px #fff,
    420px 100px #fff, 550px 190px #fff, 680px 240px #fff, 750px 80px #fff,
    820px 230px #fff, 990px 170px #fff, 1050px 220px #fff, 1120px 40px #fff,
    1250px 180px #fff;
  animation: animStar 100s linear infinite;
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 170px 230px #fff, 380px 180px #fff, 450px 260px #fff,
    520px 150px #fff, 650px 290px #fff, 780px 340px #fff, 850px 180px #fff,
    920px 330px #fff, 1090px 270px #fff, 1150px 320px #fff, 1220px 140px #fff,
    1350px 280px #fff;
  animation: animStar 150s linear infinite;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

/* Responsive stars */
@media (max-width: 768px) {
  .stars,
  .stars2,
  .stars3 {
    box-shadow: 50px 100px #fff, 100px 60px #fff, 150px 120px #fff,
      200px 40px #fff, 250px 80px #fff, 300px 140px #fff;
  }
}
</style>`,

  // Footer Components
  Footer1: `<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center mb-4">
            <img src="../assets/logo.svg" alt="Logo" class="h-8 w-8 mr-3" />
            <span class="text-xl font-bold text-gray-900">Company</span>
          </div>
          <p class="text-gray-600 mb-4 max-w-md">
            Creamos experiencias digitales excepcionales que conectan marcas con
            sus audiencias de manera significativa.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.122.771 2.165-.083.317-.402.635-.826.635-.61 0-1.125-.317-1.125-.317-.394-.655-.394-1.635.112-2.741.89-1.957.889-2.741.889-2.741 0-1.033-.394-2.143-.889-2.741-.097-.118-.112-.122-.771-2.165.083-.317.402-.635.826-.635.61 0 1.125.317 1.125.317.394.655.394 1.635-.112 2.741z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4"
          >
            Enlaces
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-gray-900 transition-colors"
                >Inicio</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-gray-900 transition-colors"
                >Servicios</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-gray-900 transition-colors"
                >Acerca</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-600 hover:text-gray-900 transition-colors"
                >Contacto</a
              >
            </li>
          </ul>
        </div>

        <!-- Contact info -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4"
          >
            Contacto
          </h3>
          <ul class="space-y-3">
            <li class="text-gray-600">123 Calle Principal</li>
            <li class="text-gray-600">Ciudad, País 12345</li>
            <li>
              <a
                href="mailto:info@company.com"
                class="text-gray-600 hover:text-gray-900 transition-colors"
                >info@company.com</a
              >
            </li>
            <li>
              <a
                href="tel:+1234567890"
                class="text-gray-600 hover:text-gray-900 transition-colors"
                >+1 (234) 567-890</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
      >
        <p class="text-gray-600 text-sm">
          © 2024 Company. Todos los derechos reservados.
        </p>
        <div class="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="#"
            class="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >Privacidad</a
          >
          <a
            href="#"
            class="text-gray-600 hover:text-gray-900 text-sm transition-colors"
            >Términos</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>`,

  Footer2: `<template>
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
</style>`,

  Footer3: `<template>
  <footer
    ref="footerRef"
    class="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    :class="{ 'animate-fade-in-up': isVisible }"
  >
    <!-- Elementos de fondo animados -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-4 -left-4 w-72 h-72 bg-purple-600 rounded-full opacity-20 animate-pulse"
        :style="{ transform: \`translateY(${scrollY * 0.1}px)\` }"
      ></div>
      <div
        class="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-600 rounded-full opacity-10 animate-bounce"
        :style="{ transform: \`translateY(\${scrollY * -0.05}px)\` }"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-600 rounded-full opacity-15"
        :style="{
          transform: \`translateY(\${scrollY * 0.08}px) rotate(\${
            scrollY * 0.1
          }deg)\`,
        }"
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Contenido principal -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <!-- Sección de empresa -->
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

        <!-- Secciones de enlaces -->
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

      <!-- Sección de newsletter -->
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

      <!-- Barra inferior -->
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
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Referencias para animaciones
const footerRef = ref(null);
const companyRef = ref(null);
const linksRef1 = ref(null);
const linksRef2 = ref(null);
const linksRef3 = ref(null);
const newsletterRef = ref(null);
const bottomRef = ref(null);

// Estados de animación
const isVisible = ref(false);
const companyVisible = ref(false);
const linksVisible = ref(false);
const newsletterVisible = ref(false);
const bottomVisible = ref(false);
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;

  if (footerRef.value) {
    const rect = footerRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Visibilidad principal del footer
    if (rect.top < windowHeight * 0.8) {
      isVisible.value = true;
    }

    // Animaciones escalonadas para secciones
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
  handleScroll(); // Verificar estado inicial
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
</style>`,
  Footer4: `<template>
  <footer class="bg-gray-50 border-t border-gray-200 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Sección de formulario de contacto -->
        <div>
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Hablemos de tu proyecto
            </h2>
            <p class="text-gray-600 text-lg">
              ¿Tienes una idea? Estamos aquí para ayudarte a hacerla realidad.
              Cuéntanos más sobre tu proyecto.
            </p>
          </div>

          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  for="company"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Tu empresa"
                />
              </div>
              <div>
                <label
                  for="budget"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Presupuesto estimado
                </label>
                <select
                  id="budget"
                  name="budget"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="5k-10k">€5,000 - €10,000</option>
                  <option value="10k-25k">€10,000 - €25,000</option>
                  <option value="25k-50k">€25,000 - €50,000</option>
                  <option value="50k+">€50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label
                for="project"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Cuéntanos sobre tu proyecto *
              </label>
              <textarea
                id="project"
                name="project"
                rows="5"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas, etc."
              ></textarea>
            </div>

            <div class="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label for="terms" class="ml-3 text-sm text-gray-600">
                Acepto la
                <a href="#" class="text-blue-600 hover:text-blue-700 underline"
                  >política de privacidad</a
                >
                y los
                <a href="#" class="text-blue-600 hover:text-blue-700 underline"
                  >términos de servicio</a
                >
                *
              </label>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Enviar mensaje
              <svg
                class="w-5 h-5 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>

        <!-- Información de empresa y detalles de contacto -->
        <div class="lg:pl-8">
          <!-- Logo y descripción de empresa -->
          <div class="mb-8">
            <div class="flex items-center space-x-3 mb-6">
              <img src="/logo.svg" alt="Logo" class="h-12 w-12" />
              <div>
                <h3 class="text-2xl font-bold text-gray-900">Company</h3>
                <p class="text-gray-600">Transformando ideas en código</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">
              Somos un equipo de desarrolladores y diseñadores apasionados por
              crear experiencias digitales excepcionales. Con más de 5 años de
              experiencia, hemos ayudado a más de 100 empresas a alcanzar sus
              objetivos digitales.
            </p>
          </div>

          <!-- Información de contacto -->
          <div class="space-y-6 mb-8">
            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Ubicación</h4>
                <p class="text-gray-600">
                  Calle Ejemplo 123, 28001 Madrid, España
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Teléfono</h4>
                <p class="text-gray-600">+34 123 456 789</p>
                <p class="text-sm text-gray-500">Lun - Vie, 9:00 - 18:00</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Email</h4>
                <p class="text-gray-600">hola@company.com</p>
                <p class="text-sm text-gray-500">Respuesta en 24h</p>
              </div>
            </div>
          </div>

          <!-- Redes sociales -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Síguenos</h4>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-200 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-200 hover:bg-gray-900 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-gray-200 hover:bg-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Estadísticas rápidas -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-blue-600">100+</div>
                <div class="text-sm text-gray-600">Proyectos</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">5+</div>
                <div class="text-sm text-gray-600">Años</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-purple-600">98%</div>
                <div class="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600"
      >
        <p>
          © 2024 Company. Todos los derechos reservados. Diseñado con ❤️ en
          Madrid.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Componente footer con formulario de contacto
</script>`,

  Footer5: `<template>
  <footer
    class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
  >
    <!-- Patrones de fondo animados -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div
          class="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"
        ></div>
        <div
          class="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse delay-300"
        ></div>
        <div
          class="absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce delay-500"
        ></div>
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Sección superior -->
      <div class="text-center mb-16">
        <div class="flex justify-center items-center space-x-3 mb-6">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <svg
              class="w-7 h-7 text-white"
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
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            Company
          </h2>
        </div>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Transformamos ideas innovadoras en experiencias digitales
          extraordinarias. Únete a nuestra comunidad de creadores y visionarios.
        </p>
      </div>

      <!-- Grid de servicios con iconos de gradiente -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <!-- Desarrollo Web -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25"
          >
            <svg
              class="w-8 h-8 text-white"
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
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors"
          >
            Desarrollo Web
          </h3>
          <p class="text-gray-400 text-sm">
            Aplicaciones web modernas y responsivas
          </p>
        </div>

        <!-- Apps Móviles -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-green-500/25"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors"
          >
            Apps Móviles
          </h3>
          <p class="text-gray-400 text-sm">iOS y Android nativas</p>
        </div>

        <!-- Diseño UI/UX -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors"
          >
            Diseño UI/UX
          </h3>
          <p class="text-gray-400 text-sm">
            Interfaces intuitivas y atractivas
          </p>
        </div>

        <!-- Soluciones Cloud -->
        <div class="text-center group cursor-pointer">
          <div
            class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/25"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <h3
            class="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors"
          >
            Cloud & DevOps
          </h3>
          <p class="text-gray-400 text-sm">Infraestructura escalable</p>
        </div>
      </div>

      <!-- Sección de contacto y redes sociales -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <!-- Información de contacto -->
        <div>
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <div
              class="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded mr-3"
            ></div>
            Contacto
          </h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">hola@company.com</p>
                <p class="text-gray-400 text-sm">Respuesta en 24h</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">+34 123 456 789</p>
                <p class="text-gray-400 text-sm">Lun - Vie, 9:00 - 18:00</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-white font-medium">Madrid, España</p>
                <p class="text-gray-400 text-sm">Oficina principal</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <div
              class="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded mr-3"
            ></div>
            Enlaces
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Servicios</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Portfolio</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Carreras</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-3">
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Sobre nosotros</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Contacto</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >Soporte</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >FAQ</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-semibold mb-6 flex items-center">
            <div
              class="w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded mr-3"
            ></div>
            Newsletter
          </h3>
          <p class="text-gray-300 mb-4">
            Recibe tips de desarrollo y noticias del sector directamente en tu
            email.
          </p>
          <div class="space-y-4">
            <input
              type="email"
              placeholder="tu@email.com"
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <!-- Redes sociales con iconos de gradiente -->
      <div
        class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700"
      >
        <div class="mb-6 md:mb-0">
          <p class="text-gray-400">
            © 2024 Company. Creando el futuro digital.
          </p>
        </div>

        <div class="flex space-x-4">
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center hover:from-blue-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-700/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-500/25"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Componente footer con iconos de gradiente
</script>`,
  Footer6: `<template>
  <footer
    class="relative min-h-[600px] overflow-hidden"
    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  >
    <!-- Fondo animado -->
    <div class="absolute inset-0">
      <!-- Partículas flotantes -->
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="absolute rounded-full opacity-20"
        :class="[particle.color, particle.animation]"
        :style="{
          width: particle.size + 'px',
          height: particle.size + 'px',
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's',
        }"
      ></div>

      <!-- Overlay de gradiente de malla -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"
      ></div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Sección superior - Información de empresa con efecto glass -->
      <div class="text-center mb-16">
        <div
          class="inline-block p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
        >
          <div class="flex justify-center items-center space-x-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h2 class="text-5xl font-bold text-white drop-shadow-lg">
              Company
            </h2>
          </div>
          <p class="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Pioneros en el desarrollo de experiencias digitales inmersivas que
            conectan el presente con el futuro de la tecnología.
          </p>
        </div>
      </div>

      <!-- Grid de tarjetas glass -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Tarjeta de servicios -->
        <div
          class="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white">Servicios</h3>
          </div>
          <ul class="space-y-2 text-white/80">
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>Desarrollo Web Full-Stack</span>
            </li>
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>Aplicaciones Móviles</span>
            </li>
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>UI/UX Design</span>
            </li>
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>Consultoría Tecnológica</span>
            </li>
          </ul>
        </div>

        <!-- Tarjeta de contacto -->
        <div
          class="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-green-400/30 to-emerald-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white">Contacto</h3>
          </div>
          <div class="space-y-3 text-white/80">
            <div class="flex items-center space-x-3">
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">hola@company.com</span>
            </div>
            <div class="flex items-center space-x-3">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-sm">+34 123 456 789</span>
            </div>
            <div class="flex items-center space-x-3">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-sm">Madrid, España</span>
            </div>
          </div>
        </div>

        <!-- Tarjeta de newsletter -->
        <div
          class="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
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
                  d="M15 17h5l-5 5v-5zM4 19h1a3 3 0 003-3V8a3 3 0 00-3-3H4a1 1 0 00-1 1v12a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white">Newsletter</h3>
          </div>
          <p class="text-white/80 text-sm mb-4">
            Mantente al día con las últimas tendencias tecnológicas.
          </p>
          <div class="space-y-3">
            <input
              type="email"
              placeholder="tu@email.com"
              class="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <button
              class="w-full px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:from-white/30 hover:to-white/20 transition-all duration-300"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <!-- Redes sociales con efecto glass -->
      <div class="text-center mb-8">
        <div
          class="inline-flex space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        >
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            href="#"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30"
            :class="social.hover"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path :d="social.path" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Sección inferior -->
      <div class="text-center">
        <div
          class="inline-block p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        >
          <p class="text-white/90 mb-4">
            © 2024 Company. Diseñando el futuro digital con tecnología de
            vanguardia.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/70"
          >
            <a href="#" class="hover:text-white transition-colors"
              >Política de Privacidad</a
            >
            <span class="hidden sm:block">•</span>
            <a href="#" class="hover:text-white transition-colors"
              >Términos de Servicio</a
            >
            <span class="hidden sm:block">•</span>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
            <span class="hidden sm:block">•</span>
            <a href="#" class="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Datos de partículas flotantes
const particles = ref([]);

// Datos de enlaces de redes sociales
const socialLinks = ref([
  {
    name: "Twitter",
    path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    hover: "hover:shadow-blue-500/25",
  },
  {
    name: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    hover: "hover:shadow-blue-700/25",
  },
  {
    name: "GitHub",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    hover: "hover:shadow-gray-500/25",
  },
  {
    name: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    hover: "hover:shadow-pink-500/25",
  },
  {
    name: "Discord",
    path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
    hover: "hover:shadow-indigo-500/25",
  },
]);

// Generar partículas flotantes aleatorias
const generateParticles = () => {
  const colors = [
    "bg-white",
    "bg-blue-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-cyan-300",
  ];
  const animations = [
    "animate-float-slow",
    "animate-float-medium",
    "animate-float-fast",
  ];

  for (let i = 0; i < 15; i++) {
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      animation: animations[Math.floor(Math.random() * animations.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    });
  }
};

onMounted(() => {
  generateParticles();
});
</script>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(120deg);
  }
}

@keyframes float-fast {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-40px) rotate(240deg);
  }
}

.animate-float-slow {
  animation: float-slow infinite ease-in-out;
}

.animate-float-medium {
  animation: float-medium infinite ease-in-out;
}

.animate-float-fast {
  animation: float-fast infinite ease-in-out;
}
</style>`
}
