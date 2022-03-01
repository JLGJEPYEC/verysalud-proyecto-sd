import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [ RegisterComponent ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule
    ],
})
export class RegisterModule {}
