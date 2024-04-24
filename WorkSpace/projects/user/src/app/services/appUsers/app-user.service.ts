import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAddAppUserCommand } from '../../models/AppUser/iadd-app-user-command';
import { environment } from '../../environments/environment';
import { ISignIn } from '../../models/AppUser/isign-in';

@Injectable({
  providedIn: 'root',
})
export class AppUserService {
  constructor(private http: HttpClient) {}

  Register(command: IAddAppUserCommand) {
    return this.http.post(`${environment.Api}/User/add`, command);
  }

  Login(command: ISignIn) {
    return this.http.post(`${environment.Api}/Authentication/SignIn`, command);
  }
  GetUser() {
    return this.http.get(`${environment.Api}/User/getUser`);
  }
}
