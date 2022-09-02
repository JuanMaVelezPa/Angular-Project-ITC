// Importacion de los modulos del routing de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importacion de los componentes propios
import { SoccerTeamsComponent } from './soccerTeams/soccerTeams.component';
import { StadiumComponent } from './stadiums/stadiums.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { EditStadiumComponent } from './editStadium/editStadium.component';

// Arreglos de los componentes a enrutar (enrutamiento)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: SoccerTeamsComponent },
  { path: 'stadiums', component: StadiumComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'players/:firstName', component: PlayersComponent },
  { path: 'players/:firstName/:lastName', component: PlayersComponent },
  { path: 'editStadium', component: EditStadiumComponent },
  { path: 'editStadium/:id/:name/:city/:capacity', component: EditStadiumComponent },
  { path: '**', component: PageNotFoundComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
