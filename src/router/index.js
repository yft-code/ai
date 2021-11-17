// 引入vue使用插件路由
import Vue from 'vue'
import VueRouter from 'vue-router'
//在router/index.js导入VueRouter的时候，进行全局的处理 多次点击同一路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// 使用路由
Vue.use(VueRouter)
// 定义路由对象
const routes=[
    {
        path:'/',
        name:'login',
        component:resolve=>require(["@/views/login"],resolve)
    }
]
// 
const router=new VueRouter({
  routes
})
// 导出路由
export default router