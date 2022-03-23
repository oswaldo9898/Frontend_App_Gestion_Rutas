import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEstudiantesPage } from './listar-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEstudiantesPageRoutingModule {}
