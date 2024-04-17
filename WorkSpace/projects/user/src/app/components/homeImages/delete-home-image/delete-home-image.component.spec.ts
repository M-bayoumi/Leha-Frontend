import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHomeImageComponent } from './delete-home-image.component';

describe('DeleteHomeImageComponent', () => {
  let component: DeleteHomeImageComponent;
  let fixture: ComponentFixture<DeleteHomeImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteHomeImageComponent]
    });
    fixture = TestBed.createComponent(DeleteHomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
