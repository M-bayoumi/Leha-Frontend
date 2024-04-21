import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardMemberSpeechComponent } from './delete-board-member-speech.component';

describe('DeleteBoardMemberSpeechComponent', () => {
  let component: DeleteBoardMemberSpeechComponent;
  let fixture: ComponentFixture<DeleteBoardMemberSpeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBoardMemberSpeechComponent]
    });
    fixture = TestBed.createComponent(DeleteBoardMemberSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
