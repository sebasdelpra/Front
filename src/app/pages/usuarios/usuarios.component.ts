import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router} from '@angular/router' ;
import { UsuariosService } from 'src/app/services/usuarios.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ID_Usuario: any;
  usuario: any;
  nombre: any;
  apellido: any;
  tipoDocumento:any;
  numeroDocumento: any;
  
  //constructor( private router: Router ) { }
  constructor(public fb:FormBuilder,
              private router: Router,              
              private snackBar:MatSnackBar,              
              public usuariosServicio:UsuariosService) { }
  
formUsuarioModificar = this.fb.group({                
      ID_Usuario:["",Validators.required],
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
})

  ngOnInit(): void {    
    
    this.getName();    
  }

  getName(){    
    
    this.ID_Usuario = localStorage.getItem("ID_Usuario");
    this.usuario = localStorage.getItem("usuario");
    this.nombre = localStorage.getItem("nombre");
    this.apellido = localStorage.getItem("apellido");
    this.tipoDocumento = localStorage.getItem("tipoDocumento");
    this.numeroDocumento = localStorage.getItem("numeroDocumento");
 
} 
  
goBack() {
  this.router.navigate(['/principal']);
  
} 


  registroModificar(){
    if(this.formUsuarioModificar.valid){     
      this.usuariosServicio.updateUsuario(this.formUsuarioModificar?.value).subscribe(        
        resp=>{                        
           if(resp.estado=="success" && resp.mensaje=="CUENTA modificada"){  
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
      console.log(this.formUsuarioModificar?.value);
       this.snackBar.open('DATOS CON PROBLEMAS DE VALIDACION..','Aceptar',{
       duration: 10000,
       verticalPosition:'bottom'                
      })
    }    
  }
} 