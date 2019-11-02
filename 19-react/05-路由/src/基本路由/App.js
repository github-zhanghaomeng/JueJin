import React,{Component} from 'react'
import { Route,Link } from 'react-router-dom'

import Home from './Home'
import List from './List'
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
                    
                </ul>
                <h1>App</h1>
                <Route path='/' exact component={ Home }></Route>
                <Route path='/list' component={ List }></Route>
            </div>
        )
    }
}

export default App