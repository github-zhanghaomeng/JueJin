import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from '../redux'
import * as actions from '../store/actions/counter2'

class Counter2 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={()=>this.props.increment()}>+</button>                
                <button onClick={()=>this.props.decrement()}>-</button>
                {/* 第一种实现异步加 */}
                {/* <button onClick={()=>{
                    setTimeout(()=>{
                        this.props.increment()
                    },3000)
                }}>过3秒后加</button> */}
                <button onClick={()=>this.props.incrementAfterThree()}>过3秒加</button>
            </div>
        )
    }
}
// 第一种写法
// function mapStateToProps(state){
//    return {number : state.counter2.number}
// }
// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter2)

//第二种写法
let mapStateToProps = state=>({number:state.counter2.number})
export default connect(mapStateToProps,actions)(Counter2)