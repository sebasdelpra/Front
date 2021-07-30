import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';


@Injectable({
  providedIn: 'root'
})
export class ResetService {
    
  constructor(private http:HttpClient) { }
  
  reset(resetForm:{}){
    console.log(' ---->> estoy en reset.service.ts');       
    return this.http.post<IrespBackend>('http://localhost:3000/usuario/reseteo',resetForm)    
}
}

