import { Component, OnInit } from '@angular/core';
import { titleNav } from 'src/app/model/titleNav';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrls: ['./private-navbar.component.scss'],
})
export class PrivateNavbarComponent implements OnInit {
  privateTitles: titleNav[] = [
    { copy: 'Dashboard', route: '/dashboard' },
    { copy: 'Gallery', route: '/gallery' },
    { copy: 'CRUD', route: '/crud' },
    { copy: 'profile', route: '/profile' },
  ];

  userName: string;

  constructor(private authService: AuthService) {
    this.userName = '';
  }

  ngOnInit(): void {
    this.handleUserName();
  }

  handleLogout(): void {
    this.authService.logout();
  }
  handleUserName(): string {
    console.log(this.userName);
    return (this.userName = this.authService.getUsername());
  }
}
