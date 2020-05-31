import { Injectable } from '@angular/core';

import { Country } from '@app/shared/models/country.model';
import Countries from '@app/shared/countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _countries: Country[] = [];
  filterText: string = '';

  constructor() { 
    this._getCountries();
  }

  get countries(): Country[] {
    return this._countries.filter(country => country.name.match(new RegExp(this.filterText.trim().toLowerCase(), 'i')))
  }

  /**
  * Get all countries from data source
  */
  private _getCountries = () => {
    this._countries = Countries;
  }

}
