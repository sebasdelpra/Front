import { usuario } from './../../../../../Back/interfaces/usuario.interfaces';
import { Response } from 'express';
import { Component, OnInit, NgModule } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import IrepBackend from 'src/app/interfaces/IrespBackend';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder, 
              public loginService:LoginService,
              private authService:AuthService,
              private router:Router,
              private snackBar:MatSnackBar) {}

  formLogin=this.fb.group({
    usuario:['',Validators.required],
    password:['',Validators.required]
  })
  
  hacerReset(){    
    
    this.router.navigate(['/reset']);    
  }
  
  nuevoUsuario(){
    
    this.router.navigate(['/usuarioNuevo']);    
  }

  hacerLogin(){
    
    if(this.formLogin.valid){
        this.loginService.login(this.formLogin?.value).subscribe(
        resp=>{          
          if(resp.estado=="success" && resp.mensaje=="usuario encontrado"){
            
              localStorage.setItem("token",resp.token);

              let arraydatos=JSON.stringify(resp.data);
              let pepe = JSON.parse(arraydatos);
            
              localStorage.setItem("ID_Usuario",pepe[0].ID_Usuario );
              localStorage.setItem("usuario",(pepe[0].usuario ));
              localStorage.setItem("nombre",(pepe[0].nombre));
              localStorage.setItem("apellido",(pepe[0].apellido));
              localStorage.setItem("tipoDocumento",(pepe[0].tipoDocumento));
              localStorage.setItem("numeroDocumento",(pepe[0].numeroDocumento));
            
              //esto lo que hace es pasarme a true el autenticate
              this.authService.authenticate();
              console.log("estado auth",this.authService.authState);
              this.router.navigate(['/principal']);
           }
           else
            {
              this.snackBar.open(resp.mensaje.toString(),'Aceptar',{
                duration: 10000,
                verticalPosition:'bottom'
            })
              // console.log(resp);
               console.log("",this.authService.authState);
            }
        }
      )
    }
    else
    {
      this.snackBar.open('USUARIO o PASSWORD INVALIDA','Aceptar',{
        duration: 10000,
        verticalPosition:'bottom'
    })
      // console.log("formulario invalido");
    }
  }
  
  ngOnInit(): void {
    localStorage.clear();
  }
}
