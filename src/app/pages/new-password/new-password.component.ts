import { token } from 'morgan';
import { NewPasswordService } from 'src/app/services/new-password.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Routes, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {FormBuilder,NgForm,Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import jwt_decode from "jwt-decode";


let mailDesencriptado='';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})

export class NewPasswordComponent implements OnInit {

    constructor(public fb:FormBuilder,                 
    public NewPasswordService:NewPasswordService,    
    private router:Router,       
    private route: ActivatedRoute,    
    private snackBar:MatSnackBar) {}

formNewPassword=this.fb.group({
  newPassword:['',Validators.required]  
})


nuevoPassword(){  

  this.formNewPassword.addControl('newMailDesencriptado',  this.fb.control(mailDesencriptado, Validators.required));

  console.log('INGRESANDO NUEVO PASSWORD.......... ');  
  if(this.formNewPassword.valid){     
     this.NewPasswordService.newPassword(this.formNewPassword?.value).subscribe(        
      resp=>{          
        console.log('INGRESO NUEVO PASSWORD.......... ');  
        if(resp.estado=="success" && resp.mensaje=="NUEVO PASSWORD"){          
            this.snackBar.open(resp.mensaje.toString(),'Aceptar',{
              duration: 5000,
              verticalPosition:'bottom'
          })  
          this.router.navigate(['/login']);  
        }
      else
        {             
          this.snackBar.open('Problemas al actualizad la clave','Aceptar',{
            duration: 5000,
            verticalPosition:'bottom'                 
        })
        this.router.navigate(['/login']);          
        }
      })               
    }
  else
  {           
     this.snackBar.open('INGRESAR UNA CLAVE y debe contener entre 5 y 10 caracteres','Aceptar',{
     duration: 5000,
     verticalPosition:'bottom'                
    })
  }  
}
   
  goBack(){  
    this.router.navigate(['/login']);    
  }

 

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
   ngOnInit() {


    // https://www.it-swarm-es.com/es/angular/como-decodificar-la-carga-util-del-token-codificado-jwt-en-el-lado-del-cliente-en-angular-5/836916932/
     let encriptado = this.route.snapshot.paramMap.get('codigo');
     let encriptadosinCodigo = encriptado?.replace('codigo:','');
     console.log(encriptadosinCodigo);    

     var token : any
     token = encriptadosinCodigo;

     let tokenInfo = this.getDecodedAccessToken(token); // decode token
     let expireDate = tokenInfo.exp; // get token expiration dateTime
     mailDesencriptado= tokenInfo.mail;

     console.log(mailDesencriptado); // show decoded token object in console
    }
  }

    
  

