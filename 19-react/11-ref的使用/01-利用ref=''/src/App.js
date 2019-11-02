import React, { Component } from 'react'
export default class App extends Component {
    add = ()=>{
        // console.log(this.refs.num1.value)  
        this.num1 = this.refs.num1.value
        this.num2 = this.refs.num2.value
        
        // console.log(this.num1)
        // console.log(this.num2)
        this.refs.res.value =  parseFloat(this.num1)+parseFloat(this.num2)
    }
    render() { 
        return (
            <>
                <input ref='num1' value={this.num1} onChange={(e)=>this.num1=e.target.value} type="text"/>
                <button onClick={this.add}>+</button>
                <input ref='num2' value={this.num2} onChange={(e)=>this.num2=e.target.value} type="text"/>=
                <input ref='res' readOnly type="text"/>
            </>
        )
    }
}