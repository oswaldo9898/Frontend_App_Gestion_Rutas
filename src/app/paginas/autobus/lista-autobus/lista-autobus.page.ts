import { AlertController, NavController } from '@ionic/angular';
import { AutobusesService } from './../../../servicios/autobuses.service';
import { Component, OnInit } from '@angular/core';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';
import { environment } from '../../../../environments/environment';
import {RegistrarAutobusPage} from '../registrar-autobus/registrar-autobus.page'

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
    private alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.init_data();
   }

  ngOnInit() {}

  ionViewWillEnter(){
    this.init_data();
  }

  verToast(mensaje:string, color:string){
    this.utility.showToast(
      '',
      mensaje,
      {position:'bottom', duration:2000, showCloseButton:true, closeButtonText:'OK', color:color
    }).then(toast =>{
      toast.present();
    });
  }

  init_data(){
    this.autobusesService.listar_autobuses().subscribe(
      response => {
        this.autobuses = response.data;
      },error => {
        console.log(error);
      }
    );
  }

  logout(){
    this.utility.logout();
  }

  editar(){
    this.navCtrl.pop()
  }

  async eliminarAlert(placa){
    const alert = await this.alertController.create({
      header: "Eliminar autobus",
      message: "Desea eliminar el autobus de la base de datos",
      buttons: [{
        text: "Cancelar",
        handler: ()=>{

        },
      },
      {
        text: "Eliminar",
        handler: ()=>{
          this.autobusesService.eliminar_autobus(placa).subscribe(
            response => {
              this.init_data();
              this.verToast('El autobus ha sido eliminado','success');
            },error => {
              console.log(error);
            }
          );
        },
      }]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
  }

}
