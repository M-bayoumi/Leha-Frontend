import { Component, Inject, OnInit } from '@angular/core';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-board-member',
  templateUrl: './delete-board-member.component.html',
  styleUrls: ['./delete-board-member.component.scss']
})

export class DeleteBoardMemberComponent implements OnInit {
  constructor(
    private boardMemberService: BoardMemberService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteBoardMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.boardMemberService.Delete(this.data).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }
}
