// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoRecetasComponent } from './componentes/listado-recetas/listado-recetas.component';
import { FormularioRecetaComponent } from './componentes/formulario-receta/formulario-receta.component';

export const routes: Routes = [
  { path: 'listado', component: ListadoRecetasComponent },
  { path: 'nuevo', component: FormularioRecetaComponent },
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: '**', redirectTo: '/listado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }