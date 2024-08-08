import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAttenndenceComponent } from './staff-attenndence.component';

describe('StaffAttenndenceComponent', () => {
  let component: StaffAttenndenceComponent;
  let fixture: ComponentFixture<StaffAttenndenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffAttenndenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffAttenndenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
