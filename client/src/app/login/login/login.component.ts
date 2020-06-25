import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),
  });

  loginOnClick() {
    var userName = this.loginForm.get('userName').value;
    var passWord = this.loginForm.get('passWord').value;
    this.loginService
      .authUser(userName, passWord)
      .subscribe((data: Array<User>) => {
        debugger;
        if (data.length < 1) {
          // user doesnt exist
        } else {
          switch (data[0].userType) {
            case 'admin':
              console.log('admin');
              break;
            case 'guard':
              console.log('guard');
              break;
            case 'branch':
              console.log('branch');
              break;
            case 'guest':
              console.log('guest');
              break;
          }
        }
      });
  }
}
