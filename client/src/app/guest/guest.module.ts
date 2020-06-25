import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestShellComponent } from './guest-shell/guest-shell.component';
import { CoreModule } from '../core/core.module';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  declarations: [GuestShellComponent],
  imports: [CommonModule, CoreModule.forRoot(), GuestRoutingModule],
})
export class GuestModule {}
