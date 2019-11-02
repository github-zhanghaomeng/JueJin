import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import counter from './counter'

import history from '../history'

// export default combineReducers({counter})


//容易理解的 这个history是把自己定义的拿过来 
export default combineReducers({
  counter,
  router:connectRouter(history)
})