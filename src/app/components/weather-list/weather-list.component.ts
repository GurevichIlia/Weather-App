import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityWeather } from 'src/app/core/types/weather.interface';
import { weatherListSelector } from 'src/app/store/selectors/weather.selector';
import { AppState } from './../../store/reducers/weather.reducer';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class WeatherListComponent{
  weatherList$: Observable<CityWeather[]> = this.store$.pipe(select(weatherListSelector))
  constructor(
    private store$: Store<AppState>
  ) { }



}
