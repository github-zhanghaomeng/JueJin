import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/counter'

import Show from '../Components/Show'
import AddCounter from '../Components/AddCounter'
import SubCounter from '../Components/SubCounter'
import AsyncAddCounter from '../Components/AsyncAddCounter'
import OddAddCounter from '../Components/OddAddCounter'


class Counter extends Component {
    render() {
        console.log(this.props.increment)
        return (         
            <div>
                <Show counter={this.props.counter}></Show>
                <AddCounter increment={this.props.increment}></AddCounter>
                <SubCounter decrement={this.props.decrement}></SubCounter>
                <AsyncAddCounter incrementAsync={this.props.incrementAsync}></AsyncAddCounter>
                <OddAddCounter incrementOdd={this.props.incrementOdd}></OddAddCounter>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        counter : state.counter
    }
    // console.log(state.counter)
    
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)