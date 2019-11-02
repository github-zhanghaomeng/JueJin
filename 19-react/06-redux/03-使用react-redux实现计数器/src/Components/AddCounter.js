import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddCounter extends Component {
    render() {
        return (
           <div>
               <button onClick={()=>this.props.increment()}>+</button>
           </div>
        )
    }
}
AddCounter.propTypes={
    increment:PropTypes.func.isRequired
}
export default AddCounter