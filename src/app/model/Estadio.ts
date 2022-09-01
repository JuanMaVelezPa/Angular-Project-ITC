import { Ciudad } from './Ciudad';

export class Estadio {
  public id: number;
  public nombre: string;
  public capacidad: number;
  public ciudad: Ciudad;
  public ocupacion: number;

  constructor(
    id: number,
    nombre: string,
    capacidad: number,
    ciudad: Ciudad,
    ocupacion: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.ciudad = ciudad;
    this.ocupacion = ocupacion;
  }
}
