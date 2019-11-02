import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SubCounter extends Component {
    render() {
        return (
           <div>
               <button onClick={()=>this.props.decrement()}>-</button>
           </div>
        )
    }
}
SubCounter.propTypes={
    decrement:PropTypes.func.isRequired
}
export default SubCounter