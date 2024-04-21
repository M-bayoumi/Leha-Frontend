import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Job/All`);
  }
  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Job/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Job/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Job/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Job/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Job/${id}`);
  }
}
