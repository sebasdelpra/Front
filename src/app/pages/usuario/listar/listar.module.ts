import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from '../../usuarios/usuarios-routing.module';
import { ListarRoutingModule } from './listar-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListarRoutingModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListarModule { }
 