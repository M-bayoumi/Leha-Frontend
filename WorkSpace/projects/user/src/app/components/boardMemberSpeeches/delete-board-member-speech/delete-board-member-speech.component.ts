import { Component, Inject, OnInit } from '@angular/core';
import { BoardMemberSpeechService } from '../../../services/boardMemberSpeechs/board-member-speech.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-board-member-speech',
  templateUrl: './delete-board-member-speech.component.html',
  styleUrls: ['./delete-board-member-speech.component.scss']
})

export class DeleteBoardMemberSpeechComponent implements OnInit {
  constructor(
    private boardMemberSpeechService: BoardMemberSpeechService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteBoardMemberSpeechComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.boardMemberSpeechService.Delete(this.data).subscribe({
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
