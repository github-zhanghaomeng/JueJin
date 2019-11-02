import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

Vue.config.productionTip = false


router.beforeEach(async (to,from,next)=>{
  if(!store.state.hasRules){
    await store.dispatch("getMenuList")
    let r = await store.dispatch('getAuthRoute');
    router.addRoutes(r)
    next({...to,replace:true})
    // next()
  }else{
    next()
  }
  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
