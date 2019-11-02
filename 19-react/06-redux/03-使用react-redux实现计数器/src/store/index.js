// import { createStore } from 'redux'
import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducer'

//引入redux-thunk中间件，让它来处理异步的action 为了加强dispatch
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
const state = {
    counter:0
}
//没有异步处理时 创建的仓库
// let store = createStore(reducer,state)

//有异步处理时 创建的仓库
let store = createStoreWithMiddleware(reducer,state)

export default store