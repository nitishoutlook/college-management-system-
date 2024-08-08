import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalMenuComponent } from './internal-menu.component';

describe('InternalMenuComponent', () => {
  let component: InternalMenuComponent;
  let fixture: ComponentFixture<InternalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
