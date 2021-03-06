import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
 
  rutaApi:string = "http://localhost:3000" 
 
  createUsuario(usuarioForm:{}){
    // return this.http.post(`${this.rutaApi}/usuario/create`,usuarioForm,{})    
    return this.http.post<IrespBackend>(`${this.rutaApi}/usuario/create`,usuarioForm,{})  
  }
  
  updateUsuario(usuarioForm:{}){
    // return this.http.put(`${this.rutaApi}/usuario/update`,usuarioForm,{})
    return this.http.put<IrespBackend>(`${this.rutaApi}/usuario/update`,usuarioForm,{})     
  }
 
  getUsuario(){    
    return this.http.get<IrespBackend>(`${this.rutaApi}/usuario/consultarUsuario`)  
  } 

  leerUsuarios(){    
    return this.http.get<IrespBackend>(`${this.rutaApi}/usuario/leerUsuarios`,{})  
  }   
}

