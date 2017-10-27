import { Types } from '../actions/types';

export default function(state=false, action) {
  switch (action.type) {
    case Types.CHANGE_AUTH:
      return action.payload;
  }
  return state;
}