import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject  } from 'rxjs';
 
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;
 

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 2,
      language:{
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
    this.http.get('http://localhost:3000/usuario/leerUsuarios').subscribe(
      resp => {        
       console.log(resp);
       this.data = resp;
       this.dtTrigger.next();       
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
