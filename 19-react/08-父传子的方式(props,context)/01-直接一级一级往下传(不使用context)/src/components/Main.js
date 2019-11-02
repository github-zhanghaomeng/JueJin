import React, { Component } from 'react'

import Content from './Content'

class Main extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{border:`3px solid ${this.props.color}`,padding:"3px"}}>
                <h2>Main</h2>
                <Content color={this.props.color} changeColor={this.props.changeColor}></Content>
            </div>
        )
    }
}
export default Main