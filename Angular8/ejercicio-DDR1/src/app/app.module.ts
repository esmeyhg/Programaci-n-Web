import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundo } from './hola-mundo/hola-mundo.component';
import { MostrarOcultar } from './mostrar-ocultar/mostrar-ocultar.component';
import { Nombres } from './nombres/nombres.component';
import { Personas } from './personas/personas.component';
import { Comp1 } from './component1/comp1.component';
import { Comp2 } from './component2/comp2.component';


import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo,
    MostrarOcultar,
    Nombres,
    Personas,
    Comp1,
    Comp2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
