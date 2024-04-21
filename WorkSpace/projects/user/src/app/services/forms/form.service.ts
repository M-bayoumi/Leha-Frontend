import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Form/All`);
  }

  GetAllByJobId(id: number) {
    return this.http.get(`${environment.Api}/Form/All/${id}`);
  }

  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Form/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Form/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Form/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Form/${id}`);
  }
}
