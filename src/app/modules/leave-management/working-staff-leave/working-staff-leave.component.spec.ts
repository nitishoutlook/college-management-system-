import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingStaffLeaveComponent } from './working-staff-leave.component';

describe('WorkingStaffLeaveComponent', () => {
  let component: WorkingStaffLeaveComponent;
  let fixture: ComponentFixture<WorkingStaffLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkingStaffLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingStaffLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
