import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-guard-shell',
  templateUrl: './guard-shell.component.html',
  styleUrls: ['./guard-shell.component.scss'],
})
export class GuardShellComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkUserPermission();
  }
}
