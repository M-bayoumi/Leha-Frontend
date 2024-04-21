import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardMemberSpeechComponent } from './add-board-member-speech.component';

describe('AddBoardMemberSpeechComponent', () => {
  let component: AddBoardMemberSpeechComponent;
  let fixture: ComponentFixture<AddBoardMemberSpeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBoardMemberSpeechComponent]
    });
    fixture = TestBed.createComponent(AddBoardMemberSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
