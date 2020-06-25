import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

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
        if (data.length < 1) {
          // user doesnt exist
        } else {
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
}
