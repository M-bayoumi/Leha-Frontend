import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectPhaseComponent } from './add-project-phase.component';

describe('AddProjectPhaseComponent', () => {
  let component: AddProjectPhaseComponent;
  let fixture: ComponentFixture<AddProjectPhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProjectPhaseComponent]
    });
    fixture = TestBed.createComponent(AddProjectPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
