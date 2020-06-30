import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/models/state.model';
import * as UserActions from '../../actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<State>
  ) {}

  url: string = 'http://localhost:3000';

  authUser(userName: string, passWord: string) {
    this.http
      .post(this.url + '/users/auth', {
        userName: userName,
        passWord: passWord,
      })
      .subscribe((data: Array<User>) => {
        if (data.length < 1) {
          // user doesnt exist
        } else {
          this.store.dispatch(new UserActions.ChangeUserType(data[0]));
          this.checkUserPermission(data[0].userType);
        }
      });
  }

  checkUserPermission(userType) {
    this.store
      .select((state) => state.user)
      .subscribe((data: User) => {
        if (data.userType == null) {
          this.router.navigate([`/login`]);
        }
        this.router.navigate([`/${data.userType}`]);
      });
  }

  createUser(userName: string, passWord: string, id: number) {
    this.http
      .post(this.url + '/users/createUser', {
        userName: userName,
        passWord: passWord,
        id: id,
      })
      .subscribe((data: User) => {
        this.router.navigate(['/login']);
      });
  }
}
