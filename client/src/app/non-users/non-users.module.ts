import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryPermitFormComponent } from './entry-permit-form/entry-permit-form.component';
import { RegisterComponent } from './register/register.component';
import { nonUsersRoutingModule } from './non-users-routing.module';
import { CoreModule } from '../core/core.module';
import { NonUsersShellComponent } from './non-users-shell/non-users-shell.component';

@NgModule({
  declarations: [EntryPermitFormComponent, RegisterComponent, NonUsersShellComponent],
  imports: [CommonModule, nonUsersRoutingModule, CoreModule.forRoot()],
})
export class NonUsersModule {}
