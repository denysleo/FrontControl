import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditcadastroComponent } from './pages/editcadastro/editcadastro.component';
import { HistoricoComponent } from './pages/historico/historico.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EditcadastroComponent,
    HistoricoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
