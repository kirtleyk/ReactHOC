
import { Types } from './types';

export function authenticate(isLoggedIn) {
  return {
    type: Types.CHANGE_AUTH,
    payload: isLoggedIn
  }
}