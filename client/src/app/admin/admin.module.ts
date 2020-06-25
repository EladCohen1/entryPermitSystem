import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';

@NgModule({
  declarations: [AdminShellComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
