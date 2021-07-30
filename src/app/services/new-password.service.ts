import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';

@Injectable({
  providedIn: 'root'
})

export class NewPasswordService {

  constructor(private http:HttpClient) { }
 
  newPassword(formNewPassword:{}){
    console.log(formNewPassword + ' ---->> estoy en new-password.service.ts');   
    return this.http.post<IrespBackend>('http://localhost:3000/usuario/new-password',formNewPassword)    
    
  }    
}

