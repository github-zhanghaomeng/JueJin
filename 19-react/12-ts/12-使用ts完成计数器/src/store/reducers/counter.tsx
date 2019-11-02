import { INCREMENT, DECREMENT } from "../action-types";

import {State} from '../types/State'
import {Actions} from '../actions'
export default function(state:State = { number: 0 }, actions:Actions):State{
  switch (actions.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
        return state
  }
}
