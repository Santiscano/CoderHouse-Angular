import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { PadreComponent } from './components/padre/padre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    type of AppComponent,
    type of FormularioComponent,
    type of TablaComponent,
    type of PadreComponent
  ],
  imports: [
    BrowserModule,
    // para teneer formulario reactivo se incorporan estos 2 modulos
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
