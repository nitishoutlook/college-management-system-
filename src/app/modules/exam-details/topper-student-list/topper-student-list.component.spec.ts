import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopperStudentListComponent } from './topper-student-list.component';

describe('TopperStudentListComponent', () => {
  let component: TopperStudentListComponent;
  let fixture: ComponentFixture<TopperStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopperStudentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopperStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
