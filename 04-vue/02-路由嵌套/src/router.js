import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import Setting from './views/Setting.vue'
import Login from './views/Login.vue'
import Resiter from './views/Resiter.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:'/',
     name:'home',
     component:Home
   },
   {
    path:'/find',
    name:'find',
    component:Find
  },
  {
    path:'/setting',
    name:'setting',
    component:Setting,
    children:[
      {
        path:'/login',
        name:'login',
        component:Login
    },
    {
      path:'/resiter',
      name:'resiter',
      component:Resiter
  }
    ]
  }
  ]
})
