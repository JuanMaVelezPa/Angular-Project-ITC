import { Injectable } from '@angular/core';
import { City } from '../model/City';
import { Stadium } from '../model/Stadium';

@Injectable()
export class StadiumService {
  stadiums: Array<Stadium>;

  constructor() {
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
  }

  getStadiums() {
    return this.stadiums;
  }
}
