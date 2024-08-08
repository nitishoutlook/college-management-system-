import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestVisitorAttendenceComponent } from './guest-visitor-attendence.component';

describe('GuestVisitorAttendenceComponent', () => {
  let component: GuestVisitorAttendenceComponent;
  let fixture: ComponentFixture<GuestVisitorAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestVisitorAttendenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestVisitorAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
