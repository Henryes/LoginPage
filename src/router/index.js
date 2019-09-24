import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routes = [
  {
    path:'/login', 
    component: () => import('@/views/login/index')
  },
  {
    path:'/user',
    component: () => import('@/views/user/yhh')
  }
]

const createRouter = () => new Router({
  routes: routes
})

const router = createRouter()


export default router

