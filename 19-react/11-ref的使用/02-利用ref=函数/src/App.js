import React, { Component } from 'react'
export default class App extends Component {
    add = ()=>{
        // console.log(this.num1)
        this.res.value = parseFloat(this.num1.value)+parseFloat(this.num2.value)
    }
    render() { 
        return (
            <>
                <input ref={(input)=>{this.num1=input}} type="text"/>
                <button onClick={this.add}>+</button>
                <input ref={(input)=>{this.num2=input}} type="text"/>=
                <input ref={(input)=>{this.res=input}} readOnly type="text"/>
            </>
        )
    }
}