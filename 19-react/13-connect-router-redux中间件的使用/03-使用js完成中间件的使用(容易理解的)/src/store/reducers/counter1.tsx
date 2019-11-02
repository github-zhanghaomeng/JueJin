import { INCREMENT1, DECREMENT1 } from "../action-types";

import {State} from '../types/State'
import {Counter1} from '../actions/counter1'
export default function(state:State = { number: 0 }, actions:Counter1):State{
  switch (actions.type) {
    case INCREMENT1:
      return { number: state.number + 1 };
    case DECREMENT1:
      return { number: state.number - 1 };
    default:
        return state
  }
}
