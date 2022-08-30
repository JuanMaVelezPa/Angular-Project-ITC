import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquiposFutbolComponent } from './equiposfutbol/equiposfutbol.component';
import { EstadiosComponent } from './estadios/estadios.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposFutbolComponent,
    JugadoresComponent,
    EstadiosComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
