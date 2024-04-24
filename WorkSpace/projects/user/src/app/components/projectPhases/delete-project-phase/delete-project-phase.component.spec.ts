import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectPhaseComponent } from './delete-project-phase.component';

describe('DeleteProjectPhaseComponent', () => {
  let component: DeleteProjectPhaseComponent;
  let fixture: ComponentFixture<DeleteProjectPhaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProjectPhaseComponent]
    });
    fixture = TestBed.createComponent(DeleteProjectPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
