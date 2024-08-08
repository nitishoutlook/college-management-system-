import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamDetailsComponent } from './exam-details.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { ExamSechduleComponent } from './exam-sechdule/exam-sechdule.component';
import { PreviousPaperComponent } from './previous-paper/previous-paper.component';
import { TopperStudentListComponent } from './topper-student-list/topper-student-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExamDetailsComponent,
    children: [
      {
        path: 'exam-results',
        component: ExamResultsComponent,
      },
      {
        path: 'exam-sechdule',
        component: ExamSechduleComponent,
      },
      {
        path: 'previous-paper',
        component: PreviousPaperComponent,
      },
      {
        path: 'topper-student-list',
        component: TopperStudentListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamDetailsRoutingModule {}
