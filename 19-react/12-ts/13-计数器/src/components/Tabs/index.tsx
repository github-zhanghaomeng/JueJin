import * as React from 'react'
import {NavLink} from 'react-router-dom'
import { Icon } from 'antd';
import './index.less'

export default class Tabs extends React.Component{
    render(){
        return(
            <footer>
                <NavLink to='/' exact><Icon type="home"></Icon><span>首页</span></NavLink>
                <NavLink to='/mine'><Icon type="star"></Icon><span>我的电影</span></NavLink>
                <NavLink to='/profile' ><Icon type="user"></Icon><span>个人中心</span></NavLink>
            </footer>
        )
    }
}