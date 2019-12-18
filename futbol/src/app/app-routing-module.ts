import { JugadoresComponent } from './jugadores/jugadores.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquiposComponent } from './equipos/equipos.component';

const routes: Routes = [
  {path: '', redirectTo: 'equipos', pathMatch: 'full'},
  {path: 'equipos', component: EquiposComponent},
  {path: 'jugadores', component: JugadoresComponent},
  {path: '**', redirectTo: 'equipos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
