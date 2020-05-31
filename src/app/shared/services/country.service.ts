import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Country } from '@app/shared/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _countries: Country[];
  filterText: string = '';
  fetchingStatus = new Subject<boolean>();
  error = new Subject<string>();

  constructor(private _http: HttpClient) { 
    this.getCountries();
  }

  /**
   * Getter function variable for filtered countries
   * @returns Filtered countries
   */
  get countries(): Country[] {
    return this._countries && this._countries.filter(country => country.name.match(new RegExp(this.filterText.trim().toLowerCase(), 'i')));
  }

  /**
  * Get all countries from data source
  */
  getCountries = () => {
    this._http
        .get('https://restcountries.eu/rest/v2/all')
        .subscribe((countries: Country[]) => {
            // Store result in countries array
            this._countries = countries;
            this.error.next(null);
            this.fetchingStatus.next(false);
        }, (error) => {
            // Send error message to subscriber
            this.error.next(error.message);
            this.fetchingStatus.next(false);
        });
  }

}
