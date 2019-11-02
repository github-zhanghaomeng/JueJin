import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'
import Index from './views/Index'
import Wchart from './views/Wchart'
import Find from './views/Find'
import Mine from './views/Mine'
import AddressBook from './views/AddressBook'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/register",
      name:'register',
      component:Register
    },{
      
        path:"/login",
        name:'login',
        component:Login
    },{
      path:"/index",
      name:"index",
      component:Index,
      children:[
        {
          path:'/wchart',
          name:'wchart',
          component:Wchart
        }, {
          path:'/find',
          name:'find',
          component:Find
        }, {
          path:'/addbook',
          name:'addbook',
          component:AddressBook
        }, {
          path:'/mine',
          name:'mine',
          component:Mine
        }
      ]
    }

  ]
})
