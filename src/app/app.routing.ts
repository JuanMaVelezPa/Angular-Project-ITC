// Importacion de los modulos del routing de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importacion de los componentes propios
import { EquiposFutbolComponent } from './equiposfutbol/equiposfutbol.component';
import { EstadiosComponent } from './estadios/estadios.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditarEstadioComponent } from './editar-estadio/editar-estadio.component';

// Arreglos de los componentes a enrutar (enrutamiento)
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'equipos', component: EquiposFutbolComponent },
  { path: 'estadios', component: EstadiosComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'jugadores/:nombre', component: JugadoresComponent },
  { path: 'jugadores/:nombre/:apellido', component: JugadoresComponent },
  { path: 'editarEstadio', component: EditarEstadioComponent },
  { path: 'editarEstadio/:id', component: EditarEstadioComponent },
  { path: '**', component: PageNotFoundComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
