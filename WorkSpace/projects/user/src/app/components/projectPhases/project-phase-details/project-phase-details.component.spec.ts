import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPhaseDetailsComponent } from './project-phase-details.component';

describe('ProjectPhaseDetailsComponent', () => {
  let component: ProjectPhaseDetailsComponent;
  let fixture: ComponentFixture<ProjectPhaseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPhaseDetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectPhaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
