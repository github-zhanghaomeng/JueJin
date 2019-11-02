<button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
<button onClick={()=>store.dispatch({type:types.SUB})}>-</button>

上面的代码可以简化：
    1，先简化action {type:types.ADD}  ----> action creator 是一个函数

定义action creator

//action creator 是一个函数 返回一个对象(action)
function increment(){
    return {
        type:types.ADD
    }
}
function decrement(){
    return{
        type:types.SUB
    }
}

在下面就可以这样写
<button onClick={()=>store.dispatch(increment())}>+</button>
<button onClick={()=>store.dispatch(decrement())}>-</button>