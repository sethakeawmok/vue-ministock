import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
import Topnav from '@/layout/Topnav'

import Home from '../views/Home.vue'
import Signin from '../views/Signin.vue'
import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Product.vue'
import store from '@/store'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: 'home',
    component: Topnav,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      } 
    ]
  },
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
          if (!store.getters['auth/autenticated']) {
            return next({
              name: 'signin'
            })
          }

          next()
        }
      },
      {
        path: '/product',
        name: 'product',
        component: Product,
        beforeEnter: (to, from, next) => {
          if (!store.getters['auth/autenticated']) {
            return next({
              name: 'signin'
            })
          }
    
          next()
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User.vue'),
        beforeEnter: (to, from, next) => {
          if (!store.getters['auth/autenticated']) {
            return next({
              name: 'signin'
            })
          }
    
          next()
        }
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        beforeEnter: (to, from, next) => {
          if (!store.getters['auth/autenticated']) {
            return next({
              name: 'signin'
            })
          }
          next()
        }
      }
      
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/signin',
        name: 'signin',
        component: Signin
      } 
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
