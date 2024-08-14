import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternTeacherLeaveComponent } from './intern-teacher-leave.component';

describe('InternTeacherLeaveComponent', () => {
  let component: InternTeacherLeaveComponent;
  let fixture: ComponentFixture<InternTeacherLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternTeacherLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternTeacherLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
