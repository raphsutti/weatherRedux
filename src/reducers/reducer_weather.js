import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // to return new instance of state
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ];
  }
  return state;
}