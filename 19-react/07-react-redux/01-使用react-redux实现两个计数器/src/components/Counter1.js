import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from '../redux'
import * as actions from '../store/actions/counter1'

class Counter1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={()=>this.props.increment()}>+</button>                
                <button onClick={()=>this.props.decrement()}>-</button>
            </div>
        )
    }
}

// 第一种写法
// function mapStateToProps(state){
//    return {number : state.counter1.number}
// }
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter1)

//第二种写法
let mapStateToProps = state=>({number:state.counter1.number})
export default connect(mapStateToProps,actions)(Counter1)