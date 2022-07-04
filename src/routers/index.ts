import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import { root } from './routes/root'

const routes: Array<RouteRecordRaw> = [...root]
export const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})
