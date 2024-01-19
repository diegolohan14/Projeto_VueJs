import { createRouter, createWebHistory } from 'vue-router'
import Clientes from '../views/Clientes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'clientes',
      component: Clientes
    },
    {
      path: '/produtos',
      name: 'produtos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Produtos.vue')
    },
    {
      path: '/produtosAssociados',
      name: 'produtosAssociados',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProdutosAssociados.vue')
    }
  ]
})

export default router
