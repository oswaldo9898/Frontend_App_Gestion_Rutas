import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAutobusPage } from './lista-autobus.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAutobusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAutobusPageRoutingModule {}
