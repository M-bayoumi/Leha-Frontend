import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardMemberSpeechService } from '../../../services/boardMemberSpeechs/board-member-speech.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBoardMemberSpeechDetails } from '../../../models/BoardMemberSpeech/iboard-member-speech-details';
import { IResponse } from '../../../models/iresponse';
import { IBoardMemberRead } from '../../../models/BoardMember/iboard-member-read';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';

@Component({
  selector: 'app-update-board-member-speech',
  templateUrl: './update-board-member-speech.component.html',
  styleUrls: ['./update-board-member-speech.component.scss']
})

export class UpdateBoardMemberSpeechComponent {
  form: FormGroup;
  boardMembers: IBoardMemberRead[] = [];

  constructor(
    private fb: FormBuilder,
    private boardMemberSpeechService: BoardMemberSpeechService,
    private boardMemberService: BoardMemberService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateBoardMemberSpeechComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBoardMemberSpeechDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      contentAr: [data?.contentAr || '', [Validators.required]],
      contentEn: [data?.contentEn || '', [Validators.required]],
      boardMemberId: [data?.boardMemberId || '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllBoardMembers();
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

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('contentAr', this.contentAr?.value);
    formData.append('contentEn', this.contentEn?.value);
    formData.append('boardMemberId', this.boardMemberId?.value);

    this.boardMemberSpeechService.Update(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  get Id() {
    return this.form.get('Id');
  }
  get contentAr() {
    return this.form.get('contentAr');
  }
  get contentEn() {
    return this.form.get('contentEn');
  }
  get boardMemberId() {
    return this.form.get('boardMemberId');
  }
}
