import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [ UsersComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule
    ],
})
export class UsersModule {}
