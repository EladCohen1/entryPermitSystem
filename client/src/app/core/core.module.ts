import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../reducers/user.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, ReactiveFormsModule],
  exports: [MatCardModule, ReactiveFormsModule],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
