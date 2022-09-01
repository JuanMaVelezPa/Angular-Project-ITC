import { City } from './City';

export class Stadium {
  public id: number;
  public name: string;
  public capacity: number;
  public city: City;
  public ocupation: number;

  constructor(
    id: number,
    name: string,
    capacity: number,
    city: City,
    ocupation: number
  ) {
    this.id = id;
    this.name = name;
    this.capacity = capacity;
    this.city = city;
    this.ocupation = ocupation;
  }
}
