import React, { Component } from 'react'
export default class App extends Component {
    num1 = React.createRef()
    num2 = React.createRef()
    res = React.createRef()
    add = ()=>{
        // console.log(this.num1.current)
        this.res.current.value = parseFloat(this.num1.current.value)+parseFloat(this.num2.current.value)
    }
    render() { 
        return (
            <>
                <input ref={this.num1} type="text"/>
                <button onClick={this.add}>+</button>
                <input ref={this.num2} type="text"/>=
                <input ref={this.res} readOnly type="text"/>
            </>
        )
    }
}