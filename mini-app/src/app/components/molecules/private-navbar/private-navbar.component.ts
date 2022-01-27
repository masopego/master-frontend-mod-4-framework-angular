import { Component, OnInit } from '@angular/core';
import { titleNav } from 'src/app/model/titleNav';

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

  constructor() {}

  ngOnInit(): void {}
}
