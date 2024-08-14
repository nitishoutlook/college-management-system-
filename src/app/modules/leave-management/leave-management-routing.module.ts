import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementComponent } from './leave-management.component';
import { InternTeacherLeaveComponent } from './intern-teacher-leave/intern-teacher-leave.component';
import { StudentLeaveComponent } from './student-leave/student-leave.component';
import { TeacherLeaveComponent } from './teacher-leave/teacher-leave.component';
import { WorkingStaffLeaveComponent } from './working-staff-leave/working-staff-leave.component';

const routes: Routes = [
  {
    path: '',
    component: LeaveManagementComponent,
    children: [
      {
        path: 'intern-teacher-leave',
        component: InternTeacherLeaveComponent,
      },
      {
        path: 'student-leave',
        component: StudentLeaveComponent,
      },
      {
        path: 'teacher-leave',
        component: TeacherLeaveComponent,
      },
      {
        path: 'working-staff-leave',
        component: WorkingStaffLeaveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveManagementRoutingModule {}
