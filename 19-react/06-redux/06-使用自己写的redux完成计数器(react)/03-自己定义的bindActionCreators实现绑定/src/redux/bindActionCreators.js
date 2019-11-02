
function bindActionCreators(actionCreators,dispatch){
    return function(){
        return dispatch(actionCreators())
    }
}

export default bindActionCreators