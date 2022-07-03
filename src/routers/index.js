import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/main'
  },
  {
    path: '/home',
    component: () => import('@/views/home'),
    children: [
      {
        path: '/home/main',
        component: () => import('@/views/main')
      },
      {
        path: '/home/lookingRoom',
        component: () => import('@/views/lookingRoom')
      },
      {
        path: '/home/formation',
        component: () => import('@/views/formation')
      },
      {
        path: '/home/login',
        component: () => import('@/views/login')
      }
    ]
  },
  {
    path: '/cityList',
    component: () => import('@/components/CityList')
  }
]

const router = new VueRouter({
  routes
})

export default router
