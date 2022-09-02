import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  title: string;
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'Players';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      if (params['apellido'] == undefined && params['apellido'] == undefined) {
        console.log('Without params');
      } else if (params['apellido'] != undefined) {
        alert(
          'FirstName: ' + params['nombre'] + ', LastName: ' + params['apellido']
        );
      } else {
        alert(params['nombre']);
      }
    });
  }

  redirectToTeams() {
    this._router.navigate(['/teams']);
  }
}
