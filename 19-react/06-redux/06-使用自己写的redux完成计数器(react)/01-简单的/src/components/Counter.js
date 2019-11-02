import React,{Component} from 'react'
import store from '../store'
import * as types from '../store/action-types'


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
                <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
                <br />
                <button onClick={()=>store.dispatch({type:types.SUB})}>-</button>
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