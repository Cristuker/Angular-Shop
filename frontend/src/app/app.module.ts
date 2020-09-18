import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent, FooterComponent, NavComponent, ProductCreateComponent } from './components';
import { HomeComponent, ProductCrudComponent } from './views/';
import { RedDirective } from './directives/red.directive';
@NgModule({
  // Declaração de componentes, diretivas e pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent
  ],
  // Importações de outros modulos, modulo seu ou de uma lib externa
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  /* Componentes, diretivas e pipes que serão exportados para outros modulos
  No app.module nada é exportado e sim importado por ser o modulo principal */
  exports: [],
  // Declaração de services
  providers: [],
  // Define o componente que será carregado no modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
