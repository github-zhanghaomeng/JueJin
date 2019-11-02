import React from 'react'
import PropTypes from 'prop-types'

//传统的写法  下面是箭头函数形式
// function App(props){
//     return(
//         <div>
//             <h1>无状态组件</h1>
//             <p>{props.name}</p>
//         </div>
//     )
// }

// const App = (props)=>{
//     return(
//         <div>
//             <h1>无状态组件</h1>
//         </div>
//     )
// }

//上面的简化形式 把return和{}省略掉
const App = props =>(
        <div>
            <h1>无状态组件</h1>

            {/* 无状态组件中没有this */}
            {/* <p>{this.props.name}</p> */}

            {/* 直接使用props.name */}
            <p>{props.name}</p>
        </div>
    )
//检验传过来的数据
App.propTypes = {
    name:PropTypes.string
}
//如果没有传过来数据  设置默认数据
App.defaultProps = {
    name:'xxx'
}

export default App

// 无状态组件 就是函数形式的组件
// 有状态组件 就是class形式的组件

// 无状态组件指这个组件中没有state  数据源是props

// 特点：
    // 1，function  无状态组件不会被实例化，性能高
    // 2，无状态组件不能访问this
    // 3，无状态组件没有生命周期，也就是没有钩子函数
    // 4，无状态组件数据源只能靠props
    // react建议，尽可能地使用无状态组件

// 传递的数据可以校验，propTypes 