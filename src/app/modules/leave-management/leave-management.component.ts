import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrl: './leave-management.component.scss',
})
export class LeaveManagementComponent {
  public routeObj = [
    {
      department_name: 'Teacher Leave',
      action: 'teacher-leave_related',
      link: 'teacher-leave',
    },
    {
      department_name: 'Student Leave',
      action: 'student-leave_related',
      link: 'student-leave',
    },
    {
      department_name: 'working Staff Leave',
      action: 'working-staff-leave_related',
      link: 'working-staff-leave',
    },
    {
      department_name: 'Intern Teacher Leave',
      action: 'internTeacher-leave_related',
      link: 'intern-teacher-leave',
    },
  ];
}
