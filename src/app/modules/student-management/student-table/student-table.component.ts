import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss',
})
export class StudentTableComponent implements OnInit {
  studentData: any;

  constructor() {}
  ngOnInit(): void {
    this.studentData = [
      {
        registration: '1',
        name: 'Manish Kumar',
        birthDay: '05-01-2010',
        email: 'nitish@gmail.com',
        mobile: '9801012333',
        gender: 'Male',
        address: 'AP Colony',
        city: 'Gaya',
        pinCode: '823001',
        state: 'Bihar',
        country: 'India',
        course: 'CSE',
      },
    ];
  }
}
