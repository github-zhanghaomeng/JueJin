
使用...args 
在actions.increment(2)添加一个2 这个是绑定后的actioncreators 也就是
increment = bindActionCreators(increment,store.dispatch) 括号里面的increment是没有绑定的actioncreators 也就是下面的


想想怎么把2传到没有绑定的actioncreators 也就是 
function increment(){
	return{
		type:types.ADD
	}

}
实现
function increment(payload){
	return{
		type:types.ADD,
		payload
	}

}
这样在管理员那里就可以写
return {number:state.number+action.payload}
而不是
return {number:state.number+1}

实现的方法 在bindActionCreators.js中 使用...args
function bindActionCreators(actionCreators,dispatch){
    return function(...args){
        return dispatch(actionCreators(...args))
    }
}