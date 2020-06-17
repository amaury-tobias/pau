import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/music',
    name: 'Music',
    component: () =>
      import(/* webpackChunkName: "music" */ '../views/Music.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
