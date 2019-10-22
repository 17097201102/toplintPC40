// 导入vue
import Vue from 'vue'
// 导入App根组件
import App from './App.vue'
// 导入VUE-ROUTER
import router from './router'
// 导入VUEX
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/style/index.less'

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.use(ElementUI)

// 设置当前项目的模式,为非生产模式
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
