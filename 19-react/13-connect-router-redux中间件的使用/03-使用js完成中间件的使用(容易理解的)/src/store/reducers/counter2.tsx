import { INCREMENT2, DECREMENT2 } from "../action-types";

import {State} from '../types/State'
import {Counter2} from '../actions/counter2'
export default function(state:State = { number: 0 }, actions:Counter2):State{
  switch (actions.type) {
    case INCREMENT2:
      return { number: state.number + 1 };
    case DECREMENT2:
      return { number: state.number - 1 };
    default:
        return state
  }
}
