import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CountryService } from '@app/shared/services/country.service';

@Component({
  selector: 'app-countries-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  private _filterTextSubject = new Subject<string>();

  constructor(private _service: CountryService) { }

  ngOnInit () {
    // Delay input change to 200ms so we will not have to search every keystrokes
    // This to prevent the unnecessaried operation in getting the result
    this._filterTextSubject
        .pipe(debounceTime(200))
        .subscribe(value => {
          this._service.filterText = value;
        });
  }

  ngOnDestroy () {
    this._filterTextSubject.unsubscribe();
  }

  /**
   * Receive filter text changed from the element than pass to next event in observable
   * @param event HTML event from input changed
   */
  onFilterTextChange (event: Event) {
    this._filterTextSubject.next((<HTMLInputElement>event.target).value)
  }

}
