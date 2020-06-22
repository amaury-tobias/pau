import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/music',
    name: 'Music',
    component: () =>
      import(/* webpackChunkName: "music" */ '../views/Music.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
