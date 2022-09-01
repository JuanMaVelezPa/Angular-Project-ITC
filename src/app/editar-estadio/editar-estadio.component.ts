import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-estadio',
  templateUrl: './editar-estadio.component.html',
  styleUrls: ['./editar-estadio.component.css'],
})
export class EditarEstadioComponent implements OnInit {

  
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe((Params: Params) => {
      console.log('EditarEstadio' + Params);
      
    });
  }
}
