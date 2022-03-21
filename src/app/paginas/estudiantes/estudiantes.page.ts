import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  constructor(
    private utility: UtilityProviderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(){
    this.utility.logout();
  }

}
