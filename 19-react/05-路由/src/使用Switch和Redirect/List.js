import React,{Component} from 'react'

import { Link } from 'react-router-dom'
class List extends Component{
    render(){
        return(
            <div>
                <h2>列表页面</h2>
                <ul>
                    <li><Link to='/detail/1'>我是1号商品</Link></li>
                    <li><Link to='/detail/2'>我是2号商品</Link></li>
                    <li><Link to='/detail/4'>我是3号商品</Link></li>
                    <li><Link to='/detail/3'>我是4号商品</Link></li>
                </ul>
            </div>
        )
    }
}

export default List