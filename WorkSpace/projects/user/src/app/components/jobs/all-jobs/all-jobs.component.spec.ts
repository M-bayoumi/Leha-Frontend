import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobsComponent } from './all-jobs.component';

describe('AllJobsComponent', () => {
  let component: AllJobsComponent;
  let fixture: ComponentFixture<AllJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllJobsComponent]
    });
    fixture = TestBed.createComponent(AllJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
