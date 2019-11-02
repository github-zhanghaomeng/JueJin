
<button onClick={()=>store.dispatch(increment())}>+</button>
<button onClick={()=>store.dispatch(decrement())}>-</button>

自己在redux中定义一个bindActionCreators.js 实现dispatch和action creators 的绑定

绑定之后就可以使用下面的写法

<button onClick={()=>increment()}>+</button>
<button onClick={()=>decrement()}>-</button>
