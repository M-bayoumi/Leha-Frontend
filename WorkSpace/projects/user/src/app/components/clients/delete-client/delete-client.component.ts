import { Component, Inject, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clients/client.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})

export class DeleteClientComponent implements OnInit {
  constructor(
    private clientService: ClientService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.clientService.Delete(this.data).subscribe({
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
