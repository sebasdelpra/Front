import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from '../../services/auth.service';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {name:"Listar Usuarios",route:"/listarusuarios",icon:"home"},
    {name:"Usuarios",route:"/usuarios",icon:"dashboard"},//<span class="material-icons-outlined">
    {name:"Crear Usuario",route:"/altamodificacion",icon:"event"},
    {name:"Categorias",route:"",icon:" list_alt"}

  ]
  fillerNavUsuarios=[
    {name:"Listar Usuarios",route:"/listarusuarios",icon:"home"},
    {name:"Modificar Usuario",route:"/altamodificacion",icon:"dashboard"},//<span class="material-icons-outlined">
    {name:"Crear Usuario",route:"/altamodificacion",icon:"event"},
    {name:"Categorias",route:"",icon:"schedule"}

  ]

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;
  usuarioLogueado:boolean=true;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public authService:AuthService,private router:Router) {
    //let mitoken=localStorage.getItem("token");
    //console.log("mitoken es",mitoken);
  
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  logaut(){
    console.log('aquie sale');
    this.authService.logoaut();
    this.router.navigate(['/login']);
  }
  login(){
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
  }

}
