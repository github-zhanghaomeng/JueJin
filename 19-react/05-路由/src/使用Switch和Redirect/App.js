import React, { Component } from 'react'
import { Route, Link, Switch,Redirect } from 'react-router-dom'

import Home from './Home'
import List from './List'
import Detail from './Detail'
import Error from './Error'
class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页面</Link>
                    </li>
                    <li>
                        <Link to='/list'>商品列表页面</Link>
                    </li>
                </ul>
                <h1>App</h1>
                <Switch>
                    <Redirect from='/list' to='/'></Redirect>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                    <Route path='/detail/:id' exact component={Detail}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </div>
            // Switch的作用是只要第一个匹配成功的话，后面的将不再匹配 
            // Error中没有写path 如果不写Switch的话 匹配到前面的 Error也会匹配到 写Switch的话只匹配一个
        )
    }
}

export default App