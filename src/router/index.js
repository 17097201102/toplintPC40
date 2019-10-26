// 导入了vue
import Vue from 'vue'
// 导入了vue-router
import VueRouter from 'vue-router'

import Login from '@/views/login/index'
import Home from '@/views/home/index'
import Layout from '@/views/layout/index'
import Publish from '@/views/publish/index'
// 使用路由
Vue.use(VueRouter)
// 创建和导出路由
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', name: 'login', component: Login },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: [
      { path: '/home', component: Home },
      { path: '/publish', component: Publish }
    ]
  }
]

const router = new VueRouter({
  routes
})
/**
 * @description:全局前置导航守卫
 * @param {object} to
 * @param {object} from
 * @param {Function} next
 */
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    let userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      console.log('执行了跳转')
      router.push('/login')
    } else {
      next()
    }
  } else {
    console.log('执行了next')
    next()
  }
})
export default router
