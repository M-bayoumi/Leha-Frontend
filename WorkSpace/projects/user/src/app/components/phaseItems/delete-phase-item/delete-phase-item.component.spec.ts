import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePhaseItemComponent } from './delete-phase-item.component';

describe('DeletePhaseItemComponent', () => {
  let component: DeletePhaseItemComponent;
  let fixture: ComponentFixture<DeletePhaseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePhaseItemComponent]
    });
    fixture = TestBed.createComponent(DeletePhaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
