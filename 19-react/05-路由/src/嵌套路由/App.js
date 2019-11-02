import React,{Component} from 'react'
import { Route,Link } from 'react-router-dom'

import Home from './Home'
import List from './List'
import User from './User'
class App extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页面</Link>
                    </li>
                    <li>
                        <Link to='/list'>商品列表页面</Link>
                    </li>
                    <li>
                        <Link to='/user'>个人中心页面</Link>
                    </li>
                </ul>
                <h1>App</h1>
                <Route path='/' exact component={ Home }></Route>
                <Route path='/list' component={ List }></Route>
                <Route path='/user' component={ User }></Route>
            </div>
        )
    }
}

export default App