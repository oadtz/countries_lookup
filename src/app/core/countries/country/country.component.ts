import { Component, Input } from '@angular/core';
import { Country } from '@app/shared/models/country.model';

@Component({
  selector: 'app-countries-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  @Input() country: Country;
}
