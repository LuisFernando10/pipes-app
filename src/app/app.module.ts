import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Locale configuration (support languages)
import localEsCO from '@angular/common/locales/es-CO';
import localFrCA from '@angular/common/locales/fr-CA';

import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Stablish the LocaleDate (languages) in Angular
registerLocaleData(localEsCO);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }], // Set the global language for the App
  bootstrap: [AppComponent],
})
export class AppModule {}
