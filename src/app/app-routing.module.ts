import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'student-management',
    loadChildren: () =>
      import(
        '../app/modules/student-management/student-management.module'
      ).then((m) => m.StudentManagementModule),
  },
  {
    path: 'attendence-management',
    loadChildren: () =>
      import(
        '../app/modules/attendence-management/attendence-management.module'
      ).then((m) => m.AttendenceManagementModule),
  },
  {
    path: 'exam-details',
    loadChildren: () =>
      import('./modules/exam-details/exam-details.module').then(
        (m) => m.ExamDetailsModule
      ),
  },
  {
    path: 'staff-management',
    loadChildren: () =>
      import('./modules/staff-management/staff-management.module').then(
        (m) => m.StaffManagementModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
