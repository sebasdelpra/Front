import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router,NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuarioLogueado:boolean=true;
  constructor(private authService:AuthService,private router:Router) { }
  //console.log(this.authService.authState);
  
  logaut(){
    console.log('aquie sale');
    this.authService.logoaut();
    this.router.navigate(['/login']);
  }
  login(){
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    //console.log(this.authService.authState);
  }

}
