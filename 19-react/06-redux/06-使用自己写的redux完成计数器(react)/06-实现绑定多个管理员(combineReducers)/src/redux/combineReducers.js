
export default function combineReducers(reducers){
    return function(state={},actions){
        let nextState = {}
        for(let key in reducers){
            nextState[key] = reducers[key](state[key],actions)
        }
        return nextState
    }
}