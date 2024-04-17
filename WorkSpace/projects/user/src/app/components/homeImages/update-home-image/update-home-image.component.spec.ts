import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHomeImageComponent } from './update-home-image.component';

describe('UpdateHomeImageComponent', () => {
  let component: UpdateHomeImageComponent;
  let fixture: ComponentFixture<UpdateHomeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHomeImageComponent]
    });
    fixture = TestBed.createComponent(UpdateHomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
