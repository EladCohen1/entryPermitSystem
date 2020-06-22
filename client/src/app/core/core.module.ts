import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../reducers/user.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule],
  exports: [MatCardModule],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
