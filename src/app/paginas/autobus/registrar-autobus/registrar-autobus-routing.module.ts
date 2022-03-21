import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarAutobusPage } from './registrar-autobus.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarAutobusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarAutobusPageRoutingModule {}
