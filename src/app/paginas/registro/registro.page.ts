import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public usuario: any = {};

  constructor(
    private utility: UtilityProviderService,
    private usuarioServicio: UsuariosService,
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
  

  registro(registroForm){
    if(registroForm.valid){
      this.usuario.rol = "REPRESENTANTE"
      this.usuarioServicio.registro(this.usuario).subscribe(
        response => {
          if(response.message == "Exito"){
            this.verToast('El registro ha sido exitoso','success');
            registroForm.reset();
            this.router.navigate(['/login']);
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
}
