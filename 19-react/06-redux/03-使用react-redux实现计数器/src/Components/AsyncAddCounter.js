import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AsyncAddCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.incrementAsync()}>异步+</button>
            </div>
        )
    }
}
AsyncAddCounter.propTypes= {
    incrementAsync:PropTypes.func.isRequired
}
export default AsyncAddCounter