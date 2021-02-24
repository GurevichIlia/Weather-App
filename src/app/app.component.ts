import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from './store/reducers/weather.reducer';
import { selectedCitiesSelector } from './store/selectors/weather.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'weather';
  constructor(
    private store$: Store<AppState>
  ) { }

  get selectedCities$() {
    return this.store$.pipe(select(selectedCitiesSelector))
  }

}
