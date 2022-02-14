import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userNameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.userNameControl = this.loginForm.get('userName') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  resetForm(): void {
    this.loginForm.reset();
  }

  handleLogin(): void {
    this.spinner.show();
    let userDataLogin = this.loginForm?.value;
    this.authService.login(userDataLogin).subscribe((result) => { 
      this.spinner.hide();
      if (!result) {
        this.resetForm();
        alert('Login no válido. Inténtalo de nuevo');
      }
      return result
    }
    );
  }

  ngOnInit(): void {}
}
