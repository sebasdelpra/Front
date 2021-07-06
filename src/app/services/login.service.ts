import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(loginForm:{}){
    return this.http.post<IrespBackend>('http://localhost:3000/usuario/login',loginForm)
  }

}