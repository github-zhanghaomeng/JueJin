import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'
import Index from './views/Index'
import Home from './views/Home'
import InfoShow from './views/InfoShow'
import FoundList from './views/FoundList'
Vue.use(Router)
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/register',
      component:Register
    },{
      path:'/login',
      component:Login
    },{
      path:'/index',
      component:Index,
      children:[
        {
          path:'',
          component:Home
        }, {
          path:'/home',
          component:Home
        },{
          path:'/infoshow',
          component:InfoShow
        }
      ]
    },{
      path:'/foundlist',
      component:FoundList
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.eleToken ? true : false;
  if(to.path === '/login' || to.path === '/register'){
    next();
  }else{
    isLogin ? next() : next('/login')
  }
})

export default router