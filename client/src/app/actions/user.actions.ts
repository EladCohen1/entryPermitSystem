import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const CHANGE_USER_TYPE = '[STATE] CHANGE';

export class ChangeUserType implements Action {
  readonly type = CHANGE_USER_TYPE;

  constructor(public payload: User) {}
}

export type Actions = ChangeUserType;

// import { User } from 'src/app/models/user.model';
// import { Observable } from 'rxjs';
// import * as UserActions from '../../actions/user.actions';
// import { State } from 'src/app/models/state.model';

//private store: Store<State>

// this.store.dispatch(
//   new UserActions.ChangeUserType({ id: 1, userName: 'ddrr', passWord: 'asd', userType: 'admin' })
// );
// this.store
//   .select((state: State) => state.user)
//   .subscribe((data: User) => {
//     this.user = data;
//   });
