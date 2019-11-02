import React,{Component} from "react"


export default class AddTodo extends Component{
    render(){
       return(
        <header  className="header">
        <h1>todos</h1>
        <input type="text" className="new-todo" onKeyUp={this.handleKeyUp.bind(this)} placeholder="what need to be done?" ></input>
    </header>
       )
    }
   handleKeyUp(e){
       let content = e.target.value
       if(!content) return
       if(e.keyCode === 13){
        // console.log(content)
        this.props.addTodo({content,complete:false})
        e.target.value = ''
       }

   }
}

