import { Component, OnInit } from '@angular/core';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';

@Component({
  selector: 'app-listar-estudiantes',
  templateUrl: './listar-estudiantes.page.html',
  styleUrls: ['./listar-estudiantes.page.scss'],
})
export class ListarEstudiantesPage implements OnInit {

  constructor(
    private utility: UtilityProviderService,
  ) { }

  ngOnInit() {
  }

  logout(){
    this.utility.logout();
  }

}
