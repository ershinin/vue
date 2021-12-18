import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Cards.vue')
  },
    {
    path: '/product/:id',
    component: () => import('../views/Card.vue')
  },
  {
    path: '/basket',
    component: () => import('../views/Basket.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
