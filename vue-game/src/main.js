//引入的 是一个 名称为 createApp 的工程函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import usestore from './store/index'

//引入全局css
 //删除默认样式
import '@/assets/css/ChongZhi.css'
 //引入图标字体库
import '@/assets/iconfont/css/all.css'

createApp(App).
use(router).
use(usestore).
mount('#app')
