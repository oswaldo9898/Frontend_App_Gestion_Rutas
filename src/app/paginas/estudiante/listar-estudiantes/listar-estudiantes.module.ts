import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEstudiantesPageRoutingModule } from './listar-estudiantes-routing.module';

import { ListarEstudiantesPage } from './listar-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEstudiantesPageRoutingModule
  ],
  declarations: [ListarEstudiantesPage]
})
export class ListarEstudiantesPageModule {}
