import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { authRoutes } from './router'

let formatMenuList = (menuList)=>{
   let arr = []
    //把后端返回的菜单的数据转换成我们需要的数据
   function r(pid){
    return menuList.filter(item=>{
       if(item.pid == pid){
         arr.push(item.auth)
         let children = r(item.id)
         item.children = children.length ? children : null
         return true
       }
     })
   }
   return {m:r(-1),a:arr}
  // return r(-1)
  
}

let getNeedRoutes = (auth)=>{
  function r(authRoutes){
    return authRoutes.filter(route=>{
      if(auth.includes(route.name)){
        if(route.children){
          route.children = r(route.children)
        }
        return true
      }
    })
  }
  return r(authRoutes)
}
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    menuList:[],
    authList:[],
    hasRules:false
  },
  mutations: {
    SetMenuList(state,m){
      state.menuList = m;
    },
    SetAuthList(state,a){
      state.authList = a;
      state.hasRules = true;
    }
  },
  actions: {
   async getMenuList({commit}){
    let {data} = await axios.get("http://localhost:3000/role")
      // console.log(data.menuList)
     let {m,a} = formatMenuList(data.menuList)
     console.log(m,a)
    // let menuList = formatMenuList(data.menuList);
    // console.log(menuList)
    commit("SetMenuList",m);
    commit("SetAuthList",a)
    },
    getAuthRoute({commit,state}){
      let r = getNeedRoutes(state.authList);
      return r
    }
  }
})
