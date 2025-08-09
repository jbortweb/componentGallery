import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading de las vistas para optimizar el bundle
const Home = () => import('../views/Home.vue')
const ProductCards = () => import('../views/ProductCards.vue')
const ProfileCards = () => import('../views/ProfileCards.vue')
const ArticleCards = () => import('../views/ArticleCards.vue')
const Headers = () => import('../views/Headers.vue')
const Footers = () => import('../views/Footers.vue')

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
      title: 'Productos'
    }
  },
  {
    path: '/cards/perfiles',
    name: 'ProfileCards',
    component: ProfileCards,
    meta: {
      title: 'Perfiles'
    }
  },
  {
    path: '/cards/articulos',
    name: 'ArticleCards',
    component: ArticleCards,
    meta: {
      title: 'Artículos'
    }
  },
  {
    path: '/headers',
    name: 'Headers',
    component: Headers,
    meta: {
      title: 'Headers'
    }
  },
  {
    path: '/footers',
    name: 'Footers',
    component: Footers,
    meta: {
      title: 'Footers'
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
