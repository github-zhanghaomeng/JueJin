
function createStore(reducer){
    let state
    let listeners = []
    function getState(){
        return state
    }

    function dispatch(action){
       state = reducer(state,action)
       listeners.forEach(l=>l())
    }

    function subscribe(listener){
        listeners.push(listener)
        return function(){
            listeners.filter(l=>l!==listener)
        }
    }
    dispatch({ type : '@@redux/INIT'})
    return{
        getState,
        dispatch,
        subscribe
    }
}

export default createStore