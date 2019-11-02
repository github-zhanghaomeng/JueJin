import { INCREMENT,DECREMENT } from '../action-types'

export interface Increment{
    type:typeof INCREMENT
}

export interface Decrement{
    type:typeof DECREMENT
}

export type Action = Increment|Decrement

export function increment():Increment{
    return {
        type:INCREMENT
    }
}

export function decrement():Decrement{
    return {
        type:DECREMENT
    }
}