import {createStore,applyMiddleware} from 'redux'
import {routerMiddleware} from 'connected-react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'


import history from './history'
import reducer from './reducers'

let store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
    )
)
export default store