import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BoardMemberSpeechService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/Speech/All`);
  }

  GetAllByBoardMemberId(id: number) {
    return this.http.get(`${environment.Api}/Speech/All/${id}`);
  }

  GetDetails(id: number) {
    return this.http.get(`${environment.Api}/Speech/Details/${id}`);
  }

  Add(command: any) {
    return this.http.post(`${environment.Api}/Speech/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/Speech/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/Speech/${id}`);
  }
}
