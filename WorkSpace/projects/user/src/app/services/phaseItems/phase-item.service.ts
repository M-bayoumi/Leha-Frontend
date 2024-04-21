import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PhaseItemService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Item/All`);
  }
  GetAllByProjectPhaseId(id: number) {
    return this.http.get(`${environment.Api}/Item/All/${id}`);
  }
  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Item/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Item/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Item/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Item/${id}`);
  }
}
