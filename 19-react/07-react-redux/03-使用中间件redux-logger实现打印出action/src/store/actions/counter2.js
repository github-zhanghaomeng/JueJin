import * as types from '../action-types'
//同步的action creators
export function increment(){
    return{
        type:types.ADD2
    }
}
//同步的action creators
export function decrement(){
    return{
        type:types.SUB2
    }
}
//异步的action creators
export function incrementAfterThree(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(increment())
        },3000)
    }
}