import {AnyAction} from 'redux'
import * as types from '../action-types'
export interface TypeMine{
    currentCategory:string
}
let initialState:TypeMine = {
    currentCategory:'all'
}
export default function(state:TypeMine=initialState,action:AnyAction):TypeMine{
    switch(action.type){
        default:
            return state
    }
}