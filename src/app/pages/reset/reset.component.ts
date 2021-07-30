import { token } from 'morgan';
import { ResetService } from 'src/app/services/reset.service';
import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import {FormBuilder,NgForm,Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MailService } from 'src/app/services/mail.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})

 export class ResetComponent implements OnInit {

  constructor(public fb:FormBuilder,                 
              public ResetService:ResetService,
              public MailService: MailService,
              private router:Router,
              private snackBar:MatSnackBar) {}

   resetToken = '';

  formReset=this.fb.group({
    email:['',Validators.required]    
  })
  
  goBack(){  
    this.router.navigate(['/login']);    
  }

  resetearMail(){
  
   if(this.formReset.valid){     
      this.ResetService.reset(this.formReset?.value).subscribe(        
        resp=>{  
             
          let resetToken =  resp.token;       
          
          this.formReset.addControl('xToken',  this.fb.control(resetToken, Validators.required));
         
           if(resp.estado=="success" && resp.mensaje=="CUENTA reseteada (revisa tu correo)"){  
              this.snackBar.open(resp.mensaje.toString(),'Aceptar',{
                duration: 5000,
                verticalPosition:'bottom'
            })
                this.envioCorreo();
                this.router.navigate(['/']);
           }
           else
            {             
              this.snackBar.open('CORREO NO ENCONTRADO','Aceptar',{
                duration: 10000,
                verticalPosition:'bottom'                
            })
            }
          })
    }
    else
    {           
       this.snackBar.open('INGRESAR un correo','Aceptar',{
       duration: 10000,
       verticalPosition:'bottom'                
      })
    }    
  }
  
  
 ngOnInit(): void {
 }  

 async envioCorreo(){
  if(this.formReset.valid){               
    console.log(this.formReset.get('xToken')?.value+'-----------')
    this.MailService.reset(this.formReset?.value).subscribe(        
      resp=>{   
        console.log('ENVIANDO CORREO............. ');  
      })
    }
  }
}
 

