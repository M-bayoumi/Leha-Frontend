import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Project/All`);
  }
  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Project/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Project/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Project/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Project/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Project/${id}`);
  }
}
