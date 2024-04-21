import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMemberDetailsComponent } from './board-member-details.component';

describe('BoardMemberDetailsComponent', () => {
  let component: BoardMemberDetailsComponent;
  let fixture: ComponentFixture<BoardMemberDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardMemberDetailsComponent]
    });
    fixture = TestBed.createComponent(BoardMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
