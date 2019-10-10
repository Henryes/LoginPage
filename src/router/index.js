import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const routes = [
  {
    path:'/', 
    component: () => import('@/views/index/Index.vue'),
    redirect: '/homepage',
    children: [
      {
        path:'homepage',
        component: () => import('@/views/homepage/Index.vue'),
        name: 'homepage',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path:'user',
        component: () => import('@/views/user/Index.vue')
      },
      {
        path:'depart',
      component: () => import('@/views/depart/Index.vue')
      },
      {
        path:'system',
      component: () => import('@/views/System/Index.vue')
      },
      {
        path:'file',
      component: () => import('@/views/File/File.vue')
      },
    ]
  },
  {
    path:'/login', 
    component: () => import('@/views/login/index')
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router

