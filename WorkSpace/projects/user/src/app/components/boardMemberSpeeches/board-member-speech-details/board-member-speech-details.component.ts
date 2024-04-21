import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBoardMemberSpeechRead } from '../../../models/BoardMemberSpeech/iboard-member-speech-read';

@Component({
  selector: 'app-board-member-speech-details',
  templateUrl: './board-member-speech-details.component.html',
  styleUrls: ['./board-member-speech-details.component.scss']
})

export class BoardMemberSpeechDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<BoardMemberSpeechDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBoardMemberSpeechRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      content: [data?.content || ''],
      boardMemberName: [data?.boardMemberName || ''],
      boardMemberImage: [data?.boardMemberImage || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get content() {
    return this.form.get('companyName');
  }
  get boardMemberName() {
    return this.form.get('boardMemberName');
  }
  get boardMemberImage() {
    return this.form.get('boardMemberImage');
  }
}
