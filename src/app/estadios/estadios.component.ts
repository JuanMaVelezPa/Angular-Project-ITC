import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../model/Ciudad';
import { Config } from '../model/Config';
import { Estadio } from '../model/Estadio';

@Component({
  selector: 'estadios',
  templateUrl: './estadios.component.html',
  styleUrls: ['./estadios.component.css'],
})
export class EstadiosComponent implements OnInit {
  public titulo;
  public estadios: Array<Estadio>;
  public ciudades: Array<Ciudad> = [];
  public patronicador: String;

  public ciudad: string;
  public nombre: string;
  public capacidad: number;

  selectedEstadio?: Estadio;

  constructor() {
    this.patronicador = 'Puma';

    this.nombre = '';
    this.capacidad = 0;
    this.ciudad = '';

    this.titulo = Config.tituloComponenteEstadios;

    this.estadios = [
      new Estadio(
        'Atanasio',
        48000,
        new Ciudad('Medellin'),
        Math.round(Math.random() * 100)
      ),
      new Estadio(
        'Pascual',
        40000,
        new Ciudad('Medellin'),
        Math.round(Math.random() * 100)
      ),
      new Estadio(
        'Campin',
        60000,
        new Ciudad('Bogota'),
        Math.round(Math.random() * 100)
      ),
      new Estadio(
        'Palma',
        40000,
        new Ciudad('Cali'),
        Math.round(Math.random() * 100)
      ),
    ];
  }

  ngOnInit(): void {
    this.getCiudades();
  }

  getCiudades() {
    this.estadios.forEach((est) => {
      if (this.ciudades.indexOf(est.ciudad) < 0) {
        if (
          this.ciudades.filter((x) => x.name === est.ciudad.name)[0] ===
          undefined
        ) {
          this.ciudades.push(est.ciudad);
        }
      }
    });
  }

  crearEstadio(nombre: string, capacidad: number, ciudad: string) {
    if (this.estadios.find((x) => x.nombre === nombre)) {
      alert('El estadio ' + nombre + ' ya existe');
    } else {
      this.estadios.push(
        new Estadio(
          nombre,
          capacidad,
          new Ciudad(ciudad),
          Math.round(Math.random() * 100)
        )
      );
      this.getCiudades();
    }
  }

  deleteEstadio() {
    this.estadios.pop();
    this.getCiudades();
  }

  onSelected(estadio: Estadio): void {
    this.selectedEstadio = estadio;
  }

  getCiudad() {
    alert(this.ciudad);
  }
}
