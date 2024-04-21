import { Component, OnInit } from '@angular/core';
import { IBoardMemberSpeechRead } from '../../../models/BoardMemberSpeech/iboard-member-speech-read';
import { IBoardMemberRead } from '../../../models/BoardMember/iboard-member-read';
import { BoardMemberSpeechService } from '../../../services/boardMemberSpeechs/board-member-speech.service';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddBoardMemberSpeechComponent } from '../add-board-member-speech/add-board-member-speech.component';
import { UpdateBoardMemberSpeechComponent } from '../update-board-member-speech/update-board-member-speech.component';
import { BoardMemberSpeechDetailsComponent } from '../board-member-speech-details/board-member-speech-details.component';
import { DeleteBoardMemberSpeechComponent } from '../delete-board-member-speech/delete-board-member-speech.component';
import { IBoardMemberSpeechDetails } from '../../../models/BoardMemberSpeech/iboard-member-speech-details';

@Component({
  selector: 'app-all-board-member-speeches',
  templateUrl: './all-board-member-speeches.component.html',
  styleUrls: ['./all-board-member-speeches.component.scss'],
})
export class AllBoardMemberSpeechesComponent implements OnInit {
  boardMemberSpeeches: IBoardMemberSpeechRead[] = [];
  boardMembers: IBoardMemberRead[] = [];
  boardMemberSpeechDetails!: IBoardMemberSpeechDetails;

  constructor(
    private boardMemberSpeechService: BoardMemberSpeechService,
    private boardMemberService: BoardMemberService,

    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllBoardMembers();
  }

  FilterBoardMemberSpeeches(boardMemberId: any) {
    if (boardMemberId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByBoardMemberId(boardMemberId.value);
    }
  }

  GetAllByBoardMemberId(boardMemberId: number) {
    this.boardMemberSpeechService
      .GetAllByBoardMemberId(boardMemberId)
      .subscribe({
        next: (v) => {
          let response = v as IResponse;
          this.boardMemberSpeeches = response.data;
        },
        // error: (e) => console.log(e),
        // complete: () => console.log('complete'),
      });
  }
  GetAllBoardMembers() {
    this.boardMemberService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.boardMembers = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAll() {
    this.boardMemberSpeechService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.boardMemberSpeeches = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddBoardMemberSpeechComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(speech: IBoardMemberSpeechRead) {
    this.boardMemberSpeechService.GetDetails(speech.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.boardMemberSpeechDetails = response.data;
        this.GetDetails(this.boardMemberSpeechDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(speech: IBoardMemberSpeechDetails) {
    const dialogRef = this.dialog.open(UpdateBoardMemberSpeechComponent, {
      width: '750px',
      data: speech,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
  Details(speech: IBoardMemberSpeechRead) {
    const dialogRef = this.dialog.open(BoardMemberSpeechDetailsComponent, {
      width: '750px',
      data: speech,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(boardMemberSpeechId: number) {
    const dialogRef = this.dialog.open(DeleteBoardMemberSpeechComponent, {
      width: '750px',
      data: boardMemberSpeechId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
