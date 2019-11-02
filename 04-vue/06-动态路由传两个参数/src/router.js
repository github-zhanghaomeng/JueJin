import Vue from 'vue'
import Router from 'vue-router'
import Animal from './views/Animal.vue'
import Introduce from './views/Introduce.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/animal',
      component:Animal
    },
    {
      path:'/introduce/:name/:age',
      component:Introduce
    }
    
  
  ]
})
