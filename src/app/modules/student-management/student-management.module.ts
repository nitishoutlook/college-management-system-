import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { StudentAddmissionComponent } from './student-addmission/student-addmission.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentMigrationComponent } from './student-migration/student-migration.component';
import { StudentManagementComponent } from './student-management.component';


@NgModule({
  declarations: [
    StudentAddmissionComponent,
    StudentTableComponent,
    StudentMigrationComponent,
    StudentManagementComponent
  ],
  imports: [
    CommonModule,
    StudentManagementRoutingModule
  ]
})
export class StudentManagementModule { }
