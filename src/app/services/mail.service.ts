import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import IrespBackend from '../interfaces/IrespBackend';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }
  
  reset(resetForm:{}){
    console.log(' ---->> estoy en mail.service.ts');   
    return this.http.post<IrespBackend>('http://localhost:3000/mail',resetForm)
  }
}

