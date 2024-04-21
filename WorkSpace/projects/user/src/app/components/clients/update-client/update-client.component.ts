import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClientRead } from '../../../models/Client/iclient-read';
import { ClientService } from '../../../services/clients/client.service';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IClientDetails } from '../../../models/Client/iclient-details';
import { IResponse } from '../../../models/iresponse';
import { ICompanyRead } from '../../../models/Company/icompany-read';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})

export class UpdateClientComponent {
  form: FormGroup;
  clients: IClientRead[] = [];
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IClientDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      nameAr: [data?.nameAr || '', [Validators.required]],
      nameEn: [data?.nameEn || '', [Validators.required]],
      image: [data?.image || '', [Validators.required]],
      companyId: [data?.companyId || '', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.GetAllCompanies();
  }

  SelectImage(event: any) {
    this.selectedFile = event.target.files[0];
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
    formData.append('nameAr', this.nameAr?.value);
    formData.append('nameEn', this.nameEn?.value);
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.clientService.Update(formData).subscribe({
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
  get companyId() {
    return this.form.get('companyId');
  }
}
