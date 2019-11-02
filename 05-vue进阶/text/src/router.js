import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)


let defaultRoutes = [
  {
    path:'',
    name:'home',
    component:Home
  },
  {
    path:"*",
    component:()=>import("./components/404.vue")
  }
]

export let authRoutes = [
  {
    path:'/cart',
    name:'cart',
    component:()=>import("./components/menu/Cart"),
    children:[
      {
        path:'cart-list',
        name:'cart-list',
        component:()=>import("./components/menu/CartList"),
        children:[
          {
           path:'lottery',
           name:'lottery',
           component:()=>import("./components/menu/Lottery"),
          },
          {
           path:'product',
           name:'product',
           component:()=>import("./components/menu/Product"),
          }
        ]
      }
    ]
  },{
    path:'/profile',
    name:'profile',
    component:()=>import('./components/menu/Profile')
  },{
   path:'/shop',
   name:'shop',
   component:()=>import('./components/menu/Shop')
 },
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRoutes
})
