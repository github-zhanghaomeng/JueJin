import  Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    isAutnenticated : false,
    user : {}
}
const getters = {
    isAutnenticated : state => state.isAutnenticated,
    user : state => state.user
}
const mutations = {
    setIsAutnenticated(state,isAutnenticated){
        if(isAutnenticated){
            state.isAutnenticated = isAutnenticated
        }else{
            state.isAutnenticated = false
        }
    },
    setUser(state,user){
        if(user){
            state.user = user
        }else{
            state.user = {}
        }
    }
}
const actions = {
    setIsAutnenticated:(context,isAutnenticated)=>{
        context.commit("setIsAutnenticated",isAutnenticated)
    },
    setUser:({commit},user)=>{
        commit("setUser",user)
    },
    clearCurrentState({commit}){
        commit("setIsAutnenticated",false),
        commit("setUser",null)
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})