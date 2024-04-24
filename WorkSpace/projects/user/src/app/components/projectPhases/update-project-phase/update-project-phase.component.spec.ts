import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectPhaseComponent } from './update-project-phase.component';

describe('UpdateProjectPhaseComponent', () => {
  let component: UpdateProjectPhaseComponent;
  let fixture: ComponentFixture<UpdateProjectPhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProjectPhaseComponent]
    });
    fixture = TestBed.createComponent(UpdateProjectPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
