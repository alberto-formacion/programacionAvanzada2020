import { PadreComponent } from './padre/padre.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ErroPageComponent } from './erro-page/erro-page.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteAComponent } from './componente-a/componente-a.component';

const routes: Routes = [
  {path: 'opcionA', component: ComponenteAComponent},
  {path: 'opcionB', component: ComponenteBComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'padre', component: PadreComponent},
  {path: '', redirectTo: 'opcionA', pathMatch: 'full'},
  {path: '**', component: ErroPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
