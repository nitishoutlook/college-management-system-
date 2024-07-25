import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  department = [
    {
      department_name: 'Student Admission',
      action: 'Student_Addmistion',
    },
    {
      department_name: 'Attendence system',
      action: 'Attendece_Addmistion',
    },
    {
      department_name: 'Student Admission',
      action: 'Student_Addmistion',
    },
    {
      department_name: 'Attendence system',
      action: 'Attendece_Addmistion',
    },
  ];

  getDetails(val: string) {
    console.log(val);
  }
}
