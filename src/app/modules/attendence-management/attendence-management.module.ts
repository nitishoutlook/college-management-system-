import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendenceManagementRoutingModule } from './attendence-management-routing.module';
import { StudentsAttendenceComponent } from './students-attendence/students-attendence.component';
import { StaffAttenndenceComponent } from './staff-attenndence/staff-attenndence.component';
import { GuestVisitorAttendenceComponent } from './guest-visitor-attendence/guest-visitor-attendence.component';


@NgModule({
  declarations: [
    StudentsAttendenceComponent,
    StaffAttenndenceComponent,
    GuestVisitorAttendenceComponent
  ],
  imports: [
    CommonModule,
    AttendenceManagementRoutingModule
  ]
})
export class AttendenceManagementModule { }
