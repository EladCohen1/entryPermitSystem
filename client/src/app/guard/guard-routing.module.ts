import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardShellComponent } from './guard-shell/guard-shell.component';

const routes: Routes = [
  { path: '', component: GuardShellComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardRoutingModule {}
