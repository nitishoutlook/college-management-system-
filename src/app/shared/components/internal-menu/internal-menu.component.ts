import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-internal-menu',
  standalone: true,
  imports: [RouterModule,CommonModule,MaterialModule],
  templateUrl: './internal-menu.component.html',
  styleUrl: './internal-menu.component.scss'
})
export class InternalMenuComponent {
 public routeLinks = [
    {
      department_name: 'Student Admission',
      action: 'Admission_related',
      link: 'student-addmission',
    },
    {
      department_name: 'Student Migration',
      action: 'Migration_related',
      link: 'student-migration',
    },
    {
      department_name: 'Student Table',
      action: 'Table_related',
      link: 'student-table',
    },
  ];
}
