import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { GuestVisitorAttendenceComponent } from './guest-visitor-attendence/guest-visitor-attendence.component';
import { StaffAttenndenceComponent } from './staff-attenndence/staff-attenndence.component';
import { AttendenceManagementComponent } from './attendence-management.component';
import { StudentsAttendenceComponent } from './students-attendence/students-attendence.component';

const routes: Routes = [
  {
    path: '',
    component: AttendenceManagementComponent,
    children: [
      {
        path: 'guest-visitor-attendence',
        component: GuestVisitorAttendenceComponent,
      },
      {
        path: 'staff-attenndence',
        component: StaffAttenndenceComponent,
      },
      {
        path: 'students-attendence',
        component: StudentsAttendenceComponent,
      },
      {
        path: 'teacher-attendance',
        component: TeacherAttendanceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendenceManagementRoutingModule {}
