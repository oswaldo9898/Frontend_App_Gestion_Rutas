import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { UtilityProviderService } from 'src/app/servicios/utility-provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usuario: any = {};
  public token: any = ''; 

  constructor(
    private usuarioServicio: UsuariosService,
    private utility: UtilityProviderService,
    private router: Router,
  ) { 
    this.token = this.usuarioServicio.getToken();
  }

  ngOnInit() {
    if(this.token){
      this.router.navigate(['/inicio']);
    }
  }

  login(loginForm){
    if(loginForm.valid){
      this.usuarioServicio.login(this.usuario).subscribe(
        response => {
          if(response.reg == ""){
            this.utility.showAlert('Alerta',response.message,'Aceptar').then(alert =>{
              alert.present();
            });        
          }else{
            this.utility.showToast(
              '',
              'Inicio de sesión exitoso',
              {position:'bottom', duration:1000, showCloseButton:true, closeButtonText:'OK', color:'success'
            }).then(toast =>{
              toast.present();
            });

            localStorage.setItem('token',response.token);
            localStorage.setItem('usuario',JSON.stringify(response.data));
            console.log(response.data);

            loginForm.reset();
            this.router.navigate(['/inicio']);
          }
        }
      )
    }else{
      this.utility.showAlert('Alerta','Por favor ingrese el correo electrónico y la contraseña','Aceptar').then(alert =>{
        alert.present();
      }); 
    }
  }
}
