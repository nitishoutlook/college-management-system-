import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { StudentAddmissionComponent } from './student-addmission/student-addmission.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentMigrationComponent } from './student-migration/student-migration.component';
import { StudentManagementComponent } from './student-management.component';

import { MaterialModule } from '../../shared/material.module';
import { InternalMenuComponent } from '../../shared/components/internal-menu/internal-menu.component';
import { BreadCrumbComponent } from '../../shared/components/bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    StudentAddmissionComponent,
    StudentTableComponent,
    StudentMigrationComponent,
    StudentManagementComponent,
  ],
  imports: [
    CommonModule,
    StudentManagementRoutingModule,
    MaterialModule,
    InternalMenuComponent,
    BreadCrumbComponent,
  ],
})
export class StudentManagementModule {}
