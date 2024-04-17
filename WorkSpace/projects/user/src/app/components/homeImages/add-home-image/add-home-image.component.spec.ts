import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeImageComponent } from './add-home-image.component';

describe('AddHomeImageComponent', () => {
  let component: AddHomeImageComponent;
  let fixture: ComponentFixture<AddHomeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHomeImageComponent]
    });
    fixture = TestBed.createComponent(AddHomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
