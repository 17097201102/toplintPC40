// 导入了vue
import Vue from 'vue'
// 导入了vue-router
import VueRouter from 'vue-router'

import useElement from './../views/useElement/index'
// 使用路由
Vue.use(VueRouter)
// 创建和导出路由
const routes = [{ path: '/use', component: useElement }]

const router = new VueRouter({
  routes
})

export default router
