import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhaseItemComponent } from './update-phase-item.component';

describe('UpdatePhaseItemComponent', () => {
  let component: UpdatePhaseItemComponent;
  let fixture: ComponentFixture<UpdatePhaseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePhaseItemComponent]
    });
    fixture = TestBed.createComponent(UpdatePhaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
