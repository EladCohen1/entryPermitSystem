import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuardRoutingModule } from './guard-routing.module';
import { GuardShellComponent } from './guard-shell/guard-shell.component';

@NgModule({
  declarations: [GuardShellComponent],
  imports: [CommonModule, GuardRoutingModule],
})
export class GuardModule {}
