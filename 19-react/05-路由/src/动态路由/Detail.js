import React,{Component} from 'react'

class Detail extends Component{
    render(){
        return(
            <h2>商品详情页面{this.props.match.params.id}</h2>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}

export default Detail