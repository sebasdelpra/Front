import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' ;
import { UsuariosService } from 'src/app/services/usuarios.service';
import {FormBuilder,Validators} from '@angular/forms';
//,FormsModule, ReactiveFormsModule
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-altamodificacion',
  templateUrl: './altamodificacion.component.html',
  styleUrls: ['./altamodificacion.component.css']
})
export class AltamodificacionComponent implements OnInit {
 
 constructor(public fb:FormBuilder,
             private router: Router,              
             private snackBar:MatSnackBar,                
             public usuariosServicio:UsuariosService) { }
  
  formUsuarioCrear = this.fb.group({          
      usuario:["", [Validators.required,
                    Validators.maxLength(20),
                    Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]],
      nombre:["",  [Validators.required,
                    Validators.maxLength(20),
                    Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]],
      apellido:["",[Validators.required,
                    Validators.maxLength(20),
                    Validators.pattern(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)]],
      tipoDocumento:["DNI",Validators.required],              
      numeroDocumento:["",[Validators.required,
                           Validators.maxLength(8),
                           Validators.minLength(8),
                           Validators.pattern(/^(\d{2}\d{3}\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$/)]],
      correo:["",  [Validators.required,
                    Validators.maxLength(100),
                    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]], 
      password:["",[Validators.required,
                    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],       
    })

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['/login']);
  }  


  registroNuevo(){
    console.log(this.formUsuarioCrear?.value);
    console.log("ACA VLAda",this.formUsuarioCrear.get('usuario')?.valid);    
   
    if(this.formUsuarioCrear.valid){     
      this.usuariosServicio.createUsuario(this.formUsuarioCrear?.value).subscribe(        
       resp=>{          
          console.log('GRABANDO NUEVO USUARIO............. ');             
            if(resp.estado=="success" && resp.mensaje=="CUENTA creada"){  
              this.snackBar.open(resp.mensaje.toString(),'Aceptar',{
                duration: 5000,
                verticalPosition:'bottom'
            })               
            }
            else
            if(resp.estado=="success" && resp.mensaje=="YA EXISTE ESTE CORREO... ingresar otro"){  
              this.snackBar.open(resp.mensaje.toString(),'Aceptar',{
                duration: 5000,
                verticalPosition:'bottom'
            })               
            }
            else
            {            
              console.log(resp);    
              this.snackBar.open('ERROR AL GRABAR','Aceptar',{
              duration: 5000,
              verticalPosition:'bottom'                
            })
            }
          })
    }
    else
    {           
       this.snackBar.open('DATOS CON PROBLEMAS DE VALIDACION..','Aceptar',{
       duration: 10000,
       verticalPosition:'bottom'                
      })
    }    
  }
} 