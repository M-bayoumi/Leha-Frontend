import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyAddressRead } from '../../../models/CompanyAddress/icompany-address-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { CompanyAddressService } from '../../../services/companyAddresses/company-address.service';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICompanyAddressDetails } from '../../../models/CompanyAddress/icompany-address-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})

export class UpdateAddressComponent {
  form: FormGroup;
  companyAddressRead: ICompanyAddressRead[] = [];
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private companyAddressService: CompanyAddressService,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyAddressDetails
  ) {

    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      addressAr: [data?.addressAr || '', [Validators.required]],
      addressEn: [data?.addressEn || '', [Validators.required]],
      companyId: [data?.companyId || '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }

  GetAllCompanies() {
    this.companyService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.companies = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Update() {
    let formData = new FormData();
    formData.append('Id', this.Id?.value);
    formData.append('addressAr', this.addressAr?.value);
    formData.append('addressEn', this.addressEn?.value);
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.companyAddressService.Update(formData).subscribe({
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
  get addressAr() {
    return this.form.get('addressAr');
  }
  get addressEn() {
    return this.form.get('addressEn');
  }
  get companyId() {
    return this.form.get('companyId');
  }
}
