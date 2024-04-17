import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageDetailsComponent } from './home-image-details.component';

describe('HomeImageDetailsComponent', () => {
  let component: HomeImageDetailsComponent;
  let fixture: ComponentFixture<HomeImageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeImageDetailsComponent]
    });
    fixture = TestBed.createComponent(HomeImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
