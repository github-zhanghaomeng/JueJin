import React,{Component} from 'react'

class App extends Component{
    constructor(){
        //写state必须加上super()
        super()
        //这里的state相当于vue中的data 
        this.state={
            "name":"wangcai",
            "age":100
        }
        // 第一种绑定this的方法
        // this.f1 = this.f1.bind(this)
    }
    render(){
        return(
            <>
                <h1>hello</h1>
                {/* 不能像vue中直接{{name}} 必须使用this.state.name */}
                {/* jsx中的this还是代表当前组件 */}
                <p>{this.state.name}</p>
                {/* 绑定this的第二种方法 */}
                <button onClick={this.f1.bind(this)}>修改name</button>
                {/* <button onClick={this.f1}>修改name</button> */}
                {/* 不绑定  直接在jsx中写方法 */}
                {/* <button onClick={console.log(this)}>修改name</button> */}
                <p>{this.state.age}</p>
                <button onClick={this.f2.bind(this)}>修改age</button>
            </>
        )
    }
    // 在react中一个方法中的this，并不代表当前组件，如果你想让它代表当前组件
    // 需要手动绑定this
    f1(){
        //undefined 因为没有绑定this 绑定之后会输出整个App 
        // 一共三种绑定this的方法 
        // 1在构造器绑定 2在调用方法时 3直接在jsx中写具体的方法 不单独拿出来
        // console.log(this)

        //需要使用setState这个方法修改state中的数据
        this.setState({
            name:'xiaoqiang'
        })    
    }
    f2(){
        // console.log(this)
        this.setState({
            // age:this.state.age+1
            // age:this.state.age++ //不能实现+1  因为++在后 this.state.age++整体是一个旧值
            age:++this.state.age
        })
    }
}

export default App