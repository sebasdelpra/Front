import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordRoutingModule } from './new-password-routing.module';
import { NewPasswordComponent } from './new-password.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    NewPasswordComponent
  ],
  imports: [
    CommonModule,
    NewPasswordRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewPasswordModule { }
