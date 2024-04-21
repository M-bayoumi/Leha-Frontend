import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoardMemberComponent } from './all-board-member.component';

describe('AllBoardMemberComponent', () => {
  let component: AllBoardMemberComponent;
  let fixture: ComponentFixture<AllBoardMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBoardMemberComponent]
    });
    fixture = TestBed.createComponent(AllBoardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
