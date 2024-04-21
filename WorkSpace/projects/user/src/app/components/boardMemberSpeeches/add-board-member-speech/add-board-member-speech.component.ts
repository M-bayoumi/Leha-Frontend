import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBoardMemberRead } from '../../../models/BoardMember/iboard-member-read';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';
import { BoardMemberSpeechService } from '../../../services/boardMemberSpeechs/board-member-speech.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-board-member-speech',
  templateUrl: './add-board-member-speech.component.html',
  styleUrls: ['./add-board-member-speech.component.scss'],
})
export class AddBoardMemberSpeechComponent implements OnInit {
  form: FormGroup;
  boardMembers: IBoardMemberRead[] = [];

  constructor(
    private fb: FormBuilder,
    private boardMemberSpeechService: BoardMemberSpeechService,
    private boardMemberService: BoardMemberService,
    private dialog: MatDialogRef<AddBoardMemberSpeechComponent>,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      contentAr: ['', [Validators.required]],
      contentEn: ['', [Validators.required]],
      boardMemberId: [0, [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllBoardMembers();
  }

  Add() {
    let formData = new FormData();
    formData.append('contentAr', this.contentAr?.value);
    formData.append('contentEn', this.contentEn?.value);
    formData.append('boardMemberId', this.boardMemberId?.value);

    this.boardMemberSpeechService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
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
