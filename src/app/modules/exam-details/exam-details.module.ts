import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamDetailsRoutingModule } from './exam-details-routing.module';
import { ExamDetailsComponent } from './exam-details.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { ExamSechduleComponent } from './exam-sechdule/exam-sechdule.component';
import { PreviousPaperComponent } from './previous-paper/previous-paper.component';
import { TopperStudentListComponent } from './topper-student-list/topper-student-list.component';


@NgModule({
  declarations: [
    ExamDetailsComponent,
    ExamResultsComponent,
    ExamSechduleComponent,
    PreviousPaperComponent,
    TopperStudentListComponent
  ],
  imports: [
    CommonModule,
    ExamDetailsRoutingModule
  ]
})
export class ExamDetailsModule { }
