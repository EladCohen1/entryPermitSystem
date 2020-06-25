import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../reducers/user.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, HttpClientModule],
  exports: [MatCardModule, ReactiveFormsModule, HttpClientModule],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
