import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppointmentsComponent } from './appointments/appointments.component';

import { MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MedicineComponent } from './medicine/medicine.component';
import { HistoriesComponent } from './histories/histories.component';

import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [UserComponent,
    AppointmentsComponent, 

    MedicineComponent, 
    HistoriesComponent, 

    PatientsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
    ],
})
export class UserModule {}

