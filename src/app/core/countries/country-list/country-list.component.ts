import { Component, Input } from '@angular/core';

import { Country } from '@app/shared/models/country.model';
import { CountryService } from '@app/shared/services/country.service';

@Component({
  selector: 'app-countries-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  
  constructor(private _service: CountryService) { }

  get countries (): Country[] {
    return this._service.countries;
  }

}
