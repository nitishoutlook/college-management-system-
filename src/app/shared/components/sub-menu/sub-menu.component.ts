import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss',
})
export class SubMenuComponent {
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
