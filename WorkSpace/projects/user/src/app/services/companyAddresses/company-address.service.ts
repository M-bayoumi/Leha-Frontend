import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CompanyAddressService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Address/All`);
  }

  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Address/All/${id}`);
  }

  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Address/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Address/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Address/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Address/${id}`);
  }
}
