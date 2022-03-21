import { AutobusesService } from './../../../servicios/autobuses.service';
import { Component, OnInit } from '@angular/core';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-registrar-autobus',
  templateUrl: './registrar-autobus.page.html',
  styleUrls: ['./registrar-autobus.page.scss'],
})
export class RegistrarAutobusPage implements OnInit {
  public autobus: any = {};
  public file: File = undefined;
  public imgSelect : any | ArrayBuffer ='../../../../assets/autobus.jpg';

  constructor(
    private utility: UtilityProviderService,
    private autobusesService: AutobusesService,
    private router: Router,
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

  registro_autobus(registroForm){
    if(registroForm.valid){
      this.autobusesService.registro_autobus(this.autobus, this.file).subscribe(
        response => {
          if(response.message == "Exito"){
            this.verToast('El registro ha sido exitoso','success');
            registroForm.reset();
            this.router.navigate(['/lista-autobus']);
          }else{
            this.verToast(response.message,'danger');
          }
        }
      )
    }else{
      this.utility.showAlert('Alerta','Por favor ingrese los datos específicos','Aceptar').then(alert =>{
        alert.present();
      }); 
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

  logout(){
    this.utility.logout();
  }

}
