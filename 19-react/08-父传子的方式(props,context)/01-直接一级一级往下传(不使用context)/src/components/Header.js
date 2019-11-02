import React, { Component } from 'react'
import Title from './Title'

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{border:`3px solid ${this.props.color}`,padding:"3px"}}>
                <h2>Header</h2>
                <Title color={this.props.color}></Title>
            </div>
        )
    }
}
export default Header