import React, { Component } from 'react'
import PropTypes from 'prop-types'

class OddAddCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.incrementOdd()}>奇数加</button>
            </div>
        )
    }
}
OddAddCounter.propTypes= {
    incrementOdd:PropTypes.func.isRequired
}
export default OddAddCounter