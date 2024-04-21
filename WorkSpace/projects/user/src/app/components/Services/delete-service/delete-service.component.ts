import { Component, Inject, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/services/service.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.scss']
})

export class DeleteServiceComponent implements OnInit {
  constructor(
    private serviceService: ServiceService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.serviceService.Delete(this.data).subscribe({
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
