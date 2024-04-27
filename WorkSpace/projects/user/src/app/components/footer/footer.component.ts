import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/companies/company.service';
import { ICompanyRead } from '../../models/Company/icompany-read';
import { IResponse } from '../../models/iresponse';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  companies: ICompanyRead[] = [];

  constructor(private companyService: CompanyService) {}
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
  get lang(): any {
    return localStorage.getItem('lang');
  }
}

