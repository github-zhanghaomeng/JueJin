import React, { Component } from 'react'
class Title extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{border:`1px solid ${this.props.color}`,padding:"3px"}}>
                <h3>title</h3>
            </div>
        )
    }
}
export default Title