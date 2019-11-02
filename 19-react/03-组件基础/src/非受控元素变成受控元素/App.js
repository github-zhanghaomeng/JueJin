import React,{Component} from 'react'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'wangcai'
        }
    }
    render(){
        return(
            // 非受控的
            // <input></input>
            //只是简单的想获取input的value 对应componentDidMount
            // <input ref='ipt' value='hello' onChange={}></input>

            //变成受控的  类似vue中的v-model 对应发f1
            // onChange这个方法会在input框中的内容改变时自动触发
           <>
             <input value={this.state.name} onChange={this.f1.bind(this)}></input>
             <p>{this.state.name}</p>
           </>
        )
    }
    // 在所有的元素挂载到App上后会自动触发这个方法
    componentDidMount(){
        // console.log(this.refs.ipt) //<input value='hello'>
        // console.log(this.refs.ipt.value) //hello
    }
    f1(e){
        // console.log(this)
        // console.log(e.target.value)
        this.setState({
            name:e.target.value
        })
    }
}

export default App