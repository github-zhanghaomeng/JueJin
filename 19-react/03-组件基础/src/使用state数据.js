import React,{Component} from 'react'

//类组件 它里面必须包含render钩子函数 钩子函数里必须return 
//需要继承React.Component
// 当状态改变，视图也会更新

// 状态需要定义到constructor中
// 把状态定义到当前的组件中  this   this表示显示的组件
// 要使用this，需要显示调用super
class App extends Component{
    constructor(){
        //写state必须加上super()
        super()
        //这里的state相当于vue中的data 
        this.state={
            "name":"wangcai",
            "age":100
        }
    }
    render(){
        return(
            // jsx
            <>
                <h1>hello</h1>
                {/* 不能像vue中直接{{name}} 必须使用this.state.name */}
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
            </>
        )
    }
}

export default App