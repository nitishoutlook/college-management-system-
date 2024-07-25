import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nave',
  templateUrl: './side-nave.component.html',
  styleUrl: './side-nave.component.scss'
})
export class SideNaveComponent {
  public routeLinks = [
    // { link: "about", name: "About", icon: "dashboard" },
    // { link: "locations", name: "Locations", icon: "account_balance" },

    {
      department_name: 'Student Mgmt',
      action: 'Student_related',
      link: "student-management",
    },
    {
      department_name: 'Attendence Mgmt',
      action: 'Attendece_related',
      link: "attendence-management",
    },
    {
      department_name: 'Exam Details',
      action: 'Exam_related',
      link: "exam-details",
    },
    {
      department_name: 'Staff Mgmt',
      action: 'staff_related',
      link: "staff-management",
    },
  ];

  
}
