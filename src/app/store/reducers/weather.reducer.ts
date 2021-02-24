import { Action, createReducer, on } from '@ngrx/store';
import { SelectedCity } from 'src/app/core/types/selected-city';

import {CityWeather} from 'src/app/core/types/weather.interface';
import { addCity } from 'src/app/core/utils/add-city';
import { deleteCity } from 'src/app/core/utils/delete-city';
import { deleteCityAction, fetchCurrentWeatherAction, fetchCurrentWeatherErrorAction, fetchCurrentWeatherSuccessAction } from './../actions/weather.action';

export interface AppState {
  weather: WeatherState
}

export interface WeatherState {
  error: string | null,
  isLoading: boolean,
  weatherList: CityWeather[],
  cities: string[],
  selectedCities: SelectedCity[]

}
const initialState: WeatherState = {
  error: null,
  isLoading: false,
  weatherList: [],
  selectedCities: [new SelectedCity()],
  cities: ['Moscow', 'Tel Aviv', 'New York', 'Dubai', 'Jerusalem', 'Vladivostok']
}

export const reducer = createReducer(
  initialState,
  on(
    fetchCurrentWeatherAction,
    (state, action): WeatherState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    fetchCurrentWeatherSuccessAction,
    (state, action): WeatherState => {
      const { cityName, temperatureType, } = action.weather
      const selectedCities = state.selectedCities.map((existSelectedCity: SelectedCity, i: number) =>
        action.cityControlIndex === i
          ? { ...existSelectedCity, cityName, units: temperatureType, weather: action.weather }
          : existSelectedCity
      )
      addCity(selectedCities, action.cityControlIndex)
      return ({
        ...state,
        selectedCities,
        isLoading: false,
      })
    }
  ),
  on(
    fetchCurrentWeatherErrorAction,
    (state, action): WeatherState => ({
      ...state,
      isLoading: false,
    })
  ),

  on(
    deleteCityAction,
    (state, action): WeatherState => ({
      ...state,
      selectedCities: deleteCity(state.selectedCities, action.index)
    })
  ),


)

export const weatherReducer = (state: WeatherState, action: Action) => {
  return reducer(state, action)
}
