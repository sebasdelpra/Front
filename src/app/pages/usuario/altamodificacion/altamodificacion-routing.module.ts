import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AltamodificacionComponent} from '././altamodificacion.component';

const routes: Routes = [
  {path:"",component:AltamodificacionComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltamodificacionRoutingModule { }
