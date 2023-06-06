import { createRouter, createWebHistory } from 'vue-router'
// For info on using Vue Router with the Composition API, see https://next.router.vuejs.org/guide/advanced/composition-api.html

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Landing.vue')
  },
  {
    path: '/not-found',
    name: 'Not Found',
    component: () => import('./views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    beforeEnter: (to, from, next) => {
      next('/not-found')
    }
  }
]

const router = createRouter({
  // If app is not hosted at the domain root, make sure to pass the `base` input here: https://next.router.vuejs.org/api/#parameters
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {})

export default router
