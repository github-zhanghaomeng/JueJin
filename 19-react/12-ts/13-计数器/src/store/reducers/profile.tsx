import {AnyAction} from 'redux'
import * as types from '../action-types'
export interface TypeProfile{
    
}
let initialState:TypeProfile = {
    
}
export default function(state:TypeProfile=initialState,action:AnyAction):TypeProfile{
    switch(action.type){
        default:
            return state
    }
}