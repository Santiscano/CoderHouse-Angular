import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormzComponent } from './components/formz/formz.component';
import { FormTialwindComponent } from './components/form-tialwind/form-tialwind.component';

@NgModule({
  declarations: [
    AppComponent,
    FormzComponent,
    FormTialwindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
