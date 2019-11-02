import Vue from 'vue'  // <script src="./vue.js"></script>
import App from './App.vue' // 引入根组件   let app = new Vue()
import router from './router'  // router 路由
import store from './store/index'  // vuex中的仓库
import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Indicator } from 'mint-ui';



Vue.config.productionTip = false

Vue.prototype.$axios = axios



axios.interceptors.request.use(config=>{
  Indicator.open();
  return config;
},error=>{
  return Promise.reject(error);
})


axios.interceptors.response.use(response=>{
  Indicator.close();
  return response;
},error=>{
  Indicator.close();
  return Promise.reject(error);
})

// 创建一个Vue的实例
new Vue({
  router,
  store,
  render: h => h(App)   // render是渲染  render是函数   钩子函数
}).$mount('#app')




