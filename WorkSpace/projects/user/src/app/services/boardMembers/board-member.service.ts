import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BoardMemberService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Member/All`);
  }

  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Member/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Member/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Member/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Member/${id}`);
  }
}
