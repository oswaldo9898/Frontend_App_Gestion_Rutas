import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAutobusPage } from './editar-autobus.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAutobusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAutobusPageRoutingModule {}
