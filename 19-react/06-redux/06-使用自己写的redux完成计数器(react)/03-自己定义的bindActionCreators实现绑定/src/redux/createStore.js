function createStore(reducer) {
    //定义订阅者
    let listeners = []
    let state;
    //需要使用一个方法 把state暴露出去
    function getState() {
        return state
    }
    //把dispatch放到store中 调用时通过store.dispatch()
    function dispatch(action) {
       state = reducer(state,action)     
        listeners.forEach(l=>l())
    }
  
    function subscribe(listener){
        listeners.push(listener)
        return function(){
            listeners = listeners.filter(l=>l !== listener)
        }
    }
    
    dispatch({ type : '@@redux/INIT'});
    return {
        getState,
        dispatch,
        subscribe
    }
}

export default createStore