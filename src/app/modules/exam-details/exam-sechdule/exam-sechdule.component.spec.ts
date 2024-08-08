import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSechduleComponent } from './exam-sechdule.component';

describe('ExamSechduleComponent', () => {
  let component: ExamSechduleComponent;
  let fixture: ComponentFixture<ExamSechduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamSechduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamSechduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
