import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from '../actions/user.actions';

const initState: User = {
  id: null,
  name: null,
  email: null,
};

export function userReducer(
  state: User = initState,
  action: UserActions.Actions
) {
  switch (action.type) {
    case UserActions.CHANGE_USER_TYPE:
      var newState: User = Object.assign({}, state);
      newState = action.payload;
      return newState;
    default:
      return state;
  }
}
