import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-add-board-member',
  templateUrl: './add-board-member.component.html',
  styleUrls: ['./add-board-member.component.scss']
})

export class AddBoardMemberComponent implements OnInit {
  form: FormGroup;
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private boardMemberService: BoardMemberService,
    private dialog: MatDialogRef<AddBoardMemberComponent>,
    private toastr: ToastrService
  ) {

    this.form = this.fb.group({
      nameAr: ['', [Validators.required]],
      nameEn: ['', [Validators.required]],
      positionAr: ['', [Validators.required]],
      positionEn: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  Add() {
    let formData = new FormData();
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('positionAr', this.positionAr?.value);
    formData.append('positionEn', this.positionEn?.value);
    formData.append('file', this.selectedFile);

    this.boardMemberService.Add(formData).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.toastr.success(response.message.toString());
        this.dialog.close(true);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  get nameAr() {
    return this.form.get('nameAr');
  }
  get nameEn() {
    return this.form.get('nameEn');
  }
  get positionAr() {
    return this.form.get('positionAr');
  }
  get positionEn() {
    return this.form.get('positionEn');
  }
}
