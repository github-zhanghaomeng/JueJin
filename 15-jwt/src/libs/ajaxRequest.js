import axios from 'axios'
import store from '../store'
import {getLocal} from './local'

class AjaxRequest{
    constructor(){
        this.baseURL = process.env.NODE_ENV == 'production' ? '/' : 'http://localhost:3000'
        this.timeout = 3000
        this.queue = {}
    }
    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    setInterceptor(instance,url){
        //请求拦截
        instance.interceptors.request.use((config)=>{
            // console.log(getLocal("token"))
            // 在请求拦截中，每次请求，都会加上一个Authorization头
            config.headers.Authorization = getLocal('token')
            // console.log(this.queue) //{}
            // console.log(Object.keys(this.queue)) //[]
            // 第1次请求时，显示Loading动画
            if(Object.keys(this.queue).length === 0){
                store.commit('showLoading',true)
            }
            // store.commit('showLoading',true)
            return config
        })
        //响应拦截
        instance.interceptors.response.use((res)=>{
            delete this.queue[url]
            if(Object.keys(this.queue).length === 0){
                store.commit('hideLoading',false)
            }
            // store.commit('hideLoading',false)
            return res.data
        })
    }
    request(options){
        let instance = axios.create()
        this.setInterceptor(instance,options.url)
        let configs = this.merge(options)
        //返回的是promise
        return instance(configs) 
    }
}

export default new AjaxRequest