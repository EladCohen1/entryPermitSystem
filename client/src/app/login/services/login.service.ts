import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000';

  authUser(userName: string, passWord: string) {
    return this.http.post(this.url + '/users/auth', {
      userName: userName,
      passWord: passWord,
    });
  }
}
