import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAddressesComponent } from './all-addresses.component';

describe('AllAddressesComponent', () => {
  let component: AllAddressesComponent;
  let fixture: ComponentFixture<AllAddressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAddressesComponent]
    });
    fixture = TestBed.createComponent(AllAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
