import React,{Component} from 'react'
import store from '../store'
import * as types from '../store/action-types'
//在redux中有一个bindActionCreators 
// 可以实现把action creator 和 dispatch 进行绑定
import {bindActionCreators} from '../redux'

//action creator 是一个函数 返回一个对象(action)
function increment(payload){
    return {
        type:types.ADD2,
        payload
    }
}
function decrement(payload){
    return{
        type:types.SUB2,
        payload
    }
}

//绑定dispatch和action creator
// 得到一个经过绑定后的incrent函数
// 当调用increment函数，就相当于store.dispatch(increment())

//一个一个的进行绑定  是一个函数和dispatch绑定
// increment = bindActionCreators(increment,store.dispatch)
// increment = bindActionCreators(decrement,store.dispatch)

//把多个action creator 绑定到一个对象上 是一个对象和dispatch绑定
let actions = {increment,decrement}
actions = bindActionCreators(actions,store.dispatch)

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            number:store.getState().counter2.number
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={()=>actions.increment(2)}>+</button>
                <br />
                <button onClick={()=>actions.decrement(2)}>-</button>
            </div>
        )
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().counter2.number
            })
        })   
    }
    //当组件卸载时  将不再渲染页面
    componentWillUnmount(){
        this.unsubscribe()
    }
}