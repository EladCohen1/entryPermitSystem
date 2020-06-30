import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'guard',
    loadChildren: () =>
      import('./guard/guard.module').then((m) => m.GuardModule),
  },
  {
    path: 'branch',
    loadChildren: () =>
      import('./branch/branch.module').then((m) => m.BranchModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'non-users',
    loadChildren: () =>
      import('./non-users/non-users.module').then((m) => m.NonUsersModule),
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
