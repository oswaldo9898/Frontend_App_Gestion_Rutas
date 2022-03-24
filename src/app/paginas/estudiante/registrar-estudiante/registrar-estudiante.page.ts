import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';
import { GooglemapsComponent } from '../../../componentes/googlemaps/googlemaps.component';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.page.html',
  styleUrls: ['./registrar-estudiante.page.scss'],
})
export class RegistrarEstudiantePage implements OnInit {
  public estudiante: any = {
    direccion: null,
  };
  public file: File = undefined;
  public imgSelect : any | ArrayBuffer ='../../../../assets/autobus.jpg';


  constructor(
    private utility: UtilityProviderService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
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

  registro_estudiante(registroForm){
    console.log(this.estudiante);
  }

  logout(){
    this.utility.logout();
  }

  regresar(){
    this.estudiante = {}
  }

  async addDirection() {
    const direccion = this.estudiante.direccion;
    let positionInput = {  
      lat: 0,
      lng: 0,
    };
    if (direccion !== null) {
        positionInput = direccion; 
    }
    const modalAdd  = await this.modalController.create({
      component: GooglemapsComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: {position: positionInput}
    });
    await modalAdd.present();
    const {data} = await modalAdd.onWillDismiss();
    if (data) {
      this.estudiante.direccion = data.pos;
    }
  }

  fileChangeEvent(event:any):void{
    var file;
    if(event.target.files && event.target.files[0]){
      file = <File>event.target.files[0];
    }else{
      this.verToast('No hay una imagen','danger');
      this.imgSelect = '../../../../assets/autobus.jpg';
      this.file = undefined;
    }

    if(file.size <= 4000000){
      if(file.type == 'image/png' || file.type == 'image/webp' || file.type == 'image/jpg' || file.type == 'image/gif' || file.type == 'image/jpeg' ){
        const reader = new FileReader();
        reader.onload = e => this.imgSelect = reader.result;
        reader.readAsDataURL(file);
        this.file = file;
      }else{
        this.verToast('El archivo debe ser una imagen','danger');
        this.imgSelect = '../../../../assets/autobus.jpg';
        this.file = undefined;
      }
    }else{
      this.verToast('La imagen no puede superar los 4mb','danger');
      this.imgSelect = '../../../../assets/autobus.jpg';
      this.file = undefined;
    }
    console.log(this.file);
  }

}
