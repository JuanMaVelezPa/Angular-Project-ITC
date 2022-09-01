import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      if (params['apellido'] != undefined) {
        alert(params['nombre'] + params['apellido']);
      } else {
        alert(params['nombre']);
      }
    });
  }

  redirecToEquipos() {
    this._router.navigate(['/equipos']);
  }
}
