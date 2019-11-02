import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView)

Vue.config.productionTip = false

router.beforeEach(async (to,from,next)=>{
  // console.log('...')
  let isLogin = await store.dispatch('validate')
  // console.log(isLogin)
  // console.log(to)
  let needLogin = to.matched.some(match=>match.meta.needLogin)
  // console.log(needLogin)
  if(needLogin){
    //需要登录才可以访问这个页面
    if(isLogin){
      //登录了
      next()
    }else{
      //没有登录
      next('/login')
    }
  }else{
    //不需要登录就可以访问
    if(isLogin && to.path == '/login'){
      next('/')
    }else{
      next()
    }
  }

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
