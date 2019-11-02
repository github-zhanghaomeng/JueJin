import React,{Component} from 'react'
import { createBrowserHistory } from 'history'
//生成history
let history = createBrowserHistory({
    forceRefresh:true //设置强制刷新 默认为false
})
class Home extends Component{
    render(){
        return(
            <div>
                <h2>商品详情页面{this.props.match.params.id}</h2>
                {/* <button onClick={()=>history.go(-1)}>返回</button> */}
                {/* <button onClick={()=>history.goBack()}>返回</button> */}
                {/* 这时不会跳转 只有刷新页面后才实现跳转 */}
                {/* 可以在创建history时给它配置强制刷新就可以了 */}
                <button onClick={()=>history.push('/')}>跳转到首页面</button>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}

export default Home