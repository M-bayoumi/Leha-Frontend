import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardMemberComponent } from './delete-board-member.component';

describe('DeleteBoardMemberComponent', () => {
  let component: DeleteBoardMemberComponent;
  let fixture: ComponentFixture<DeleteBoardMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBoardMemberComponent]
    });
    fixture = TestBed.createComponent(DeleteBoardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
