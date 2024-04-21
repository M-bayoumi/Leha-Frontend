import { Component, OnInit } from '@angular/core';
import { IBoardMemberRead } from '../../../models/BoardMember/iboard-member-read';
import { IBoardMemberDetails } from '../../../models/BoardMember/iboard-member-details';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddBoardMemberComponent } from '../add-board-member/add-board-member.component';
import { UpdateBoardMemberComponent } from '../update-board-member/update-board-member.component';
import { BoardMemberDetailsComponent } from '../board-member-details/board-member-details.component';
import { DeleteBoardMemberComponent } from '../delete-board-member/delete-board-member.component';

@Component({
  selector: 'app-all-board-member',
  templateUrl: './all-board-member.component.html',
  styleUrls: ['./all-board-member.component.scss'],
})
export class AllBoardMemberComponent implements OnInit {
  boardMembers: IBoardMemberRead[] = [];
  boardMemberDetails!: IBoardMemberDetails;

  constructor(
    private boardMemberService: BoardMemberService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.boardMemberService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.boardMembers = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddBoardMemberComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(boardMember: IBoardMemberRead) {
    this.boardMemberService.GetDetails(boardMember.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.boardMemberDetails = response.data;
        this.GetDetails(this.boardMemberDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(boardMember: IBoardMemberDetails) {
    const dialogRef = this.dialog.open(UpdateBoardMemberComponent, {
      width: '750px',
      data: boardMember,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Details(boardMember: IBoardMemberRead) {
    const dialogRef = this.dialog.open(BoardMemberDetailsComponent, {
      width: '750px',
      data: boardMember,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(boardMemberId: number) {
    const dialogRef = this.dialog.open(DeleteBoardMemberComponent, {
      width: '750px',
      data: boardMemberId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
