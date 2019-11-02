import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import Footer from "./Footer"

import "./styles/todo-mvc.css"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {content:"AAA",complete:false},
                {content:"BBB",complete:true},
                {content:"CCC",complete:false},
            ],
            visibility:"completed"
        }
    }
  
  
    render(){
        return(
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}></AddTodo>
                <TodoList isSelectAll={this.isSelectAll()} selectAll={this.selectAll.bind(this)} selectTodo={this.selectTodo.bind(this)} todos={this.visibilityTodo()} deleteTodo={this.deleteTodo.bind(this)}></TodoList>
                <Footer visibility={this.state.visibility} selectCount={this.selectCount()} setVisibility={this.setVisibility.bind(this)}></Footer>
            </div>
        )
    }
    // 添加内容
    addTodo(todo){
        // console.log(todo)
        this.state.todos.push(todo)
        this.setState({
            todos:this.state.todos
        })
    }
    // 删除内容
    deleteTodo(todo){
        // console.log(todo)
        let index = this.state.todos.findIndex(t=>t===todo)
        // console.log(index)
        this.state.todos.splice(index,1)
        this.setState({
            todos:this.state.todos
        })
    }
    //实现单个选中
    selectTodo(todo){
        let index = this.state.todos.findIndex(t=>t===todo)
        // console.log(index)
        this.state.todos[index].complete = !this.state.todos[index].complete
        this.setState({
            todos:this.state.todos
        })
    }
    //全选
    selectAll(done){
        this.state.todos.forEach(todo=>todo.complete=done)
        this.setState({
            todos:this.state.todos
        })
    }
    //判断是否全选
    isSelectAll(){
        return this.state.todos.every(function(todo){
           return todo.complete
        })
    }
    //判断几个没有完成
    selectCount(){
       return this.state.todos.filter(todo=>!todo.complete).length
    }
    //可看见的
    visibilityTodo(){
        switch(this.state.visibility){
            case "all":
                return this.state.todos
            case "active":
                return this.state.todos.filter(todo=>!todo.complete)
            case "completed":
                return this.state.todos.filter(todo=>todo.complete)
            default:
                break;
        }
    }
    //改变visibility的值
    setVisibility(flag){
        this.state.visibility = flag
        this.setState({
            visibility:this.state.visibility
        })
    }

}

export default App;
