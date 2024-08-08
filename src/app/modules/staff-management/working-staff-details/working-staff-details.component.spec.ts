import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingStaffDetailsComponent } from './working-staff-details.component';

describe('WorkingStaffDetailsComponent', () => {
  let component: WorkingStaffDetailsComponent;
  let fixture: ComponentFixture<WorkingStaffDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkingStaffDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkingStaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
