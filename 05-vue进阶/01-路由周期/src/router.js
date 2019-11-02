import Vue from 'vue'
import Router from 'vue-router'
import Home from '_v/Home'
import Name from '_v/Name'
import Version from '_v/Version'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'/home'
    },{
      path:'/home',
      name:'home',
      components:{
        default:Home,
        name:Name,
        version:Version
      }
    },{
      path:'/login',
      name:'login',
      component:()=>import("_v/Login")
    },{
      path:'/user',
      name:'user',
      meta:{needLogin:true},
      component:()=>import("_v/User"),
      children:[
        {
          path:'',
          redirect:'add'
        },
        {
          path:'add',
          name:'useradd',
          component:()=>import("_v/UserAdd")
        },{
          path:'list',
          name:'userlist',
          component:()=>import("_v/UserList")
        },{
          path:'detail',
          name:'userdetail',
          component:()=>import("_v/UserDetail"),
          beforeEnter(to,from,next){
            console.log("beforeEnter")
            next()
          }
        }
      ]
    },{
      path:'/profile',
      name:'profile',
      component:()=>import("_v/Profile"),
      meta:{needLogin:true}
    },{
      path:'*',
      name:'404',
      component:()=>import('_v/404')
    }
  ]


 
})
