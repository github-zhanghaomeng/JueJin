
function bindActionCreators(actionCreators,dispatch){
    return function(){
        return dispatch(actionCreators())
    }
}

export default function(actionCreators,dispatch){
    if(typeof actionCreators == 'function'){
        //是函数  只绑定一个action creator
        return bindActionCreators(actionCreators,dispatch)
    }else{
        //是对象  一次性绑定了多个action creator
        let boundActionCreators = {}
        for(let key in actionCreators){
            boundActionCreators[key] = bindActionCreators(actionCreators[key],dispatch)
        }
        return boundActionCreators
    }
}