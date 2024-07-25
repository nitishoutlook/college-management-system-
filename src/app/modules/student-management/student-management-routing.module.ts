import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentManagementComponent } from './student-management.component';
import { StudentAddmissionComponent } from './student-addmission/student-addmission.component';
import { StudentMigrationComponent } from './student-migration/student-migration.component';

const routes: Routes = [
  {
    path:'',
    component:StudentManagementComponent,
    children:[
       
      {
        path:"student-addmission",
        component:StudentAddmissionComponent
      },
      {
        path:'student-migration',
        component:StudentMigrationComponent
    
      }
      ]
  },

 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule { }
