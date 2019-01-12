import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Komponent1Component } from './komponent1/komponent1.component';
import { Komponent2Component } from './komponent2/komponent2.component';
import { Komponent3Component } from './komponent3/komponent3.component';
import { FormsModule } from '@angular/forms';
import { BindingsComponent } from './bindings/bindings.component';
import { BindingsZadanieComponent } from './bindings-zadanie/bindings-zadanie.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyInputComponent } from './property-input/property-input.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Komponent1Component,
    Komponent2Component,
    Komponent3Component,
    BindingsComponent,
    BindingsZadanieComponent,
    EventBindingComponent,
    PropertyInputComponent,
    StyleClassComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
