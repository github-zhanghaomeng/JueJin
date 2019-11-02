import { createStore,applyMiddleware } from 'redux'
import {routerMiddleware} from 'connected-react-router'

import reducer from './reducers'
import history from './history'

// let store = createStore(reducer)

let store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history)
    )
)

export default store