import React,{Component} from 'react'
import PropTypes from 'prop-types'

// 子中接收到数据后，能改变数据吗？
// vue中可以改变，但是不推荐
// vue中数据源：data props    data是每一个组件都有的，props是别人传递的数据
// props是别人传递的，人家不建议你去修改数据   如果你要经常修改数据，把数据定义到data中

// react中的数据源也是有两个：state  props
// 尽量使用props  在react中获取数据推荐在上层组件中获取， 然后传递给子组件，子组件通过this.props接收实使用
class Children extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <p>子组件</p>
                {/* 在子组件中直接使用this.props.age就可以接受父组件传入的数据 */}
                <p>{this.props.age}</p>
            </>
        )
    }
   

}
// 检验传入的数据是不是number类型的
Children.propTypes={
    age:PropTypes.number 
}
//不传入数据的时候 默认为111
Children.defaultProps = {
    age:111
}

export default Children

// state  vs  props ?
// state是组件内部定义的数据  props是别人传递的数据  
// state在组件内部初始化，自身可以修改数据（this.setState），别人是不能修改，可以把state当前局部的，只能被自身使用的数据源，当state改变了，那么会导致组件重新渲染
// props主要是父传给子的数据 ，在react中子中是没有办法修改props接收过来的数据 
// 如果要修改一个别人传递过来的一个props，只能再让别人重新传递过来一个新的Porps

// 尽可能少的使用state，尽可能多的使用props 

// 根据state可以把组件分成两类：有状态组件（有state）   无状态组件（无state）

// 有状态组件通常使用class来定义  
// 无状态组件通常使用function来定义