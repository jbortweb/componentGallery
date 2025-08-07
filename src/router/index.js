import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductCards from '../views/ProductCards.vue'
import ProfileCards from '../views/ProfileCards.vue'
import ArticleCards from '../views/ArticleCards.vue'
import Headers from '../views/Headers.vue'
import Footers from '../views/Footers.vue'

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
