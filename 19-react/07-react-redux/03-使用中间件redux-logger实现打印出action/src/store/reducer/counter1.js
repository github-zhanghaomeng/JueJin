import * as types from '../action-types'

export default function counter1(state = { number: 99 }, action) {
    switch (action.type) {
        case types.ADD1:
            return { number: state.number + action.payload }
        case types.SUB1:
            return { number: state.number - action.payload }
        default:
            return state
    }
}