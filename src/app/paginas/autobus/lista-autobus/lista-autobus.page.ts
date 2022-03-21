import { AutobusesService } from './../../../servicios/autobuses.service';
import { Component, OnInit } from '@angular/core';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-lista-autobus',
  templateUrl: './lista-autobus.page.html',
  styleUrls: ['./lista-autobus.page.scss'],
})
export class ListaAutobusPage implements OnInit {
  public autobuses :  Array<any> =[];
  public url = environment.apiURL;

  constructor(
    private utility: UtilityProviderService,
    private autobusesService: AutobusesService,
  ) {
    this.init_data();
   }

  ngOnInit() {}

  init_data(){
    this.autobusesService.listar_autobuses().subscribe(
      response => {
        console.log(response);
        this.autobuses = response.data;
        console.log(this.autobuses);
      },error => {
        console.log(error);
      }
    );
  }

  logout(){
    this.utility.logout();
  }

}
