import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    list:[
      {name:"z3",score:50},
      {name:"l4",score:70},
      {name:"w5",score:90},
      {name:"z6",score:49}
    ]
  },
  mutations:{
   
  },
  getters:{
    
    failScore(state){
      // let sum = 0
      let s =""
      state.list.forEach(item=>{
        if(item.score<60) {
          // sum++
          s += item.name;
          s += '\t'
        }
        
      })
      // return sum
      return s
    }
  }
})

