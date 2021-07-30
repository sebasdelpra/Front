import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavbarModule} from './components/navbar/navbar.module';
//TokenInterceptor y HTTP_INTERCEPTORS usado para el interceptor
import { TokenInterceptor } from './services/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListarComponent } from './pages/usuario/listar/listar.component';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { ListarModule } from 'src/app/pages/usuario/listar/listar.module';

@NgModule({
  declarations: [
    AppComponent,   
    ListarComponent,
    SidenavComponent    
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    UsuariosModule,    
    DataTablesModule,
    ListarModule,
    //desde aca sidenav
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule
    //hasta aca sidenav
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
