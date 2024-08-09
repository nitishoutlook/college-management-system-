import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendenceManagementRoutingModule } from './attendence-management-routing.module';
import { StudentsAttendenceComponent } from './students-attendence/students-attendence.component';
import { StaffAttenndenceComponent } from './staff-attenndence/staff-attenndence.component';
import { GuestVisitorAttendenceComponent } from './guest-visitor-attendence/guest-visitor-attendence.component';
import { AttendenceManagementComponent } from './attendence-management.component';
import { MaterialModule } from '../../shared/material.module';
import { InternalMenuComponent } from '../../shared/components/internal-menu/internal-menu.component';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';

@NgModule({
  declarations: [
    StudentsAttendenceComponent,
    StaffAttenndenceComponent,
    GuestVisitorAttendenceComponent,
    TeacherAttendanceComponent,
    AttendenceManagementComponent,
  ],
  imports: [
    CommonModule,
    AttendenceManagementRoutingModule,
    MaterialModule,
    InternalMenuComponent,
  ],
})
export class AttendenceManagementModule {}
