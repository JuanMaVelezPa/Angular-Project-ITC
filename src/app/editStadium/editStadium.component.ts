import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-estadio',
  templateUrl: './editStadium.component.html',
  styleUrls: ['./editStadium.component.css'],
})
export class EditStadiumComponent implements OnInit {
  title: string;
  public id: number;
  public city: string;
  public name: string;
  public capacity: number;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'Edit Stadium';
    this.id = 0;
    this.name = '';
    this.capacity = 0;
    this.city = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe((Params: Params) => {
      console.log('editStadium: ' + Params);
      if (Params['id,name,city,capacirty'] != undefined) {
        this._router.navigate(['/stadiums']);
      } else {
        this.id = Params['id'];
        this.name = Params['name'];
        this.city = Params['city'];
        this.capacity = Params['capacity'];
      }
    });
  }

  editStadium(id: number, name: string, city: string, capacity: number) {
    alert(
      'Stadium update\nID: ' +
        id +
        ', Name: ' +
        name +
        ', City: ' +
        city +
        ', Capacity: ' +
        capacity
    );
  }
}
