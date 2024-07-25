import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './modules/student-management/student-table/student-table.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'student-management',
    loadChildren:()=> import('../app/modules/student-management/student-management.module').then(m=>m.StudentManagementModule)
  },
  {
    path:'attendence-management',
    loadChildren:()=>import('../app/modules/attendence-management/attendence-management.module').then(m=>m.AttendenceManagementModule)
  },
  {
    path:'student-table',
    component:StudentTableComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
