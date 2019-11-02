import { createStore } from '../redux'
import  reducer from '../store/reducer'

import {applyMiddleware} from 'redux'
//中间件
//实现可以操作异步的action creators
// import thunkMiddleware from 'redux-thunk'
//触发一个action时 会在console上打印上一个状态 action 当前的状态
// import {createLogger} from 'redux-logger'
// let logger = createLogger({
// })
import promiseMiddleware from 'redux-promise'

// let store = createStore(reducer)
let store = applyMiddleware(promiseMiddleware)(createStore)(reducer)


export default store