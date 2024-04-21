import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBoardMemberRead } from '../../../models/BoardMember/iboard-member-read';

@Component({
  selector: 'app-board-member-details',
  templateUrl: './board-member-details.component.html',
  styleUrls: ['./board-member-details.component.scss']
})

export class BoardMemberDetailsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<BoardMemberDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBoardMemberRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      name: [data?.name || ''],
      position: [data?.position || ''],
      image: [data?.image || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get name() {
    return this.form.get('name');
  }
  get position() {
    return this.form.get('position');
  }
  get image() {
    return this.form.get('image');
  }
}
