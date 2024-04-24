import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectPhasesComponent } from './all-project-phases.component';

describe('AllProjectPhasesComponent', () => {
  let component: AllProjectPhasesComponent;
  let fixture: ComponentFixture<AllProjectPhasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProjectPhasesComponent]
    });
    fixture = TestBed.createComponent(AllProjectPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
