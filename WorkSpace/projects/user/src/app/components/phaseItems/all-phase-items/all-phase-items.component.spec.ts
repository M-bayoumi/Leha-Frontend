import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhaseItemsComponent } from './all-phase-items.component';

describe('AllPhaseItemsComponent', () => {
  let component: AllPhaseItemsComponent;
  let fixture: ComponentFixture<AllPhaseItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPhaseItemsComponent]
    });
    fixture = TestBed.createComponent(AllPhaseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
