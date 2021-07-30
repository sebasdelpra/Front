import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { ResetModule } from './pages/reset/reset.module';
import { NewPasswordModule } from 'src/app/pages/new-password/new-password.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltamodificacionModule } from 'src/app/pages/usuario/altamodificacion/altamodificacion.module';
import { ListarModule } from 'src/app/pages/usuario/listar/listar.module';
import { LoginModule } from 'src/app/pages/login/login.module';
import { PrincipalModule } from 'src/app/pages/principal/principal.module';
import { AuthGuard } from './guard/auth.guard';

//import { LoginComponent } from 'src/app/pages/login/login.component';
const routes: Routes = [
    // {path:"login",component:LoginComponent},
  {
    path:"principal",
    loadChildren:()=>import('src/app/pages/principal/principal.module').then(m=>PrincipalModule),canActivate:[AuthGuard]
  } 
  ,  
  {
    path:"usuarios",
    loadChildren:()=>import('src/app/pages/usuarios/usuarios.module').then(m=>UsuariosModule),canActivate:[AuthGuard]
  }
  , 
  {
    path:"login",
    loadChildren:()=>import('src/app/pages/login/login.module').then(m=>LoginModule)
  }
  ,
  {
    path:"reset",
    loadChildren:()=>import('src/app/pages/reset/reset.module').then(m=>ResetModule)
  }
  ,
  {
    path:"new-password/:codigo",
    loadChildren:()=>import('src/app/pages/new-password/new-password.module').then(m=>NewPasswordModule)
  }
  ,
  {
    path:"usuarioNuevo",
    loadChildren:()=>import('src/app/pages/usuario/altamodificacion/altamodificacion-routing.module').then(m=>AltamodificacionModule)
        
  } 
  ,
  {
    path:"usuarios",    
    loadChildren:()=>import('src/app/pages/usuarios/usuarios-routing.module').then(m=>UsuariosModule)    
  }     
  ,
  {
    path:"listarusuarios",
    loadChildren:()=>import('src/app/pages/usuario/listar/listar.module').then(m=>ListarModule),
    canActivate:[AuthGuard]
  }
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
