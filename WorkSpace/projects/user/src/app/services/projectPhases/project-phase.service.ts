import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectPhaseService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Phase/All`);
  }
  GetAllByProjectId(id: number) {
    return this.http.get(`${environment.Api}/Phase/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Phase/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Phase/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Phase/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Phase/${id}`);
  }
}
