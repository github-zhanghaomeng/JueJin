import React, { Component } from 'react'

import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         color:"red"
    //     }
    //     this.changeColor = function(color){
    //         this.setState({
    //             color
    //         })
    //     }
    // }
    state = {color:'red'}
    changeColor = color=>this.setState({color})
    render() {
        return (
            <div style={{border:`5px solid ${this.state.color}`,padding:"3px"}}>
                <h1>App</h1>
                <Header color={this.state.color}></Header>
                <Main color={this.state.color} changeColor={this.changeColor.bind(this)}></Main>
            </div>
        )
    }
}
export default App