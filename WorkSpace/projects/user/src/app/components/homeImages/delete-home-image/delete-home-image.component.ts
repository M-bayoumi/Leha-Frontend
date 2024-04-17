import { Component, Inject, OnInit } from '@angular/core';
import { HomeImageService } from '../../../services/homeImages/home-image.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-home-image',
  templateUrl: './delete-home-image.component.html',
  styleUrls: ['./delete-home-image.component.scss']
})

export class DeleteHomeImageComponent implements OnInit {
  constructor(
    private homeImageService: HomeImageService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteHomeImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.homeImageService.Delete(this.data).subscribe({
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
