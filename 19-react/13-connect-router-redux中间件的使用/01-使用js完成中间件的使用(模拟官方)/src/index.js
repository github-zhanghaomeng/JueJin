import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'

import Counter from './components/Counter'
import Home from './components/Home'
// import store from './store'
import configureStore,{history} from './store'
const store = configureStore()

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Link to='/'>首页</Link>
        <Link to='/counter'>计数器</Link>
        <br></br>
        <Route path='/' exact component={Home}></Route>
        <Route path='/counter' component={Counter}></Route>
    </ConnectedRouter>
</Provider>, document.getElementById('app'))

