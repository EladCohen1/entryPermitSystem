import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-entry-permit-form',
  templateUrl: './entry-permit-form.component.html',
  styleUrls: ['./entry-permit-form.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms'),
      ]),
      transition(':leave', [
        animate('500ms', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class EntryPermitFormComponent implements OnInit {
  showEntryPermitForm: boolean = true;
  isLinear: boolean = true;
  guestData: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
  });
  otherData: FormGroup = new FormGroup({
    area: new FormControl('', Validators.required),
  });
  checkRequestForm: FormGroup = new FormGroup({
    area: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  outClick(path) {
    this.showEntryPermitForm = false;
    if (path !== '') {
      setTimeout(() => {
        this.router.navigate([path]);
      }, 500);
    }
  }

  checkStatus() {
    // get status
    var status = 'אושר';
    this.snackBar.open('סטטוס - ' + status, 'סגור', {
      duration: 10 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  ngOnInit() {}
}
