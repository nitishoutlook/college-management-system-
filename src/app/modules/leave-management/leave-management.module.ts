import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveManagementRoutingModule } from './leave-management-routing.module';
import { LeaveManagementComponent } from './leave-management.component';
import { StudentLeaveComponent } from './student-leave/student-leave.component';
import { TeacherLeaveComponent } from './teacher-leave/teacher-leave.component';
import { InternTeacherLeaveComponent } from './intern-teacher-leave/intern-teacher-leave.component';
import { WorkingStaffLeaveComponent } from './working-staff-leave/working-staff-leave.component';
import { MaterialModule } from '../../shared/material.module';
import { InternalMenuComponent } from '../../shared/components/internal-menu/internal-menu.component';
import { BreadCrumbComponent } from '../../shared/components/bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    LeaveManagementComponent,
    StudentLeaveComponent,
    TeacherLeaveComponent,
    InternTeacherLeaveComponent,
    WorkingStaffLeaveComponent,
  ],
  imports: [
    CommonModule,
    LeaveManagementRoutingModule,
    MaterialModule,
    InternalMenuComponent,
    BreadCrumbComponent,
  ],
})
export class LeaveManagementModule {}
