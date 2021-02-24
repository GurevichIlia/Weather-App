import { AppState, WeatherState } from './../reducers/weather.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureSelector = createFeatureSelector<AppState, WeatherState>('weather')

export const weatherListSelector = createSelector(
  featureSelector,
  state => state.selectedCities.map(city => city.weather).filter(weather => weather !== null)
)

export const citiesSelector = createSelector(
  featureSelector,
  state => {
    return state.cities
  }
)

export const selectedCitiesSelector = createSelector(
  featureSelector,
  state => {
    return state.selectedCities
  }
)

export const errorSelector = createSelector(
  featureSelector,
  state => state.error
)

export const loadingSelector = createSelector(
  featureSelector,
  state => state.isLoading
)
