import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
  //lo que hace el interceptor es agregarle algo a todas mis peticiones
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //obtnemos el token del localstorage y lo guardamos en una constante
    const token = localStorage.getItem("token");
    //si el token no esta vacio lo agregamos al request, ose agrega a todas mis peticiones el token
    if(token){
      //reques es propio de angular y tambien clone es propio de angular
      //aqui lo que esta haciendo es agregar el toke al request
      request = request.clone({headers: request.headers.set('x-token',token)})
    };
    //aqui esta diciendo cual va a ser el formato del intercepto, osea estoy seteando el formato del interceptor
    request.clone({headers: request.headers.set('Accept', 'application/json')});
    return next.handle(request).pipe(
      map((event: HttpEvent<any>)=>{
        if(event instanceof HttpResponse){
 
        }
        return event
      }))
    //return next.handle(request);
  }
    //con este metodo agregamos nuestro tocken para realizar la speticiones
    private addToken(request:HttpRequest<any>, token:any){
    if(token){
      let clone = request.clone({
        setHeaders:{
          Accept:'application/json',
          'Content-Type': `Bearer ${token}`
        }
      })
      return clone
    }
    return request
  }
}
