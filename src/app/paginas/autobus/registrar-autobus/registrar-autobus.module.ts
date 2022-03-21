import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAutobusPageRoutingModule } from './registrar-autobus-routing.module';

import { RegistrarAutobusPage } from './registrar-autobus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAutobusPageRoutingModule
  ],
  declarations: [RegistrarAutobusPage]
})
export class RegistrarAutobusPageModule {}
