import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMigrationComponent } from './student-migration.component';

describe('StudentMigrationComponent', () => {
  let component: StudentMigrationComponent;
  let fixture: ComponentFixture<StudentMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMigrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
