import { Component } from '@angular/core';

@Component({
  selector: 'app-attendence-management',
  templateUrl: './attendence-management.component.html',
  styleUrl: './attendence-management.component.scss',
})
export class AttendenceManagementComponent {
  public routeObj = [
    {
      department_name: 'Guest Visitor Attendence',
      action: 'Attendence_related',
      link: 'guest-visitor-attendence',
    },
    {
      department_name: 'Staff Attendence',
      action: 'Attendence_related',
      link: 'staff-attenndence',
    },
    {
      department_name: 'Student Attendence',
      action: 'Attendence_related',
      link: 'students-attendence',
    },
    {
      department_name: 'Teacher Attendence',
      action: 'Attendence_related',
      link: 'teacher-attendance',
    },
  ];
}
