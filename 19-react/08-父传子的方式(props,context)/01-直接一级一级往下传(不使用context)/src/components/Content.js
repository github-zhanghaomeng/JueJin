import React, { Component } from 'react'

class Content extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{border:`1px solid ${this.props.color}`,padding:"3px"}}>
                <h3>content</h3>
                <button onClick={()=>this.props.changeColor('blue')}>变蓝</button>
                <button onClick={()=>this.props.changeColor('green')}>变绿</button>
            </div>
        )
    }
}
export default Content