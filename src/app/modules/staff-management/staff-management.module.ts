import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffManagementComponent } from './staff-management.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { InternTeacherDetailsComponent } from './intern-teacher-details/intern-teacher-details.component';
import { WorkingStaffDetailsComponent } from './working-staff-details/working-staff-details.component';
import { MaterialModule } from '../../shared/material.module';
import { InternalMenuComponent } from '../../shared/components/internal-menu/internal-menu.component';



@NgModule({
  declarations: [
    StaffManagementComponent,
    TeacherDetailsComponent,
    InternTeacherDetailsComponent,
    WorkingStaffDetailsComponent,
    
    
  ],
  imports: [CommonModule, StaffManagementRoutingModule,MaterialModule,InternalMenuComponent],
})
export class StaffManagementModule {}
