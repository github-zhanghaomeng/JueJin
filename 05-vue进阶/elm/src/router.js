import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login"
import Index from "./views/Index"
import Home from './views/Home'
import Order from './views/Order'
import Mine from './views/Mine'
import Address from './views/Address'
import City from './views/City'

Vue.use(Router)
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path:"/login",
      component:Login
    },{
      path:'/',
      component:Index,
      children:[
        {
          path:'/',
          redirect:'/home'
        },
        {
          path:'/home',
          name:'home',
          component:Home
        },
        {
          path:'/order',
          name:'order',
          component:Order
        },
        {
          path:'mine',
          name:'mine',
          component:Mine
        }
      ]
    },{
      path:'/address',
      name:'address',
      component:Address
    },{
      path:'/city',
      name:'city',
      component:City
    },{
      path:'/search',
      name:'search',
      component:()=>import("./views/Search.vue")
    },
    {
      path:'/shop',
      name:'shop',
      redirect:"/goods",
      component:()=>import("./views/Shops/Shop.vue"),
      children:[
        {
          path:'/goods',
          name:'goods',
          component:()=>import("./views/Shops/Goods")
        },
        {
          path:'/seller',
          name:'seller',
          component:()=>import("./views/Shops/Seller")
        },
        {
          path:'/comments',
          name:'comments',
          component:()=>import("./views/Shops/Comments")
        }
      ]
    },
  ]
})

// router.beforeEach((to,from,next)=>{
//   const isLogin = localStorage.ele_login ? true : false
//   if(to.path === '/login'){
//     next()
//   }else{
//     isLogin ? next() : next('/login')
//   }
// })
export default router