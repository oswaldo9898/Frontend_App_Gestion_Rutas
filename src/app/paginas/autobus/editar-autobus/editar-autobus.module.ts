import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAutobusPageRoutingModule } from './editar-autobus-routing.module';

import { EditarAutobusPage } from './editar-autobus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAutobusPageRoutingModule
  ],
  declarations: [EditarAutobusPage]
})
export class EditarAutobusPageModule {}
