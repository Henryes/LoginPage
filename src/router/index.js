import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routes = [
  {
    path:'/', 
    component: () => import('@/views/index/Index.vue'),
    children: [
      {
        path:'homepage',
        component: () => import('@/views/homepage/Index.vue')
      },
      {
        path:'user',
        component: () => import('@/views/user/Index.vue')
      }
    ]
  },
  {
    path:'/login', 
    component: () => import('@/views/login/index')
  }
]

const createRouter = () => new Router({
  routes: routes
})

const router = createRouter()


export default router

