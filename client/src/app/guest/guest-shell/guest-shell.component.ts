import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-shell',
  templateUrl: './guest-shell.component.html',
  styleUrls: ['./guest-shell.component.scss'],
})
export class GuestShellComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
