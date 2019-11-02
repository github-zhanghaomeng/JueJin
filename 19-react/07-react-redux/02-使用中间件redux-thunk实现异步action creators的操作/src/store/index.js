import { createStore } from '../redux'
import  reducer from '../store/reducer'

import {applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'


// let store = createStore(reducer)
let store = applyMiddleware(thunkMiddleware)(createStore)(reducer)


export default store