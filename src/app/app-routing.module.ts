import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from 'src/app/pages/usuarios/usuarios.module';
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
      path:"altamodificacion",
      loadChildren:()=>import('src/app/pages/usuario/altamodificacion/altamodificacion.module').then(m=>AltamodificacionModule),canActivate:[AuthGuard]
    }
    ,
    {
      path:"listarusuarios",
      loadChildren:()=>import('src/app/pages/usuario/listar/listar.module').then(m=>ListarModule),
      canActivate:[AuthGuard]
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
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
