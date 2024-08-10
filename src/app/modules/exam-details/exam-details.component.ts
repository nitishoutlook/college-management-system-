import { Component } from '@angular/core';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrl: './exam-details.component.scss',
})
export class ExamDetailsComponent {
  public routeObj = [
    {
      department_name: 'Exam Result',
      action: 'Exam_related',
      link: 'exam-results',
    },
    {
      department_name: 'Exam Sechdule',
      action: 'Exam_related',
      link: 'exam-sechdule',
    },
    {
      department_name: 'Previous Paper',
      action: 'Exam_related',
      link: 'previous-paper',
    },
    {
      department_name: 'Topper St. List',
      action: 'Exam_related',
      link: 'topper-student-list',
    },
  ];
}
