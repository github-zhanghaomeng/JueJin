import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import counter from './counter'



// export default combineReducers({counter})

//官方的写法  这个history是建立仓库时 传过来的
export default (history) => combineReducers({
    counter,
    router: connectRouter(history)
    
  })

