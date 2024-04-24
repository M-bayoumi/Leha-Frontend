import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseItemDetailsComponent } from './phase-item-details.component';

describe('PhaseItemDetailsComponent', () => {
  let component: PhaseItemDetailsComponent;
  let fixture: ComponentFixture<PhaseItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhaseItemDetailsComponent]
    });
    fixture = TestBed.createComponent(PhaseItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
