import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { TemperatureTypes } from 'src/app/core/types/selected-city';
import {CityWeather} from 'src/app/core/types/weather.interface';
import { citiesSelector } from 'src/app/store/selectors/weather.selector';
import { deleteCityAction, fetchCurrentWeatherAction } from './../../store/actions/weather.action';
import { AppState } from './../../store/reducers/weather.reducer';
import { selectedCitiesSelector } from './../../store/selectors/weather.selector';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitySelectComponent {
  cityForm = this.fb.group({
    cityName: ['', Validators.required],
    temperatureType: [TemperatureTypes.Kelvin]
  })

  @Input() index: number

  cities$: Observable<string[]> = this.store$.pipe(select(citiesSelector))
  selectedCityWeather$: Observable<CityWeather> = this.store$.pipe(
    select(selectedCitiesSelector),
    map(cities => cities.find((_, i) => i === this.index)),
    filter(cityInfo => Boolean(cityInfo)),
    tap(cityInfo => {
      this.cityForm.patchValue({
        cityName: cityInfo.cityName,
        temperatureType: cityInfo.units
      })
    }
    ),
    map(cityInfo => cityInfo.weather),
    filter(weather => Boolean(weather)),
    map(weather => ({
      ...weather,
      icon: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
    }))

  )
  constructor(
    private fb: FormBuilder,
    private store$: Store<AppState>
  ) { }

  get cityNameControl(): AbstractControl {
    return this.cityForm.get('cityName')
  }

  addWeather(): void {
    this.cityNameControl.markAsTouched()
    if (this.cityForm.invalid) return

    const { cityName, temperatureType }: { cityName: string, temperatureType: TemperatureTypes } = this.cityForm.value
    this.store$.dispatch(fetchCurrentWeatherAction({ cityName, units: temperatureType, cityControlIndex: this.index }))
  }

  deleteCity(): void {
    this.store$.dispatch(deleteCityAction({ index: this.index }))

  }
}
