import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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
