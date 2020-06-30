import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryPermitFormComponent } from './entry-permit-form/entry-permit-form.component';
import { RegisterComponent } from './register/register.component';
import { nonUsersRoutingModule } from './non-users-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [EntryPermitFormComponent, RegisterComponent],
  imports: [CommonModule, nonUsersRoutingModule, CoreModule.forRoot()],
})
export class NonUsersModule {}
