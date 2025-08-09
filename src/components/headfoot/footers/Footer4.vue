<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-blue-600/90 hover:bg-blue-500 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow-lg border border-blue-400/30 cursor-pointer"
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

    <footer class="bg-gray-50 border-t border-gray-200 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form Section -->
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
                  <a
                    href="#"
                    class="text-blue-600 hover:text-blue-700 underline"
                    >política de privacidad</a
                  >
                  y los
                  <a
                    href="#"
                    class="text-blue-600 hover:text-blue-700 underline"
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

          <!-- Company Info & Contact Details -->
          <div class="lg:pl-8">
            <!-- Company Logo & Description -->
            <div class="mb-8">
              <div class="flex items-center space-x-3 mb-6">
                <img src="/vite.svg" alt="Logo" class="h-12 w-12" />
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

            <!-- Contact Information -->
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

            <!-- Social Media -->
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

            <!-- Quick Stats -->
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
            © 2025 Company. Todos los derechos reservados. Diseñado con ❤️ en
            Madrid.
          </p>
        </div>
      </div>

      <!-- Code Modal -->
      <CodeModal
        ref="codeModal"
        cardType="Footer"
        cardVariant="Con formulario de contacto"
        :codeContent="cardCode"
      />
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Footer4Code from "../../../data/codes/headfoot/footers/Footer4.js";

// Modal setup
const codeModal = ref(null);
const cardCode = Footer4Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>
