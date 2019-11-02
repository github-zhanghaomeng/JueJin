import * as types from '../action-types'
export default function counter2(state = { number: 0 }, action) {
    switch (action.type) {
        case types.ADD2:
            return { number: state.number + 1 }
        case types.SUB2:
            return { number: state.number - 1 }
        default:
            return state
    }
}