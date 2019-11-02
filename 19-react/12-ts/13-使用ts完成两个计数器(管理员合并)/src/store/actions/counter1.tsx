import { INCREMENT1,DECREMENT1 } from '../action-types'

export interface Increment{
    type:typeof INCREMENT1
}

export interface Decrement{
    type:typeof DECREMENT1
}

export type Counter1 = Increment|Decrement

export function increment():Increment{
    return {
        type:INCREMENT1
    }
}

export function decrement():Decrement{
    return {
        type:DECREMENT1
    }
}