import { createStore } from '../redux'
import reducer from './reducers'

//创建仓库
let store = createStore(reducer)



export default store