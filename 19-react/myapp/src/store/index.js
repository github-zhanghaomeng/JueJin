import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import history from './history'
import reducer from '../store/reducer'



//没使用connected-react-router这个中间件前
// import reducer from './reducer'
// let store = createStore(reducer)
// export default store


let store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history)
    )
)
export default store






