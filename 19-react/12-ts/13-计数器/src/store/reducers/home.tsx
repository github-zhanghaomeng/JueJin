import {AnyAction} from 'redux'
import * as types from '../action-types'
export interface TypeHome{
    currentCategory:string
}
let initialState:TypeHome = {
    currentCategory:'all'
}
export default function(state:TypeHome=initialState,action:AnyAction):TypeHome{
    switch(action.type){
        case types.SET_CURRENT_CATEGORY:
            return {currentCategory:action.payload}
        default:
            return state
    }
}