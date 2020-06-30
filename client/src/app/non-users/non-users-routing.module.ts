import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryPermitFormComponent } from './entry-permit-form/entry-permit-form.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'entryPermitForm', component: EntryPermitFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class nonUsersRoutingModule {}
