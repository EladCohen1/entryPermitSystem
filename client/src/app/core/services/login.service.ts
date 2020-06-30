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
    return this.http
      .post(this.url + '/users/auth', {
        userName: userName,
        passWord: passWord,
      })
      .subscribe((data: Array<User>) => {
        if (data.length < 1) {
          // user doesnt exist
        } else {
          this.store.dispatch(new UserActions.ChangeUserType(data[0]));
          switch (data[0].userType) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'guard':
              this.router.navigate(['/guard']);
              break;
            case 'branch':
              this.router.navigate(['/branch']);
              break;
            case 'guest':
              this.router.navigate(['/guest']);
              break;
            default:
              this.router.navigate(['/login']);
              break;
          }
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
        if (data.userType != userType) {
          this.router.navigate([`/${data.userType}`]);
        }
      });
  }
}
