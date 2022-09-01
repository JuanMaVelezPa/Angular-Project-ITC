import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-soccerTeams',
  templateUrl: './soccerTeams.component.html',
})
export class SoccerTeamsComponent implements OnInit, DoCheck, OnDestroy {
  title: string;
  number: number;
  team1: string;
  team2: string;
  team3: string;

  constructor() {
    this.title = 'Teams';
    this.number = Math.random();
    this.team1 = 'Nacional';
    this.team2 = 'Medellin';
    this.team3 = 'Millonarios';
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  ngDoCheck(): void {}
}
