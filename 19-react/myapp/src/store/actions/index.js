import {INCREMENT,DECREMENT} from '../action-types'
import {history} from '../../store'
import {push} from 'connected-react-router'

export function increment(){
    return {
        type:INCREMENT
    }
}

export function decrement(){
    return {
        type:DECREMENT
    }
}

export function goto(path){
    //第一种方法
    // history.push(path)
    // return{
    //     type:'xxx'
    // }
    
    // 第二种方法
    return push(path)
}