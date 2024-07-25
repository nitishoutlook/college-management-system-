import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendenceManagementRoutingModule } from './attendence-management-routing.module';
import { StudentsAttendenceComponent } from './students-attendence/students-attendence.component';


@NgModule({
  declarations: [
    StudentsAttendenceComponent
  ],
  imports: [
    CommonModule,
    AttendenceManagementRoutingModule
  ]
})
export class AttendenceManagementModule { }
