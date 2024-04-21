import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoardMemberSpeechesComponent } from './all-board-member-speeches.component';

describe('AllBoardMemberSpeechesComponent', () => {
  let component: AllBoardMemberSpeechesComponent;
  let fixture: ComponentFixture<AllBoardMemberSpeechesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBoardMemberSpeechesComponent]
    });
    fixture = TestBed.createComponent(AllBoardMemberSpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
