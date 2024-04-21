import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Post/All`);
  }
  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/Post/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Post/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Post/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Post/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Post/${id}`);
  }
}
