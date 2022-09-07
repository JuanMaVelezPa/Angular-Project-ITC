import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title: string;
  element1: string;
  element2: string;
  element3: string;
  element4: string;
  element5: string;
  element6: string;

  constructor() {
    this.title = 'Home';
    this.element1 = 'Stadiums';
    this.element2 = 'Teams';
    this.element3 = 'Players';
    this.element4 = 'Edit Stadium';
    this.element5 = 'Users';
    this.element6 = 'Create user';
  }

  ngOnInit(): void {}
}
