import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userCredentials: Login;
  TOKEN_KEY: string;

  constructor(private router: Router) {
    this.userCredentials = {
      userName: 'master8@lemoncode.net',
      password: '12345678',
    };
    this.TOKEN_KEY = 'token';
  }

  login(userData: Login): boolean {
    const isUserNameAllow = userData.userName === this.userCredentials.userName;
    const isPasswordAllow = userData.password === this.userCredentials.password;

    if (isUserNameAllow && isPasswordAllow) {
      localStorage.setItem(this.TOKEN_KEY, 'LoginAllowed');
      this.router.navigate(['/dashboard']);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    if (localStorage.getItem(this.TOKEN_KEY)) return true;
    return false;
  }

  getUsername(): string {
    return 'Aquí el nombre';
  }
}
