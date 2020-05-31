import { Component, OnInit } from '@angular/core';
import { CountryService } from '@app/shared/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit { 
  isFetching: boolean = true;
  error: string = null;

  constructor (private _service: CountryService) { }

  ngOnInit () {
    // Subscribe to fetchingStatus change
    this._service
        .fetchingStatus
        .subscribe((fetchingStatus: boolean) => {
          this.isFetching = fetchingStatus;
        });


    // Subscribe to error change
    this._service
        .error
        .subscribe((errorMessage: string) => {
          this.error = errorMessage;
        });
  }

  fetchCountries () {
    this.isFetching = false;
    this.error = null;
    this._service.getCountries();
  }

}
