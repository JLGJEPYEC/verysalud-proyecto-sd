import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HistoriesComponent } from './histories/histories.component';
import { AppointmentsComponent } from './appointments/appointments.component';


import { MedicineComponent } from './medicine/medicine.component';
import { UserDetailComponent } from '../admin/users/user-detail/user-detail.component';

import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
            path: 'histories',
            component: HistoriesComponent,
            },
            {
            path: 'appointments',
            component: AppointmentsComponent,
            },


            {
            path: 'medicine',
            component: MedicineComponent,
            },
           
            {
            path: 'user-detail',
            component: UserDetailComponent,
            },
            
            {
            path: 'patients',
            component: PatientsComponent,
            },
          ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
