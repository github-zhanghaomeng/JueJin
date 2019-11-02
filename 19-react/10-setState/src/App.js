import React, { Component } from 'react'
//setState不能准确的说是 异步的还是同步的
class App extends Component {
    state = {
        number:1
    }
    //点击按钮执行this.setState时，想的是number+1+2+3
    //但是到最后number+最后一次执行的this.setState的值3 最后为number+3
    handleClick = ()=>{
        this.setState({number:this.state.number+1})
        this.setState({number:this.state.number+2})
        this.setState({number:this.state.number+3})
    }
    //如果想要实现加上每一次的setState的值 有以下两种方法
    //第一种
    // handleClick = ()=>{
    //     this.setState((prevState)=>({number:prevState.number+1}))
    //     this.setState((prevState)=>({number:prevState.number+2}))
    //     this.setState((prevState)=>({number:prevState.number+3
    //     }))
    // }
    //第二种
    handleClick = ()=>{
        this.setState({number:this.state.number+1},()=>{
            this.setState({number:this.state.number+2},()=>{
                this.setState({number:this.state.number+3})
            })
        })
    }
    render() {
        return (
            <>
                <h1>App</h1>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </>
        )
    }
}
export default App