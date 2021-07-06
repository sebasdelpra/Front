import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {AuthService} from '../../services/auth.service';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder,public loginService:LoginService,private authService:AuthService,private router:Router) {}

  formLogin=this.fb.group({
    usuario:['',Validators.required],
    password:['',Validators.required]
  })
  
  hacerLogin(){
    console.log(this.formLogin?.value);
    //  console.log(this.formLogin.get('usuario')?.value);
    //  console.log(this.formLogin.get('password')?.value);
    if(this.formLogin.valid){
        this.loginService.login(this.formLogin?.value).subscribe(
        resp=>{
          //sin interfaz
            // If(resp["estado"]=="success" && resp["mensaje"]=="usuario encontrado"){

            // }
          //con interfaz
          if(resp.estado=="success" && resp.mensaje=="usuario encontrado"){
              localStorage.setItem("token",resp.token);
              
              //esto lo que hace es pasarme a true el autenticate
              this.authService.authenticate();
              console.log("estado auth",this.authService.authState);
              this.router.navigate(['/principal']);
           }
           else
            {
              console.log(resp);
               console.log("estado auth",this.authService.authState);
            }
        }
      )
    }
    else
    {
      console.log("formulario invalido");
    }
  }
  ngOnInit(): void {
  }

}
