import { Component, OnInit } from '@angular/core';
import { titleNav } from 'src/app/model/titleNav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  titles: titleNav[] = [
    { copy: 'Home', route: '/home' },
    { copy: 'About Us', route: '/about_us' },
    { copy: 'Login', route: '/login' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
