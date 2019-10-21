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
Vue.use(ElementUI)

// 设置当前项目的模式,为非生产模式
Vue.config.productionTip = false

// 创建了vue实例,mount和el是一样的
// 缩进两个空格
// 单引号和双引号
// 不要有冗余的变量
// 不能没有分号
// 关键字后面加空格,参数后面加空格
// 函数名称后面加空格
// 使用全等来代替==
// 句末不能有空格

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
