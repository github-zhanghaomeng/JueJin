import * as types from '../action-types'
//同步的action creators
export function increment(payload){
    return{
        type:types.ADD1,
        payload
    }
}
//同步的action creators
export function decrement(payload){
    return{
        type:types.SUB1,
        payload
    }
}
//异步的action creators 是一个函数 返回一个函数
//dispatch只能派发一个action(对象) 
//这里的dispatch派发的是一个函数
//所以需要对dispatch进行加强后 首先派发一个函数 然后派发action
//需要使用redux-thunk这个中间件对仓库进行加强 所有的中间件都是对仓库的
export function incrementAfterThree(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(increment(3))
        },3000)
    }
}
