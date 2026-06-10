import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HomePage from '@/modules/landing/pages/HomePage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    //ruta 1

    {
      path: '/',

      name: 'landing',

      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',

          name: 'home',

          component: HomePage,
        },

        //ruta 2

        {
          path: '/feutures',

          name: 'feutures',

          component: () => import('@/modules/landing/pages/FeuturesPage.vue'),
        },

        //ruta 2

        {
          path: '/Contact',

          name: 'Contact',

          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },

        //ruta 2

        {
          path: '/Pricing',

          name: 'Pricing',

          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        //logiin
      ],
    },

    {
      path: '/auth',

      name: 'auth',

      component: () => import('@/modules/auth/LoginPage.vue'),
    },
  ],
})

export default router
