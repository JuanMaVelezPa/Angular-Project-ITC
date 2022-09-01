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

  constructor() {
    this.title = 'HOME';
    this.element1 = 'Estadios';
    this.element2 = 'Equipos';
    this.element3 = 'Jugadores';
    this.element4 = 'Editar Estadios';
  }

  ngOnInit(): void {}
}
