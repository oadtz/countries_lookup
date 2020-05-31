import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@app/core/layout/layout.module';

import { CountriesComponent } from '@app/core/countries/countries.component';
import { FilterComponent } from '@app/core/countries/filter/filter.component';
import { CountryListComponent } from '@app/core/countries/country-list/country-list.component';
import { CountryComponent } from '@app/core/countries/country/country.component';
import { CountryService } from '@app/shared/services/country.service';



@NgModule({
  declarations: [
    CountriesComponent,
    FilterComponent,
    CountryListComponent,
    CountryComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  providers: [
    CountryService
  ],
  exports: [
    CountriesComponent
  ]
})
export class CountriesModule { }
