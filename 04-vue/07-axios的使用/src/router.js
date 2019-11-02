import Vue from 'vue'
import Router from 'vue-router'
import GetData from './views/GetData.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/getdata',
      component:GetData
    }
    
  
  ]
})
