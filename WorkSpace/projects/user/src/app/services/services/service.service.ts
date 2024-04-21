import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Service/All`);
  }
  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Service/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Service/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Service/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Service/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Service/${id}`);
  }
}
