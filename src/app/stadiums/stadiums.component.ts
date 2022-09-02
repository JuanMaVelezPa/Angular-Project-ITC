import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { City } from '../model/City';
import { Config } from '../model/Config';
import { Stadium } from '../model/Stadium';

@Component({
  selector: 'app-stadiums',
  templateUrl: './stadiums.component.html',
  styleUrls: ['./stadiums.component.css'],
})
export class StadiumComponent implements OnInit {
  public title;
  public stadiums: Array<Stadium>;
  public citys: Array<City> = [];
  public sponsor: String;

  public id: number;
  public city: string;
  public name: string;
  public capacity: number;

  selectedEstadio?: Stadium;

  constructor(private _router: Router) {
    this.sponsor = 'Adidas';

    this.title = Config.tituloComponenteEstadios;

    this.stadiums = [
      new Stadium(
        1,
        'Atanasio',
        48000,
        new City('Medellin'),
        Math.round(Math.random() * 100)
      ),
      new Stadium(
        2,
        'Pascual',
        40000,
        new City('Medellin'),
        Math.round(Math.random() * 100)
      ),
      new Stadium(
        3,
        'Campin',
        60000,
        new City('Bogota'),
        Math.round(Math.random() * 100)
      ),
      new Stadium(
        4,
        'Palma',
        40000,
        new City('Cali'),
        Math.round(Math.random() * 100)
      ),
    ];

    this.id = this.stadiums.length + 1;
    this.name = '';
    this.capacity = 0;
    this.city = '';
  }

  ngOnInit(): void {
    this.getCitys();
  }

  getCitys() {
    this.stadiums.forEach((est) => {
      if (this.citys.indexOf(est.city) < 0) {
        if (
          this.citys.filter((x) => x.name === est.city.name)[0] === undefined
        ) {
          this.citys.push(est.city);
        }
      }
    });
  }

  createStadium(id: number, nombre: string, capacidad: number, ciudad: string) {
    if (this.stadiums.find((x) => x.id === id) != undefined) {
      alert('Id ' + id + ' exist. Please input next id to new stadium.');
      this.id = this.stadiums.length + 1;
      this.name = '';
      this.capacity = 0;
      this.city = '';
      return;
    }

    if (this.stadiums.find((x) => x.name === nombre)) {
      alert('El estadio ' + nombre + ' ya existe');
    } else {
      this.stadiums.push(
        new Stadium(
          id,
          nombre,
          capacidad,
          new City(ciudad),
          Math.round(Math.random() * 100)
        )
      );
      this.getCitys();
      this.id++;
      this.name = '';
      this.capacity = 0;
      this.city = '';
    }
  }

  deleteStadium() {
    this.stadiums.pop();
    this.getCitys();
  }

  getCity() {
    alert(this.city);
  }

  onBlur() {
    console.log('has left the input');
  }

  onKeyUp() {
    console.log('An enter has been pressed');
  }

  editStadium(estadio: Stadium): void {
    this.selectedEstadio = estadio;
    this._router.navigate([
      '/editStadium/' +
        estadio.id +
        '/' +
        estadio.name +
        '/' +
        estadio.city.name +
        '/' +
        estadio.capacity,
    ]);
  }
}
