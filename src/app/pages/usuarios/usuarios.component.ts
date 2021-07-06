import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router' ;
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  //constructor( private router: Router ) { }
  constructor(public fb:FormBuilder,private router: Router,public usuariosServicio:UsuariosService) { }
  
  formCrearUsuario = this.fb.group({
      nombre:["",Validators.required],
      apellido:["",Validators.required],
      tipo_doc:["",Validators.required],
      Sucursal:["",Validators.required],
      numero_doc:["",[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
      email:[],
      //Campo obligatorio-maximo 20caracteres, solo permite tipear digitos del 0 al 9, la longitud masxima e sde 20
      telefono:["",[Validators.required,Validators.maxLength(20),Validators.pattern(/^[0-9 ]{1,21}$/)]],
      edad:[],
      nombre_tutor:["",Validators.required],
      password:[]
    })

  ngOnInit(): void {
  }
  registro(){
    console.log(this.formCrearUsuario?.value);
    console.log(this.formCrearUsuario.get('nombre')?.value);
    console.log(this.formCrearUsuario.get('nombre')?.valid);
    console.log(this.formCrearUsuario.get('nombre_tutor')?.valid);
    console.log(this.formCrearUsuario.valid);
    if (this.formCrearUsuario.valid){
      console.log('esto voy a inviar a mi backend');
      console.log(this.formCrearUsuario.value);
      //se usa suscribe, el cual debuelve un observable, para que luego de que termine de hacer la consulta realice algo,
      //cone sto me estoy suscribiendo para obtener el resultado
      //this.usuariosServicio.createUsuario(this.formCrearUsuario.value).subscribe(respuetaBackend=>{
        //lo siguiente es lo que quiero que haga angular luego de que termina
       // console.log('esto me devolvio mi backend',respuetaBackend);
      //})
    }
  }
  goBack() {
    this.router.navigate(['/']);
    }
    validarEdad()
    {
      if(this.formCrearUsuario.get('edad')?.value>18){
        this.formCrearUsuario.get('nombre_tutor')?.clearValidators();
        this.formCrearUsuario.get('nombre_tutor')?.updateValueAndValidity();
      }
      else
      {
        this.formCrearUsuario.get('nombre_tutor')?.setValidators(Validators.required);
        this.formCrearUsuario.get('nombre_tutor')?.updateValueAndValidity();
      }
    }

}
