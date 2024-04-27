import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IAddAppUserCommand } from '../../models/AppUser/iadd-app-user-command';
import { IResponse } from '../../models/iresponse';
import { AppUserService } from '../../services/appUsers/app-user.service';
import { RoleService } from '../../services/roles/role.service';
import { IRole } from '../../models/Role/irole';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  response: IResponse = {} as IResponse;
  roles: IRole[] = [];

  constructor(
    private fb: FormBuilder,
    private appUserService: AppUserService,
    private roleService: RoleService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.userRegisterForm = fb.group(
      {
        fullName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
        ],
        userName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z0-9]{3,}')],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        phoneNumber: [
          '',
          [Validators.required],
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
        confirmPassword: ['', [Validators.required]],
        address: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z0-9]{3,}')],
        ],
        role: [''],
      },

      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    this.GetAllRoles();
  }

  submit() {
    let userRegister: IAddAppUserCommand = this.userRegisterForm.value;

    this.appUserService.Register(userRegister).subscribe({
      next: (v) => {
        this.response = v as IResponse;
        this.toaster.success('success', 'Register Success');
        this.router.navigate(['/login']);
      },
      // error: (e) => {
      //   this.toaster.error('Register failed');
      // },
      // complete: () => console.log('complete'),
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  GetAllRoles() {
    this.roleService.GetAll().subscribe({
      next: (v) => {
        let response = v as IResponse;
        console.log(response.data);
        this.roles = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  get fullName() {
    return this.userRegisterForm.get('fullName');
  }
  get userName() {
    return this.userRegisterForm.get('userName');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get phoneNumber() {
    return this.userRegisterForm.get('phoneNumber');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }
  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }
  get address() {
    return this.userRegisterForm.get('address');
  }
  get role() {
    return this.userRegisterForm.get('role');
  }
  get isSuperAdmin(): boolean {
    return localStorage.getItem('role') == 'SuperAdmin';
  }
}
