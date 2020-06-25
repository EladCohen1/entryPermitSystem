import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestShellComponent } from './guest-shell/guest-shell.component';

const routes: Routes = [
  { path: '', component: GuestShellComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
