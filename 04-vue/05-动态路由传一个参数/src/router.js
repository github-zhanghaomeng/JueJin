import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './views/GoodList.vue'
import GoodDetail from './views/GoodDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/goodlist",
      component:GoodList
    },
    {
      path:"/gooddetail/:id",
      component:GoodDetail
    }
    
  
  ]
})
