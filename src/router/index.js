import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   redirect: '/login'
 },
 {
   path:'/login',
   component: () => import('@/views/LoginLayout.vue')
 },
 {
   path:'/home',
   component: () => import('@/views/ContentLayout.vue'),
   children: [
     {
       path:'',
       component :() => import('@/components/ContentLayout/HomePageLayout.vue')
     },
     {
       path:'/info',
       component:() => import('@/components/ContentLayout/InfoPageLayout.vue')
     }
   ]
 }
]

const router = new VueRouter({
  routes
})

export default router
