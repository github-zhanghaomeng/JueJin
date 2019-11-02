import React, { Component } from "react"
import PropTypes from 'prop-types'
import Todo from "./Todo"

export default class TodoList extends Component {
    render() {
        return (
            <section className="main">
                <input type="checkbox" checked={this.props.isSelectAll} className="toggle-all" onChange={(e)=>this.props.selectAll(e.target.checked)} />
                <ul className="todo-list">
                    {this.props.todos.map((todo,index)=>
                        <Todo selectTodo={this.props.selectTodo} todo={todo} deleteTodo={this.props.deleteTodo} key={index}></Todo>
                    )}
                </ul>
            </section>
        )
    }
   
}

TodoList.propTypes = {
    todos:PropTypes.array.isRequired,
    selectTodo:PropTypes.func.isRequired,
    selectAll:PropTypes.func.isRequired,
    isSelectAll:PropTypes.bool.isRequired

}
