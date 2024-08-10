import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.scss'
})
export class StaffManagementComponent {

  public routeObj = [
    {
      department_name: 'Teacher details ',
      action: 'Admission_related',
      link: 'intern-teacher-details',
    },
    {
      department_name: 'Exam details',
      action: 'Migration_related',
      link: 'teacher-details',
    },
    {
      department_name: 'Student Table',
      action: 'Table_related',
      link: 'student-table',
    },
  ];
}
