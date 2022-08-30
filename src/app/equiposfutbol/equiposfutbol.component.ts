import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'equipo-futbol',
  templateUrl: './equiposfutbol.component.html',
})
export class EquiposFutbolComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public number: number;
  private contador: number;

  constructor() {
    this.titulo = 'This is Teams Futbol';
    this.number = Math.random();
    this.contador = 0;
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  ngDoCheck(): void {}
}
