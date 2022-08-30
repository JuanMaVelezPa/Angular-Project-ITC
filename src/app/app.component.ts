import { Component } from '@angular/core';
import { Config } from './model/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JUANMA -- MyFirstProject';
  public mostrarEquipos: boolean = true;
  public config;

  constructor() {
    this.config = Config;
  }

  destruirComponente() {
    this.mostrarEquipos = false;
  }
}
