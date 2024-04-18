import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeImageService {
  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${environment.Api}/HomeImage/All`);
  }
  GetAllByCompanyId(id: number) {
    return this.http.get(`${environment.Api}/HomeImage/All/${id}`);
  }
  Add(command: any) {
    return this.http.post(`${environment.Api}/HomeImage/Add`, command);
  }

  Update(command: any) {
    return this.http.put(`${environment.Api}/HomeImage/Update`, command);
  }

  Delete(id: number) {
    return this.http.delete(`${environment.Api}/HomeImage/${id}`);
  }
}
