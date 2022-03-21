import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./paginas/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'lista-autobus',
    loadChildren: () => import('./paginas/autobus/lista-autobus/lista-autobus.module').then( m => m.ListaAutobusPageModule)
  },
  {
    path: 'registrar-autobus',
    loadChildren: () => import('./paginas/autobus/registrar-autobus/registrar-autobus.module').then( m => m.RegistrarAutobusPageModule)
  },
  {
    path: 'editar-autobus',
    loadChildren: () => import('./paginas/autobus/editar-autobus/editar-autobus.module').then( m => m.EditarAutobusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
