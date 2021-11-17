import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@assets/css/reset.css' // 样式重置
import '@assets/css/style.css' //公用样式
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
