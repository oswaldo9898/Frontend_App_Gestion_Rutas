import { Component, OnInit } from '@angular/core';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.page.html',
  styleUrls: ['./registrar-estudiante.page.scss'],
})
export class RegistrarEstudiantePage implements OnInit {
  public estudiante: any = {};

  constructor(
    private utility: UtilityProviderService,
  ) { }

  ngOnInit() {
  }

  registro_estudiante(registroForm){}

  logout(){
    this.utility.logout();
  }

}
