import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAutobusPageRoutingModule } from './lista-autobus-routing.module';

import { ListaAutobusPage } from './lista-autobus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAutobusPageRoutingModule
  ],
  declarations: [ListaAutobusPage]
})
export class ListaAutobusPageModule {}
