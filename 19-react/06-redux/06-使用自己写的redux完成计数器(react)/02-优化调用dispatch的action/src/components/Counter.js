import React,{Component} from 'react'
import store from '../store'
import * as types from '../store/action-types'

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
                <button onClick={()=>store.dispatch(increment())}>+</button>
                <br />
                <button onClick={()=>store.dispatch(decrement())}>-</button>
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