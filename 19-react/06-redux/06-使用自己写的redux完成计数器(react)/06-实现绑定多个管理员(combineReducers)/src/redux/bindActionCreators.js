
function bindActionCreators(actionCreators,dispatch){
    return function(...args){
        return dispatch(actionCreators(...args))
    }
}

export default function(actionCreators,dispatch){
    if(typeof actionCreators == 'function'){
        bindActionCreators(actionCreators,dispatch)
    }else{
        let boundActionCreators = {}
        for(let key in actionCreators){
            boundActionCreators[key] = bindActionCreators(actionCreators[key],dispatch)

        }
        return boundActionCreators
    }
}