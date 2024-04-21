import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Product/All`);
  }
  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Product/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Product/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Product/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Product/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Product/${id}`);
  }
}
