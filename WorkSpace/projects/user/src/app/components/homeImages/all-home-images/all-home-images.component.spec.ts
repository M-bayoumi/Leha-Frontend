import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHomeImagesComponent } from './all-home-images.component';

describe('AllHomeImagesComponent', () => {
  let component: AllHomeImagesComponent;
  let fixture: ComponentFixture<AllHomeImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHomeImagesComponent]
    });
    fixture = TestBed.createComponent(AllHomeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
