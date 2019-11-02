import { INCREMENT2,DECREMENT2 } from '../action-types'
import history from '../history'
import {push} from 'connected-react-router'

export interface Increment{
    type:typeof INCREMENT2
}

export interface Decrement{
    type:typeof DECREMENT2
}

export type Counter2 = Increment|Decrement

export function increment():Increment{
    return {
        type:INCREMENT2
    }
}

export function decrement():Decrement{
    return {
        type:DECREMENT2
    }
}

export function goCounter1(){
    // 第一种方式
    // history.push('/counter1')
    // return{type:'xxx'}
    //第二种方式
    return push('/counter1')
}