import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    private authService: AuthService
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

  handleLogin(): boolean {
    let newLogin = this.loginForm?.value;
    const isLoginOk = this.authService.login(newLogin);

    if (!isLoginOk) {
      this.resetForm();
      alert('Login no válido. Inténtalo de nuevo');
    }

    return isLoginOk;
  }

  ngOnInit(): void {}
}
