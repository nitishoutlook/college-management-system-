import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.scss',
})
export class StaffManagementComponent {
  public routeObj = [
    {
      department_name: 'Intern Teacher',
      action: 'Staff_related',
      link: 'intern-teacher-details',
    },
    {
      department_name: 'Teacher Details',
      action: 'Staff_related',
      link: 'teacher-details',
    },
    {
      department_name: 'Working Staff',
      action: 'Staff_related',
      link: 'working-staff-details',
    },
  ];
}
