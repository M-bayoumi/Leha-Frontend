import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhaseItemComponent } from './add-phase-item.component';

describe('AddPhaseItemComponent', () => {
  let component: AddPhaseItemComponent;
  let fixture: ComponentFixture<AddPhaseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPhaseItemComponent]
    });
    fixture = TestBed.createComponent(AddPhaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
