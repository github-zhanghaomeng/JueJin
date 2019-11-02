import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import BootStrap from 'bootstrap'
import "bootstrap/dist/css/bootstrap.css"

router.beforeEach((to,from,next)=>{
  // console.log(to)
  let flag =  to.matched.some(match=>match.meta && match.meta.needLogin);
  let isLogin = localStorage.getItem('login');
  console.log(isLogin)
//  console.log(flag)
  if(flag){
    if(isLogin){
      next()
      }else{
        next('/login')
      }
  }else if(to.name == 'login'){
    if(isLogin){
      next('/')
    }else{
      next()
    }
  }
  else{
    next();
  }
})
// Vue.use(BootStrap)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
