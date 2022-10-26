import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      component: require('@/views/Home.vue').default
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
