import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as actions from '../store/actions'

class Counter extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <h1>{this.props.counter.number}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={()=>this.props.goto('/')}>返回到首页面</button>
            </>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps,actions)(Counter)