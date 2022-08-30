import { Ciudad } from './Ciudad';

export class Estadio {
  public nombre: string;
  public capacidad: number;
  public ciudad: Ciudad;
  public ocupacion: number;

  constructor(
    nombre: string,
    capacidad: number,
    ciudad: Ciudad,
    ocupacion: number
  ) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.ciudad = ciudad;
    this.ocupacion = ocupacion;
  }
}
