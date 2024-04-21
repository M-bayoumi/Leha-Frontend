import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPostRead } from '../../../models/Post/ipost-read';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})

export class PostDetailsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<PostDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPostRead
  ) {
    this.form = this.fb.group({
      id: [data?.id || ''],
      content: [data?.content || ''],
      image: [data?.image || ''],
      companyName: [data?.companyName || ''],
    });
  }
  ngOnInit(): void {}

  get id() {
    return this.form.get('id');
  }
  get content() {
    return this.form.get('content');
  }
  get image() {
    return this.form.get('image');
  }
  get companyName() {
    return this.form.get('companyName');
  }
}
