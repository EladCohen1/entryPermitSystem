import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchShellComponent } from './branch-shell/branch-shell.component';

const routes: Routes = [
  { path: '', component: BranchShellComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
