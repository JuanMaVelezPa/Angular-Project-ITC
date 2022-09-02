import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SoccerTeamsComponent } from './soccerTeams/soccerTeams.component';
import { StadiumComponent } from './stadiums/stadiums.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { routing, appRoutingProviders } from './app.routing';
import { EditStadiumComponent } from './editStadium/editStadium.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerTeamsComponent,
    PlayersComponent,
    StadiumComponent,
    HomeComponent,
    PageNotFoundComponent,
    EditStadiumComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
