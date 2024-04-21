import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMemberSpeechDetailsComponent } from './board-member-speech-details.component';

describe('BoardMemberSpeechDetailsComponent', () => {
  let component: BoardMemberSpeechDetailsComponent;
  let fixture: ComponentFixture<BoardMemberSpeechDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardMemberSpeechDetailsComponent]
    });
    fixture = TestBed.createComponent(BoardMemberSpeechDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
