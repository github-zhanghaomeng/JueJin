import React,{Component} from 'react'
import Children from './Children'
//在父组件中引入子组件 不用注册 直接使用 
//如果传值的话 在父组件中设置数据 在子组件中接受数据

// 导入一个组件在jsx中使用 vue中是在tempate中使用  

// 每一个组件中都有一个state，react和vue一样，也可以使用props
// vue中  每一个组件中都一个data    数据源：data  props

// props在vue主要是用来传递数据的，实现父子通信的，是父给子传递数据。
// react中props也是用来传递数据，实现通信的，也是父传子，可以传递数据，也可以传递方法

// 如何使用Props?
// 需要有父组件和子组件
// 在父中设置数据，在子中获取数据
// 子中通过this.props.属性名来获取数据
class App extends Component{
    render(){
        return(
            <>
                <h1>父组件</h1>
                <Children></Children>
                {/* <Children age={100}></Children> */}
                {/* <Children age={'wangcai'}></Children> */}
            </>
        )
    }
}

export default App