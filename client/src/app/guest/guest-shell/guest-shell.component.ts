import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-guest-shell',
  templateUrl: './guest-shell.component.html',
  styleUrls: ['./guest-shell.component.scss'],
})
export class GuestShellComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkUserPermission('guest');
  }
}
