import { Component, Output, EventEmitter } from '@angular/core';
import { CountryService } from '@app/shared/services/country.service';

@Component({
  selector: 'app-countries-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  constructor(private _countryService: CountryService) { }

  /**
  * Receive the filter text from HTMLInputElement then set it to service to filter the list of country
  * @param event default Event object from HTML
  */
  onInputChanged = (event: Event) => {
    this._countryService.filterText = (<HTMLInputElement>event.target).value;
  }
}
