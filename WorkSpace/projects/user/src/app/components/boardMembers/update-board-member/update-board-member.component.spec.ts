import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoardMemberComponent } from './update-board-member.component';

describe('UpdateBoardMemberComponent', () => {
  let component: UpdateBoardMemberComponent;
  let fixture: ComponentFixture<UpdateBoardMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBoardMemberComponent]
    });
    fixture = TestBed.createComponent(UpdateBoardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
