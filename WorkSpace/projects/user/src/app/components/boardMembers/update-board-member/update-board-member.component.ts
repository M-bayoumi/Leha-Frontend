import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoardMemberService } from '../../../services/boardMembers/board-member.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBoardMemberDetails } from '../../../models/BoardMember/iboard-member-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-board-member',
  templateUrl: './update-board-member.component.html',
  styleUrls: ['./update-board-member.component.scss']
})

export class UpdateBoardMemberComponent {
  form: FormGroup;

  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private boardMemberService: BoardMemberService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateBoardMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBoardMemberDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      nameAr: [data?.nameAr || '', [Validators.required]],
      nameEn: [data?.nameEn || '', [Validators.required]],
      positionAr: [data?.positionAr || '', [Validators.required]],
      positionEn: [data?.positionEn || '', [Validators.required]],
    });
  }
  ngOnInit(): void {}


  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
  }

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('positionAr', this.positionAr?.value);
    formData.append('positionEn', this.positionEn?.value);
    formData.append('file', this.selectedFile);

    this.boardMemberService.Update(formData).subscribe({
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
