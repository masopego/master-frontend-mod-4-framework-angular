import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  constructor(private authService: AuthService) {
    this.isLogin = false;
  }

  handlePrivateRoute(): void {
    this.isLogin = this.authService.isLogged();
    console.log(this.isLogin);
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.handlePrivateRoute();
  }
}
