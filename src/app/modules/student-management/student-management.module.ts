import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { StudentAddmissionComponent } from './student-addmission/student-addmission.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentMigrationComponent } from './student-migration/student-migration.component';
import { StudentManagementComponent } from './student-management.component';
import { SubMenuComponent } from '../../shared/components/sub-menu/sub-menu.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    StudentAddmissionComponent,
    StudentTableComponent,
    StudentMigrationComponent,
    StudentManagementComponent,
    SubMenuComponent,
  ],
  imports: [CommonModule, StudentManagementRoutingModule, MaterialModule],
})
export class StudentManagementModule {}
