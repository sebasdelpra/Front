import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http:HttpClient) { }
  
  PasswordService(formNewPassword:{}){
    console.log(formNewPassword+ ' ---->> estoy en new-password.service.ts-----------');   
    return this.http.post<IrespBackend>('http://localhost:3000/usuario/new-password',formNewPassword)    
  }   
}

