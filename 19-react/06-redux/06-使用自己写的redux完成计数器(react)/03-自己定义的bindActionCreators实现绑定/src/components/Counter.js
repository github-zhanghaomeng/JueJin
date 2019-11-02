import React,{Component} from 'react'
import store from '../store'
import * as types from '../store/action-types'
//在redux中有一个bindActionCreators 
// 可以实现把action creator 和 dispatch 进行绑定
import {bindActionCreators} from '../redux'

//action creator 是一个函数 返回一个对象(action)
function increment(){
    return {
        type:types.ADD
    }
}
function decrement(){
    return{
        type:types.SUB
    }
}

//绑定dispatch和action creator
// 得到一个经过绑定后的incrent函数
// 当调用increment函数，就相当于store.dispatch(increment())
increment = bindActionCreators(increment,store.dispatch)
decrement = bindActionCreators(decrement,store.dispatch)

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            number:store.getState().number
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={()=>increment()}>+</button>
                <br />
                <button onClick={()=>decrement()}>-</button>
            </div>
        )
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })   
    }
}