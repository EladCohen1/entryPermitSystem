import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
  });

  registerOnClick() {
    var userName = this.registerForm.get('userName').value;
    var passWord = this.registerForm.get('passWord').value;
    var id = this.registerForm.get('id').value;
    this.loginService.createUser(userName, passWord, id);
  }
}
