import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { ProductService } from '../../../services/products/product.service';
import { CompanyService } from '../../../services/companies/company.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProductDetails } from '../../../models/Product/iproduct-details';
import { IResponse } from '../../../models/iresponse';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})

export class UpdateProductComponent {
  form: FormGroup;
  companies: ICompanyRead[] = [];
  selectedFile!: File;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProductDetails
  ) {
    this.form = this.fb.group({
      Id: [data?.id || 0, [Validators.required]],
      nameAr: [data?.nameAr || '', [Validators.required]],
      nameEn: [data?.nameEn || '', [Validators.required]],
      descriptionAr: [data?.descriptionAr || '', [Validators.required]],
      descriptionEn: [data?.descriptionEn || '', [Validators.required]],
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
    formData.append('descriptionAr', this.descriptionAr?.value);
    formData.append('descriptionEn', this.descriptionEn?.value);
    formData.append('companyId', this.companyId?.value);
    formData.append('file', this.selectedFile);

    this.productService.Update(formData).subscribe({
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
  get descriptionAr() {
    return this.form.get('descriptionAr');
  }
  get descriptionEn() {
    return this.form.get('descriptionEn');
  }
  get companyId() {
    return this.form.get('companyId');
  }
}
