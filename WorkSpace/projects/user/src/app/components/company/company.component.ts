import { Component, OnInit } from '@angular/core';
import { ICompanyRead } from '../../models/Company/icompany-read';
import { IResponse } from '../../models/iresponse';
import { CompanyService } from '../../services/companies/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  companies: ICompanyRead[] = [];
  response: IResponse = {} as IResponse;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.AllCompanies();
  }

  AllCompanies() {
    this.companyService.GetAll().subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.companies = this.response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  ShowCompaniesDetails(id: number) {
    this.router.navigate(['/company/', id]);
  }
}
