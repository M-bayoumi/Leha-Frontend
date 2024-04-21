import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoardMemberSpeechComponent } from './update-board-member-speech.component';

describe('UpdateBoardMemberSpeechComponent', () => {
  let component: UpdateBoardMemberSpeechComponent;
  let fixture: ComponentFixture<UpdateBoardMemberSpeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBoardMemberSpeechComponent]
    });
    fixture = TestBed.createComponent(UpdateBoardMemberSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
