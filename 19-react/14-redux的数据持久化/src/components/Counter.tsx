import * as React from 'react'
import {connect} from 'react-redux'

import {State} from '../store/types/State'
import * as actions from '../store/actions/counter'

export interface Props{
    number:number,
    increment:any,
    decrement:any
}
class Counter1 extends React.Component<Props>{
    render(){
        console.log(this.props)
        return (
            <>
                <h1>Counter</h1>
                <h3>{this.props.number}</h3>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </>
        )
    }
}
//合并管理员 要这么写
function mapStateToProps(state:any):State{
    return state.counter
}

//如果只有一个管理员时 只需要这样写
// function mapStateToProps(state:State):State{
//     return state
// }
export default connect(mapStateToProps,actions)(Counter1)