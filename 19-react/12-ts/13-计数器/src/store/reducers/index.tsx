import {connectRouter} from 'connected-react-router'
import {combineReducers,ReducersMapObject} from 'redux'

import home from './home'
import mine from './mine'
import profile from './profile'
import history from '../history'


let reducers:ReducersMapObject = {
    home,
    mine,
    profile,
    router:connectRouter(history)
}

export type TypeRootReducers = {
    [key in keyof typeof reducers] : ReturnType<typeof reducers[key]>
}
let reducer = combineReducers(reducers)
export default reducer