import { createAction, props } from '@ngrx/store';
import { TemperatureTypes } from 'src/app/core/types/selected-city';
import { CityWeather } from 'src/app/core/types/weather.interface';

export enum WeatherActionsType {
  FetchCurrentWeather = '[City selector] Fetch Weather',
  FetchCurrentWeatherSuccess = '[City selector] Fetch Weather success',
  FetchCurrentWeatherError = '[City selector] Fetch Weather error',

  DeleteCity = '[City selector] Delete city'

}

export const fetchCurrentWeatherAction = createAction(WeatherActionsType.FetchCurrentWeather, props<{ cityName: string, units: TemperatureTypes, cityControlIndex: number }>());
export const fetchCurrentWeatherSuccessAction = createAction(WeatherActionsType.FetchCurrentWeatherSuccess,
  props<{ weather: CityWeather, cityControlIndex: number }>());
export const fetchCurrentWeatherErrorAction = createAction(WeatherActionsType.FetchCurrentWeatherError, props<{ error: string }>());

export const deleteCityAction = createAction(WeatherActionsType.DeleteCity, props<{ index: number }>());

