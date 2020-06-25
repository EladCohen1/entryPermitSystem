import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchRoutingModule } from './branch-routing.module';
import { BranchShellComponent } from './branch-shell/branch-shell.component';

@NgModule({
  declarations: [BranchShellComponent],
  imports: [CommonModule, BranchRoutingModule],
})
export class BranchModule {}
