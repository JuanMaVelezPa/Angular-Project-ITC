import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-estadio',
  templateUrl: './editStadium.component.html',
  styleUrls: ['./editStadium.component.css'],
})
export class EditStadiumComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe((Params: Params) => {
      console.log('editStadium: ' + Params);
    });
  }
}
