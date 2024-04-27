import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppUserService } from '../../services/appUsers/app-user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ISignIn } from '../../models/AppUser/isign-in';
import { IResponse } from '../../models/iresponse';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  response: IResponse = {} as IResponse;

  constructor(
    private fb: FormBuilder,
    private appUserService: AppUserService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.form = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
          ),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    let userRegister: ISignIn = this.form.value;

    this.appUserService.Login(userRegister).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        let userToken = this.response.data.token;
        let userRole = this.response.data.role;

        // Check if token and role are defined before setting localStorage
        if (userToken && userRole) {
          localStorage.setItem('token', userToken);
          localStorage.setItem('role', userRole);
          this.toaster.success('success', 'Login Success');
          this.router.navigate(['/home']);
          console.log(this.response)
        }
      },
      error: (e) => {
        this.toaster.error('Login failed');
      },
      complete: () => console.log('Login completed'),
    });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
}
