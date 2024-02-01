import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';

import es from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';

// referenciamos la funcion y le pasamos la importacion de la region
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
  ],
  providers: [
    {
      // seteamos los idiomas
      provide: LOCALE_ID,
      useValue: 'es-AR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
