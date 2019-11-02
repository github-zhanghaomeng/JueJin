import * as React from 'react'
import {Icon} from 'antd'
import './index.less'

interface Props{
    history:any,
    children:string
}
export default function(props:Props){
    return(
        <div className='nav-header'>
            <Icon type='left' onClick={()=>props.history.goBack()}></Icon>
            {props.children}
        </div>
    )
}