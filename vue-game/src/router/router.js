import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const routes= [
  //home(入口路由)
  {
    name:'index',
    path:'/',
    component:()=>import('@/components/index/index.vue')
  },
 
]

const router = new createRouter({
    mode:'hash',
    //createWebHashHistory 使用这个表示 hash方式
    // history:createWebHashHistory(),

    //createWebHistory 表示 History 模式
    history:createWebHistory(),
    routes,
})

export default router