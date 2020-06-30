import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-branch-shell',
  templateUrl: './branch-shell.component.html',
  styleUrls: ['./branch-shell.component.scss'],
})
export class BranchShellComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkUserPermission();
  }
}
