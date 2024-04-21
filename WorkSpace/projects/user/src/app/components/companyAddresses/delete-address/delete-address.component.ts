import { Component, Inject, OnInit } from '@angular/core';
import { CompanyAddressService } from '../../../services/companyAddresses/company-address.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.scss']
})

export class DeleteAddressComponent implements OnInit {
  constructor(
    private companyAddressService: CompanyAddressService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<DeleteAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}
  Delete() {
    this.companyAddressService.Delete(this.data).subscribe({
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
