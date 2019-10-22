// 导入了vue
import Vue from 'vue'
// 导入了vue-router
import VueRouter from 'vue-router'

import Login from '@/views/login/index'
import Home from '@/views/home/index'
// 使用路由
Vue.use(VueRouter)
// 创建和导出路由
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
