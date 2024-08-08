import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffManagementComponent } from './staff-management.component';
import { InternTeacherDetailsComponent } from './intern-teacher-details/intern-teacher-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { WorkingStaffDetailsComponent } from './working-staff-details/working-staff-details.component';

const routes: Routes = [
  {
    path: '',
    component: StaffManagementComponent,
    children: [
      {
        path: 'intern-teacher-details',
        component: InternTeacherDetailsComponent,
      },
      {
        path: 'teacher-details',
        component: TeacherDetailsComponent,
      },
      {
        path: 'working-staff-details',
        component: WorkingStaffDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffManagementRoutingModule {}
