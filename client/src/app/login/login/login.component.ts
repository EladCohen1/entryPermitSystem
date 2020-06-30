import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

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
    this.loginService.authUser(userName, passWord);
  }
}
