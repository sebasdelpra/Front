import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import { UsuariosService } from 'src/app/services/usuarios.service';
import {FormBuilder,Validators} from '@angular/forms';



@Component({
  selector: 'app-altamodificacion',
  templateUrl: './altamodificacion.component.html',
  styleUrls: ['./altamodificacion.component.css']
})
export class AltamodificacionComponent implements OnInit {

  constructor(public fb:FormBuilder,private router: Router,public usuariosServicio:UsuariosService) { }
  formCrearUsuario = this.fb.group({
      usuario:["",Validators.required],
      correo:["",[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:["",Validators.required],
      repetircontrasena:["",Validators.required]
    })

  guardarUsuario(){
    console.log(this.formCrearUsuario?.value);
    console.log(this.formCrearUsuario.get('usuario')?.value);
    console.log(this.formCrearUsuario.get('contrasena')?.valid);
    console.log(this.formCrearUsuario.get('correo')?.valid);
    console.log(this.formCrearUsuario.valid);
    if (this.formCrearUsuario.valid){
      console.log('esto voy a inviar a mi backend');
      console.log(this.formCrearUsuario.value);
      //se usa suscribe, el cual debuelve un observable, para que luego de que termine de hacer la consulta realice algo,
      //cone sto me estoy suscribiendo para obtener el resultado
      this.usuariosServicio.createUsuario(this.formCrearUsuario.value).subscribe(respuetaBackend=>{
        //lo siguiente es lo que quiero que haga angular luego de que termina
        console.log('esto me devolvio mi backend',respuetaBackend);
      })
    }
  }
  ngOnInit(): void {
  }
   goBack() {
    this.router.navigate(['/']);
    }
}
