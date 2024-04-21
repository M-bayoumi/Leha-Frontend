import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Client/All`);
  }

  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Client/All/${id}`);
  }

  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Client/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Client/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Client/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Client/${id}`);
  }
}
