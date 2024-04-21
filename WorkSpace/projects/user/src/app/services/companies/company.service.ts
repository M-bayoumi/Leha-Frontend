import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Company/All`);
  }

  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Company/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Company/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Company/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Company/${id}`);
  }
}
