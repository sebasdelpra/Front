import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetRoutingModule } from './reset-routing.module';
import { ResetComponent } from './reset.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ResetRoutingModule,
    FormsModule
  ]
})
export class ResetModule { }
