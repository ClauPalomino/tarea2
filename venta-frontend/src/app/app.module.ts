import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './_pages/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './_pages/producto/producto.component';
import { ProductoDialogoComponent } from './_pages/producto/producto-dialogo/producto-dialogo.component';
import { PersonaDialogoComponent } from './_pages/persona/persona-dialogo/persona-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ProductoComponent,
    ProductoDialogoComponent,
    PersonaDialogoComponent,
  
  ],
  entryComponents:[
  PersonaDialogoComponent,
  ProductoDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
