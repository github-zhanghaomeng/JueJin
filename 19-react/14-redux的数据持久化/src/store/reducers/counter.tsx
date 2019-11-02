import { INCREMENT, DECREMENT } from "../action-types";

import {State} from '../types/State'
import {Action} from '../actions/counter'
export default function(state:State = { number: 0 }, actions:Action):State{
  switch (actions.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
        return state
  }
}
