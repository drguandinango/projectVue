import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HomePage from '@/modules/landing/pages/HomePage.vue'
import NotFound404 from '@/modules/common/pages/NotFound404.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    //ruta Landing

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
    //ruta Auth

    {
      path: '/auth',
      redirect: { name: 'login' }, //redirect:'/login'

      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',

          name: 'login',

          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',

          name: 'register',

          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    //not n fpunf pages
    {
      path: '/:pathMatch(.*)*',
      /*       redirect: '/',

        
 */
      component: NotFound404,
    },
  ],
})

export default router
