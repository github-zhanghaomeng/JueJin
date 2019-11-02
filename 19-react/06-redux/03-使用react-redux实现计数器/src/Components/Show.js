import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Show extends Component {
    render() {
        return (
            <div>
                <h2>当前counter的值为{this.props.counter}</h2>
            </div>
        )
    }
}
Show.propTypes = {
    counter:PropTypes.number.isRequired
}
export default Show