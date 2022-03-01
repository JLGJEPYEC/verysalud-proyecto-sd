import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        {
        path: 'register',
        component: RegisterComponent,
        },
        {
          path: 'users',
          component: UsersComponent,
        },
        {
          path: 'user-detail',
          component: UserDetailComponent,
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
