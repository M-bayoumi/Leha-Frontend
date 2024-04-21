import { Component, Inject, OnInit } from '@angular/core';
import { FormService } from '../../../services/forms/form.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})

export class DeleteFormComponent implements OnInit {
  constructor(
    private formService: FormService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.formService.Delete(this.data).subscribe({
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
