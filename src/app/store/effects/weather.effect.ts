import { WeatherResponseData } from './../../core/types/weather-response-data.interface';
import { ApiService } from './../../core/api/api.service';
import { WeatherActionsType, fetchCurrentWeatherSuccessAction, fetchCurrentWeatherErrorAction } from './../actions/weather.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { WeatherRequestData } from 'src/app/core/types/weather-request-data.interface';
import { map, switchMap, catchError } from 'rxjs/operators'
import {CityWeather} from 'src/app/core/types/weather.interface';
import { parseWeatherResponse } from 'src/app/core/utils/parse-weather-response';

@Injectable()
export class GeneralWordsEffects {
  constructor(
    private weatherApi: ApiService,
    private actions$: Actions,


  ) {

  }

  fetchWeathers$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActionsType.FetchCurrentWeather),
    switchMap(({ cityName, units, cityControlIndex }: WeatherRequestData) =>
      this.weatherApi.fetchWeather(cityName, units)
        .pipe(
          map((weatherResponse: WeatherResponseData) => {
            const weather = parseWeatherResponse(weatherResponse, units)
            return fetchCurrentWeatherSuccessAction({ weather, cityControlIndex });
          }),
          catchError((err: any) => of(fetchCurrentWeatherErrorAction({ error: err.message })))
        ))
  ))
}
