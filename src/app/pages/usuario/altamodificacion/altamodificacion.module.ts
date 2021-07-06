import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltamodificacionRoutingModule } from './altamodificacion-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AltamodificacionComponent } from './altamodificacion.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AltamodificacionComponent
  ],
  imports: [
    CommonModule,
    AltamodificacionRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AltamodificacionModule { }
