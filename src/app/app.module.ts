import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountriesModule } from '@app/core/countries/countries.module';

import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CountriesModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
