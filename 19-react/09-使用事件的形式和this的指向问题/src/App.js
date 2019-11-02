import React, { Component } from 'react'

//在jsx中this指向这个组件 而在函数内部this默认指向undefined
//下面有3种方法 使this指向这个组件
class App extends Component {
    constructor(props){
        super(props)

    //   第二种绑定this的方法
      this.add = this.add.bind(this)
    }
    state = {number:0}
    //箭头函数 第三种只传入payload
    // add = (payload)=>{
    //     console.log(this)
    //     this.setState({
    //         number:this.state.number+payload
    //     })
    // }
    //箭头函数，第三种传入event
    // add = (event,payload)=>{
    //     console.log(event)
    //     console.log(this)
    //     this.setState({
    //         number:this.state.number+payload
    //     })
    // }
    //普通函数 第一种(使用普通函数时，需要在constructor上绑定this)和第二种默认只能打印出event
    add = function(event){
        console.log(this)
        console.log(event)
        this.setState({
            number:this.state.number+1
        })
    }
    render() {
        return (
            <div>
                <h2>App</h2>
                <h3>{this.state.number}</h3>
                {/* 第一种 add这个函数必须是箭头函数 这里是把this.add当成属性 不用带() */}
                {/* <button onClick={this.add}>+</button> */}

                {/* 第二种 add这个函数可以是箭头函数 也可以是普通函数 */}
                {/* 通过绑定this实现 不用带() 绑定有两种方法实现 这是第一种 还有一种在construtor种绑定 */}
                {/* <button onClick={this.add.bind(this)}>+</button> */}

                {/* 第三种 可以使用一个匿名函数()=>{} 在这个函数里面调用add这个函数 */}
                {/* 使用() add可以是箭头函数也可以是普通函数 */}
                {/* 这两种都可以实现this的指向 第一种是onclick返回了一个add的调用 第二种直接调用没有返回 */}
                {/* <button onClick={()=>this.add()}>+</button> */}
                {/* <button onClick={()=>{this.add()}}>+</button> */}

                {/* 传参 */}
                {/* 如果使用第一种和第二种的时候 不能进行传参 默认只能打印出event */}

                {/* 必须传入event时才可以打印出event 可以只传入一个实参payload */}
                {/* <button onClick={()=>this.add(3)}>+</button> */}
                {/* <button onClick={(event)=>this.add(event,3)}>+</button> */}

            </div>
        )
    }

    
    
}
export default App