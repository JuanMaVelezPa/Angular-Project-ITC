import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquiposFutbolComponent } from './equiposfutbol/equiposfutbol.component';
import { EstadiosComponent } from './estadios/estadios.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routing, appRoutingProviders } from './app.routing';
import { EditarEstadioComponent } from './editar-estadio/editar-estadio.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposFutbolComponent,
    JugadoresComponent,
    EstadiosComponent,
    HomeComponent,
    PageNotFoundComponent,
    EditarEstadioComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
