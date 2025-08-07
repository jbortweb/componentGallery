import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductCards from '../views/ProductCards.vue'
import ProfileCards from '../views/ProfileCards.vue'
import ArticleCards from '../views/ArticleCards.vue'
import HeaderFooter from '../views/HeaderFooter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Component Gallery - Inicio'
    }
  },
  {
    path: '/cards/productos',
    name: 'ProductCards',
    component: ProductCards,
    meta: {
      title: 'Tarjetas de Productos'
    }
  },
  {
    path: '/cards/perfiles',
    name: 'ProfileCards',
    component: ProfileCards,
    meta: {
      title: 'Tarjetas de Perfiles'
    }
  },
  {
    path: '/cards/articulos',
    name: 'ArticleCards',
    component: ArticleCards,
    meta: {
      title: 'Tarjetas de Artículos'
    }
  },
  {
    path: '/head-foot',
    name: 'HeaderFooter',
    component: HeaderFooter,
    meta: {
      title: 'Headers y Footers'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Meta title handler
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Component Gallery'
  next()
})

export default router
