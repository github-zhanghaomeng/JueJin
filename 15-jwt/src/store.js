import Vue from 'vue'
import Vuex from 'vuex'
import {login,validate} from './api/user'
import {setLocal} from './libs/local'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username : 'wangcai',
    isShowLoading:false
  },
  mutations: {
    showLoading(state,loading){
      state.isShowLoading = loading
    },
    hideLoading(state,loading){
      state.isShowLoading = loading
    },
    setUserName(state,username){
      state.username = username
    }
  },
  actions: {
   async toLogin({commit},username){
    //  console.log(username)
      let r = await login(username)
      // console.log(r)
      // console.log('..')
      // console.log(username)
      if(r.code == 0){
        //登陆成功
        commit('setUserName',r.username)
        setLocal('token',r.token)
      }else{
        //登陆失败
        return Promise.reject(r.data)
      }
    },
    async validate({commit}){
      let r = await validate()
      if(r.code == 0){
        commit('setUserName',r.username)
        setLocal('token',r.token)
      }
      return r.code == 0
    }
  }
})
