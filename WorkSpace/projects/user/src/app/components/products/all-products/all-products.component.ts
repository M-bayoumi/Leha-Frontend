import { Component, OnInit } from '@angular/core';
import { IProductRead } from '../../../models/Product/iproduct-read';
import { ICompanyRead } from '../../../models/Company/icompany-read';
import { ProductService } from '../../../services/products/product.service';
import { CompanyService } from '../../../services/companies/company.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddProductComponent } from '../add-product/add-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { IProductDetails } from '../../../models/Product/iproduct-details';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})

export class AllProductsComponent implements OnInit {
  products: IProductRead[] = [];
  companies: ICompanyRead[] = [];
  productDetails!: IProductDetails;

  constructor(
    private productService: ProductService,
    private companyService: CompanyService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAll();
    this.GetAllCompanies();
  }

  FilterProducts(companyId: any) {
    if (companyId.value == 0) {
      this.GetAll();
    } else {
      this.GetAllByCompanyId(companyId.value);
    }
  }

  GetAllByCompanyId(companyId: number) {
    this.productService.GetAllByCompanyId(companyId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.products = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
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

  GetAll() {
    this.productService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.products = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  Add() {
    const dialogRef = this.dialog.open(AddProductComponent , {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Update(product: IProductRead) {
    this.productService.GetDetails(product.id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.productDetails = response.data;
        this.GetDetails(this.productDetails);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetDetails(product: IProductDetails) {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      width: '750px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
  
  Details(product: IProductRead) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      width: '750px',
      data: product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }

  Delete(productId: number) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '750px',
      data: productId,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAll();
      }
    });
  }
}
