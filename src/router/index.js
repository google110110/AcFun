import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import acfun from './acfun'
import good from './good'
const routes = [
  acfun,
  good,
  {
    path:'/*',
    redirect:'/acfun'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
