import {createStore,applyMiddleware} from 'redux'
import createRootReducer from './reducer'
import {createHashHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

export let history = createHashHistory()

//没使用connected-react-router这个中间件前
// import reducer from './reducer'
// let store = createStore(reducer)
// export default store


//官网上写的
export default function configureStore(preloadedState){
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        applyMiddleware(
            routerMiddleware(history)
        )
    )
    return store
}

