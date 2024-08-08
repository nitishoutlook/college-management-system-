import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternTeacherDetailsComponent } from './intern-teacher-details.component';

describe('InternTeacherDetailsComponent', () => {
  let component: InternTeacherDetailsComponent;
  let fixture: ComponentFixture<InternTeacherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternTeacherDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternTeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
