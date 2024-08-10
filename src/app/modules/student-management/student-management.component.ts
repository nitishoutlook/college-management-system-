import { Component } from '@angular/core';
interface routerDataModel{
  department_name:string,
  action:string,
  link:string
}
@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.scss'
})
export class StudentManagementComponent {
  
   routeObj:routerDataModel[] = [
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
