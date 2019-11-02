import React,{Component} from "react"
import PropTypes from 'prop-types'

export default class Todo extends Component{
    render(){
       return(
        <li className={this.props.todo.complete ? "todo completed" : "todo"}>
             <div className="view">
                <input type="checkbox" checked={this.props.todo.complete} onChange={()=>this.props.selectTodo(this.props.todo)}/>
                <label>{this.props.todo.content}</label>
                <button className="destroy" onClick={this.f1.bind(this)}></button>
                <input type="text" ref='ipt' style={{display:"none"}}  className="edit" />
             </div>
        </li>
       )
    }
    f1(){
        this.props.deleteTodo(this.props.todo)
    }
}

Todo.propTypes = {
    todo:PropTypes.object.isRequired,
    selectTodo:PropTypes.func.isRequired
}

