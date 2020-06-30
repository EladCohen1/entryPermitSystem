import { Component, OnInit } from '@angular/core';
import * as UserActions from '../../actions/user.actions';
import { State } from 'src/app/models/state.model';
import { Store } from '@ngrx/store';
import { state } from '@angular/animations';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-admin-shell',
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss'],
})
export class AdminShellComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkUserPermission();
  }
}
