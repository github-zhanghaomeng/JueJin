import React,{Component} from 'react'
import { Route,Link } from 'react-router-dom'

import Reg from './Reg'
import Login from './Login'
class User extends Component{
    render(){
        return(
            <div>
                <Link to='/user/reg'>注册</Link>
                <Link to='/user/login'>登录</Link>
                <h2>个人中心</h2>
                <Route path='/user/reg' component={ Reg }></Route>
                <Route path='/user/login' component={ Login }></Route>
            </div>
        )
    }
}
export default User