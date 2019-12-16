import { Opcion2Component } from './opcion2/opcion2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Opcion1Component } from './opcion1/opcion1.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: 'opcion1', pathMatch: 'full'},
  {path: 'opcion1', component: Opcion1Component},
  {path: 'opcion2', component: Opcion2Component},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
